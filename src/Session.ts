
  
import { Session as SessionType } from './generated/typegraphql-prisma/models/Session';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Session model.
   */

  const selectionSet = `
    
  id
  sessionToken
  userId
  expires
  user {
    id
    name
    email
    emailVerified
    image
    createdAt
    updatedAt
    role
    bio
    jobTitle
    currentAccount
    customer {
      id
      authUserId
      name
      plan
      stripeCustomerId
      stripeSubscriptionId
      stripePriceId
      stripeCurrentPeriodEnd
      createdAt
      updatedAt
    }
    customerId
    accounts {
      id
      userId
      type
      provider
      providerAccountId
      refresh_token
      access_token
      expires_at
      token_type
      scope
      id_token
      session_state
      createdAt
      updatedAt
    }
    sessions {
id
    }
    authenticators {
      id
      userId
      credentialID
      publicKey
      counter
      createdAt
      updatedAt
    }
    plan
    openaiAPIKey
    openaiModel
  }
  createdAt
  updatedAt

  `;

  export const Session = {

    /**
     * Create a new Session record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Session or null.
     */

    async create(props: SessionType, globalClient?: ApolloClient<any>): Promise<SessionType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_SESSION = gql`
        mutation createOneSession($data: SessionCreateInput!) {
          createOneSession(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            sessionToken: props.sessionToken !== undefined ? props.sessionToken : undefined,
  expires: props.expires !== undefined ? props.expires : undefined,
  user: props.user ? 
    typeof props.user === 'object' && Object.keys(props.user).length === 1 && Object.keys(props.user)[0] === 'id'
    ? { connect: {
        id: props.user.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.user.id !== undefined ? props.user.id : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name 
           } : undefined,
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        currentAccount: props.user.currentAccount !== undefined ? props.user.currentAccount : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        customer: props.user.customer !== undefined ? {
            set: props.user.customer
          } : undefined,
        accounts: props.user.accounts !== undefined ? {
            set: props.user.accounts
          } : undefined,
        authenticators: props.user.authenticators !== undefined ? {
            set: props.user.authenticators
          } : undefined,
        alpacaAccounts: props.user.alpacaAccounts !== undefined ? {
            set: props.user.alpacaAccounts
          } : undefined,
      },
    }
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneSession) {
        return response.data.createOneSession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneSession:', error);
      throw error;
    }
  },

  /**
   * Create multiple Session records.
   * @param props - Array of Session objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: SessionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_SESSION = gql`
      mutation createManySession($data: [SessionCreateManyInput!]!) {
        createManySession(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  sessionToken: prop.sessionToken !== undefined ? prop.sessionToken : undefined,
  userId: prop.userId !== undefined ? prop.userId : undefined,
  expires: prop.expires !== undefined ? prop.expires : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManySession) {
        return response.data.createManySession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManySession:', error);
      throw error;
    }
  },

  /**
   * Update a single Session record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Session or null.
   */
  async update(props: SessionType, globalClient?: ApolloClient<any>): Promise<SessionType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_SESSION = gql`
      mutation updateOneSession($data: SessionUpdateInput!, $where: SessionWhereUniqueInput!) {
        updateOneSession(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  sessionToken: props.sessionToken !== undefined ? {
            set: props.sessionToken 
           } : undefined,
  expires: props.expires !== undefined ? {
            set: props.expires 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  user: props.user !== undefined ? {
            set: props.user 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneSession) {
        return response.data.updateOneSession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneSession:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Session record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Session or null.
   */
  async upsert(props: SessionType, globalClient?: ApolloClient<any>): Promise<SessionType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_SESSION = gql`
      mutation upsertOneSession($where: SessionWhereUniqueInput!, $create: SessionCreateInput!, $update: SessionUpdateInput!) {
        upsertOneSession(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
      create: {
    sessionToken: props.sessionToken !== undefined ? props.sessionToken : undefined,
  expires: props.expires !== undefined ? props.expires : undefined,
  user: props.user ? 
    typeof props.user === 'object' && Object.keys(props.user).length === 1 && Object.keys(props.user)[0] === 'id'
    ? { connect: {
        id: props.user.id
        }
      }
    : { connectOrCreate: {
      where: {
        id: props.user.id !== undefined ? props.user.id : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name 
           } : undefined,
      },
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        currentAccount: props.user.currentAccount !== undefined ? props.user.currentAccount : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
        openaiAPIKey: props.user.openaiAPIKey !== undefined ? props.user.openaiAPIKey : undefined,
        openaiModel: props.user.openaiModel !== undefined ? props.user.openaiModel : undefined,
        customer: props.user.customer !== undefined ? {
            set: props.user.customer
          } : undefined,
        accounts: props.user.accounts !== undefined ? {
            set: props.user.accounts
          } : undefined,
        authenticators: props.user.authenticators !== undefined ? {
            set: props.user.authenticators
          } : undefined,
        alpacaAccounts: props.user.alpacaAccounts !== undefined ? {
            set: props.user.alpacaAccounts
          } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  sessionToken: props.sessionToken !== undefined ? {
            set: props.sessionToken 
           } : undefined,
  expires: props.expires !== undefined ? {
            set: props.expires 
           } : undefined,
  user: props.user !== undefined ? {
            set: props.user 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneSession) {
        return response.data.upsertOneSession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneSession:', error);
      throw error;
    }
  },

  /**
   * Update multiple Session records.
   * @param props - Array of Session objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: SessionType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_SESSION = gql`
      mutation updateManySession($data: [SessionCreateManyInput!]!) {
        updateManySession(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  userId: prop.userId !== undefined ? {
    equals: prop.userId 
  } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  sessionToken: prop.sessionToken !== undefined ? {
            set: prop.sessionToken 
           } : undefined,
  expires: prop.expires !== undefined ? {
            set: prop.expires 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  user: prop.user !== undefined ? {
            set: prop.user 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManySession) {
        return response.data.updateManySession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManySession:', error);
      throw error;
    }
  },

  /**
   * Delete a single Session record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Session or null.
   */
  async delete(props: SessionType, globalClient?: ApolloClient<any>): Promise<SessionType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_SESSION = gql`
      mutation deleteOneSession($where: SessionWhereUniqueInput!) {
        deleteOneSession(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneSession) {
        return response.data.deleteOneSession;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneSession:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Session record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Session or null.
   */
  async get(props: SessionType, globalClient?: ApolloClient<any>): Promise<SessionType | null> {

    const client = globalClient || importedClient;

    const GET_SESSION = gql`
      query getSession($where: SessionWhereUniqueInput!) {
        getSession(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getSession ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Session found') {
        return null;
      } else {
        console.error('Error in getSession:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Sessions records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Session records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<SessionType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_SESSION = gql`
      query getAllSession {
        sessions {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_SESSION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.sessions ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Session found') {
        return null;
      } else {
        console.error('Error in getSession:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Session records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Session records or null.
   */
  async findMany(props: SessionType, globalClient?: ApolloClient<any>): Promise<SessionType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_SESSION = gql`
      query findManySession($where: SessionWhereInput!) {
        sessions(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_SESSION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Sessions) {
        return response.data.sessions;
      } else {
       return [] as SessionType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Session found') {
        return null;
      } else {
        console.error('Error in getSession:', error);
        throw error;
      }
    }
  }
};
