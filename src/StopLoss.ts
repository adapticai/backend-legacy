
  
import { StopLoss as StopLossType } from './generated/typegraphql-prisma/models/StopLoss';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the StopLoss model.
   */

  const selectionSet = `
    
  id
  stopPrice
  limitPrice
  createdAt
  updatedAt
  orderId
}
  `;

  export const StopLoss = {

    /**
     * Create a new StopLoss record.
     * @param props - Properties for the new record.
     * @returns The created StopLoss or null.
     */

    async create(props: StopLossType): Promise<StopLossType> {

    const client = createApolloClient();

    const CREATE_ONE_STOPLOSS = gql`
        mutation createOneStopLoss($data: StopLossCreateInput!) {
          createOneStopLoss(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
  limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  Order: props.Order ? 
    typeof props.Order === 'object' && Object.keys(props.Order).length === 1 && Object.keys(props.Order)[0] === 'id'
    ? { connect: {
        id: props.Order.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.Order.id !== undefined ? props.Order.id : undefined,
      },
      create: {
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        qty: props.Order.qty !== undefined ? props.Order.qty : undefined,
        notional: props.Order.notional !== undefined ? props.Order.notional : undefined,
        side: props.Order.side !== undefined ? props.Order.side : undefined,
        type: props.Order.type !== undefined ? props.Order.type : undefined,
        orderClass: props.Order.orderClass !== undefined ? props.Order.orderClass : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? props.Order.timeInForce : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? props.Order.limitPrice : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? props.Order.stopPrice : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? props.Order.trailPrice : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? props.Order.trailPercent : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? props.Order.extendedHours : undefined,
        status: props.Order.status !== undefined ? props.Order.status : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? props.Order.submittedAt : undefined,
        filledAt: props.Order.filledAt !== undefined ? props.Order.filledAt : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? props.Order.filledAvgPrice : undefined,
        fee: props.Order.fee !== undefined ? props.Order.fee : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? props.Order.strikePrice : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? props.Order.expirationDate : undefined,
        optionType: props.Order.optionType !== undefined ? props.Order.optionType : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? props.Order.takeProfitId : undefined,
    takeProfit: props.Order.takeProfit ? 
      typeof props.Order.takeProfit === 'object' && Object.keys(props.Order.takeProfit).length === 1 && Object.keys(props.Order.takeProfit)[0] === 'id'
    ? { connect: {
          id: props.Order.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.takeProfit.id !== undefined ? props.Order.takeProfit.id : undefined,
        },
        create: {
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? props.Order.takeProfit.limitPrice : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? props.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? props.Order.alpacaAccount.id : undefined,
        },
        create: {
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
    action: props.Order.action ? 
      typeof props.Order.action === 'object' && Object.keys(props.Order.action).length === 1 && Object.keys(props.Order.action)[0] === 'id'
    ? { connect: {
          id: props.Order.action.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.action.id !== undefined ? props.Order.action.id : undefined,
        },
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
        },
      }
    } : undefined,
    asset: props.Order.asset ? 
      typeof props.Order.asset === 'object' && Object.keys(props.Order.asset).length === 1 && Object.keys(props.Order.asset)[0] === 'id'
    ? { connect: {
          id: props.Order.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.asset.id !== undefined ? props.Order.asset.id : undefined,
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
        },
        create: {
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
          type: props.Order.asset.type !== undefined ? props.Order.asset.type : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? props.Order.asset.logoUrl : undefined,
          description: props.Order.asset.description !== undefined ? props.Order.asset.description : undefined,
          cik: props.Order.asset.cik !== undefined ? props.Order.asset.cik : undefined,
          exchange: props.Order.asset.exchange !== undefined ? props.Order.asset.exchange : undefined,
          currency: props.Order.asset.currency !== undefined ? props.Order.asset.currency : undefined,
          country: props.Order.asset.country !== undefined ? props.Order.asset.country : undefined,
          sector: props.Order.asset.sector !== undefined ? props.Order.asset.sector : undefined,
          industry: props.Order.asset.industry !== undefined ? props.Order.asset.industry : undefined,
          address: props.Order.asset.address !== undefined ? props.Order.asset.address : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? props.Order.asset.officialSite : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? props.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? props.Order.asset.latestQuarter : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? props.Order.asset.marketCapitalization : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? props.Order.asset.ebitda : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? props.Order.asset.peRatio : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? props.Order.asset.pegRatio : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? props.Order.asset.bookValue : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? props.Order.asset.dividendPerShare : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? props.Order.asset.dividendYield : undefined,
          eps: props.Order.asset.eps !== undefined ? props.Order.asset.eps : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? props.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? props.Order.asset.profitMargin : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? props.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? props.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? props.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? props.Order.asset.revenueTTM : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? props.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? props.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? props.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? props.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? props.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? props.Order.asset.analystRatingHold : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? props.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? props.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? props.Order.asset.trailingPE : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? props.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? props.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? props.Order.asset.priceToBookRatio : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? props.Order.asset.evToRevenue : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? props.Order.asset.evToEbitda : undefined,
          beta: props.Order.asset.beta !== undefined ? props.Order.asset.beta : undefined,
          week52High: props.Order.asset.week52High !== undefined ? props.Order.asset.week52High : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? props.Order.asset.week52Low : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? props.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? props.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? props.Order.asset.sharesOutstanding : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? props.Order.asset.dividendDate : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? props.Order.asset.exDividendDate : undefined,
          askPrice: props.Order.asset.askPrice !== undefined ? props.Order.asset.askPrice : undefined,
          bidPrice: props.Order.asset.bidPrice !== undefined ? props.Order.asset.bidPrice : undefined,
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
      const response = await client.mutate({ mutation: CREATE_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneStopLoss) {
        return response.data.createOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Create multiple StopLoss records.
   * @param props - Array of StopLoss objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: StopLossType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_STOPLOSS = gql`
      mutation createManyStopLoss($data: [StopLossCreateManyInput!]!) {
        createManyStopLoss(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  stopPrice: prop.stopPrice !== undefined ? prop.stopPrice : undefined,
  limitPrice: prop.limitPrice !== undefined ? prop.limitPrice : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyStopLoss) {
        return response.data.createManyStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyStopLoss:', error);
      throw error;
    }
  },

  /**
   * Update a single StopLoss record.
   * @param props - Properties to update.
   * @returns The updated StopLoss or null.
   */
  async update(props: StopLossType): Promise<StopLossType> {

    const client = createApolloClient();

      const UPDATE_ONE_STOPLOSS = gql`
      mutation updateOneStopLoss($data: StopLossUpdateInput!, $where: StopLossWhereUniqueInput!) {
        updateOneStopLoss(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
    equals: props.id
  } : undefined,
  orderId: props.orderId !== undefined ? {
    equals: props.orderId
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    equals: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    equals: props.updatedAt
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  Order: props.Order ? {
    upsert: {
      where: {
        id: props.Order.id !== undefined ? {
            equals: props.Order.id 
           } : undefined,
      },
      update: {
        id: props.Order.id !== undefined ? {
            set: props.Order.id  
           } : undefined,
        clientOrderId: props.Order.clientOrderId !== undefined ? {
            set: props.Order.clientOrderId  
           } : undefined,
        qty: props.Order.qty !== undefined ? {
            set: props.Order.qty  
           } : undefined,
        notional: props.Order.notional !== undefined ? {
            set: props.Order.notional  
           } : undefined,
        side: props.Order.side !== undefined ? {
            set: props.Order.side  
           } : undefined,
        type: props.Order.type !== undefined ? {
            set: props.Order.type  
           } : undefined,
        orderClass: props.Order.orderClass !== undefined ? {
            set: props.Order.orderClass  
           } : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? {
            set: props.Order.timeInForce  
           } : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? {
            set: props.Order.limitPrice  
           } : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? {
            set: props.Order.stopPrice  
           } : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? {
            set: props.Order.trailPrice  
           } : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? {
            set: props.Order.trailPercent  
           } : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? {
            set: props.Order.extendedHours  
           } : undefined,
        status: props.Order.status !== undefined ? {
            set: props.Order.status  
           } : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? {
            set: props.Order.submittedAt  
           } : undefined,
        filledAt: props.Order.filledAt !== undefined ? {
            set: props.Order.filledAt  
           } : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? {
            set: props.Order.filledAvgPrice  
           } : undefined,
        fee: props.Order.fee !== undefined ? {
            set: props.Order.fee  
           } : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? {
            set: props.Order.strikePrice  
           } : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? {
            set: props.Order.expirationDate  
           } : undefined,
        optionType: props.Order.optionType !== undefined ? {
            set: props.Order.optionType  
           } : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? {
            set: props.Order.stopLossId  
           } : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? {
            set: props.Order.takeProfitId  
           } : undefined,
    takeProfit: props.Order.takeProfit ? {
      upsert: {
        where: {
          id: props.Order.takeProfit.id !== undefined ? {
              equals: props.Order.takeProfit.id 
             } : undefined,
        },
        update: {
          id: props.Order.takeProfit.id !== undefined ? {
              set: props.Order.takeProfit.id  
             } : undefined,
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? {
              set: props.Order.takeProfit.limitPrice  
             } : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? {
              set: props.Order.takeProfit.stopPrice  
             } : undefined,
        },
        create: {
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? props.Order.takeProfit.limitPrice : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? props.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? {
      upsert: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? {
              equals: props.Order.alpacaAccount.id 
             } : undefined,
        },
        update: {
          id: props.Order.alpacaAccount.id !== undefined ? {
              set: props.Order.alpacaAccount.id  
             } : undefined,
          type: props.Order.alpacaAccount.type !== undefined ? {
              set: props.Order.alpacaAccount.type  
             } : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? {
              set: props.Order.alpacaAccount.APIKey  
             } : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? {
              set: props.Order.alpacaAccount.APISecret  
             } : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? {
              set: props.Order.alpacaAccount.configuration  
             } : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? {
              set: props.Order.alpacaAccount.marketOpen  
             } : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? {
              set: props.Order.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? {
              set: props.Order.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? {
              set: props.Order.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? {
              set: props.Order.alpacaAccount.volumeThreshold  
             } : undefined,
        },
        create: {
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
    action: props.Order.action ? {
      upsert: {
        where: {
          id: props.Order.action.id !== undefined ? {
              equals: props.Order.action.id 
             } : undefined,
        },
        update: {
          id: props.Order.action.id !== undefined ? {
              set: props.Order.action.id  
             } : undefined,
          sequence: props.Order.action.sequence !== undefined ? {
              set: props.Order.action.sequence  
             } : undefined,
          type: props.Order.action.type !== undefined ? {
              set: props.Order.action.type  
             } : undefined,
          note: props.Order.action.note !== undefined ? {
              set: props.Order.action.note  
             } : undefined,
          status: props.Order.action.status !== undefined ? {
              set: props.Order.action.status  
             } : undefined,
          fee: props.Order.action.fee !== undefined ? {
              set: props.Order.action.fee  
             } : undefined,
        },
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
        },
      }
    } : undefined,
    asset: props.Order.asset ? {
      upsert: {
        where: {
          id: props.Order.asset.id !== undefined ? {
              equals: props.Order.asset.id 
             } : undefined,
          symbol: props.Order.asset.symbol !== undefined ? {
              equals: props.Order.asset.symbol 
             } : undefined,
          name: props.Order.asset.name !== undefined ? {
              equals: props.Order.asset.name 
             } : undefined,
        },
        update: {
          id: props.Order.asset.id !== undefined ? {
              set: props.Order.asset.id  
             } : undefined,
          symbol: props.Order.asset.symbol !== undefined ? {
              set: props.Order.asset.symbol  
             } : undefined,
          name: props.Order.asset.name !== undefined ? {
              set: props.Order.asset.name  
             } : undefined,
          type: props.Order.asset.type !== undefined ? {
              set: props.Order.asset.type  
             } : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? {
              set: props.Order.asset.logoUrl  
             } : undefined,
          description: props.Order.asset.description !== undefined ? {
              set: props.Order.asset.description  
             } : undefined,
          cik: props.Order.asset.cik !== undefined ? {
              set: props.Order.asset.cik  
             } : undefined,
          exchange: props.Order.asset.exchange !== undefined ? {
              set: props.Order.asset.exchange  
             } : undefined,
          currency: props.Order.asset.currency !== undefined ? {
              set: props.Order.asset.currency  
             } : undefined,
          country: props.Order.asset.country !== undefined ? {
              set: props.Order.asset.country  
             } : undefined,
          sector: props.Order.asset.sector !== undefined ? {
              set: props.Order.asset.sector  
             } : undefined,
          industry: props.Order.asset.industry !== undefined ? {
              set: props.Order.asset.industry  
             } : undefined,
          address: props.Order.asset.address !== undefined ? {
              set: props.Order.asset.address  
             } : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? {
              set: props.Order.asset.officialSite  
             } : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? {
              set: props.Order.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? {
              set: props.Order.asset.latestQuarter  
             } : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? {
              set: props.Order.asset.marketCapitalization  
             } : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? {
              set: props.Order.asset.ebitda  
             } : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? {
              set: props.Order.asset.peRatio  
             } : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? {
              set: props.Order.asset.pegRatio  
             } : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? {
              set: props.Order.asset.bookValue  
             } : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? {
              set: props.Order.asset.dividendPerShare  
             } : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? {
              set: props.Order.asset.dividendYield  
             } : undefined,
          eps: props.Order.asset.eps !== undefined ? {
              set: props.Order.asset.eps  
             } : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? {
              set: props.Order.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? {
              set: props.Order.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? {
              set: props.Order.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? {
              set: props.Order.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? {
              set: props.Order.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? {
              set: props.Order.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? {
              set: props.Order.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? {
              set: props.Order.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: props.Order.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: props.Order.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? {
              set: props.Order.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? {
              set: props.Order.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? {
              set: props.Order.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? {
              set: props.Order.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? {
              set: props.Order.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? {
              set: props.Order.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? {
              set: props.Order.asset.trailingPE  
             } : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? {
              set: props.Order.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? {
              set: props.Order.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? {
              set: props.Order.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? {
              set: props.Order.asset.evToRevenue  
             } : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? {
              set: props.Order.asset.evToEbitda  
             } : undefined,
          beta: props.Order.asset.beta !== undefined ? {
              set: props.Order.asset.beta  
             } : undefined,
          week52High: props.Order.asset.week52High !== undefined ? {
              set: props.Order.asset.week52High  
             } : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? {
              set: props.Order.asset.week52Low  
             } : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? {
              set: props.Order.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? {
              set: props.Order.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? {
              set: props.Order.asset.sharesOutstanding  
             } : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? {
              set: props.Order.asset.dividendDate  
             } : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? {
              set: props.Order.asset.exDividendDate  
             } : undefined,
          askPrice: props.Order.asset.askPrice !== undefined ? {
              set: props.Order.asset.askPrice  
             } : undefined,
          bidPrice: props.Order.asset.bidPrice !== undefined ? {
              set: props.Order.asset.bidPrice  
             } : undefined,
        },
        create: {
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
          type: props.Order.asset.type !== undefined ? props.Order.asset.type : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? props.Order.asset.logoUrl : undefined,
          description: props.Order.asset.description !== undefined ? props.Order.asset.description : undefined,
          cik: props.Order.asset.cik !== undefined ? props.Order.asset.cik : undefined,
          exchange: props.Order.asset.exchange !== undefined ? props.Order.asset.exchange : undefined,
          currency: props.Order.asset.currency !== undefined ? props.Order.asset.currency : undefined,
          country: props.Order.asset.country !== undefined ? props.Order.asset.country : undefined,
          sector: props.Order.asset.sector !== undefined ? props.Order.asset.sector : undefined,
          industry: props.Order.asset.industry !== undefined ? props.Order.asset.industry : undefined,
          address: props.Order.asset.address !== undefined ? props.Order.asset.address : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? props.Order.asset.officialSite : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? props.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? props.Order.asset.latestQuarter : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? props.Order.asset.marketCapitalization : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? props.Order.asset.ebitda : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? props.Order.asset.peRatio : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? props.Order.asset.pegRatio : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? props.Order.asset.bookValue : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? props.Order.asset.dividendPerShare : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? props.Order.asset.dividendYield : undefined,
          eps: props.Order.asset.eps !== undefined ? props.Order.asset.eps : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? props.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? props.Order.asset.profitMargin : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? props.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? props.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? props.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? props.Order.asset.revenueTTM : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? props.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? props.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? props.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? props.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? props.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? props.Order.asset.analystRatingHold : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? props.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? props.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? props.Order.asset.trailingPE : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? props.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? props.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? props.Order.asset.priceToBookRatio : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? props.Order.asset.evToRevenue : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? props.Order.asset.evToEbitda : undefined,
          beta: props.Order.asset.beta !== undefined ? props.Order.asset.beta : undefined,
          week52High: props.Order.asset.week52High !== undefined ? props.Order.asset.week52High : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? props.Order.asset.week52Low : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? props.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? props.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? props.Order.asset.sharesOutstanding : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? props.Order.asset.dividendDate : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? props.Order.asset.exDividendDate : undefined,
          askPrice: props.Order.asset.askPrice !== undefined ? props.Order.asset.askPrice : undefined,
          bidPrice: props.Order.asset.bidPrice !== undefined ? props.Order.asset.bidPrice : undefined,
        },
      }
    } : undefined,
      },
      create: {
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        qty: props.Order.qty !== undefined ? props.Order.qty : undefined,
        notional: props.Order.notional !== undefined ? props.Order.notional : undefined,
        side: props.Order.side !== undefined ? props.Order.side : undefined,
        type: props.Order.type !== undefined ? props.Order.type : undefined,
        orderClass: props.Order.orderClass !== undefined ? props.Order.orderClass : undefined,
        timeInForce: props.Order.timeInForce !== undefined ? props.Order.timeInForce : undefined,
        limitPrice: props.Order.limitPrice !== undefined ? props.Order.limitPrice : undefined,
        stopPrice: props.Order.stopPrice !== undefined ? props.Order.stopPrice : undefined,
        trailPrice: props.Order.trailPrice !== undefined ? props.Order.trailPrice : undefined,
        trailPercent: props.Order.trailPercent !== undefined ? props.Order.trailPercent : undefined,
        extendedHours: props.Order.extendedHours !== undefined ? props.Order.extendedHours : undefined,
        status: props.Order.status !== undefined ? props.Order.status : undefined,
        submittedAt: props.Order.submittedAt !== undefined ? props.Order.submittedAt : undefined,
        filledAt: props.Order.filledAt !== undefined ? props.Order.filledAt : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? props.Order.filledAvgPrice : undefined,
        fee: props.Order.fee !== undefined ? props.Order.fee : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? props.Order.strikePrice : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? props.Order.expirationDate : undefined,
        optionType: props.Order.optionType !== undefined ? props.Order.optionType : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? props.Order.takeProfitId : undefined,
    takeProfit: props.Order.takeProfit ? 
      typeof props.Order.takeProfit === 'object' && Object.keys(props.Order.takeProfit).length === 1 && Object.keys(props.Order.takeProfit)[0] === 'id'
    ? { connect: {
          id: props.Order.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.takeProfit.id !== undefined ? props.Order.takeProfit.id : undefined,
        },
        create: {
          limitPrice: props.Order.takeProfit.limitPrice !== undefined ? props.Order.takeProfit.limitPrice : undefined,
          stopPrice: props.Order.takeProfit.stopPrice !== undefined ? props.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: props.Order.alpacaAccount ? 
      typeof props.Order.alpacaAccount === 'object' && Object.keys(props.Order.alpacaAccount).length === 1 && Object.keys(props.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: props.Order.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.alpacaAccount.id !== undefined ? props.Order.alpacaAccount.id : undefined,
        },
        create: {
          type: props.Order.alpacaAccount.type !== undefined ? props.Order.alpacaAccount.type : undefined,
          APIKey: props.Order.alpacaAccount.APIKey !== undefined ? props.Order.alpacaAccount.APIKey : undefined,
          APISecret: props.Order.alpacaAccount.APISecret !== undefined ? props.Order.alpacaAccount.APISecret : undefined,
          configuration: props.Order.alpacaAccount.configuration !== undefined ? props.Order.alpacaAccount.configuration : undefined,
          marketOpen: props.Order.alpacaAccount.marketOpen !== undefined ? props.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: props.Order.alpacaAccount.minOrderSize !== undefined ? props.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: props.Order.alpacaAccount.maxOrderSize !== undefined ? props.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: props.Order.alpacaAccount.minPercentageChange !== undefined ? props.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: props.Order.alpacaAccount.volumeThreshold !== undefined ? props.Order.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
    action: props.Order.action ? 
      typeof props.Order.action === 'object' && Object.keys(props.Order.action).length === 1 && Object.keys(props.Order.action)[0] === 'id'
    ? { connect: {
          id: props.Order.action.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.action.id !== undefined ? props.Order.action.id : undefined,
        },
        create: {
          sequence: props.Order.action.sequence !== undefined ? props.Order.action.sequence : undefined,
          type: props.Order.action.type !== undefined ? props.Order.action.type : undefined,
          note: props.Order.action.note !== undefined ? props.Order.action.note : undefined,
          status: props.Order.action.status !== undefined ? props.Order.action.status : undefined,
          fee: props.Order.action.fee !== undefined ? props.Order.action.fee : undefined,
        },
      }
    } : undefined,
    asset: props.Order.asset ? 
      typeof props.Order.asset === 'object' && Object.keys(props.Order.asset).length === 1 && Object.keys(props.Order.asset)[0] === 'id'
    ? { connect: {
          id: props.Order.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.Order.asset.id !== undefined ? props.Order.asset.id : undefined,
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
        },
        create: {
          symbol: props.Order.asset.symbol !== undefined ? props.Order.asset.symbol : undefined,
          name: props.Order.asset.name !== undefined ? props.Order.asset.name : undefined,
          type: props.Order.asset.type !== undefined ? props.Order.asset.type : undefined,
          logoUrl: props.Order.asset.logoUrl !== undefined ? props.Order.asset.logoUrl : undefined,
          description: props.Order.asset.description !== undefined ? props.Order.asset.description : undefined,
          cik: props.Order.asset.cik !== undefined ? props.Order.asset.cik : undefined,
          exchange: props.Order.asset.exchange !== undefined ? props.Order.asset.exchange : undefined,
          currency: props.Order.asset.currency !== undefined ? props.Order.asset.currency : undefined,
          country: props.Order.asset.country !== undefined ? props.Order.asset.country : undefined,
          sector: props.Order.asset.sector !== undefined ? props.Order.asset.sector : undefined,
          industry: props.Order.asset.industry !== undefined ? props.Order.asset.industry : undefined,
          address: props.Order.asset.address !== undefined ? props.Order.asset.address : undefined,
          officialSite: props.Order.asset.officialSite !== undefined ? props.Order.asset.officialSite : undefined,
          fiscalYearEnd: props.Order.asset.fiscalYearEnd !== undefined ? props.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: props.Order.asset.latestQuarter !== undefined ? props.Order.asset.latestQuarter : undefined,
          marketCapitalization: props.Order.asset.marketCapitalization !== undefined ? props.Order.asset.marketCapitalization : undefined,
          ebitda: props.Order.asset.ebitda !== undefined ? props.Order.asset.ebitda : undefined,
          peRatio: props.Order.asset.peRatio !== undefined ? props.Order.asset.peRatio : undefined,
          pegRatio: props.Order.asset.pegRatio !== undefined ? props.Order.asset.pegRatio : undefined,
          bookValue: props.Order.asset.bookValue !== undefined ? props.Order.asset.bookValue : undefined,
          dividendPerShare: props.Order.asset.dividendPerShare !== undefined ? props.Order.asset.dividendPerShare : undefined,
          dividendYield: props.Order.asset.dividendYield !== undefined ? props.Order.asset.dividendYield : undefined,
          eps: props.Order.asset.eps !== undefined ? props.Order.asset.eps : undefined,
          revenuePerShareTTM: props.Order.asset.revenuePerShareTTM !== undefined ? props.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: props.Order.asset.profitMargin !== undefined ? props.Order.asset.profitMargin : undefined,
          operatingMarginTTM: props.Order.asset.operatingMarginTTM !== undefined ? props.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: props.Order.asset.returnOnAssetsTTM !== undefined ? props.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: props.Order.asset.returnOnEquityTTM !== undefined ? props.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: props.Order.asset.revenueTTM !== undefined ? props.Order.asset.revenueTTM : undefined,
          grossProfitTTM: props.Order.asset.grossProfitTTM !== undefined ? props.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: props.Order.asset.dilutedEPSTTM !== undefined ? props.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: props.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? props.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: props.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? props.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: props.Order.asset.analystTargetPrice !== undefined ? props.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: props.Order.asset.analystRatingStrongBuy !== undefined ? props.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: props.Order.asset.analystRatingBuy !== undefined ? props.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: props.Order.asset.analystRatingHold !== undefined ? props.Order.asset.analystRatingHold : undefined,
          analystRatingSell: props.Order.asset.analystRatingSell !== undefined ? props.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: props.Order.asset.analystRatingStrongSell !== undefined ? props.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: props.Order.asset.trailingPE !== undefined ? props.Order.asset.trailingPE : undefined,
          forwardPE: props.Order.asset.forwardPE !== undefined ? props.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: props.Order.asset.priceToSalesRatioTTM !== undefined ? props.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: props.Order.asset.priceToBookRatio !== undefined ? props.Order.asset.priceToBookRatio : undefined,
          evToRevenue: props.Order.asset.evToRevenue !== undefined ? props.Order.asset.evToRevenue : undefined,
          evToEbitda: props.Order.asset.evToEbitda !== undefined ? props.Order.asset.evToEbitda : undefined,
          beta: props.Order.asset.beta !== undefined ? props.Order.asset.beta : undefined,
          week52High: props.Order.asset.week52High !== undefined ? props.Order.asset.week52High : undefined,
          week52Low: props.Order.asset.week52Low !== undefined ? props.Order.asset.week52Low : undefined,
          day50MovingAverage: props.Order.asset.day50MovingAverage !== undefined ? props.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: props.Order.asset.day200MovingAverage !== undefined ? props.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: props.Order.asset.sharesOutstanding !== undefined ? props.Order.asset.sharesOutstanding : undefined,
          dividendDate: props.Order.asset.dividendDate !== undefined ? props.Order.asset.dividendDate : undefined,
          exDividendDate: props.Order.asset.exDividendDate !== undefined ? props.Order.asset.exDividendDate : undefined,
          askPrice: props.Order.asset.askPrice !== undefined ? props.Order.asset.askPrice : undefined,
          bidPrice: props.Order.asset.bidPrice !== undefined ? props.Order.asset.bidPrice : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneStopLoss) {
        return response.data.updateOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Update multiple StopLoss records.
   * @param props - Array of StopLoss objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: StopLossType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_STOPLOSS = gql`
      mutation updateManyStopLoss($data: [StopLossCreateManyInput!]!) {
        updateManyStopLoss(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? {
    equals: prop.id
  } : undefined,
  orderId: prop.orderId !== undefined ? {
    equals: prop.orderId
  } : undefined,
  createdAt: prop.createdAt !== undefined ? {
    equals: prop.createdAt
  } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
    equals: prop.updatedAt
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  stopPrice: prop.stopPrice !== undefined ? {
            set: prop.stopPrice 
           } : undefined,
  limitPrice: prop.limitPrice !== undefined ? {
            set: prop.limitPrice 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  Order: prop.Order ? {
    upsert: {
      where: {
        id: prop.Order.id !== undefined ? {
            equals: prop.Order.id 
           } : undefined,
      },
      update: {
        id: prop.Order.id !== undefined ? {
            set: prop.Order.id  
           } : undefined,
        clientOrderId: prop.Order.clientOrderId !== undefined ? {
            set: prop.Order.clientOrderId  
           } : undefined,
        qty: prop.Order.qty !== undefined ? {
            set: prop.Order.qty  
           } : undefined,
        notional: prop.Order.notional !== undefined ? {
            set: prop.Order.notional  
           } : undefined,
        side: prop.Order.side !== undefined ? {
            set: prop.Order.side  
           } : undefined,
        type: prop.Order.type !== undefined ? {
            set: prop.Order.type  
           } : undefined,
        orderClass: prop.Order.orderClass !== undefined ? {
            set: prop.Order.orderClass  
           } : undefined,
        timeInForce: prop.Order.timeInForce !== undefined ? {
            set: prop.Order.timeInForce  
           } : undefined,
        limitPrice: prop.Order.limitPrice !== undefined ? {
            set: prop.Order.limitPrice  
           } : undefined,
        stopPrice: prop.Order.stopPrice !== undefined ? {
            set: prop.Order.stopPrice  
           } : undefined,
        trailPrice: prop.Order.trailPrice !== undefined ? {
            set: prop.Order.trailPrice  
           } : undefined,
        trailPercent: prop.Order.trailPercent !== undefined ? {
            set: prop.Order.trailPercent  
           } : undefined,
        extendedHours: prop.Order.extendedHours !== undefined ? {
            set: prop.Order.extendedHours  
           } : undefined,
        status: prop.Order.status !== undefined ? {
            set: prop.Order.status  
           } : undefined,
        submittedAt: prop.Order.submittedAt !== undefined ? {
            set: prop.Order.submittedAt  
           } : undefined,
        filledAt: prop.Order.filledAt !== undefined ? {
            set: prop.Order.filledAt  
           } : undefined,
        filledAvgPrice: prop.Order.filledAvgPrice !== undefined ? {
            set: prop.Order.filledAvgPrice  
           } : undefined,
        fee: prop.Order.fee !== undefined ? {
            set: prop.Order.fee  
           } : undefined,
        strikePrice: prop.Order.strikePrice !== undefined ? {
            set: prop.Order.strikePrice  
           } : undefined,
        expirationDate: prop.Order.expirationDate !== undefined ? {
            set: prop.Order.expirationDate  
           } : undefined,
        optionType: prop.Order.optionType !== undefined ? {
            set: prop.Order.optionType  
           } : undefined,
        stopLossId: prop.Order.stopLossId !== undefined ? {
            set: prop.Order.stopLossId  
           } : undefined,
        takeProfitId: prop.Order.takeProfitId !== undefined ? {
            set: prop.Order.takeProfitId  
           } : undefined,
    takeProfit: prop.Order.takeProfit ? {
      upsert: {
        where: {
          id: prop.Order.takeProfit.id !== undefined ? {
              equals: prop.Order.takeProfit.id 
             } : undefined,
        },
        update: {
          id: prop.Order.takeProfit.id !== undefined ? {
              set: prop.Order.takeProfit.id  
             } : undefined,
          limitPrice: prop.Order.takeProfit.limitPrice !== undefined ? {
              set: prop.Order.takeProfit.limitPrice  
             } : undefined,
          stopPrice: prop.Order.takeProfit.stopPrice !== undefined ? {
              set: prop.Order.takeProfit.stopPrice  
             } : undefined,
        },
        create: {
          limitPrice: prop.Order.takeProfit.limitPrice !== undefined ? prop.Order.takeProfit.limitPrice : undefined,
          stopPrice: prop.Order.takeProfit.stopPrice !== undefined ? prop.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: prop.Order.alpacaAccount ? {
      upsert: {
        where: {
          id: prop.Order.alpacaAccount.id !== undefined ? {
              equals: prop.Order.alpacaAccount.id 
             } : undefined,
        },
        update: {
          id: prop.Order.alpacaAccount.id !== undefined ? {
              set: prop.Order.alpacaAccount.id  
             } : undefined,
          type: prop.Order.alpacaAccount.type !== undefined ? {
              set: prop.Order.alpacaAccount.type  
             } : undefined,
          APIKey: prop.Order.alpacaAccount.APIKey !== undefined ? {
              set: prop.Order.alpacaAccount.APIKey  
             } : undefined,
          APISecret: prop.Order.alpacaAccount.APISecret !== undefined ? {
              set: prop.Order.alpacaAccount.APISecret  
             } : undefined,
          configuration: prop.Order.alpacaAccount.configuration !== undefined ? {
              set: prop.Order.alpacaAccount.configuration  
             } : undefined,
          marketOpen: prop.Order.alpacaAccount.marketOpen !== undefined ? {
              set: prop.Order.alpacaAccount.marketOpen  
             } : undefined,
          minOrderSize: prop.Order.alpacaAccount.minOrderSize !== undefined ? {
              set: prop.Order.alpacaAccount.minOrderSize  
             } : undefined,
          maxOrderSize: prop.Order.alpacaAccount.maxOrderSize !== undefined ? {
              set: prop.Order.alpacaAccount.maxOrderSize  
             } : undefined,
          minPercentageChange: prop.Order.alpacaAccount.minPercentageChange !== undefined ? {
              set: prop.Order.alpacaAccount.minPercentageChange  
             } : undefined,
          volumeThreshold: prop.Order.alpacaAccount.volumeThreshold !== undefined ? {
              set: prop.Order.alpacaAccount.volumeThreshold  
             } : undefined,
        },
        create: {
          type: prop.Order.alpacaAccount.type !== undefined ? prop.Order.alpacaAccount.type : undefined,
          APIKey: prop.Order.alpacaAccount.APIKey !== undefined ? prop.Order.alpacaAccount.APIKey : undefined,
          APISecret: prop.Order.alpacaAccount.APISecret !== undefined ? prop.Order.alpacaAccount.APISecret : undefined,
          configuration: prop.Order.alpacaAccount.configuration !== undefined ? prop.Order.alpacaAccount.configuration : undefined,
          marketOpen: prop.Order.alpacaAccount.marketOpen !== undefined ? prop.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: prop.Order.alpacaAccount.minOrderSize !== undefined ? prop.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: prop.Order.alpacaAccount.maxOrderSize !== undefined ? prop.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: prop.Order.alpacaAccount.minPercentageChange !== undefined ? prop.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.Order.alpacaAccount.volumeThreshold !== undefined ? prop.Order.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
    action: prop.Order.action ? {
      upsert: {
        where: {
          id: prop.Order.action.id !== undefined ? {
              equals: prop.Order.action.id 
             } : undefined,
        },
        update: {
          id: prop.Order.action.id !== undefined ? {
              set: prop.Order.action.id  
             } : undefined,
          sequence: prop.Order.action.sequence !== undefined ? {
              set: prop.Order.action.sequence  
             } : undefined,
          type: prop.Order.action.type !== undefined ? {
              set: prop.Order.action.type  
             } : undefined,
          note: prop.Order.action.note !== undefined ? {
              set: prop.Order.action.note  
             } : undefined,
          status: prop.Order.action.status !== undefined ? {
              set: prop.Order.action.status  
             } : undefined,
          fee: prop.Order.action.fee !== undefined ? {
              set: prop.Order.action.fee  
             } : undefined,
        },
        create: {
          sequence: prop.Order.action.sequence !== undefined ? prop.Order.action.sequence : undefined,
          type: prop.Order.action.type !== undefined ? prop.Order.action.type : undefined,
          note: prop.Order.action.note !== undefined ? prop.Order.action.note : undefined,
          status: prop.Order.action.status !== undefined ? prop.Order.action.status : undefined,
          fee: prop.Order.action.fee !== undefined ? prop.Order.action.fee : undefined,
        },
      }
    } : undefined,
    asset: prop.Order.asset ? {
      upsert: {
        where: {
          id: prop.Order.asset.id !== undefined ? {
              equals: prop.Order.asset.id 
             } : undefined,
          symbol: prop.Order.asset.symbol !== undefined ? {
              equals: prop.Order.asset.symbol 
             } : undefined,
          name: prop.Order.asset.name !== undefined ? {
              equals: prop.Order.asset.name 
             } : undefined,
        },
        update: {
          id: prop.Order.asset.id !== undefined ? {
              set: prop.Order.asset.id  
             } : undefined,
          symbol: prop.Order.asset.symbol !== undefined ? {
              set: prop.Order.asset.symbol  
             } : undefined,
          name: prop.Order.asset.name !== undefined ? {
              set: prop.Order.asset.name  
             } : undefined,
          type: prop.Order.asset.type !== undefined ? {
              set: prop.Order.asset.type  
             } : undefined,
          logoUrl: prop.Order.asset.logoUrl !== undefined ? {
              set: prop.Order.asset.logoUrl  
             } : undefined,
          description: prop.Order.asset.description !== undefined ? {
              set: prop.Order.asset.description  
             } : undefined,
          cik: prop.Order.asset.cik !== undefined ? {
              set: prop.Order.asset.cik  
             } : undefined,
          exchange: prop.Order.asset.exchange !== undefined ? {
              set: prop.Order.asset.exchange  
             } : undefined,
          currency: prop.Order.asset.currency !== undefined ? {
              set: prop.Order.asset.currency  
             } : undefined,
          country: prop.Order.asset.country !== undefined ? {
              set: prop.Order.asset.country  
             } : undefined,
          sector: prop.Order.asset.sector !== undefined ? {
              set: prop.Order.asset.sector  
             } : undefined,
          industry: prop.Order.asset.industry !== undefined ? {
              set: prop.Order.asset.industry  
             } : undefined,
          address: prop.Order.asset.address !== undefined ? {
              set: prop.Order.asset.address  
             } : undefined,
          officialSite: prop.Order.asset.officialSite !== undefined ? {
              set: prop.Order.asset.officialSite  
             } : undefined,
          fiscalYearEnd: prop.Order.asset.fiscalYearEnd !== undefined ? {
              set: prop.Order.asset.fiscalYearEnd  
             } : undefined,
          latestQuarter: prop.Order.asset.latestQuarter !== undefined ? {
              set: prop.Order.asset.latestQuarter  
             } : undefined,
          marketCapitalization: prop.Order.asset.marketCapitalization !== undefined ? {
              set: prop.Order.asset.marketCapitalization  
             } : undefined,
          ebitda: prop.Order.asset.ebitda !== undefined ? {
              set: prop.Order.asset.ebitda  
             } : undefined,
          peRatio: prop.Order.asset.peRatio !== undefined ? {
              set: prop.Order.asset.peRatio  
             } : undefined,
          pegRatio: prop.Order.asset.pegRatio !== undefined ? {
              set: prop.Order.asset.pegRatio  
             } : undefined,
          bookValue: prop.Order.asset.bookValue !== undefined ? {
              set: prop.Order.asset.bookValue  
             } : undefined,
          dividendPerShare: prop.Order.asset.dividendPerShare !== undefined ? {
              set: prop.Order.asset.dividendPerShare  
             } : undefined,
          dividendYield: prop.Order.asset.dividendYield !== undefined ? {
              set: prop.Order.asset.dividendYield  
             } : undefined,
          eps: prop.Order.asset.eps !== undefined ? {
              set: prop.Order.asset.eps  
             } : undefined,
          revenuePerShareTTM: prop.Order.asset.revenuePerShareTTM !== undefined ? {
              set: prop.Order.asset.revenuePerShareTTM  
             } : undefined,
          profitMargin: prop.Order.asset.profitMargin !== undefined ? {
              set: prop.Order.asset.profitMargin  
             } : undefined,
          operatingMarginTTM: prop.Order.asset.operatingMarginTTM !== undefined ? {
              set: prop.Order.asset.operatingMarginTTM  
             } : undefined,
          returnOnAssetsTTM: prop.Order.asset.returnOnAssetsTTM !== undefined ? {
              set: prop.Order.asset.returnOnAssetsTTM  
             } : undefined,
          returnOnEquityTTM: prop.Order.asset.returnOnEquityTTM !== undefined ? {
              set: prop.Order.asset.returnOnEquityTTM  
             } : undefined,
          revenueTTM: prop.Order.asset.revenueTTM !== undefined ? {
              set: prop.Order.asset.revenueTTM  
             } : undefined,
          grossProfitTTM: prop.Order.asset.grossProfitTTM !== undefined ? {
              set: prop.Order.asset.grossProfitTTM  
             } : undefined,
          dilutedEPSTTM: prop.Order.asset.dilutedEPSTTM !== undefined ? {
              set: prop.Order.asset.dilutedEPSTTM  
             } : undefined,
          quarterlyEarningsGrowthYOY: prop.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? {
              set: prop.Order.asset.quarterlyEarningsGrowthYOY  
             } : undefined,
          quarterlyRevenueGrowthYOY: prop.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? {
              set: prop.Order.asset.quarterlyRevenueGrowthYOY  
             } : undefined,
          analystTargetPrice: prop.Order.asset.analystTargetPrice !== undefined ? {
              set: prop.Order.asset.analystTargetPrice  
             } : undefined,
          analystRatingStrongBuy: prop.Order.asset.analystRatingStrongBuy !== undefined ? {
              set: prop.Order.asset.analystRatingStrongBuy  
             } : undefined,
          analystRatingBuy: prop.Order.asset.analystRatingBuy !== undefined ? {
              set: prop.Order.asset.analystRatingBuy  
             } : undefined,
          analystRatingHold: prop.Order.asset.analystRatingHold !== undefined ? {
              set: prop.Order.asset.analystRatingHold  
             } : undefined,
          analystRatingSell: prop.Order.asset.analystRatingSell !== undefined ? {
              set: prop.Order.asset.analystRatingSell  
             } : undefined,
          analystRatingStrongSell: prop.Order.asset.analystRatingStrongSell !== undefined ? {
              set: prop.Order.asset.analystRatingStrongSell  
             } : undefined,
          trailingPE: prop.Order.asset.trailingPE !== undefined ? {
              set: prop.Order.asset.trailingPE  
             } : undefined,
          forwardPE: prop.Order.asset.forwardPE !== undefined ? {
              set: prop.Order.asset.forwardPE  
             } : undefined,
          priceToSalesRatioTTM: prop.Order.asset.priceToSalesRatioTTM !== undefined ? {
              set: prop.Order.asset.priceToSalesRatioTTM  
             } : undefined,
          priceToBookRatio: prop.Order.asset.priceToBookRatio !== undefined ? {
              set: prop.Order.asset.priceToBookRatio  
             } : undefined,
          evToRevenue: prop.Order.asset.evToRevenue !== undefined ? {
              set: prop.Order.asset.evToRevenue  
             } : undefined,
          evToEbitda: prop.Order.asset.evToEbitda !== undefined ? {
              set: prop.Order.asset.evToEbitda  
             } : undefined,
          beta: prop.Order.asset.beta !== undefined ? {
              set: prop.Order.asset.beta  
             } : undefined,
          week52High: prop.Order.asset.week52High !== undefined ? {
              set: prop.Order.asset.week52High  
             } : undefined,
          week52Low: prop.Order.asset.week52Low !== undefined ? {
              set: prop.Order.asset.week52Low  
             } : undefined,
          day50MovingAverage: prop.Order.asset.day50MovingAverage !== undefined ? {
              set: prop.Order.asset.day50MovingAverage  
             } : undefined,
          day200MovingAverage: prop.Order.asset.day200MovingAverage !== undefined ? {
              set: prop.Order.asset.day200MovingAverage  
             } : undefined,
          sharesOutstanding: prop.Order.asset.sharesOutstanding !== undefined ? {
              set: prop.Order.asset.sharesOutstanding  
             } : undefined,
          dividendDate: prop.Order.asset.dividendDate !== undefined ? {
              set: prop.Order.asset.dividendDate  
             } : undefined,
          exDividendDate: prop.Order.asset.exDividendDate !== undefined ? {
              set: prop.Order.asset.exDividendDate  
             } : undefined,
          askPrice: prop.Order.asset.askPrice !== undefined ? {
              set: prop.Order.asset.askPrice  
             } : undefined,
          bidPrice: prop.Order.asset.bidPrice !== undefined ? {
              set: prop.Order.asset.bidPrice  
             } : undefined,
        },
        create: {
          symbol: prop.Order.asset.symbol !== undefined ? prop.Order.asset.symbol : undefined,
          name: prop.Order.asset.name !== undefined ? prop.Order.asset.name : undefined,
          type: prop.Order.asset.type !== undefined ? prop.Order.asset.type : undefined,
          logoUrl: prop.Order.asset.logoUrl !== undefined ? prop.Order.asset.logoUrl : undefined,
          description: prop.Order.asset.description !== undefined ? prop.Order.asset.description : undefined,
          cik: prop.Order.asset.cik !== undefined ? prop.Order.asset.cik : undefined,
          exchange: prop.Order.asset.exchange !== undefined ? prop.Order.asset.exchange : undefined,
          currency: prop.Order.asset.currency !== undefined ? prop.Order.asset.currency : undefined,
          country: prop.Order.asset.country !== undefined ? prop.Order.asset.country : undefined,
          sector: prop.Order.asset.sector !== undefined ? prop.Order.asset.sector : undefined,
          industry: prop.Order.asset.industry !== undefined ? prop.Order.asset.industry : undefined,
          address: prop.Order.asset.address !== undefined ? prop.Order.asset.address : undefined,
          officialSite: prop.Order.asset.officialSite !== undefined ? prop.Order.asset.officialSite : undefined,
          fiscalYearEnd: prop.Order.asset.fiscalYearEnd !== undefined ? prop.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.Order.asset.latestQuarter !== undefined ? prop.Order.asset.latestQuarter : undefined,
          marketCapitalization: prop.Order.asset.marketCapitalization !== undefined ? prop.Order.asset.marketCapitalization : undefined,
          ebitda: prop.Order.asset.ebitda !== undefined ? prop.Order.asset.ebitda : undefined,
          peRatio: prop.Order.asset.peRatio !== undefined ? prop.Order.asset.peRatio : undefined,
          pegRatio: prop.Order.asset.pegRatio !== undefined ? prop.Order.asset.pegRatio : undefined,
          bookValue: prop.Order.asset.bookValue !== undefined ? prop.Order.asset.bookValue : undefined,
          dividendPerShare: prop.Order.asset.dividendPerShare !== undefined ? prop.Order.asset.dividendPerShare : undefined,
          dividendYield: prop.Order.asset.dividendYield !== undefined ? prop.Order.asset.dividendYield : undefined,
          eps: prop.Order.asset.eps !== undefined ? prop.Order.asset.eps : undefined,
          revenuePerShareTTM: prop.Order.asset.revenuePerShareTTM !== undefined ? prop.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.Order.asset.profitMargin !== undefined ? prop.Order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.Order.asset.operatingMarginTTM !== undefined ? prop.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.Order.asset.returnOnAssetsTTM !== undefined ? prop.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.Order.asset.returnOnEquityTTM !== undefined ? prop.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.Order.asset.revenueTTM !== undefined ? prop.Order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.Order.asset.grossProfitTTM !== undefined ? prop.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.Order.asset.dilutedEPSTTM !== undefined ? prop.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.Order.asset.analystTargetPrice !== undefined ? prop.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.Order.asset.analystRatingStrongBuy !== undefined ? prop.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.Order.asset.analystRatingBuy !== undefined ? prop.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.Order.asset.analystRatingHold !== undefined ? prop.Order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.Order.asset.analystRatingSell !== undefined ? prop.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.Order.asset.analystRatingStrongSell !== undefined ? prop.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.Order.asset.trailingPE !== undefined ? prop.Order.asset.trailingPE : undefined,
          forwardPE: prop.Order.asset.forwardPE !== undefined ? prop.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.Order.asset.priceToSalesRatioTTM !== undefined ? prop.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.Order.asset.priceToBookRatio !== undefined ? prop.Order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.Order.asset.evToRevenue !== undefined ? prop.Order.asset.evToRevenue : undefined,
          evToEbitda: prop.Order.asset.evToEbitda !== undefined ? prop.Order.asset.evToEbitda : undefined,
          beta: prop.Order.asset.beta !== undefined ? prop.Order.asset.beta : undefined,
          week52High: prop.Order.asset.week52High !== undefined ? prop.Order.asset.week52High : undefined,
          week52Low: prop.Order.asset.week52Low !== undefined ? prop.Order.asset.week52Low : undefined,
          day50MovingAverage: prop.Order.asset.day50MovingAverage !== undefined ? prop.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.Order.asset.day200MovingAverage !== undefined ? prop.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.Order.asset.sharesOutstanding !== undefined ? prop.Order.asset.sharesOutstanding : undefined,
          dividendDate: prop.Order.asset.dividendDate !== undefined ? prop.Order.asset.dividendDate : undefined,
          exDividendDate: prop.Order.asset.exDividendDate !== undefined ? prop.Order.asset.exDividendDate : undefined,
          askPrice: prop.Order.asset.askPrice !== undefined ? prop.Order.asset.askPrice : undefined,
          bidPrice: prop.Order.asset.bidPrice !== undefined ? prop.Order.asset.bidPrice : undefined,
        },
      }
    } : undefined,
      },
      create: {
        clientOrderId: prop.Order.clientOrderId !== undefined ? prop.Order.clientOrderId : undefined,
        qty: prop.Order.qty !== undefined ? prop.Order.qty : undefined,
        notional: prop.Order.notional !== undefined ? prop.Order.notional : undefined,
        side: prop.Order.side !== undefined ? prop.Order.side : undefined,
        type: prop.Order.type !== undefined ? prop.Order.type : undefined,
        orderClass: prop.Order.orderClass !== undefined ? prop.Order.orderClass : undefined,
        timeInForce: prop.Order.timeInForce !== undefined ? prop.Order.timeInForce : undefined,
        limitPrice: prop.Order.limitPrice !== undefined ? prop.Order.limitPrice : undefined,
        stopPrice: prop.Order.stopPrice !== undefined ? prop.Order.stopPrice : undefined,
        trailPrice: prop.Order.trailPrice !== undefined ? prop.Order.trailPrice : undefined,
        trailPercent: prop.Order.trailPercent !== undefined ? prop.Order.trailPercent : undefined,
        extendedHours: prop.Order.extendedHours !== undefined ? prop.Order.extendedHours : undefined,
        status: prop.Order.status !== undefined ? prop.Order.status : undefined,
        submittedAt: prop.Order.submittedAt !== undefined ? prop.Order.submittedAt : undefined,
        filledAt: prop.Order.filledAt !== undefined ? prop.Order.filledAt : undefined,
        filledAvgPrice: prop.Order.filledAvgPrice !== undefined ? prop.Order.filledAvgPrice : undefined,
        fee: prop.Order.fee !== undefined ? prop.Order.fee : undefined,
        strikePrice: prop.Order.strikePrice !== undefined ? prop.Order.strikePrice : undefined,
        expirationDate: prop.Order.expirationDate !== undefined ? prop.Order.expirationDate : undefined,
        optionType: prop.Order.optionType !== undefined ? prop.Order.optionType : undefined,
        stopLossId: prop.Order.stopLossId !== undefined ? prop.Order.stopLossId : undefined,
        takeProfitId: prop.Order.takeProfitId !== undefined ? prop.Order.takeProfitId : undefined,
    takeProfit: prop.Order.takeProfit ? 
      typeof prop.Order.takeProfit === 'object' && Object.keys(prop.Order.takeProfit).length === 1 && Object.keys(prop.Order.takeProfit)[0] === 'id'
    ? { connect: {
          id: prop.Order.takeProfit.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.takeProfit.id !== undefined ? prop.Order.takeProfit.id : undefined,
        },
        create: {
          limitPrice: prop.Order.takeProfit.limitPrice !== undefined ? prop.Order.takeProfit.limitPrice : undefined,
          stopPrice: prop.Order.takeProfit.stopPrice !== undefined ? prop.Order.takeProfit.stopPrice : undefined,
        },
      }
    } : undefined,
    alpacaAccount: prop.Order.alpacaAccount ? 
      typeof prop.Order.alpacaAccount === 'object' && Object.keys(prop.Order.alpacaAccount).length === 1 && Object.keys(prop.Order.alpacaAccount)[0] === 'id'
    ? { connect: {
          id: prop.Order.alpacaAccount.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.alpacaAccount.id !== undefined ? prop.Order.alpacaAccount.id : undefined,
        },
        create: {
          type: prop.Order.alpacaAccount.type !== undefined ? prop.Order.alpacaAccount.type : undefined,
          APIKey: prop.Order.alpacaAccount.APIKey !== undefined ? prop.Order.alpacaAccount.APIKey : undefined,
          APISecret: prop.Order.alpacaAccount.APISecret !== undefined ? prop.Order.alpacaAccount.APISecret : undefined,
          configuration: prop.Order.alpacaAccount.configuration !== undefined ? prop.Order.alpacaAccount.configuration : undefined,
          marketOpen: prop.Order.alpacaAccount.marketOpen !== undefined ? prop.Order.alpacaAccount.marketOpen : undefined,
          minOrderSize: prop.Order.alpacaAccount.minOrderSize !== undefined ? prop.Order.alpacaAccount.minOrderSize : undefined,
          maxOrderSize: prop.Order.alpacaAccount.maxOrderSize !== undefined ? prop.Order.alpacaAccount.maxOrderSize : undefined,
          minPercentageChange: prop.Order.alpacaAccount.minPercentageChange !== undefined ? prop.Order.alpacaAccount.minPercentageChange : undefined,
          volumeThreshold: prop.Order.alpacaAccount.volumeThreshold !== undefined ? prop.Order.alpacaAccount.volumeThreshold : undefined,
        },
      }
    } : undefined,
    action: prop.Order.action ? 
      typeof prop.Order.action === 'object' && Object.keys(prop.Order.action).length === 1 && Object.keys(prop.Order.action)[0] === 'id'
    ? { connect: {
          id: prop.Order.action.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.action.id !== undefined ? prop.Order.action.id : undefined,
        },
        create: {
          sequence: prop.Order.action.sequence !== undefined ? prop.Order.action.sequence : undefined,
          type: prop.Order.action.type !== undefined ? prop.Order.action.type : undefined,
          note: prop.Order.action.note !== undefined ? prop.Order.action.note : undefined,
          status: prop.Order.action.status !== undefined ? prop.Order.action.status : undefined,
          fee: prop.Order.action.fee !== undefined ? prop.Order.action.fee : undefined,
        },
      }
    } : undefined,
    asset: prop.Order.asset ? 
      typeof prop.Order.asset === 'object' && Object.keys(prop.Order.asset).length === 1 && Object.keys(prop.Order.asset)[0] === 'id'
    ? { connect: {
          id: prop.Order.asset.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.Order.asset.id !== undefined ? prop.Order.asset.id : undefined,
          symbol: prop.Order.asset.symbol !== undefined ? prop.Order.asset.symbol : undefined,
          name: prop.Order.asset.name !== undefined ? prop.Order.asset.name : undefined,
        },
        create: {
          symbol: prop.Order.asset.symbol !== undefined ? prop.Order.asset.symbol : undefined,
          name: prop.Order.asset.name !== undefined ? prop.Order.asset.name : undefined,
          type: prop.Order.asset.type !== undefined ? prop.Order.asset.type : undefined,
          logoUrl: prop.Order.asset.logoUrl !== undefined ? prop.Order.asset.logoUrl : undefined,
          description: prop.Order.asset.description !== undefined ? prop.Order.asset.description : undefined,
          cik: prop.Order.asset.cik !== undefined ? prop.Order.asset.cik : undefined,
          exchange: prop.Order.asset.exchange !== undefined ? prop.Order.asset.exchange : undefined,
          currency: prop.Order.asset.currency !== undefined ? prop.Order.asset.currency : undefined,
          country: prop.Order.asset.country !== undefined ? prop.Order.asset.country : undefined,
          sector: prop.Order.asset.sector !== undefined ? prop.Order.asset.sector : undefined,
          industry: prop.Order.asset.industry !== undefined ? prop.Order.asset.industry : undefined,
          address: prop.Order.asset.address !== undefined ? prop.Order.asset.address : undefined,
          officialSite: prop.Order.asset.officialSite !== undefined ? prop.Order.asset.officialSite : undefined,
          fiscalYearEnd: prop.Order.asset.fiscalYearEnd !== undefined ? prop.Order.asset.fiscalYearEnd : undefined,
          latestQuarter: prop.Order.asset.latestQuarter !== undefined ? prop.Order.asset.latestQuarter : undefined,
          marketCapitalization: prop.Order.asset.marketCapitalization !== undefined ? prop.Order.asset.marketCapitalization : undefined,
          ebitda: prop.Order.asset.ebitda !== undefined ? prop.Order.asset.ebitda : undefined,
          peRatio: prop.Order.asset.peRatio !== undefined ? prop.Order.asset.peRatio : undefined,
          pegRatio: prop.Order.asset.pegRatio !== undefined ? prop.Order.asset.pegRatio : undefined,
          bookValue: prop.Order.asset.bookValue !== undefined ? prop.Order.asset.bookValue : undefined,
          dividendPerShare: prop.Order.asset.dividendPerShare !== undefined ? prop.Order.asset.dividendPerShare : undefined,
          dividendYield: prop.Order.asset.dividendYield !== undefined ? prop.Order.asset.dividendYield : undefined,
          eps: prop.Order.asset.eps !== undefined ? prop.Order.asset.eps : undefined,
          revenuePerShareTTM: prop.Order.asset.revenuePerShareTTM !== undefined ? prop.Order.asset.revenuePerShareTTM : undefined,
          profitMargin: prop.Order.asset.profitMargin !== undefined ? prop.Order.asset.profitMargin : undefined,
          operatingMarginTTM: prop.Order.asset.operatingMarginTTM !== undefined ? prop.Order.asset.operatingMarginTTM : undefined,
          returnOnAssetsTTM: prop.Order.asset.returnOnAssetsTTM !== undefined ? prop.Order.asset.returnOnAssetsTTM : undefined,
          returnOnEquityTTM: prop.Order.asset.returnOnEquityTTM !== undefined ? prop.Order.asset.returnOnEquityTTM : undefined,
          revenueTTM: prop.Order.asset.revenueTTM !== undefined ? prop.Order.asset.revenueTTM : undefined,
          grossProfitTTM: prop.Order.asset.grossProfitTTM !== undefined ? prop.Order.asset.grossProfitTTM : undefined,
          dilutedEPSTTM: prop.Order.asset.dilutedEPSTTM !== undefined ? prop.Order.asset.dilutedEPSTTM : undefined,
          quarterlyEarningsGrowthYOY: prop.Order.asset.quarterlyEarningsGrowthYOY !== undefined ? prop.Order.asset.quarterlyEarningsGrowthYOY : undefined,
          quarterlyRevenueGrowthYOY: prop.Order.asset.quarterlyRevenueGrowthYOY !== undefined ? prop.Order.asset.quarterlyRevenueGrowthYOY : undefined,
          analystTargetPrice: prop.Order.asset.analystTargetPrice !== undefined ? prop.Order.asset.analystTargetPrice : undefined,
          analystRatingStrongBuy: prop.Order.asset.analystRatingStrongBuy !== undefined ? prop.Order.asset.analystRatingStrongBuy : undefined,
          analystRatingBuy: prop.Order.asset.analystRatingBuy !== undefined ? prop.Order.asset.analystRatingBuy : undefined,
          analystRatingHold: prop.Order.asset.analystRatingHold !== undefined ? prop.Order.asset.analystRatingHold : undefined,
          analystRatingSell: prop.Order.asset.analystRatingSell !== undefined ? prop.Order.asset.analystRatingSell : undefined,
          analystRatingStrongSell: prop.Order.asset.analystRatingStrongSell !== undefined ? prop.Order.asset.analystRatingStrongSell : undefined,
          trailingPE: prop.Order.asset.trailingPE !== undefined ? prop.Order.asset.trailingPE : undefined,
          forwardPE: prop.Order.asset.forwardPE !== undefined ? prop.Order.asset.forwardPE : undefined,
          priceToSalesRatioTTM: prop.Order.asset.priceToSalesRatioTTM !== undefined ? prop.Order.asset.priceToSalesRatioTTM : undefined,
          priceToBookRatio: prop.Order.asset.priceToBookRatio !== undefined ? prop.Order.asset.priceToBookRatio : undefined,
          evToRevenue: prop.Order.asset.evToRevenue !== undefined ? prop.Order.asset.evToRevenue : undefined,
          evToEbitda: prop.Order.asset.evToEbitda !== undefined ? prop.Order.asset.evToEbitda : undefined,
          beta: prop.Order.asset.beta !== undefined ? prop.Order.asset.beta : undefined,
          week52High: prop.Order.asset.week52High !== undefined ? prop.Order.asset.week52High : undefined,
          week52Low: prop.Order.asset.week52Low !== undefined ? prop.Order.asset.week52Low : undefined,
          day50MovingAverage: prop.Order.asset.day50MovingAverage !== undefined ? prop.Order.asset.day50MovingAverage : undefined,
          day200MovingAverage: prop.Order.asset.day200MovingAverage !== undefined ? prop.Order.asset.day200MovingAverage : undefined,
          sharesOutstanding: prop.Order.asset.sharesOutstanding !== undefined ? prop.Order.asset.sharesOutstanding : undefined,
          dividendDate: prop.Order.asset.dividendDate !== undefined ? prop.Order.asset.dividendDate : undefined,
          exDividendDate: prop.Order.asset.exDividendDate !== undefined ? prop.Order.asset.exDividendDate : undefined,
          askPrice: prop.Order.asset.askPrice !== undefined ? prop.Order.asset.askPrice : undefined,
          bidPrice: prop.Order.asset.bidPrice !== undefined ? prop.Order.asset.bidPrice : undefined,
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
      const response = await client.mutate({ mutation: UPDATE_MANY_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyStopLoss) {
        return response.data.updateManyStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyStopLoss:', error);
      throw error;
    }
  },

  /**
   * Delete a single StopLoss record.
   * @param props - Properties to update.
   * @returns The deleted StopLoss or null.
   */
  async delete(props: StopLossType): Promise<StopLossType> {

    const client = createApolloClient();

      const DELETE_ONE_STOPLOSS = gql`
      mutation deleteOneStopLoss($where: StopLossWhereUniqueInput!) {
        deleteOneStopLoss(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneStopLoss) {
        return response.data.deleteOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single StopLoss record by ID.
   * @param props - Properties to update.
   * @returns The retrieved StopLoss or null.
   */
  async get(props: StopLossType): Promise<StopLossType | null> {

    const client = createApolloClient();

      const GET_STOPLOSS = gql`
      query getStopLoss($where: StopLossWhereUniqueInput!) {
        getStopLoss(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
    equals: props.id
  } : undefined,
  orderId: props.orderId !== undefined ? {
    equals: props.orderId
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    equals: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    equals: props.updatedAt
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getStopLoss ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No StopLoss found') {
        return null;
      } else {
        console.error('Error in getStopLoss:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all StopLosses records.
   * @returns An array of StopLoss records or null.
   */
  async getAll(): Promise<StopLossType[] | null> {

    const client = createApolloClient();

      const GET_ALL_STOPLOSS = gql`
      query getAllStopLoss {
        stopLosses {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_STOPLOSS });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.stopLosses ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No StopLoss found') {
        return null;
      } else {
        console.error('Error in getStopLoss:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple StopLoss records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found StopLoss records or null.
   */
  async findMany(props: StopLossType): Promise<StopLossType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_STOPLOSS = gql`
      query findManyStopLoss($where: StopLossWhereInput!) {
        stopLosses(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id
  } : undefined,
  createdAt: props.createdAt !== undefined ? {
    equals: props.createdAt
  } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
    equals: props.updatedAt
  } : undefined,
  orderId: props.orderId !== undefined ? {
    equals: props.orderId
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.StopLosses) {
        return response.data.stopLosses;
      } else {
       return [] as StopLossType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No StopLoss found') {
        return null;
      } else {
        console.error('Error in getStopLoss:', error);
        throw error;
      }
    }
  }
};
