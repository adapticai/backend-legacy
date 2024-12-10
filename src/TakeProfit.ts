
  
import { TakeProfit as TakeProfitType } from './generated/typegraphql-prisma/models/TakeProfit';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the TakeProfit model.
   */

  const selectionSet = `
    
  id
  limitPrice
  stopPrice
  createdAt
  updatedAt
  orderId

  `;

  export const TakeProfit = {

    /**
     * Create a new TakeProfit record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created TakeProfit or null.
     */

    async create(props: TakeProfitType, globalClient?: ApolloClient<any>): Promise<TakeProfitType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_TAKEPROFIT = gql`
        mutation createOneTakeProfit($data: TakeProfitCreateInput!) {
          createOneTakeProfit(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
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
        stopLoss: props.Order.stopLoss !== undefined ? {
            set: props.Order.stopLoss
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
      const response = await client.mutate({ mutation: CREATE_ONE_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneTakeProfit) {
        return response.data.createOneTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Create multiple TakeProfit records.
   * @param props - Array of TakeProfit objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: TakeProfitType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_TAKEPROFIT = gql`
      mutation createManyTakeProfit($data: [TakeProfitCreateManyInput!]!) {
        createManyTakeProfit(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  limitPrice: prop.limitPrice !== undefined ? prop.limitPrice : undefined,
  stopPrice: prop.stopPrice !== undefined ? prop.stopPrice : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyTakeProfit) {
        return response.data.createManyTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Update a single TakeProfit record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated TakeProfit or null.
   */
  async update(props: TakeProfitType, globalClient?: ApolloClient<any>): Promise<TakeProfitType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_TAKEPROFIT = gql`
      mutation updateOneTakeProfit($data: TakeProfitUpdateInput!, $where: TakeProfitWhereUniqueInput!) {
        updateOneTakeProfit(data: $data, where: $where) {
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
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
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
      const response = await client.mutate({ mutation: UPDATE_ONE_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneTakeProfit) {
        return response.data.updateOneTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Upsert a single TakeProfit record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated TakeProfit or null.
   */
  async upsert(props: TakeProfitType, globalClient?: ApolloClient<any>): Promise<TakeProfitType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_TAKEPROFIT = gql`
      mutation upsertOneTakeProfit($where: TakeProfitWhereUniqueInput!, $create: TakeProfitCreateInput!, $update: TakeProfitUpdateInput!) {
        upsertOneTakeProfit(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
      },
      create: {
    limitPrice: props.limitPrice !== undefined ? props.limitPrice : undefined,
  stopPrice: props.stopPrice !== undefined ? props.stopPrice : undefined,
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
        stopLoss: props.Order.stopLoss !== undefined ? {
            set: props.Order.stopLoss
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
  limitPrice: props.limitPrice !== undefined ? {
            set: props.limitPrice 
           } : undefined,
  stopPrice: props.stopPrice !== undefined ? {
            set: props.stopPrice 
           } : undefined,
  Order: props.Order !== undefined ? {
            set: props.Order 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneTakeProfit) {
        return response.data.upsertOneTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Update multiple TakeProfit records.
   * @param props - Array of TakeProfit objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: TakeProfitType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_TAKEPROFIT = gql`
      mutation updateManyTakeProfit($data: [TakeProfitCreateManyInput!]!) {
        updateManyTakeProfit(data: $data) {
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
  limitPrice: prop.limitPrice !== undefined ? {
            set: prop.limitPrice 
           } : undefined,
  stopPrice: prop.stopPrice !== undefined ? {
            set: prop.stopPrice 
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
      const response = await client.mutate({ mutation: UPDATE_MANY_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyTakeProfit) {
        return response.data.updateManyTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Delete a single TakeProfit record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted TakeProfit or null.
   */
  async delete(props: TakeProfitType, globalClient?: ApolloClient<any>): Promise<TakeProfitType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_TAKEPROFIT = gql`
      mutation deleteOneTakeProfit($where: TakeProfitWhereUniqueInput!) {
        deleteOneTakeProfit(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneTakeProfit) {
        return response.data.deleteOneTakeProfit;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneTakeProfit:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single TakeProfit record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved TakeProfit or null.
   */
  async get(props: TakeProfitType, globalClient?: ApolloClient<any>): Promise<TakeProfitType | null> {

    const client = globalClient || importedClient;

    const GET_TAKEPROFIT = gql`
      query getTakeProfit($where: TakeProfitWhereUniqueInput!) {
        getTakeProfit(where: $where) {
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
      const response = await client.query({ query: GET_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getTakeProfit ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TakeProfit found') {
        return null;
      } else {
        console.error('Error in getTakeProfit:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all TakeProfits records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of TakeProfit records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<TakeProfitType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_TAKEPROFIT = gql`
      query getAllTakeProfit {
        takeProfits {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_TAKEPROFIT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.takeProfits ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TakeProfit found') {
        return null;
      } else {
        console.error('Error in getTakeProfit:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple TakeProfit records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found TakeProfit records or null.
   */
  async findMany(props: TakeProfitType, globalClient?: ApolloClient<any>): Promise<TakeProfitType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_TAKEPROFIT = gql`
      query findManyTakeProfit($where: TakeProfitWhereInput!) {
        takeProfits(where: $where) {
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
      const response = await client.query({ query: FIND_MANY_TAKEPROFIT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.TakeProfits) {
        return response.data.takeProfits;
      } else {
       return [] as TakeProfitType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No TakeProfit found') {
        return null;
      } else {
        console.error('Error in getTakeProfit:', error);
        throw error;
      }
    }
  }
};
