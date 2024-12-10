
  
import { Authenticator as AuthenticatorType } from './generated/typegraphql-prisma/models/Authenticator';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Authenticator model.
   */

  const selectionSet = `
    
  id
  userId
  credentialID
  publicKey
  counter
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
      sessionToken
      userId
      expires
      createdAt
      updatedAt
    }
    plan
    alpacaAccounts {
      id
      type
      APIKey
      APISecret
      configuration
      marketOpen
      realTime
      minOrderSize
      maxOrderSize
      minPercentageChange
      volumeThreshold
      userId
      createdAt
      updatedAt
      trades {
        id
        alpacaAccountId
        assetId
        qty
        price
        total
        optionType
        signal
        strategy
        analysis
        summary
        confidence
        timestamp
        createdAt
        updatedAt
        status
        asset {
id
        }
        actions {
id
        }
      }
      orders {
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
        }
        takeProfit {
id
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
        action {
id
        }
        asset {
id
        }
        fee
        strikePrice
        expirationDate
        optionType
        stopLossId
        takeProfitId
        contractId
      }
      positions {
        id
        assetId
        asset {
id
        }
        averageEntryPrice
        qty
        qtyAvailable
        marketValue
        costBasis
        unrealizedPL
        unrealizedPLPC
        unrealisedIntradayPL
        unrealisedIntradayPLPC
        currentPrice
        lastTradePrice
        changeToday
        assetMarginable
        closed
        createdAt
        updatedAt
      }
      alerts {
        id
        alpacaAccountId
        message
        type
        isRead
        createdAt
        updatedAt
      }
    }
    openaiAPIKey
    openaiModel
  }
  createdAt
  updatedAt

  `;

  export const Authenticator = {

    /**
     * Create a new Authenticator record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Authenticator or null.
     */

    async create(props: AuthenticatorType, globalClient?: ApolloClient<any>): Promise<AuthenticatorType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_AUTHENTICATOR = gql`
        mutation createOneAuthenticator($data: AuthenticatorCreateInput!) {
          createOneAuthenticator(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            credentialID: props.credentialID !== undefined ? props.credentialID : undefined,
  publicKey: props.publicKey !== undefined ? props.publicKey : undefined,
  counter: props.counter !== undefined ? props.counter : undefined,
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
        sessions: props.user.sessions !== undefined ? {
            set: props.user.sessions
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
      const response = await client.mutate({ mutation: CREATE_ONE_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneAuthenticator) {
        return response.data.createOneAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Create multiple Authenticator records.
   * @param props - Array of Authenticator objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: AuthenticatorType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_AUTHENTICATOR = gql`
      mutation createManyAuthenticator($data: [AuthenticatorCreateManyInput!]!) {
        createManyAuthenticator(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  userId: prop.userId !== undefined ? prop.userId : undefined,
  credentialID: prop.credentialID !== undefined ? prop.credentialID : undefined,
  publicKey: prop.publicKey !== undefined ? prop.publicKey : undefined,
  counter: prop.counter !== undefined ? prop.counter : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyAuthenticator) {
        return response.data.createManyAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Update a single Authenticator record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Authenticator or null.
   */
  async update(props: AuthenticatorType, globalClient?: ApolloClient<any>): Promise<AuthenticatorType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_AUTHENTICATOR = gql`
      mutation updateOneAuthenticator($data: AuthenticatorUpdateInput!, $where: AuthenticatorWhereUniqueInput!) {
        updateOneAuthenticator(data: $data, where: $where) {
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
  credentialID: props.credentialID !== undefined ? {
            set: props.credentialID 
           } : undefined,
  publicKey: props.publicKey !== undefined ? {
            set: props.publicKey 
           } : undefined,
  counter: props.counter !== undefined ? {
            set: props.counter 
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
      const response = await client.mutate({ mutation: UPDATE_ONE_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneAuthenticator) {
        return response.data.updateOneAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Authenticator record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Authenticator or null.
   */
  async upsert(props: AuthenticatorType, globalClient?: ApolloClient<any>): Promise<AuthenticatorType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_AUTHENTICATOR = gql`
      mutation upsertOneAuthenticator($where: AuthenticatorWhereUniqueInput!, $create: AuthenticatorCreateInput!, $update: AuthenticatorUpdateInput!) {
        upsertOneAuthenticator(where: $where, create: $create, update: $update) {
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
    credentialID: props.credentialID !== undefined ? props.credentialID : undefined,
  publicKey: props.publicKey !== undefined ? props.publicKey : undefined,
  counter: props.counter !== undefined ? props.counter : undefined,
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
        sessions: props.user.sessions !== undefined ? {
            set: props.user.sessions
          } : undefined,
        alpacaAccounts: props.user.alpacaAccounts !== undefined ? {
            set: props.user.alpacaAccounts
          } : undefined,
      },
    }
  } : undefined,
      },
      update: {
  credentialID: props.credentialID !== undefined ? {
            set: props.credentialID 
           } : undefined,
  publicKey: props.publicKey !== undefined ? {
            set: props.publicKey 
           } : undefined,
  counter: props.counter !== undefined ? {
            set: props.counter 
           } : undefined,
  user: props.user !== undefined ? {
            set: props.user 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneAuthenticator) {
        return response.data.upsertOneAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Update multiple Authenticator records.
   * @param props - Array of Authenticator objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: AuthenticatorType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_AUTHENTICATOR = gql`
      mutation updateManyAuthenticator($data: [AuthenticatorCreateManyInput!]!) {
        updateManyAuthenticator(data: $data) {
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
  credentialID: prop.credentialID !== undefined ? {
            set: prop.credentialID 
           } : undefined,
  publicKey: prop.publicKey !== undefined ? {
            set: prop.publicKey 
           } : undefined,
  counter: prop.counter !== undefined ? {
            set: prop.counter 
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
      const response = await client.mutate({ mutation: UPDATE_MANY_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyAuthenticator) {
        return response.data.updateManyAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Delete a single Authenticator record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Authenticator or null.
   */
  async delete(props: AuthenticatorType, globalClient?: ApolloClient<any>): Promise<AuthenticatorType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_AUTHENTICATOR = gql`
      mutation deleteOneAuthenticator($where: AuthenticatorWhereUniqueInput!) {
        deleteOneAuthenticator(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneAuthenticator) {
        return response.data.deleteOneAuthenticator;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneAuthenticator:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Authenticator record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Authenticator or null.
   */
  async get(props: AuthenticatorType, globalClient?: ApolloClient<any>): Promise<AuthenticatorType | null> {

    const client = globalClient || importedClient;

    const GET_AUTHENTICATOR = gql`
      query getAuthenticator($where: AuthenticatorWhereUniqueInput!) {
        getAuthenticator(where: $where) {
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
      const response = await client.query({ query: GET_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getAuthenticator ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Authenticator found') {
        return null;
      } else {
        console.error('Error in getAuthenticator:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Authenticators records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Authenticator records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<AuthenticatorType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_AUTHENTICATOR = gql`
      query getAllAuthenticator {
        authenticators {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_AUTHENTICATOR });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.authenticators ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Authenticator found') {
        return null;
      } else {
        console.error('Error in getAuthenticator:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Authenticator records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Authenticator records or null.
   */
  async findMany(props: AuthenticatorType, globalClient?: ApolloClient<any>): Promise<AuthenticatorType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_AUTHENTICATOR = gql`
      query findManyAuthenticator($where: AuthenticatorWhereInput!) {
        authenticators(where: $where) {
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
      const response = await client.query({ query: FIND_MANY_AUTHENTICATOR, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Authenticators) {
        return response.data.authenticators;
      } else {
       return [] as AuthenticatorType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Authenticator found') {
        return null;
      } else {
        console.error('Error in getAuthenticator:', error);
        throw error;
      }
    }
  }
};
