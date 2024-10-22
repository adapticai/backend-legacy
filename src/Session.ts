

import { Session as SessionType } from './generated/typegraphql-prisma/models/Session';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Session model.
 */

export const Session = {

  /**
   * Create a new Session record.
   * @param props - Properties for the new record.
   * @returns The created Session or null.
   */

  async create(props: SessionType): Promise<SessionType> {

  const client = createApolloClient();

  const CREATE_ONE_SESSION = gql`
      mutation createOneSession($data: SessionCreateInput!) {
        createOneSession(data: $data) {
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
              users {
                id
              }
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
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
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
                optionContractType
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                timeInForce
                limitPrice
                stopPrice
                trailPrice
                trailPercent
                extendedHours
                clientOrderId
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
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
          createdAt
          updatedAt
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
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      typeof props.user.accounts[0] === 'object' && Object.keys(props.user.accounts).length === 1 && Object.keys(props.user.accounts)[0] === 'id'
    ? { connect:      props.user.accounts.map((item: any) => ({
         id: item.id
         }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
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
    authenticators: props.user.authenticators ? 
      typeof props.user.authenticators[0] === 'object' && Object.keys(props.user.authenticators).length === 1 && Object.keys(props.user.authenticators)[0] === 'id'
    ? { connect:      props.user.authenticators.map((item: any) => ({
         id: item.id
         }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.user.alpacaAccounts ? 
      typeof props.user.alpacaAccounts[0] === 'object' && Object.keys(props.user.alpacaAccounts).length === 1 && Object.keys(props.user.alpacaAccounts)[0] === 'id'
    ? { connect:      props.user.alpacaAccounts.map((item: any) => ({
         id: item.id
         }))
 }
 : { connectOrCreate: props.user.alpacaAccounts.map((item: any) => ({
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
   * @returns The count of created records or null.
   */
  async createMany(props: SessionType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

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
   * @returns The updated Session or null.
   */
  async update(props: SessionType): Promise<SessionType> {

    const client = createApolloClient();

      const UPDATE_ONE_SESSION = gql`
      mutation updateOneSession($data: SessionUpdateInput!, $where: SessionWhereUniqueInput!) {
        updateOneSession(data: $data, where: $where) {
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
              users {
                id
              }
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
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
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
                optionContractType
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                timeInForce
                limitPrice
                stopPrice
                trailPrice
                trailPercent
                extendedHours
                clientOrderId
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
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
          createdAt
          updatedAt
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
  user: props.user ? {
    upsert: {
      where: {
        id: props.user.id !== undefined ? {
            equals: props.user.id 
           } : undefined,
        name: props.user.name !== undefined ? {
            equals: props.user.name 
           } : undefined,
        email: props.user.email !== undefined ? {
            equals: props.user.email 
           } : undefined,
      },
      update: {
        id: props.user.id !== undefined ? {
            set: props.user.id  
           } : undefined,
        name: props.user.name !== undefined ? {
            set: props.user.name  
           } : undefined,
        email: props.user.email !== undefined ? {
            set: props.user.email  
           } : undefined,
        emailVerified: props.user.emailVerified !== undefined ? {
            set: props.user.emailVerified  
           } : undefined,
        image: props.user.image !== undefined ? {
            set: props.user.image  
           } : undefined,
        role: props.user.role !== undefined ? {
            set: props.user.role  
           } : undefined,
        bio: props.user.bio !== undefined ? {
            set: props.user.bio  
           } : undefined,
        jobTitle: props.user.jobTitle !== undefined ? {
            set: props.user.jobTitle  
           } : undefined,
        currentAccount: props.user.currentAccount !== undefined ? {
            set: props.user.currentAccount  
           } : undefined,
        plan: props.user.plan !== undefined ? {
            set: props.user.plan  
           } : undefined,
    customer: props.user.customer ? {
      upsert: {
        where: {
          id: props.user.customer.id !== undefined ? {
              equals: props.user.customer.id 
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
        },
        update: {
          authUserId: props.user.customer.authUserId !== undefined ? {
              set: props.user.customer.authUserId  
             } : undefined,
          name: props.user.customer.name !== undefined ? {
              set: props.user.customer.name  
             } : undefined,
          plan: props.user.customer.plan !== undefined ? {
              set: props.user.customer.plan  
             } : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? {
              set: props.user.customer.stripeCustomerId  
             } : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? {
              set: props.user.customer.stripeSubscriptionId  
             } : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? {
              set: props.user.customer.stripePriceId  
             } : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: props.user.customer.stripeCurrentPeriodEnd  
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? {
      upsert: props.user.accounts.map((item: any) => ({
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
    authenticators: props.user.authenticators ? {
      upsert: props.user.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.user.alpacaAccounts ? {
      upsert: props.user.alpacaAccounts.map((item: any) => ({
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
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        currentAccount: props.user.currentAccount !== undefined ? props.user.currentAccount : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    customer: props.user.customer ? 
      typeof props.user.customer === 'object' && Object.keys(props.user.customer).length === 1 && Object.keys(props.user.customer)[0] === 'id'
    ? { connect: {
          id: props.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: props.user.customer.id !== undefined ? props.user.customer.id : undefined,
          name: props.user.customer.name !== undefined ? {
              equals: props.user.customer.name 
             } : undefined,
        },
        create: {
          authUserId: props.user.customer.authUserId !== undefined ? props.user.customer.authUserId : undefined,
          name: props.user.customer.name !== undefined ? props.user.customer.name : undefined,
          plan: props.user.customer.plan !== undefined ? props.user.customer.plan : undefined,
          stripeCustomerId: props.user.customer.stripeCustomerId !== undefined ? props.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: props.user.customer.stripeSubscriptionId !== undefined ? props.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: props.user.customer.stripePriceId !== undefined ? props.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: props.user.customer.stripeCurrentPeriodEnd !== undefined ? props.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: props.user.accounts ? 
      typeof props.user.accounts[0] === 'object' && Object.keys(props.user.accounts).length === 1 && Object.keys(props.user.accounts)[0] === 'id'
    ? { connect:      props.user.accounts.map((item: any) => ({
         id: item.id
         }))
 }
 : { connectOrCreate: props.user.accounts.map((item: any) => ({
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
    authenticators: props.user.authenticators ? 
      typeof props.user.authenticators[0] === 'object' && Object.keys(props.user.authenticators).length === 1 && Object.keys(props.user.authenticators)[0] === 'id'
    ? { connect:      props.user.authenticators.map((item: any) => ({
         id: item.id
         }))
 }
 : { connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    alpacaAccounts: props.user.alpacaAccounts ? 
      typeof props.user.alpacaAccounts[0] === 'object' && Object.keys(props.user.alpacaAccounts).length === 1 && Object.keys(props.user.alpacaAccounts)[0] === 'id'
    ? { connect:      props.user.alpacaAccounts.map((item: any) => ({
         id: item.id
         }))
 }
 : { connectOrCreate: props.user.alpacaAccounts.map((item: any) => ({
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
    }
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
   * Update multiple Session records.
   * @param props - Array of Session objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: SessionType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_SESSION = gql`
      mutation updateManySession($data: [SessionCreateManyInput!]!) {
        updateManySession(data: $data) {
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
  user: prop.user ? {
    upsert: {
      where: {
        id: prop.user.id !== undefined ? {
            equals: prop.user.id 
           } : undefined,
        name: prop.user.name !== undefined ? {
            equals: prop.user.name 
           } : undefined,
        email: prop.user.email !== undefined ? {
            equals: prop.user.email 
           } : undefined,
      },
      update: {
        id: prop.user.id !== undefined ? {
            set: prop.user.id  
           } : undefined,
        name: prop.user.name !== undefined ? {
            set: prop.user.name  
           } : undefined,
        email: prop.user.email !== undefined ? {
            set: prop.user.email  
           } : undefined,
        emailVerified: prop.user.emailVerified !== undefined ? {
            set: prop.user.emailVerified  
           } : undefined,
        image: prop.user.image !== undefined ? {
            set: prop.user.image  
           } : undefined,
        role: prop.user.role !== undefined ? {
            set: prop.user.role  
           } : undefined,
        bio: prop.user.bio !== undefined ? {
            set: prop.user.bio  
           } : undefined,
        jobTitle: prop.user.jobTitle !== undefined ? {
            set: prop.user.jobTitle  
           } : undefined,
        currentAccount: prop.user.currentAccount !== undefined ? {
            set: prop.user.currentAccount  
           } : undefined,
        plan: prop.user.plan !== undefined ? {
            set: prop.user.plan  
           } : undefined,
    customer: prop.user.customer ? {
      upsert: {
        where: {
          id: prop.user.customer.id !== undefined ? {
              equals: prop.user.customer.id 
             } : undefined,
          name: prop.user.customer.name !== undefined ? {
              equals: prop.user.customer.name 
             } : undefined,
        },
        update: {
          authUserId: prop.user.customer.authUserId !== undefined ? {
              set: prop.user.customer.authUserId  
             } : undefined,
          name: prop.user.customer.name !== undefined ? {
              set: prop.user.customer.name  
             } : undefined,
          plan: prop.user.customer.plan !== undefined ? {
              set: prop.user.customer.plan  
             } : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? {
              set: prop.user.customer.stripeCustomerId  
             } : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? {
              set: prop.user.customer.stripeSubscriptionId  
             } : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? {
              set: prop.user.customer.stripePriceId  
             } : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? {
              set: prop.user.customer.stripeCurrentPeriodEnd  
             } : undefined,
        },
        create: {
          authUserId: prop.user.customer.authUserId !== undefined ? prop.user.customer.authUserId : undefined,
          name: prop.user.customer.name !== undefined ? prop.user.customer.name : undefined,
          plan: prop.user.customer.plan !== undefined ? prop.user.customer.plan : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? prop.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.user.accounts ? {
      upsert: prop.user.accounts.map((item: any) => ({
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
    authenticators: prop.user.authenticators ? {
      upsert: prop.user.authenticators.map((item: any) => ({
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
    alpacaAccounts: prop.user.alpacaAccounts ? {
      upsert: prop.user.alpacaAccounts.map((item: any) => ({
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
        name: prop.user.name !== undefined ? prop.user.name : undefined,
        email: prop.user.email !== undefined ? prop.user.email : undefined,
        emailVerified: prop.user.emailVerified !== undefined ? prop.user.emailVerified : undefined,
        image: prop.user.image !== undefined ? prop.user.image : undefined,
        role: prop.user.role !== undefined ? prop.user.role : undefined,
        bio: prop.user.bio !== undefined ? prop.user.bio : undefined,
        jobTitle: prop.user.jobTitle !== undefined ? prop.user.jobTitle : undefined,
        currentAccount: prop.user.currentAccount !== undefined ? prop.user.currentAccount : undefined,
        plan: prop.user.plan !== undefined ? prop.user.plan : undefined,
    customer: prop.user.customer ? 
      typeof prop.user.customer === 'object' && Object.keys(prop.user.customer).length === 1 && Object.keys(prop.user.customer)[0] === 'id'
    ? { connect: {
          id: prop.user.customer.id
          }
        }
    : { connectOrCreate: {
        where: {
          id: prop.user.customer.id !== undefined ? prop.user.customer.id : undefined,
          name: prop.user.customer.name !== undefined ? {
              equals: prop.user.customer.name 
             } : undefined,
        },
        create: {
          authUserId: prop.user.customer.authUserId !== undefined ? prop.user.customer.authUserId : undefined,
          name: prop.user.customer.name !== undefined ? prop.user.customer.name : undefined,
          plan: prop.user.customer.plan !== undefined ? prop.user.customer.plan : undefined,
          stripeCustomerId: prop.user.customer.stripeCustomerId !== undefined ? prop.user.customer.stripeCustomerId : undefined,
          stripeSubscriptionId: prop.user.customer.stripeSubscriptionId !== undefined ? prop.user.customer.stripeSubscriptionId : undefined,
          stripePriceId: prop.user.customer.stripePriceId !== undefined ? prop.user.customer.stripePriceId : undefined,
          stripeCurrentPeriodEnd: prop.user.customer.stripeCurrentPeriodEnd !== undefined ? prop.user.customer.stripeCurrentPeriodEnd : undefined,
        },
      }
    } : undefined,
    accounts: prop.user.accounts ? 
      typeof prop.user.accounts[0] === 'object' && Object.keys(prop.user.accounts).length === 1 && Object.keys(prop.user.accounts)[0] === 'id'
    ? { connect:      prop.user.accounts.map((item: any) => ({
         id: item.id
         }))
 }
 : { connectOrCreate: prop.user.accounts.map((item: any) => ({
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
    authenticators: prop.user.authenticators ? 
      typeof prop.user.authenticators[0] === 'object' && Object.keys(prop.user.authenticators).length === 1 && Object.keys(prop.user.authenticators)[0] === 'id'
    ? { connect:      prop.user.authenticators.map((item: any) => ({
         id: item.id
         }))
 }
 : { connectOrCreate: prop.user.authenticators.map((item: any) => ({
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
    alpacaAccounts: prop.user.alpacaAccounts ? 
      typeof prop.user.alpacaAccounts[0] === 'object' && Object.keys(prop.user.alpacaAccounts).length === 1 && Object.keys(prop.user.alpacaAccounts)[0] === 'id'
    ? { connect:      prop.user.alpacaAccounts.map((item: any) => ({
         id: item.id
         }))
 }
 : { connectOrCreate: prop.user.alpacaAccounts.map((item: any) => ({
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
    }
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
   * @returns The deleted Session or null.
   */
  async delete(props: SessionType): Promise<SessionType> {

    const client = createApolloClient();

      const DELETE_ONE_SESSION = gql`
      mutation deleteOneSession($where: SessionWhereUniqueInput!) {
        deleteOneSession(where: $where) {
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
              users {
                id
              }
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
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
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
                optionContractType
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                timeInForce
                limitPrice
                stopPrice
                trailPrice
                trailPercent
                extendedHours
                clientOrderId
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
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
          createdAt
          updatedAt
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
   * @returns The retrieved Session or null.
   */
  async get(props: SessionType): Promise<SessionType | null> {

    const client = createApolloClient();

      const GET_SESSION = gql`
      query getSession($where: SessionWhereUniqueInput!) {
        getSession(where: $where) {
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
              users {
                id
              }
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
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
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
                optionContractType
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                timeInForce
                limitPrice
                stopPrice
                trailPrice
                trailPercent
                extendedHours
                clientOrderId
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
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
          createdAt
          updatedAt
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
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
   * @returns An array of Session records or null.
   */
  async getAll(): Promise<SessionType[] | null> {

    const client = createApolloClient();

      const GET_ALL_SESSION = gql`
      query getAllSession {
        sessions {
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
              users {
                id
              }
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
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
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
                optionContractType
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                timeInForce
                limitPrice
                stopPrice
                trailPrice
                trailPercent
                extendedHours
                clientOrderId
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
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
          createdAt
          updatedAt
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
   * @returns An array of found Session records or null.
   */
  async findMany(props: SessionType): Promise<SessionType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_SESSION = gql`
      query findManySession($where: SessionWhereInput!) {
        sessions(where: $where) {
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
              users {
                id
              }
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
                qty
                price
                total
                signal
                strategy
                analysis
                confidence
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
                optionContractType
                actions {
                  id
                }
              }
              orders {
                id
                alpacaAccountId
                assetId
                qty
                notional
                side
                type
                timeInForce
                limitPrice
                stopPrice
                trailPrice
                trailPercent
                extendedHours
                clientOrderId
                status
                createdAt
                updatedAt
                submittedAt
                filledAt
                filledAvgPrice
                actionId
                alpacaAccount {
                  id
                }
                action {
                  id
                }
                asset {
                  id
                }
                fee
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
          createdAt
          updatedAt
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
