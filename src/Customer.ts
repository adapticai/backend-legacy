

import { Customer as CustomerType } from './generated/typegraphql-prisma/models/Customer';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Customer model.
 */

export const Customer = {

  /**
   * Create a new Customer record.
   * @param props - Properties for the new record.
   * @returns The created Customer or null.
   */

  async create(props: CustomerType): Promise<CustomerType> {

  const client = createApolloClient();

  const CREATE_ONE_CUSTOMER = gql`
      mutation createOneCustomer($data: CustomerCreateInput!) {
        createOneCustomer(data: $data) {
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
            customer {
              id
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
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
              user {
                id
              }
              userId
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
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
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              alerts {
                id
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
              }
            }
          }
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
  users: props.users ? {
    connectOrCreate: props.users.map((item: any) => ({
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
    accounts: item.accounts ? {
      connectOrCreate: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: item.sessions ? {
      connectOrCreate: item.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: item.authenticators ? {
      connectOrCreate: item.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    alpacaAccounts: item.alpacaAccounts ? {
      connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        },
      }))
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
   * @returns The count of created records or null.
   */
  async createMany(props: CustomerType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

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
   * @returns The updated Customer or null.
   */
  async update(props: CustomerType): Promise<CustomerType> {

    const client = createApolloClient();

      const UPDATE_ONE_CUSTOMER = gql`
      mutation updateOneCustomer($data: CustomerUpdateInput!, $where: CustomerWhereUniqueInput!) {
        updateOneCustomer(data: $data, where: $where) {
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
            customer {
              id
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
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
              user {
                id
              }
              userId
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
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
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              alerts {
                id
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
              }
            }
          }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
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
  users: props.users ? {
    upsert: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        name: item.name !== undefined ? {
            set: item.name  
           } : undefined,
        email: item.email !== undefined ? {
            set: item.email  
           } : undefined,
        emailVerified: item.emailVerified !== undefined ? {
            set: item.emailVerified  
           } : undefined,
        image: item.image !== undefined ? {
            set: item.image  
           } : undefined,
        role: item.role !== undefined ? {
            set: item.role  
           } : undefined,
        bio: item.bio !== undefined ? {
            set: item.bio  
           } : undefined,
        jobTitle: item.jobTitle !== undefined ? {
            set: item.jobTitle  
           } : undefined,
        currentAccount: item.currentAccount !== undefined ? {
            set: item.currentAccount  
           } : undefined,
        plan: item.plan !== undefined ? {
            set: item.plan  
           } : undefined,
    accounts: item.accounts ? {
      upsert: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider  
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId  
             } : undefined,
          refresh_token: item.refresh_token !== undefined ? {
              set: item.refresh_token  
             } : undefined,
          access_token: item.access_token !== undefined ? {
              set: item.access_token  
             } : undefined,
          expires_at: item.expires_at !== undefined ? {
              set: item.expires_at  
             } : undefined,
          token_type: item.token_type !== undefined ? {
              set: item.token_type  
             } : undefined,
          scope: item.scope !== undefined ? {
              set: item.scope  
             } : undefined,
          id_token: item.id_token !== undefined ? {
              set: item.id_token  
             } : undefined,
          session_state: item.session_state !== undefined ? {
              set: item.session_state  
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: item.sessions ? {
      upsert: item.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          sessionToken: item.sessionToken !== undefined ? {
              set: item.sessionToken  
             } : undefined,
          expires: item.expires !== undefined ? {
              set: item.expires  
             } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: item.authenticators ? {
      upsert: item.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          credentialID: item.credentialID !== undefined ? {
              set: item.credentialID  
             } : undefined,
          publicKey: item.publicKey !== undefined ? {
              set: item.publicKey  
             } : undefined,
          counter: item.counter !== undefined ? {
              set: item.counter  
             } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    alpacaAccounts: item.alpacaAccounts ? {
      upsert: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          APIKey: item.APIKey !== undefined ? {
              set: item.APIKey  
             } : undefined,
          APISecret: item.APISecret !== undefined ? {
              set: item.APISecret  
             } : undefined,
          configuration: item.configuration !== undefined ? {
              set: item.configuration  
             } : undefined,
          marketOpen: item.marketOpen !== undefined ? {
              set: item.marketOpen  
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        },
      }))
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
    accounts: item.accounts ? {
      connectOrCreate: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: item.sessions ? {
      connectOrCreate: item.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: item.authenticators ? {
      connectOrCreate: item.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    alpacaAccounts: item.alpacaAccounts ? {
      connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        },
      }))
    } : undefined,
      },
    }))
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
   * Update multiple Customer records.
   * @param props - Array of Customer objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: CustomerType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_CUSTOMER = gql`
      mutation updateManyCustomer($data: [CustomerCreateManyInput!]!) {
        updateManyCustomer(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
                id: prop.id !== undefined ? prop.id : undefined,
        name: prop.name !== undefined ? {
            equals: prop.name 
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
  users: prop.users ? {
    upsert: prop.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        email: item.email !== undefined ? item.email : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
      },
      update: {
        id: item.id !== undefined ? {
            set: item.id  
           } : undefined,
        name: item.name !== undefined ? {
            set: item.name  
           } : undefined,
        email: item.email !== undefined ? {
            set: item.email  
           } : undefined,
        emailVerified: item.emailVerified !== undefined ? {
            set: item.emailVerified  
           } : undefined,
        image: item.image !== undefined ? {
            set: item.image  
           } : undefined,
        role: item.role !== undefined ? {
            set: item.role  
           } : undefined,
        bio: item.bio !== undefined ? {
            set: item.bio  
           } : undefined,
        jobTitle: item.jobTitle !== undefined ? {
            set: item.jobTitle  
           } : undefined,
        currentAccount: item.currentAccount !== undefined ? {
            set: item.currentAccount  
           } : undefined,
        plan: item.plan !== undefined ? {
            set: item.plan  
           } : undefined,
    accounts: item.accounts ? {
      upsert: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          provider: item.provider !== undefined ? {
              set: item.provider  
             } : undefined,
          providerAccountId: item.providerAccountId !== undefined ? {
              set: item.providerAccountId  
             } : undefined,
          refresh_token: item.refresh_token !== undefined ? {
              set: item.refresh_token  
             } : undefined,
          access_token: item.access_token !== undefined ? {
              set: item.access_token  
             } : undefined,
          expires_at: item.expires_at !== undefined ? {
              set: item.expires_at  
             } : undefined,
          token_type: item.token_type !== undefined ? {
              set: item.token_type  
             } : undefined,
          scope: item.scope !== undefined ? {
              set: item.scope  
             } : undefined,
          id_token: item.id_token !== undefined ? {
              set: item.id_token  
             } : undefined,
          session_state: item.session_state !== undefined ? {
              set: item.session_state  
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: item.sessions ? {
      upsert: item.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          sessionToken: item.sessionToken !== undefined ? {
              set: item.sessionToken  
             } : undefined,
          expires: item.expires !== undefined ? {
              set: item.expires  
             } : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: item.authenticators ? {
      upsert: item.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          credentialID: item.credentialID !== undefined ? {
              set: item.credentialID  
             } : undefined,
          publicKey: item.publicKey !== undefined ? {
              set: item.publicKey  
             } : undefined,
          counter: item.counter !== undefined ? {
              set: item.counter  
             } : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    alpacaAccounts: item.alpacaAccounts ? {
      upsert: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          id: item.id !== undefined ? {
              set: item.id  
             } : undefined,
          type: item.type !== undefined ? {
              set: item.type  
             } : undefined,
          APIKey: item.APIKey !== undefined ? {
              set: item.APIKey  
             } : undefined,
          APISecret: item.APISecret !== undefined ? {
              set: item.APISecret  
             } : undefined,
          configuration: item.configuration !== undefined ? {
              set: item.configuration  
             } : undefined,
          marketOpen: item.marketOpen !== undefined ? {
              set: item.marketOpen  
             } : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        },
      }))
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
    accounts: item.accounts ? {
      connectOrCreate: item.accounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          provider: item.provider !== undefined ? item.provider : undefined,
          providerAccountId: item.providerAccountId !== undefined ? item.providerAccountId : undefined,
          refresh_token: item.refresh_token !== undefined ? item.refresh_token : undefined,
          access_token: item.access_token !== undefined ? item.access_token : undefined,
          expires_at: item.expires_at !== undefined ? item.expires_at : undefined,
          token_type: item.token_type !== undefined ? item.token_type : undefined,
          scope: item.scope !== undefined ? item.scope : undefined,
          id_token: item.id_token !== undefined ? item.id_token : undefined,
          session_state: item.session_state !== undefined ? item.session_state : undefined,
        },
      }))
    } : undefined,
    sessions: item.sessions ? {
      connectOrCreate: item.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: item.authenticators ? {
      connectOrCreate: item.authenticators.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          credentialID: item.credentialID !== undefined ? item.credentialID : undefined,
          publicKey: item.publicKey !== undefined ? item.publicKey : undefined,
          counter: item.counter !== undefined ? item.counter : undefined,
        },
      }))
    } : undefined,
    alpacaAccounts: item.alpacaAccounts ? {
      connectOrCreate: item.alpacaAccounts.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          APIKey: item.APIKey !== undefined ? item.APIKey : undefined,
          APISecret: item.APISecret !== undefined ? item.APISecret : undefined,
          configuration: item.configuration !== undefined ? item.configuration : undefined,
          marketOpen: item.marketOpen !== undefined ? item.marketOpen : undefined,
        },
      }))
    } : undefined,
      },
    }))
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
   * @returns The deleted Customer or null.
   */
  async delete(props: CustomerType): Promise<CustomerType> {

    const client = createApolloClient();

      const DELETE_ONE_CUSTOMER = gql`
      mutation deleteOneCustomer($where: CustomerWhereUniqueInput!) {
        deleteOneCustomer(where: $where) {
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
            customer {
              id
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
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
              user {
                id
              }
              userId
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
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
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              alerts {
                id
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
              }
            }
          }
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
   * @returns The retrieved Customer or null.
   */
  async get(props: CustomerType): Promise<CustomerType | null> {

    const client = createApolloClient();

      const GET_CUSTOMER = gql`
      query getCustomer($where: CustomerWhereUniqueInput!) {
        getCustomer(where: $where) {
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
            customer {
              id
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
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
              user {
                id
              }
              userId
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
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
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              alerts {
                id
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
              }
            }
          }
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
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
   * @returns An array of Customer records or null.
   */
  async getAll(): Promise<CustomerType[] | null> {

    const client = createApolloClient();

      const GET_ALL_CUSTOMER = gql`
      query getAllCustomer {
        customers {
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
            customer {
              id
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
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
              user {
                id
              }
              userId
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
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
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              alerts {
                id
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
              }
            }
          }
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
   * @returns An array of found Customer records or null.
   */
  async findMany(props: CustomerType): Promise<CustomerType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_CUSTOMER = gql`
      query findManyCustomer($where: CustomerWhereInput!) {
        customers(where: $where) {
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
            customer {
              id
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
              user {
                id
              }
            }
            sessions {
              id
              sessionToken
              userId
              expires
              user {
                id
              }
              createdAt
              updatedAt
            }
            authenticators {
              id
              userId
              credentialID
              publicKey
              counter
              user {
                id
              }
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
              user {
                id
              }
              userId
              createdAt
              updatedAt
              trades {
                id
                alpacaAccountId
                assetId
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                status
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
                asset {
                  id
                }
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
                alpacaAccount {
                  id
                }
                alpacaAccountId
              }
              alerts {
                id
                alpacaAccountId
                message
                type
                isRead
                createdAt
                updatedAt
                alpacaAccount {
                  id
                }
              }
            }
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
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
