
  
import { Action as ActionType } from './generated/typegraphql-prisma/models/Action';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Action model.
   */

  const selectionSet = `
    
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

  `;

  export const Action = {

    /**
     * Create a new Action record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Action or null.
     */

    async create(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;

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
  primary: props.primary !== undefined ? props.primary : undefined,
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? props.alpacaOrderId : undefined,
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
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol 
           } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        qty: props.trade.qty !== undefined ? props.trade.qty : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
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
  async createMany(props: ActionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  primary: prop.primary !== undefined ? prop.primary : undefined,
  note: prop.note !== undefined ? prop.note : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
  alpacaOrderId: prop.alpacaOrderId !== undefined ? prop.alpacaOrderId : undefined,
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
  async update(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  alpacaOrderId: props.alpacaOrderId !== undefined ? {
    equals: props.alpacaOrderId 
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
  primary: props.primary !== undefined ? {
            set: props.primary 
           } : undefined,
  note: props.note !== undefined ? {
            set: props.note 
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
  alpacaOrderId: props.alpacaOrderId !== undefined ? {
            set: props.alpacaOrderId 
           } : undefined,
  trade: props.trade ? 
  typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && (Object.keys(props.trade)[0] === 'id' || Object.keys(props.trade)[0] === 'symbol')
? {
  connect: {
    id: props.trade.id
  }
} : { upsert: {
      where: {
        id: props.trade.id !== undefined ? {
            equals: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol
          } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            set: props.trade.alpacaAccountId
          } : undefined,
        qty: props.trade.qty !== undefined ? {
            set: props.trade.qty
          } : undefined,
        price: props.trade.price !== undefined ? {
            set: props.trade.price
          } : undefined,
        total: props.trade.total !== undefined ? {
            set: props.trade.total
          } : undefined,
        signal: props.trade.signal !== undefined ? {
            set: props.trade.signal
          } : undefined,
        strategy: props.trade.strategy !== undefined ? {
            set: props.trade.strategy
          } : undefined,
        analysis: props.trade.analysis !== undefined ? {
            set: props.trade.analysis
          } : undefined,
        summary: props.trade.summary !== undefined ? {
            set: props.trade.summary
          } : undefined,
        confidence: props.trade.confidence !== undefined ? {
            set: props.trade.confidence
          } : undefined,
        timestamp: props.trade.timestamp !== undefined ? {
            set: props.trade.timestamp
          } : undefined,
        status: props.trade.status !== undefined ? {
            set: props.trade.status
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            set: props.trade.symbol
          } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        qty: props.trade.qty !== undefined ? props.trade.qty : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
      },
    }
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
  async upsert(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  alpacaOrderId: props.alpacaOrderId !== undefined ? {
    equals: props.alpacaOrderId 
  } : undefined,
      },
      create: {
    sequence: props.sequence !== undefined ? props.sequence : undefined,
  type: props.type !== undefined ? props.type : undefined,
  primary: props.primary !== undefined ? props.primary : undefined,
  note: props.note !== undefined ? props.note : undefined,
  status: props.status !== undefined ? props.status : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? props.alpacaOrderId : undefined,
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
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol 
           } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        qty: props.trade.qty !== undefined ? props.trade.qty : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
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
  primary: props.primary !== undefined ? {
            set: props.primary 
           } : undefined,
  note: props.note !== undefined ? {
            set: props.note 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? {
            set: props.alpacaOrderId 
           } : undefined,
  trade: props.trade ? 
  typeof props.trade === 'object' && Object.keys(props.trade).length === 1 && (Object.keys(props.trade)[0] === 'id' || Object.keys(props.trade)[0] === 'symbol')
? {
  connect: {
    id: props.trade.id
  }
} : { upsert: {
      where: {
        id: props.trade.id !== undefined ? {
            equals: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            equals: props.trade.alpacaAccountId
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            equals: props.trade.symbol
          } : undefined,
      },
      update: {
        id: props.trade.id !== undefined ? {
            set: props.trade.id
          } : undefined,
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? {
            set: props.trade.alpacaAccountId
          } : undefined,
        qty: props.trade.qty !== undefined ? {
            set: props.trade.qty
          } : undefined,
        price: props.trade.price !== undefined ? {
            set: props.trade.price
          } : undefined,
        total: props.trade.total !== undefined ? {
            set: props.trade.total
          } : undefined,
        signal: props.trade.signal !== undefined ? {
            set: props.trade.signal
          } : undefined,
        strategy: props.trade.strategy !== undefined ? {
            set: props.trade.strategy
          } : undefined,
        analysis: props.trade.analysis !== undefined ? {
            set: props.trade.analysis
          } : undefined,
        summary: props.trade.summary !== undefined ? {
            set: props.trade.summary
          } : undefined,
        confidence: props.trade.confidence !== undefined ? {
            set: props.trade.confidence
          } : undefined,
        timestamp: props.trade.timestamp !== undefined ? {
            set: props.trade.timestamp
          } : undefined,
        status: props.trade.status !== undefined ? {
            set: props.trade.status
          } : undefined,
        symbol: props.trade.symbol !== undefined ? {
            set: props.trade.symbol
          } : undefined,
      },
      create: {
        alpacaAccountId: props.trade.alpacaAccountId !== undefined ? props.trade.alpacaAccountId : undefined,
        qty: props.trade.qty !== undefined ? props.trade.qty : undefined,
        price: props.trade.price !== undefined ? props.trade.price : undefined,
        total: props.trade.total !== undefined ? props.trade.total : undefined,
        signal: props.trade.signal !== undefined ? props.trade.signal : undefined,
        strategy: props.trade.strategy !== undefined ? props.trade.strategy : undefined,
        analysis: props.trade.analysis !== undefined ? props.trade.analysis : undefined,
        summary: props.trade.summary !== undefined ? props.trade.summary : undefined,
        confidence: props.trade.confidence !== undefined ? props.trade.confidence : undefined,
        timestamp: props.trade.timestamp !== undefined ? props.trade.timestamp : undefined,
        status: props.trade.status !== undefined ? props.trade.status : undefined,
        symbol: props.trade.symbol !== undefined ? props.trade.symbol : undefined,
      },
    }
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
  async updateMany(props: ActionType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  alpacaOrderId: prop.alpacaOrderId !== undefined ? {
    equals: prop.alpacaOrderId 
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
  primary: prop.primary !== undefined ? {
            set: prop.primary 
           } : undefined,
  note: prop.note !== undefined ? {
            set: prop.note 
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
  alpacaOrderId: prop.alpacaOrderId !== undefined ? {
            set: prop.alpacaOrderId 
           } : undefined,
  trade: prop.trade ? 
  typeof prop.trade === 'object' && Object.keys(prop.trade).length === 1 && (Object.keys(prop.trade)[0] === 'id' || Object.keys(prop.trade)[0] === 'symbol')
? {
  connect: {
    id: prop.trade.id
  }
} : { upsert: {
      where: {
        id: prop.trade.id !== undefined ? {
            equals: prop.trade.id
          } : undefined,
        alpacaAccountId: prop.trade.alpacaAccountId !== undefined ? {
            equals: prop.trade.alpacaAccountId
          } : undefined,
        symbol: prop.trade.symbol !== undefined ? {
            equals: prop.trade.symbol
          } : undefined,
      },
      update: {
        id: prop.trade.id !== undefined ? {
            set: prop.trade.id
          } : undefined,
        alpacaAccountId: prop.trade.alpacaAccountId !== undefined ? {
            set: prop.trade.alpacaAccountId
          } : undefined,
        qty: prop.trade.qty !== undefined ? {
            set: prop.trade.qty
          } : undefined,
        price: prop.trade.price !== undefined ? {
            set: prop.trade.price
          } : undefined,
        total: prop.trade.total !== undefined ? {
            set: prop.trade.total
          } : undefined,
        signal: prop.trade.signal !== undefined ? {
            set: prop.trade.signal
          } : undefined,
        strategy: prop.trade.strategy !== undefined ? {
            set: prop.trade.strategy
          } : undefined,
        analysis: prop.trade.analysis !== undefined ? {
            set: prop.trade.analysis
          } : undefined,
        summary: prop.trade.summary !== undefined ? {
            set: prop.trade.summary
          } : undefined,
        confidence: prop.trade.confidence !== undefined ? {
            set: prop.trade.confidence
          } : undefined,
        timestamp: prop.trade.timestamp !== undefined ? {
            set: prop.trade.timestamp
          } : undefined,
        status: prop.trade.status !== undefined ? {
            set: prop.trade.status
          } : undefined,
        symbol: prop.trade.symbol !== undefined ? {
            set: prop.trade.symbol
          } : undefined,
      },
      create: {
        alpacaAccountId: prop.trade.alpacaAccountId !== undefined ? prop.trade.alpacaAccountId : undefined,
        qty: prop.trade.qty !== undefined ? prop.trade.qty : undefined,
        price: prop.trade.price !== undefined ? prop.trade.price : undefined,
        total: prop.trade.total !== undefined ? prop.trade.total : undefined,
        signal: prop.trade.signal !== undefined ? prop.trade.signal : undefined,
        strategy: prop.trade.strategy !== undefined ? prop.trade.strategy : undefined,
        analysis: prop.trade.analysis !== undefined ? prop.trade.analysis : undefined,
        summary: prop.trade.summary !== undefined ? prop.trade.summary : undefined,
        confidence: prop.trade.confidence !== undefined ? prop.trade.confidence : undefined,
        timestamp: prop.trade.timestamp !== undefined ? prop.trade.timestamp : undefined,
        status: prop.trade.status !== undefined ? prop.trade.status : undefined,
        symbol: prop.trade.symbol !== undefined ? prop.trade.symbol : undefined,
      },
    }
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
  async delete(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
  async get(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<ActionType | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const GET_ACTION = gql`
      query getAction($where: ActionWhereUniqueInput!) {
        getAction(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: whereInput ? whereInput : {
        id: props.id !== undefined ? props.id : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? {
    equals: props.alpacaOrderId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAction ?? null;
    } catch (error: any) {
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
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ActionType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


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
    } catch (error: any) {
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
  async findMany(props: ActionType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<ActionType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const FIND_MANY_ACTION = gql`
      query findManyAction($where: ActionWhereInput!) {
        actions(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: whereInput ? whereInput : {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
  alpacaOrderId: props.alpacaOrderId !== undefined ? {
    equals: props.alpacaOrderId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ACTION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.actions) {
        return response.data.actions;
      } else {
       return [] as ActionType[];
      }
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No Action found') {
        return null;
      } else {
        console.error('Error in getAction:', error);
        throw error;
      }
    }
  }
};
