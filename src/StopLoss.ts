
  
import { StopLoss as StopLossType } from './generated/typegraphql-prisma/models/StopLoss';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
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

  `;

  export const StopLoss = {

    /**
     * Create a new StopLoss record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created StopLoss or null.
     */

    async create(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType> {

    const client = globalClient || importedClient;

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
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        actionId: props.Order.actionId !== undefined ? props.Order.actionId : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        contractId: props.Order.contractId !== undefined ? props.Order.contractId : undefined,
        alpacaAccountId: props.Order.alpacaAccountId !== undefined ? {
            equals: props.Order.alpacaAccountId 
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
        filledQty: props.Order.filledQty !== undefined ? props.Order.filledQty : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? props.Order.filledAvgPrice : undefined,
        cancelRequestedAt: props.Order.cancelRequestedAt !== undefined ? props.Order.cancelRequestedAt : undefined,
        canceledAt: props.Order.canceledAt !== undefined ? props.Order.canceledAt : undefined,
        fee: props.Order.fee !== undefined ? props.Order.fee : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? props.Order.strikePrice : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? props.Order.expirationDate : undefined,
        optionType: props.Order.optionType !== undefined ? props.Order.optionType : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? props.Order.takeProfitId : undefined,
        takeProfit: props.Order.takeProfit !== undefined ? {
            set: props.Order.takeProfit
          } : undefined,
        alpacaAccount: props.Order.alpacaAccount !== undefined ? {
            set: props.Order.alpacaAccount
          } : undefined,
        action: props.Order.action !== undefined ? {
            set: props.Order.action
          } : undefined,
        asset: props.Order.asset !== undefined ? {
            set: props.Order.asset
          } : undefined,
        contract: props.Order.contract !== undefined ? {
            set: props.Order.contract
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
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: StopLossType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

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
   * @param globalClient - Apollo Client instance.
   * @returns The updated StopLoss or null.
   */
  async update(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_STOPLOSS = gql`
      mutation updateOneStopLoss($data: StopLossUpdateInput!, $where: StopLossWhereUniqueInput!) {
        updateOneStopLoss(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
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
  Order: props.Order !== undefined ? {
            set: props.Order 
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
   * Upsert a single StopLoss record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated StopLoss or null.
   */
  async upsert(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_STOPLOSS = gql`
      mutation upsertOneStopLoss($where: StopLossWhereUniqueInput!, $create: StopLossCreateInput!, $update: StopLossUpdateInput!) {
        upsertOneStopLoss(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
      },
      create: {
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
        clientOrderId: props.Order.clientOrderId !== undefined ? props.Order.clientOrderId : undefined,
        actionId: props.Order.actionId !== undefined ? props.Order.actionId : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        contractId: props.Order.contractId !== undefined ? props.Order.contractId : undefined,
        alpacaAccountId: props.Order.alpacaAccountId !== undefined ? {
            equals: props.Order.alpacaAccountId 
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
        filledQty: props.Order.filledQty !== undefined ? props.Order.filledQty : undefined,
        filledAvgPrice: props.Order.filledAvgPrice !== undefined ? props.Order.filledAvgPrice : undefined,
        cancelRequestedAt: props.Order.cancelRequestedAt !== undefined ? props.Order.cancelRequestedAt : undefined,
        canceledAt: props.Order.canceledAt !== undefined ? props.Order.canceledAt : undefined,
        fee: props.Order.fee !== undefined ? props.Order.fee : undefined,
        strikePrice: props.Order.strikePrice !== undefined ? props.Order.strikePrice : undefined,
        expirationDate: props.Order.expirationDate !== undefined ? props.Order.expirationDate : undefined,
        optionType: props.Order.optionType !== undefined ? props.Order.optionType : undefined,
        stopLossId: props.Order.stopLossId !== undefined ? props.Order.stopLossId : undefined,
        takeProfitId: props.Order.takeProfitId !== undefined ? props.Order.takeProfitId : undefined,
        takeProfit: props.Order.takeProfit !== undefined ? {
            set: props.Order.takeProfit
          } : undefined,
        alpacaAccount: props.Order.alpacaAccount !== undefined ? {
            set: props.Order.alpacaAccount
          } : undefined,
        action: props.Order.action !== undefined ? {
            set: props.Order.action
          } : undefined,
        asset: props.Order.asset !== undefined ? {
            set: props.Order.asset
          } : undefined,
        contract: props.Order.contract !== undefined ? {
            set: props.Order.contract
          } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  Order: props.Order !== undefined ? {
            set: props.Order 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_STOPLOSS, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneStopLoss) {
        return response.data.upsertOneStopLoss;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneStopLoss:', error);
      throw error;
    }
  },

  /**
   * Update multiple StopLoss records.
   * @param props - Array of StopLoss objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: StopLossType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_STOPLOSS = gql`
      mutation updateManyStopLoss($data: [StopLossCreateManyInput!]!) {
        updateManyStopLoss(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,

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
  Order: prop.Order !== undefined ? {
            set: prop.Order 
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
   * @param globalClient - Apollo Client instance.
   * @returns The deleted StopLoss or null.
   */
  async delete(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType> {

    const client = globalClient || importedClient;

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
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved StopLoss or null.
   */
  async get(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType | null> {

    const client = globalClient || importedClient;

    const GET_STOPLOSS = gql`
      query getStopLoss($where: StopLossWhereUniqueInput!) {
        getStopLoss(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
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
   * @param globalClient - Apollo Client instance.
   * @returns An array of StopLoss records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<StopLossType[] | null> {

    const client = globalClient || importedClient;

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
   * @param globalClient - Apollo Client instance.
   * @returns An array of found StopLoss records or null.
   */
  async findMany(props: StopLossType, globalClient?: ApolloClient<any>): Promise<StopLossType[] | null> {

    const client = globalClient || importedClient;

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
