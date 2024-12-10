
  
import { Customer as CustomerType } from './generated/typegraphql-prisma/models/Customer';
import { ApolloClient, ApolloError, gql } from '@apollo/client';
import { client as importedClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the Customer model.
   */

  const selectionSet = `
    
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
  users {
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

  `;

  export const Customer = {

    /**
     * Create a new Customer record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created Customer or null.
     */

    async create(props: CustomerType, globalClient?: ApolloClient<any>): Promise<CustomerType> {

    const client = globalClient || importedClient;

    const CREATE_ONE_CUSTOMER = gql`
        mutation createOneCustomer($data: CustomerCreateInput!) {
          createOneCustomer(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            authUserId: props.authUserId !== undefined ? props.authUserId : undefined,
  name: props.name !== undefined ? props.name : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  stripePriceId: props.stripePriceId !== undefined ? props.stripePriceId : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? props.stripeCurrentPeriodEnd : undefined,
  users: props.users ? 
    Array.isArray(props.users) && props.users.length > 0 &&  props.users.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.users.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? item.openaiAPIKey : undefined,
        openaiModel: item.openaiModel !== undefined ? item.openaiModel : undefined,
        accounts: item.accounts !== undefined ? {
            set: item.accounts
          } : undefined,
        sessions: item.sessions !== undefined ? {
            set: item.sessions
          } : undefined,
        authenticators: item.authenticators !== undefined ? {
            set: item.authenticators
          } : undefined,
        alpacaAccounts: item.alpacaAccounts !== undefined ? {
            set: item.alpacaAccounts
          } : undefined,
      },
    }))
  } : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneCustomer) {
        return response.data.createOneCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneCustomer:', error);
      throw error;
    }
  },

  /**
   * Create multiple Customer records.
   * @param props - Array of Customer objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: CustomerType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const CREATE_MANY_CUSTOMER = gql`
      mutation createManyCustomer($data: [CustomerCreateManyInput!]!) {
        createManyCustomer(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  authUserId: prop.authUserId !== undefined ? prop.authUserId : undefined,
  name: prop.name !== undefined ? prop.name : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
  stripeCustomerId: prop.stripeCustomerId !== undefined ? prop.stripeCustomerId : undefined,
  stripeSubscriptionId: prop.stripeSubscriptionId !== undefined ? prop.stripeSubscriptionId : undefined,
  stripePriceId: prop.stripePriceId !== undefined ? prop.stripePriceId : undefined,
  stripeCurrentPeriodEnd: prop.stripeCurrentPeriodEnd !== undefined ? prop.stripeCurrentPeriodEnd : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyCustomer) {
        return response.data.createManyCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyCustomer:', error);
      throw error;
    }
  },

  /**
   * Update a single Customer record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Customer or null.
   */
  async update(props: CustomerType, globalClient?: ApolloClient<any>): Promise<CustomerType> {

    const client = globalClient || importedClient;

    const UPDATE_ONE_CUSTOMER = gql`
      mutation updateOneCustomer($data: CustomerUpdateInput!, $where: CustomerWhereUniqueInput!) {
        updateOneCustomer(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  authUserId: props.authUserId !== undefined ? {
    equals: props.authUserId 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
    equals: props.stripePriceId 
  } : undefined,
      },
      data: {
  authUserId: props.authUserId !== undefined ? {
            set: props.authUserId 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? {
            set: props.stripeCustomerId 
           } : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? {
            set: props.stripeSubscriptionId 
           } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
            set: props.stripePriceId 
           } : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? {
            set: props.stripeCurrentPeriodEnd 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
  users: props.users !== undefined ? {
            set: props.users 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneCustomer) {
        return response.data.updateOneCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneCustomer:', error);
      throw error;
    }
  },

  /**
   * Upsert a single Customer record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated Customer or null.
   */
  async upsert(props: CustomerType, globalClient?: ApolloClient<any>): Promise<CustomerType> {

    const client = globalClient || importedClient;

    const UPSERT_ONE_CUSTOMER = gql`
      mutation upsertOneCustomer($where: CustomerWhereUniqueInput!, $create: CustomerCreateInput!, $update: CustomerUpdateInput!) {
        upsertOneCustomer(where: $where, create: $create, update: $update) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  authUserId: props.authUserId !== undefined ? {
    equals: props.authUserId 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
    equals: props.stripePriceId 
  } : undefined,
      },
      create: {
    authUserId: props.authUserId !== undefined ? props.authUserId : undefined,
  name: props.name !== undefined ? props.name : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  stripePriceId: props.stripePriceId !== undefined ? props.stripePriceId : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? props.stripeCurrentPeriodEnd : undefined,
  users: props.users ? 
    Array.isArray(props.users) && props.users.length > 0 &&  props.users.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
      connect:    props.users.map((item: any) => ({
         id: item.id
      }))
 }
 : { connectOrCreate: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        email: item.email !== undefined ? item.email : undefined,
        emailVerified: item.emailVerified !== undefined ? item.emailVerified : undefined,
        image: item.image !== undefined ? item.image : undefined,
        role: item.role !== undefined ? item.role : undefined,
        bio: item.bio !== undefined ? item.bio : undefined,
        jobTitle: item.jobTitle !== undefined ? item.jobTitle : undefined,
        currentAccount: item.currentAccount !== undefined ? item.currentAccount : undefined,
        plan: item.plan !== undefined ? item.plan : undefined,
        openaiAPIKey: item.openaiAPIKey !== undefined ? item.openaiAPIKey : undefined,
        openaiModel: item.openaiModel !== undefined ? item.openaiModel : undefined,
        accounts: item.accounts !== undefined ? {
            set: item.accounts
          } : undefined,
        sessions: item.sessions !== undefined ? {
            set: item.sessions
          } : undefined,
        authenticators: item.authenticators !== undefined ? {
            set: item.authenticators
          } : undefined,
        alpacaAccounts: item.alpacaAccounts !== undefined ? {
            set: item.alpacaAccounts
          } : undefined,
      },
    }))
  } : undefined,
      },
      update: {
  authUserId: props.authUserId !== undefined ? {
            set: props.authUserId 
           } : undefined,
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  plan: props.plan !== undefined ? {
            set: props.plan 
           } : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? {
            set: props.stripeCustomerId 
           } : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? {
            set: props.stripeSubscriptionId 
           } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
            set: props.stripePriceId 
           } : undefined,
  stripeCurrentPeriodEnd: props.stripeCurrentPeriodEnd !== undefined ? {
            set: props.stripeCurrentPeriodEnd 
           } : undefined,
  users: props.users !== undefined ? {
            set: props.users 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPSERT_ONE_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.upsertOneCustomer) {
        return response.data.upsertOneCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in upsertOneCustomer:', error);
      throw error;
    }
  },

  /**
   * Update multiple Customer records.
   * @param props - Array of Customer objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: CustomerType[], globalClient?: ApolloClient<any>): Promise<{ count: number } | null> {

    const client = globalClient || importedClient;

    const UPDATE_MANY_CUSTOMER = gql`
      mutation updateManyCustomer($data: [CustomerCreateManyInput!]!) {
        updateManyCustomer(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  stripeCustomerId: prop.stripeCustomerId !== undefined ? prop.stripeCustomerId : undefined,
  stripeSubscriptionId: prop.stripeSubscriptionId !== undefined ? prop.stripeSubscriptionId : undefined,
  authUserId: prop.authUserId !== undefined ? {
    equals: prop.authUserId 
  } : undefined,
  name: prop.name !== undefined ? {
    equals: prop.name 
  } : undefined,
  stripePriceId: prop.stripePriceId !== undefined ? {
    equals: prop.stripePriceId 
  } : undefined,

      },
      data: {
          authUserId: prop.authUserId !== undefined ? {
            set: prop.authUserId 
           } : undefined,
  name: prop.name !== undefined ? {
            set: prop.name 
           } : undefined,
  plan: prop.plan !== undefined ? {
            set: prop.plan 
           } : undefined,
  stripeCustomerId: prop.stripeCustomerId !== undefined ? {
            set: prop.stripeCustomerId 
           } : undefined,
  stripeSubscriptionId: prop.stripeSubscriptionId !== undefined ? {
            set: prop.stripeSubscriptionId 
           } : undefined,
  stripePriceId: prop.stripePriceId !== undefined ? {
            set: prop.stripePriceId 
           } : undefined,
  stripeCurrentPeriodEnd: prop.stripeCurrentPeriodEnd !== undefined ? {
            set: prop.stripeCurrentPeriodEnd 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,
  users: prop.users !== undefined ? {
            set: prop.users 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyCustomer) {
        return response.data.updateManyCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyCustomer:', error);
      throw error;
    }
  },

  /**
   * Delete a single Customer record.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted Customer or null.
   */
  async delete(props: CustomerType, globalClient?: ApolloClient<any>): Promise<CustomerType> {

    const client = globalClient || importedClient;

    const DELETE_ONE_CUSTOMER = gql`
      mutation deleteOneCustomer($where: CustomerWhereUniqueInput!) {
        deleteOneCustomer(where: $where) {
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
      const response = await client.mutate({ mutation: DELETE_ONE_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneCustomer) {
        return response.data.deleteOneCustomer;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneCustomer:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Customer record by ID.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The retrieved Customer or null.
   */
  async get(props: CustomerType, globalClient?: ApolloClient<any>): Promise<CustomerType | null> {

    const client = globalClient || importedClient;

    const GET_CUSTOMER = gql`
      query getCustomer($where: CustomerWhereUniqueInput!) {
        getCustomer(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? props.stripeCustomerId : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? props.stripeSubscriptionId : undefined,
  authUserId: props.authUserId !== undefined ? {
    equals: props.authUserId 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
    equals: props.stripePriceId 
  } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getCustomer ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Customer found') {
        return null;
      } else {
        console.error('Error in getCustomer:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all Customers records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of Customer records or null.
   */
  async getAll(globalClient?: ApolloClient<any>): Promise<CustomerType[] | null> {

    const client = globalClient || importedClient;

    const GET_ALL_CUSTOMER = gql`
      query getAllCustomer {
        customers {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_CUSTOMER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.customers ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Customer found') {
        return null;
      } else {
        console.error('Error in getCustomer:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple Customer records based on conditions.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @returns An array of found Customer records or null.
   */
  async findMany(props: CustomerType, globalClient?: ApolloClient<any>): Promise<CustomerType[] | null> {

    const client = globalClient || importedClient;

    const FIND_MANY_CUSTOMER = gql`
      query findManyCustomer($where: CustomerWhereInput!) {
        customers(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  authUserId: props.authUserId !== undefined ? {
    equals: props.authUserId 
  } : undefined,
  name: props.name !== undefined ? {
    equals: props.name 
  } : undefined,
  stripeCustomerId: props.stripeCustomerId !== undefined ? {
    equals: props.stripeCustomerId 
  } : undefined,
  stripeSubscriptionId: props.stripeSubscriptionId !== undefined ? {
    equals: props.stripeSubscriptionId 
  } : undefined,
  stripePriceId: props.stripePriceId !== undefined ? {
    equals: props.stripePriceId 
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_CUSTOMER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Customers) {
        return response.data.customers;
      } else {
       return [] as CustomerType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No Customer found') {
        return null;
      } else {
        console.error('Error in getCustomer:', error);
        throw error;
      }
    }
  }
};
