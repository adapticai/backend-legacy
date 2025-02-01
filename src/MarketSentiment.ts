
  
import { MarketSentiment as MarketSentimentType } from './generated/typegraphql-prisma/models/MarketSentiment';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the MarketSentiment model.
   */

  const selectionSet = `
    
  id
  sentiment
  description
  longDescription
  createdAt
  updatedAt

  `;

  export const MarketSentiment = {

    /**
     * Create a new MarketSentiment record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created MarketSentiment or null.
     */

    async create(props: MarketSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<MarketSentimentType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;

    const CREATE_ONE_MARKETSENTIMENT = gql`
        mutation createOneMarketSentiment($data: MarketSentimentCreateInput!) {
          createOneMarketSentiment(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            sentiment: props.sentiment !== undefined ? props.sentiment : undefined,
  description: props.description !== undefined ? props.description : undefined,
  longDescription: props.longDescription !== undefined ? props.longDescription : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_MARKETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneMarketSentiment) {
        return response.data.createOneMarketSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneMarketSentiment:', error);
      throw error;
    }
  },

  /**
   * Create multiple MarketSentiment records.
   * @param props - Array of MarketSentiment objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: MarketSentimentType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const CREATE_MANY_MARKETSENTIMENT = gql`
      mutation createManyMarketSentiment($data: [MarketSentimentCreateManyInput!]!) {
        createManyMarketSentiment(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  sentiment: prop.sentiment !== undefined ? prop.sentiment : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  longDescription: prop.longDescription !== undefined ? prop.longDescription : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_MARKETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyMarketSentiment) {
        return response.data.createManyMarketSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyMarketSentiment:', error);
      throw error;
    }
  },

  /**
   * Update a single MarketSentiment record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated MarketSentiment or null.
   */
  async update(props: MarketSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<MarketSentimentType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const UPDATE_ONE_MARKETSENTIMENT = gql`
      mutation updateOneMarketSentiment($data: MarketSentimentUpdateInput!, $where: MarketSentimentWhereUniqueInput!) {
        updateOneMarketSentiment(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  sentiment: props.sentiment !== undefined ? {
            set: props.sentiment 
           } : undefined,
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  longDescription: props.longDescription !== undefined ? {
            set: props.longDescription 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_MARKETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneMarketSentiment) {
        return response.data.updateOneMarketSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneMarketSentiment:', error);
      throw error;
    }
  },

  /**
   * Upsert a single MarketSentiment record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated MarketSentiment or null.
   */
  async upsert(props: MarketSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<MarketSentimentType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const UPSERT_ONE_MARKETSENTIMENT = gql`
      mutation upsertOneMarketSentiment($where: MarketSentimentWhereUniqueInput!, $create: MarketSentimentCreateInput!, $update: MarketSentimentUpdateInput!) {
        upsertOneMarketSentiment(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
      },
      create: {
    sentiment: props.sentiment !== undefined ? props.sentiment : undefined,
  description: props.description !== undefined ? props.description : undefined,
  longDescription: props.longDescription !== undefined ? props.longDescription : undefined,
      },
      update: {
  sentiment: props.sentiment !== undefined ? {
            set: props.sentiment 
           } : undefined,
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  longDescription: props.longDescription !== undefined ? {
            set: props.longDescription 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_MARKETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneMarketSentiment) {
        return response.data.upsertOneMarketSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneMarketSentiment:', error);
      throw error;
    }
  },

  /**
   * Update multiple MarketSentiment records.
   * @param props - Array of MarketSentiment objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: MarketSentimentType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const UPDATE_MANY_MARKETSENTIMENT = gql`
      mutation updateManyMarketSentiment($data: [MarketSentimentCreateManyInput!]!) {
        updateManyMarketSentiment(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  sentiment: prop.sentiment !== undefined ? {
            set: prop.sentiment 
           } : undefined,
  description: prop.description !== undefined ? {
            set: prop.description 
           } : undefined,
  longDescription: prop.longDescription !== undefined ? {
            set: prop.longDescription 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_MARKETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyMarketSentiment) {
        return response.data.updateManyMarketSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyMarketSentiment:', error);
      throw error;
    }
  },

  /**
   * Delete a single MarketSentiment record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted MarketSentiment or null.
   */
  async delete(props: MarketSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<MarketSentimentType> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const DELETE_ONE_MARKETSENTIMENT = gql`
      mutation deleteOneMarketSentiment($where: MarketSentimentWhereUniqueInput!) {
        deleteOneMarketSentiment(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_MARKETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneMarketSentiment) {
        return response.data.deleteOneMarketSentiment;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneMarketSentiment:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single MarketSentiment record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved MarketSentiment or null.
   */
  async get(props: MarketSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<MarketSentimentType | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const GET_MARKETSENTIMENT = gql`
      query getMarketSentiment($where: MarketSentimentWhereUniqueInput!) {
        getMarketSentiment(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_MARKETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getMarketSentiment ?? null;
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No MarketSentiment found') {
        return null;
      } else {
        console.error('Error in getMarketSentiment:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all MarketSentiments records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of MarketSentiment records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<MarketSentimentType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const GET_ALL_MARKETSENTIMENT = gql`
      query getAllMarketSentiment {
        marketSentiments {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_MARKETSENTIMENT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.marketSentiments ?? null;
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No MarketSentiment found') {
        return null;
      } else {
        console.error('Error in getMarketSentiment:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple MarketSentiment records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found MarketSentiment records or null.
   */
  async findMany(props: MarketSentimentType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<MarketSentimentType[] | null> {

    const [modules, client] = await Promise.all([
      getApolloModules(),
      globalClient
        ? Promise.resolve(globalClient)
        : importedClient
    ]);

    const { gql, ApolloError } = modules;


    const FIND_MANY_MARKETSENTIMENT = gql`
      query findManyMarketSentiment($where: MarketSentimentWhereInput!) {
        marketSentiments(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_MARKETSENTIMENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.MarketSentiments) {
        return response.data.marketSentiments;
      } else {
       return [] as MarketSentimentType[];
      }
    } catch (error: any) {
      if (error instanceof ApolloError && error.message === 'No MarketSentiment found') {
        return null;
      } else {
        console.error('Error in getMarketSentiment:', error);
        throw error;
      }
    }
  }
};
