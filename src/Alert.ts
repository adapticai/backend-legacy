
  
import { Alert as AlertType } from './generated/typegraphql-prisma/models/Alert';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Alert model.
   */

  const selectionSet = `
    
  id
  alpacaAccountId
  message
  type
  isRead
  createdAt
  updatedAt

  `;

  export const Alert = {

    /**
     * Create a new Alert record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Alert or null.
     */

    async create(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_ALERT = gql`
        mutation createOneAlert($data: AlertCreateInput!) {
          createOneAlert(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            message: props.message !== undefined ? props.message : undefined,
  type: props.type !== undefined ? props.type : undefined,
  isRead: props.isRead !== undefined ? props.isRead : undefined,
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
        positions: props.alpacaAccount.positions !== undefined ? {
            set: props.alpacaAccount.positions
          } : undefined,
      },
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAlert) {
        return response.data.createOneAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAlert:', error);
      throw error;
    }
  },

  /**
   * Create multiple Alert records.
   * @param props - Array of Alert objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AlertType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_ALERT = gql`
      mutation createManyAlert($data: [AlertCreateManyInput!]!) {
        createManyAlert(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  alpacaAccountId: prop.alpacaAccountId !== undefined ? prop.alpacaAccountId : undefined,
  message: prop.message !== undefined ? prop.message : undefined,
  type: prop.type !== undefined ? prop.type : undefined,
  isRead: prop.isRead !== undefined ? prop.isRead : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAlert) {
        return response.data.createManyAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAlert:', error);
      throw error;
    }
  },

  /**
   * Update a single Alert record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Alert or null.
   */
  async update(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_ALERT = gql`
      mutation updateOneAlert($data: AlertUpdateInput!, $where: AlertWhereUniqueInput!) {
        updateOneAlert(data: $data, where: $where) {
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
  message: props.message !== undefined ? {
            set: props.message 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  isRead: props.isRead !== undefined ? {
            set: props.isRead 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
            set: props.alpacaAccount 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAlert) {
        return response.data.updateOneAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAlert:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Alert record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Alert or null.
   */
  async upsert(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_ALERT = gql`
      mutation upsertOneAlert($where: AlertWhereUniqueInput!, $create: AlertCreateInput!, $update: AlertUpdateInput!) {
        upsertOneAlert(where: $where, create: $create, update: $update) {
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
    message: props.message !== undefined ? props.message : undefined,
  type: props.type !== undefined ? props.type : undefined,
  isRead: props.isRead !== undefined ? props.isRead : undefined,
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
        positions: props.alpacaAccount.positions !== undefined ? {
            set: props.alpacaAccount.positions
          } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  message: props.message !== undefined ? {
            set: props.message 
           } : undefined,
  type: props.type !== undefined ? {
            set: props.type 
           } : undefined,
  isRead: props.isRead !== undefined ? {
            set: props.isRead 
           } : undefined,
  alpacaAccount: props.alpacaAccount !== undefined ? {
            set: props.alpacaAccount 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneAlert) {
        return response.data.upsertOneAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneAlert:', error);
      throw error;
    }
  },

  /**
   * Update multiple Alert records.
   * @param props - Array of Alert objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: AlertType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_ALERT = gql`
      mutation updateManyAlert($data: [AlertCreateManyInput!]!) {
        updateManyAlert(data: $data) {
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
  message: prop.message !== undefined ? {
            set: prop.message 
           } : undefined,
  type: prop.type !== undefined ? {
            set: prop.type 
           } : undefined,
  isRead: prop.isRead !== undefined ? {
            set: prop.isRead 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  alpacaAccount: prop.alpacaAccount !== undefined ? {
            set: prop.alpacaAccount 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyAlert) {
        return response.data.updateManyAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyAlert:', error);
      throw error;
    }
  },

  /**
   * Delete a single Alert record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Alert or null.
   */
  async delete(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_ALERT = gql`
      mutation deleteOneAlert($where: AlertWhereUniqueInput!) {
        deleteOneAlert(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAlert) {
        return response.data.deleteOneAlert;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAlert:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Alert record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Alert or null.
   */
  async get(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType | null> {

    const client = globalClient || importedClient;

    const GET_ALERT = gql`
      query getAlert($where: AlertWhereUniqueInput!) {
        getAlert(where: $where) {
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
      const response = await client.query({ query: GET_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAlert ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Alert found') {
        return null;
      } else {
        console.error('Error in getAlert:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Alerts records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Alert records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<AlertType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_ALERT = gql`
      query getAllAlert {
        alerts {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ALERT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.alerts ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Alert found') {
        return null;
      } else {
        console.error('Error in getAlert:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Alert records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Alert records or null.
   */
  async findMany(props: AlertType, globalClient?: ApolloClient<any>): Promise<AlertType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_ALERT = gql`
      query findManyAlert($where: AlertWhereInput!) {
        alerts(where: $where) {
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
      const response = await client.query({ query: FIND_MANY_ALERT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Alerts) {
        return response.data.alerts;
      } else {
       return [] as AlertType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Alert found') {
        return null;
      } else {
        console.error('Error in getAlert:', error);
        throw error;
      }
    }
  }
};
