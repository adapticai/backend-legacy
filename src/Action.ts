
  
import { Action as ActionType } from './generated/typegraphql-prisma/models/Action';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Action model.
   */

  const selectionSet = `
    
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

  `;

  export const Action = {

    /**
     * Create a new Action record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Action or null.
     */

    async create(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType> {

    const client = globalClient || importedClient;

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
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  dependsOn: props.dependsOn !== undefined ? props.dependsOn : undefined,
  dependedOnBy: props.dependedOnBy !== undefined ? props.dependedOnBy : undefined,
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
      },
      create: {
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
        alpacaAccount: props.trade.alpacaAccount !== undefined ? {
            set: props.trade.alpacaAccount
          } : undefined,
        asset: props.trade.asset !== undefined ? {
            set: props.trade.asset
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
        asset: props.order.asset !== undefined ? {
            set: props.order.asset
          } : undefined,
        contract: props.order.contract !== undefined ? {
            set: props.order.contract
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
  async createMany(props: ActionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

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
  note: prop.note !== undefined ? prop.note : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  fee: prop.fee !== undefined ? prop.fee : undefined,
  dependsOn: prop.dependsOn !== undefined ? prop.dependsOn : undefined,
  dependedOnBy: prop.dependedOnBy !== undefined ? prop.dependedOnBy : undefined,
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
  async update(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType> {

    const client = globalClient || importedClient;

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
  note: props.note !== undefined ? {
            set: props.note 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  fee: props.fee !== undefined ? {
            set: props.fee 
           } : undefined,
  dependsOn: props.dependsOn !== undefined ? {
            set: props.dependsOn 
           } : undefined,
  dependedOnBy: props.dependedOnBy !== undefined ? {
            set: props.dependedOnBy 
           } : undefined,
  trade: props.trade !== undefined ? {
            set: props.trade 
           } : undefined,
  order: props.order !== undefined ? {
            set: props.order 
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
  async upsert(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType> {

    const client = globalClient || importedClient;

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
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  fee: props.fee !== undefined ? props.fee : undefined,
  dependsOn: props.dependsOn !== undefined ? props.dependsOn : undefined,
  dependedOnBy: props.dependedOnBy !== undefined ? props.dependedOnBy : undefined,
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
      },
      create: {
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
        alpacaAccount: props.trade.alpacaAccount !== undefined ? {
            set: props.trade.alpacaAccount
          } : undefined,
        asset: props.trade.asset !== undefined ? {
            set: props.trade.asset
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
        asset: props.order.asset !== undefined ? {
            set: props.order.asset
          } : undefined,
        contract: props.order.contract !== undefined ? {
            set: props.order.contract
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
  note: props.note !== undefined ? {
            set: props.note 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  fee: props.fee !== undefined ? {
            set: props.fee 
           } : undefined,
  dependsOn: props.dependsOn !== undefined ? {
            set: props.dependsOn 
           } : undefined,
  dependedOnBy: props.dependedOnBy !== undefined ? {
            set: props.dependedOnBy 
           } : undefined,
  trade: props.trade !== undefined ? {
            set: props.trade 
           } : undefined,
  order: props.order !== undefined ? {
            set: props.order 
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
  async updateMany(props: ActionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

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
  note: prop.note !== undefined ? {
            set: prop.note 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,
  fee: prop.fee !== undefined ? {
            set: prop.fee 
           } : undefined,
  dependsOn: prop.dependsOn !== undefined ? {
            set: prop.dependsOn 
           } : undefined,
  dependedOnBy: prop.dependedOnBy !== undefined ? {
            set: prop.dependedOnBy 
           } : undefined,
  trade: prop.trade !== undefined ? {
            set: prop.trade 
           } : undefined,
  order: prop.order !== undefined ? {
            set: prop.order 
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
  async delete(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType> {

    const client = globalClient || importedClient;

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
  async get(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType | null> {

    const client = globalClient || importedClient;

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
    } catch (error) {
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
  async getAll(globalClient?: ApolloClient<any>): Promise<ActionType[] | null> {

    const client = globalClient || importedClient;

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
    } catch (error) {
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
  async findMany(props: ActionType, globalClient?: ApolloClient<any>): Promise<ActionType[] | null> {

    const client = globalClient || importedClient;

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
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  }
};
