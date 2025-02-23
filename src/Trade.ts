
  
import { Trade as TradeType } from './generated/typegraphql-prisma/models/Trade';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Trade model.
   */

  const selectionSet = `
    
  id
  alpacaAccountId
  qty
  price
  total
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
    createdAt
    updatedAt
    alpacaOrderId
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
  qty: props.qty !== undefined ? props.qty : undefined,
  price: props.price !== undefined ? props.price : undefined,
  total: props.total !== undefined ? props.total : undefined,
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
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            equals: item.alpacaOrderId 
           } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
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
  qty: prop.qty !== undefined ? prop.qty : undefined,
  price: prop.price !== undefined ? prop.price : undefined,
  total: prop.total !== undefined ? prop.total : undefined,
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
  qty: props.qty !== undefined ? {
            set: props.qty 
           } : undefined,
  price: props.price !== undefined ? {
            set: props.price 
           } : undefined,
  total: props.total !== undefined ? {
            set: props.total 
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
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            equals: item.alpacaOrderId
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
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            set: item.alpacaOrderId
          } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
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
  qty: props.qty !== undefined ? props.qty : undefined,
  price: props.price !== undefined ? props.price : undefined,
  total: props.total !== undefined ? props.total : undefined,
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
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            equals: item.alpacaOrderId 
           } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
      },
    }))
  } : undefined,
      },
      update: {
  alpacaAccountId: props.alpacaAccountId !== undefined ? {
            set: props.alpacaAccountId 
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
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            equals: item.alpacaOrderId
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
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            set: item.alpacaOrderId
          } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
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
  qty: prop.qty !== undefined ? {
            set: prop.qty 
           } : undefined,
  price: prop.price !== undefined ? {
            set: prop.price 
           } : undefined,
  total: prop.total !== undefined ? {
            set: prop.total 
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
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            equals: item.alpacaOrderId
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
        alpacaOrderId: item.alpacaOrderId !== undefined ? {
            set: item.alpacaOrderId
          } : undefined,
      },
      create: {
        sequence: item.sequence !== undefined ? item.sequence : undefined,
        type: item.type !== undefined ? item.type : undefined,
        primary: item.primary !== undefined ? item.primary : undefined,
        note: item.note !== undefined ? item.note : undefined,
        status: item.status !== undefined ? item.status : undefined,
        alpacaOrderId: item.alpacaOrderId !== undefined ? item.alpacaOrderId : undefined,
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
  async get(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>, where?: any): Promise<TradeType | null> {

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
      where: where ? where : {
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
  async findMany(props: TradeType, globalClient?: ApolloClientType<NormalizedCacheObject>, where?: any): Promise<TradeType[] | null> {

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
      where: where ? where : {
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
