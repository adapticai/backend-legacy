

import { EconomicEvent as EconomicEventType } from './generated/typegraphql-prisma/models/EconomicEvent';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the EconomicEvent model.
 */

export const EconomicEvent = {
  /**
   * Create a new EconomicEvent record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created EconomicEvent or null.
   */
  async create(props: EconomicEventType, client: ApolloClient<NormalizedCacheObject>): Promise<EconomicEventType> {
    const CREATE_ONE_ECONOMICEVENT = gql`
      mutation createOneEconomicEvent($data: EconomicEventCreateInput!) {
        createOneEconomicEvent(data: $data) {
          id
          title
          description
          date
          importance
          createdAt
          updatedAt
        }
      }
   `;

    const variables = {
      data: {
          title: props.title !== undefined ? props.title : undefined,
  description: props.description !== undefined ? props.description : undefined,
  date: props.date !== undefined ? props.date : undefined,
  importance: props.importance !== undefined ? props.importance : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneEconomicEvent) {
        return response.data.createOneEconomicEvent;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Create multiple EconomicEvent records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: EconomicEventType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_ECONOMICEVENT = gql`
      mutation createManyEconomicEvent($data: [EconomicEventCreateManyInput!]!) {
        createManyEconomicEvent(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  title: prop.title !== undefined ? prop.title : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  date: prop.date !== undefined ? prop.date : undefined,
  importance: prop.importance !== undefined ? prop.importance : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyEconomicEvent) {
        return response.data.createManyEconomicEvent;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Update a single EconomicEvent record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated EconomicEvent or null.
   */
  async update(props: EconomicEventType, client: ApolloClient<NormalizedCacheObject>): Promise<EconomicEventType> {
    const UPDATE_ONE_ECONOMICEVENT = gql`
      mutation updateOneEconomicEvent($data: EconomicEventUpdateInput!, $where: EconomicEventWhereUniqueInput!) {
        updateOneEconomicEvent(data: $data, where: $where) {
          id
          title
          description
          date
          importance
          createdAt
          updatedAt
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
      },
      data: {
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  importance: props.importance !== undefined ? {
            set: props.importance 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneEconomicEvent) {
        return response.data.updateOneEconomicEvent;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Delete a single EconomicEvent record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The deleted EconomicEvent or null.
   */
  async delete(props: EconomicEventType, client: ApolloClient<NormalizedCacheObject>): Promise<EconomicEventType> {
    const DELETE_ONE_ECONOMICEVENT = gql`
      mutation deleteOneEconomicEvent($where: EconomicEventWhereUniqueInput!) {
        deleteOneEconomicEvent(where: $where) {
          id
          title
          description
          date
          importance
          createdAt
          updatedAt
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_ECONOMICEVENT, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneEconomicEvent) {
        return response.data.deleteOneEconomicEvent;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single EconomicEvent record by ID.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The retrieved EconomicEvent or null.
   */
  async get(props: EconomicEventType, client: ApolloClient<NormalizedCacheObject>): Promise<EconomicEventType> {
    const GET_ECONOMICEVENT = gql`
      query getEconomicEvent($where: EconomicEventWhereInput!) {
        getEconomicEvent(where: $where) {
          id
          title
          description
          date
          importance
          createdAt
          updatedAt
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
      },
};
    try {
      const response = await client.query({ query: GET_ECONOMICEVENT, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getEconomicEvent ?? null;
    } catch (error) {
      console.error('Error in getEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Retrieve all EconomicEvents records.
   * @param client - Apollo Client instance.
   * @returns An array of EconomicEvent records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<EconomicEventType[] | null> {
    const GET_ALL_ECONOMICEVENT = gql`
      query getAllEconomicEvent {
        economicEvents {
          id
          title
          description
          date
          importance
          createdAt
          updatedAt
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ECONOMICEVENT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.economicEvents ?? null;
    } catch (error) {
      console.error('Error in getAllEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Find multiple EconomicEvent records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found EconomicEvent records or null.
   */
  async findMany(props: EconomicEventType, client: ApolloClient<NormalizedCacheObject>): Promise<EconomicEventType[]> {
    const FIND_MANY_ECONOMICEVENT = gql`
      query findManyEconomicEvent($where: EconomicEventWhereInput!) {
        economicEvents(where: $where) {
          id
          title
          description
          date
          importance
          createdAt
          updatedAt
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.EconomicEvents) {
        return response.data.economicEvents;
      } else {
       return [] as EconomicEventType[];
      }
    } catch (error) {
      console.error('Error in findManyEconomicEvent:', error);
      throw error;
    }
  }
};
