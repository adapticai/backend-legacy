

import { User as UserType } from './generated/typegraphql-prisma/models/User';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the User model.
 */

export const User = {
  /**
   * Create a new User record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created User or null.
   */
  async create(props: UserType, client: ApolloClient<NormalizedCacheObject>): Promise<UserType> {
    const CREATE_ONE_USER = gql`
      mutation createOneUser($data: UserCreateInput!) {
        createOneUser(data: $data) {
          id
          name
          email
          emailVerified
          image
          createdAt
          updatedAt
          role
          workspaces {
            id
            userId
            workspaceId
            user {
              id
            }
            workspace {
              id
              name
              slug
              description
              descriptionShort
              image
              colors
              website
              emailDomain
              addUsersByEmailDomain
              industry
              foundingYear
              legalName
              address
              streetAddress
              postalCode
              city {
                id
                name
                workspace {
                  id
                }
              }
              state {
                id
                name
                workspace {
                  id
                }
                country {
                  id
                }
                countryId
              }
              country {
                id
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              telephone
              email
              sameAs
              headquarters
              locations {
                id
                label
                value
                workspace {
                  id
                }
                workspaceId
              }
              areasOfFocus
              createdAt
              updatedAt
              environmentVariables {
                id
                key
                value
                description
                workspaceId
                workspace {
                  id
                }
                createdAt
                updatedAt
              }
              users {
                id
              }
              stateId
              countryId
              cityId
            }
            role
            createdAt
            updatedAt
          }
          bio
          jobTitle
          currentWorkspace
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
          holdings {
            id
            userId
            assetId
            quantity
            averagePrice
            createdAt
            updatedAt
            user {
              id
            }
            asset {
              id
              symbol
              name
              type
              logoUrl
              createdAt
              updatedAt
              holdings {
                id
              }
              trades {
                id
                userId
                assetId
                action
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              orders {
                id
                userId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              recommendations {
                id
                userId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
            }
          }
          trades {
            id
          }
          orders {
            id
          }
          aiRecommendations {
            id
          }
          riskAllocations {
            id
            userId
            assetType
            allocation
            createdAt
            updatedAt
            user {
              id
            }
          }
          alerts {
            id
            userId
            message
            type
            isRead
            createdAt
            updatedAt
            user {
              id
            }
          }
        }
      }
   `;

    const variables = {
      data: {
          name: props.name !== undefined ? props.name : undefined,
  email: props.email !== undefined ? props.email : undefined,
  emailVerified: props.emailVerified !== undefined ? props.emailVerified : undefined,
  image: props.image !== undefined ? props.image : undefined,
  role: props.role !== undefined ? props.role : undefined,
  bio: props.bio !== undefined ? props.bio : undefined,
  jobTitle: props.jobTitle !== undefined ? props.jobTitle : undefined,
  currentWorkspace: props.currentWorkspace !== undefined ? props.currentWorkspace : undefined,
  plan: props.plan !== undefined ? props.plan : undefined,
  workspaces: props.workspaces ? {
    connectOrCreate: props.workspaces.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        role: item.role !== undefined ? item.role : undefined,
    workspace: item.workspace ? {
      connectOrCreate: {
        where: {
          id: item.workspace.id !== undefined ? item.workspace.id : undefined,
          slug: item.workspace.slug !== undefined ? item.workspace.slug : undefined,
          name: item.workspace.name !== undefined ? {
              equals: item.workspace.name 
             } : undefined,
          email: item.workspace.email !== undefined ? {
              equals: item.workspace.email 
             } : undefined,
        },
        create: {
          name: item.workspace.name !== undefined ? item.workspace.name : undefined,
          slug: item.workspace.slug !== undefined ? item.workspace.slug : undefined,
          description: item.workspace.description !== undefined ? item.workspace.description : undefined,
          descriptionShort: item.workspace.descriptionShort !== undefined ? item.workspace.descriptionShort : undefined,
          image: item.workspace.image !== undefined ? item.workspace.image : undefined,
          colors: item.workspace.colors !== undefined ? item.workspace.colors : undefined,
          website: item.workspace.website !== undefined ? item.workspace.website : undefined,
          emailDomain: item.workspace.emailDomain !== undefined ? item.workspace.emailDomain : undefined,
          addUsersByEmailDomain: item.workspace.addUsersByEmailDomain !== undefined ? item.workspace.addUsersByEmailDomain : undefined,
          industry: item.workspace.industry !== undefined ? item.workspace.industry : undefined,
          foundingYear: item.workspace.foundingYear !== undefined ? item.workspace.foundingYear : undefined,
          legalName: item.workspace.legalName !== undefined ? item.workspace.legalName : undefined,
          address: item.workspace.address !== undefined ? item.workspace.address : undefined,
          streetAddress: item.workspace.streetAddress !== undefined ? item.workspace.streetAddress : undefined,
          postalCode: item.workspace.postalCode !== undefined ? item.workspace.postalCode : undefined,
          telephone: item.workspace.telephone !== undefined ? item.workspace.telephone : undefined,
          email: item.workspace.email !== undefined ? item.workspace.email : undefined,
          sameAs: item.workspace.sameAs !== undefined ? item.workspace.sameAs : undefined,
          headquarters: item.workspace.headquarters !== undefined ? item.workspace.headquarters : undefined,
          areasOfFocus: item.workspace.areasOfFocus !== undefined ? item.workspace.areasOfFocus : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  customer: props.customer ? {
    connectOrCreate: {
      where: {
        id: props.customer.id !== undefined ? props.customer.id : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? {
    connectOrCreate: props.accounts.map((item: any) => ({
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
  sessions: props.sessions ? {
    connectOrCreate: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
        expires: item.expires !== undefined ? item.expires : undefined,
      },
    }))
  } : undefined,
  authenticators: props.authenticators ? {
    connectOrCreate: props.authenticators.map((item: any) => ({
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
  holdings: props.holdings ? {
    connectOrCreate: props.holdings.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  trades: props.trades ? {
    connectOrCreate: props.trades.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  orders: props.orders ? {
    connectOrCreate: props.orders.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        status: item.status !== undefined ? item.status : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  aiRecommendations: props.aiRecommendations ? {
    connectOrCreate: props.aiRecommendations.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        action: item.action !== undefined ? item.action : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  riskAllocations: props.riskAllocations ? {
    connectOrCreate: props.riskAllocations.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        assetType: item.assetType !== undefined ? item.assetType : undefined,
        allocation: item.allocation !== undefined ? item.allocation : undefined,
      },
    }))
  } : undefined,
  alerts: props.alerts ? {
    connectOrCreate: props.alerts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        message: item.message !== undefined ? item.message : undefined,
        type: item.type !== undefined ? item.type : undefined,
        isRead: item.isRead !== undefined ? item.isRead : undefined,
      },
    }))
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createOneUser: UserType }>({ mutation: CREATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneUser) {
        return response.data.createOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneUser:', error);
      throw error;
    }
  },

  /**
   * Create multiple User records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: UserType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_USER = gql`
      mutation createManyUser($data: [UserCreateManyInput!]!) {
        createManyUser(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  name: prop.name !== undefined ? prop.name : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  emailVerified: prop.emailVerified !== undefined ? prop.emailVerified : undefined,
  image: prop.image !== undefined ? prop.image : undefined,
  role: prop.role !== undefined ? prop.role : undefined,
  bio: prop.bio !== undefined ? prop.bio : undefined,
  jobTitle: prop.jobTitle !== undefined ? prop.jobTitle : undefined,
  currentWorkspace: prop.currentWorkspace !== undefined ? prop.currentWorkspace : undefined,
  customerId: prop.customerId !== undefined ? prop.customerId : undefined,
  plan: prop.plan !== undefined ? prop.plan : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyUser: { count: number } }>({ mutation: CREATE_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyUser) {
        return response.data.createManyUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyUser:', error);
      throw error;
    }
  },

  /**
   * Update a single User record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated User or null.
   */
  async update(props: UserType, client: ApolloClient<NormalizedCacheObject>): Promise<UserType> {
    const UPDATE_ONE_USER = gql`
      mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
        updateOneUser(data: $data, where: $where) {
          id
          name
          email
          emailVerified
          image
          createdAt
          updatedAt
          role
          workspaces {
            id
            userId
            workspaceId
            user {
              id
            }
            workspace {
              id
              name
              slug
              description
              descriptionShort
              image
              colors
              website
              emailDomain
              addUsersByEmailDomain
              industry
              foundingYear
              legalName
              address
              streetAddress
              postalCode
              city {
                id
                name
                workspace {
                  id
                }
              }
              state {
                id
                name
                workspace {
                  id
                }
                country {
                  id
                }
                countryId
              }
              country {
                id
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              telephone
              email
              sameAs
              headquarters
              locations {
                id
                label
                value
                workspace {
                  id
                }
                workspaceId
              }
              areasOfFocus
              createdAt
              updatedAt
              environmentVariables {
                id
                key
                value
                description
                workspaceId
                workspace {
                  id
                }
                createdAt
                updatedAt
              }
              users {
                id
              }
              stateId
              countryId
              cityId
            }
            role
            createdAt
            updatedAt
          }
          bio
          jobTitle
          currentWorkspace
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
          holdings {
            id
            userId
            assetId
            quantity
            averagePrice
            createdAt
            updatedAt
            user {
              id
            }
            asset {
              id
              symbol
              name
              type
              logoUrl
              createdAt
              updatedAt
              holdings {
                id
              }
              trades {
                id
                userId
                assetId
                action
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              orders {
                id
                userId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              recommendations {
                id
                userId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
            }
          }
          trades {
            id
          }
          orders {
            id
          }
          aiRecommendations {
            id
          }
          riskAllocations {
            id
            userId
            assetType
            allocation
            createdAt
            updatedAt
            user {
              id
            }
          }
          alerts {
            id
            userId
            message
            type
            isRead
            createdAt
            updatedAt
            user {
              id
            }
          }
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        email: props.email !== undefined ? props.email : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
      },
      data: {
  name: props.name !== undefined ? {
            set: props.name 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
           } : undefined,
  role: props.role !== undefined ? {
            set: props.role 
           } : undefined,
  bio: props.bio !== undefined ? {
            set: props.bio 
           } : undefined,
  jobTitle: props.jobTitle !== undefined ? {
            set: props.jobTitle 
           } : undefined,
  currentWorkspace: props.currentWorkspace !== undefined ? {
            set: props.currentWorkspace 
           } : undefined,
  workspaces: props.workspaces ? {
    upsert: props.workspaces.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        role: item.role !== undefined ? {
            set: item.role  
           } : undefined,
    workspace: item.workspace ? {
      upsert: {
        where: {
          id: item.workspace.id !== undefined ? {
              equals: item.workspace.id 
             } : undefined,
          name: item.workspace.name !== undefined ? {
              equals: item.workspace.name 
             } : undefined,
          slug: item.workspace.slug !== undefined ? {
              equals: item.workspace.slug 
             } : undefined,
          email: item.workspace.email !== undefined ? {
              equals: item.workspace.email 
             } : undefined,
        },
        update: {
          name: item.workspace.name !== undefined ? {
              set: item.workspace.name  
             } : undefined,
          slug: item.workspace.slug !== undefined ? {
              set: item.workspace.slug  
             } : undefined,
          description: item.workspace.description !== undefined ? {
              set: item.workspace.description  
             } : undefined,
          descriptionShort: item.workspace.descriptionShort !== undefined ? {
              set: item.workspace.descriptionShort  
             } : undefined,
          image: item.workspace.image !== undefined ? {
              set: item.workspace.image  
             } : undefined,
          colors: item.workspace.colors !== undefined ? {
              set: item.workspace.colors  
             } : undefined,
          website: item.workspace.website !== undefined ? {
              set: item.workspace.website  
             } : undefined,
          emailDomain: item.workspace.emailDomain !== undefined ? {
              set: item.workspace.emailDomain  
             } : undefined,
          addUsersByEmailDomain: item.workspace.addUsersByEmailDomain !== undefined ? {
              set: item.workspace.addUsersByEmailDomain  
             } : undefined,
          industry: item.workspace.industry !== undefined ? {
              set: item.workspace.industry  
             } : undefined,
          foundingYear: item.workspace.foundingYear !== undefined ? {
              set: item.workspace.foundingYear  
             } : undefined,
          legalName: item.workspace.legalName !== undefined ? {
              set: item.workspace.legalName  
             } : undefined,
          address: item.workspace.address !== undefined ? {
              set: item.workspace.address  
             } : undefined,
          streetAddress: item.workspace.streetAddress !== undefined ? {
              set: item.workspace.streetAddress  
             } : undefined,
          postalCode: item.workspace.postalCode !== undefined ? {
              set: item.workspace.postalCode  
             } : undefined,
          telephone: item.workspace.telephone !== undefined ? {
              set: item.workspace.telephone  
             } : undefined,
          email: item.workspace.email !== undefined ? {
              set: item.workspace.email  
             } : undefined,
          sameAs: item.workspace.sameAs !== undefined ? {
              set: item.workspace.sameAs  
             } : undefined,
          headquarters: item.workspace.headquarters !== undefined ? {
              set: item.workspace.headquarters  
             } : undefined,
          areasOfFocus: item.workspace.areasOfFocus !== undefined ? {
              set: item.workspace.areasOfFocus  
             } : undefined,
        },
        create: {
          name: item.workspace.name !== undefined ? item.workspace.name : undefined,
          slug: item.workspace.slug !== undefined ? item.workspace.slug : undefined,
          description: item.workspace.description !== undefined ? item.workspace.description : undefined,
          descriptionShort: item.workspace.descriptionShort !== undefined ? item.workspace.descriptionShort : undefined,
          image: item.workspace.image !== undefined ? item.workspace.image : undefined,
          colors: item.workspace.colors !== undefined ? item.workspace.colors : undefined,
          website: item.workspace.website !== undefined ? item.workspace.website : undefined,
          emailDomain: item.workspace.emailDomain !== undefined ? item.workspace.emailDomain : undefined,
          addUsersByEmailDomain: item.workspace.addUsersByEmailDomain !== undefined ? item.workspace.addUsersByEmailDomain : undefined,
          industry: item.workspace.industry !== undefined ? item.workspace.industry : undefined,
          foundingYear: item.workspace.foundingYear !== undefined ? item.workspace.foundingYear : undefined,
          legalName: item.workspace.legalName !== undefined ? item.workspace.legalName : undefined,
          address: item.workspace.address !== undefined ? item.workspace.address : undefined,
          streetAddress: item.workspace.streetAddress !== undefined ? item.workspace.streetAddress : undefined,
          postalCode: item.workspace.postalCode !== undefined ? item.workspace.postalCode : undefined,
          telephone: item.workspace.telephone !== undefined ? item.workspace.telephone : undefined,
          email: item.workspace.email !== undefined ? item.workspace.email : undefined,
          sameAs: item.workspace.sameAs !== undefined ? item.workspace.sameAs : undefined,
          headquarters: item.workspace.headquarters !== undefined ? item.workspace.headquarters : undefined,
          areasOfFocus: item.workspace.areasOfFocus !== undefined ? item.workspace.areasOfFocus : undefined,
        },
      }
    } : undefined,
      },
      create: {
        role: item.role !== undefined ? item.role : undefined,
    workspace: item.workspace ? {
      connectOrCreate: {
        where: {
          id: item.workspace.id !== undefined ? item.workspace.id : undefined,
          slug: item.workspace.slug !== undefined ? item.workspace.slug : undefined,
          name: item.workspace.name !== undefined ? {
              equals: item.workspace.name 
             } : undefined,
          email: item.workspace.email !== undefined ? {
              equals: item.workspace.email 
             } : undefined,
        },
        create: {
          name: item.workspace.name !== undefined ? item.workspace.name : undefined,
          slug: item.workspace.slug !== undefined ? item.workspace.slug : undefined,
          description: item.workspace.description !== undefined ? item.workspace.description : undefined,
          descriptionShort: item.workspace.descriptionShort !== undefined ? item.workspace.descriptionShort : undefined,
          image: item.workspace.image !== undefined ? item.workspace.image : undefined,
          colors: item.workspace.colors !== undefined ? item.workspace.colors : undefined,
          website: item.workspace.website !== undefined ? item.workspace.website : undefined,
          emailDomain: item.workspace.emailDomain !== undefined ? item.workspace.emailDomain : undefined,
          addUsersByEmailDomain: item.workspace.addUsersByEmailDomain !== undefined ? item.workspace.addUsersByEmailDomain : undefined,
          industry: item.workspace.industry !== undefined ? item.workspace.industry : undefined,
          foundingYear: item.workspace.foundingYear !== undefined ? item.workspace.foundingYear : undefined,
          legalName: item.workspace.legalName !== undefined ? item.workspace.legalName : undefined,
          address: item.workspace.address !== undefined ? item.workspace.address : undefined,
          streetAddress: item.workspace.streetAddress !== undefined ? item.workspace.streetAddress : undefined,
          postalCode: item.workspace.postalCode !== undefined ? item.workspace.postalCode : undefined,
          telephone: item.workspace.telephone !== undefined ? item.workspace.telephone : undefined,
          email: item.workspace.email !== undefined ? item.workspace.email : undefined,
          sameAs: item.workspace.sameAs !== undefined ? item.workspace.sameAs : undefined,
          headquarters: item.workspace.headquarters !== undefined ? item.workspace.headquarters : undefined,
          areasOfFocus: item.workspace.areasOfFocus !== undefined ? item.workspace.areasOfFocus : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  customer: props.customer ? {
    upsert: {
      where: {
        id: props.customer.id !== undefined ? {
            equals: props.customer.id 
           } : undefined,
        name: props.customer.name !== undefined ? {
            equals: props.customer.name 
           } : undefined,
      },
      update: {
        authUserId: props.customer.authUserId !== undefined ? {
            set: props.customer.authUserId  
           } : undefined,
        name: props.customer.name !== undefined ? {
            set: props.customer.name  
           } : undefined,
        plan: props.customer.plan !== undefined ? {
            set: props.customer.plan  
           } : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? {
            set: props.customer.stripeCustomerId  
           } : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? {
            set: props.customer.stripeSubscriptionId  
           } : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? {
            set: props.customer.stripePriceId  
           } : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? {
            set: props.customer.stripeCurrentPeriodEnd  
           } : undefined,
      },
      create: {
        authUserId: props.customer.authUserId !== undefined ? props.customer.authUserId : undefined,
        name: props.customer.name !== undefined ? props.customer.name : undefined,
        plan: props.customer.plan !== undefined ? props.customer.plan : undefined,
        stripeCustomerId: props.customer.stripeCustomerId !== undefined ? props.customer.stripeCustomerId : undefined,
        stripeSubscriptionId: props.customer.stripeSubscriptionId !== undefined ? props.customer.stripeSubscriptionId : undefined,
        stripePriceId: props.customer.stripePriceId !== undefined ? props.customer.stripePriceId : undefined,
        stripeCurrentPeriodEnd: props.customer.stripeCurrentPeriodEnd !== undefined ? props.customer.stripeCurrentPeriodEnd : undefined,
      },
    }
  } : undefined,
  accounts: props.accounts ? {
    upsert: props.accounts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
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
  sessions: props.sessions ? {
    upsert: props.sessions.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
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
  authenticators: props.authenticators ? {
    upsert: props.authenticators.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
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
  holdings: props.holdings ? {
    upsert: props.holdings.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        quantity: item.quantity !== undefined ? {
            set: item.quantity  
           } : undefined,
        averagePrice: item.averagePrice !== undefined ? {
            set: item.averagePrice  
           } : undefined,
    asset: item.asset ? {
      upsert: {
        where: {
          id: item.asset.id !== undefined ? {
              equals: item.asset.id 
             } : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        update: {
          symbol: item.asset.symbol !== undefined ? {
              set: item.asset.symbol  
             } : undefined,
          name: item.asset.name !== undefined ? {
              set: item.asset.name  
             } : undefined,
          type: item.asset.type !== undefined ? {
              set: item.asset.type  
             } : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? {
              set: item.asset.logoUrl  
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
      create: {
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  trades: props.trades ? {
    upsert: props.trades.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        action: item.action !== undefined ? {
            set: item.action  
           } : undefined,
        quantity: item.quantity !== undefined ? {
            set: item.quantity  
           } : undefined,
        price: item.price !== undefined ? {
            set: item.price  
           } : undefined,
        total: item.total !== undefined ? {
            set: item.total  
           } : undefined,
        timestamp: item.timestamp !== undefined ? {
            set: item.timestamp  
           } : undefined,
    asset: item.asset ? {
      upsert: {
        where: {
          id: item.asset.id !== undefined ? {
              equals: item.asset.id 
             } : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        update: {
          symbol: item.asset.symbol !== undefined ? {
              set: item.asset.symbol  
             } : undefined,
          name: item.asset.name !== undefined ? {
              set: item.asset.name  
             } : undefined,
          type: item.asset.type !== undefined ? {
              set: item.asset.type  
             } : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? {
              set: item.asset.logoUrl  
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
      create: {
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        total: item.total !== undefined ? item.total : undefined,
        timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  orders: props.orders ? {
    upsert: props.orders.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        type: item.type !== undefined ? {
            set: item.type  
           } : undefined,
        action: item.action !== undefined ? {
            set: item.action  
           } : undefined,
        quantity: item.quantity !== undefined ? {
            set: item.quantity  
           } : undefined,
        price: item.price !== undefined ? {
            set: item.price  
           } : undefined,
        status: item.status !== undefined ? {
            set: item.status  
           } : undefined,
    asset: item.asset ? {
      upsert: {
        where: {
          id: item.asset.id !== undefined ? {
              equals: item.asset.id 
             } : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        update: {
          symbol: item.asset.symbol !== undefined ? {
              set: item.asset.symbol  
             } : undefined,
          name: item.asset.name !== undefined ? {
              set: item.asset.name  
             } : undefined,
          type: item.asset.type !== undefined ? {
              set: item.asset.type  
             } : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? {
              set: item.asset.logoUrl  
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
      create: {
        type: item.type !== undefined ? item.type : undefined,
        action: item.action !== undefined ? item.action : undefined,
        quantity: item.quantity !== undefined ? item.quantity : undefined,
        price: item.price !== undefined ? item.price : undefined,
        status: item.status !== undefined ? item.status : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  aiRecommendations: props.aiRecommendations ? {
    upsert: props.aiRecommendations.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        action: item.action !== undefined ? {
            set: item.action  
           } : undefined,
        confidence: item.confidence !== undefined ? {
            set: item.confidence  
           } : undefined,
    asset: item.asset ? {
      upsert: {
        where: {
          id: item.asset.id !== undefined ? {
              equals: item.asset.id 
             } : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        update: {
          symbol: item.asset.symbol !== undefined ? {
              set: item.asset.symbol  
             } : undefined,
          name: item.asset.name !== undefined ? {
              set: item.asset.name  
             } : undefined,
          type: item.asset.type !== undefined ? {
              set: item.asset.type  
             } : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? {
              set: item.asset.logoUrl  
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
      create: {
        action: item.action !== undefined ? item.action : undefined,
        confidence: item.confidence !== undefined ? item.confidence : undefined,
    asset: item.asset ? {
      connectOrCreate: {
        where: {
          id: item.asset.id !== undefined ? item.asset.id : undefined,
          name: item.asset.name !== undefined ? {
              equals: item.asset.name 
             } : undefined,
        },
        create: {
          symbol: item.asset.symbol !== undefined ? item.asset.symbol : undefined,
          name: item.asset.name !== undefined ? item.asset.name : undefined,
          type: item.asset.type !== undefined ? item.asset.type : undefined,
          logoUrl: item.asset.logoUrl !== undefined ? item.asset.logoUrl : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
  riskAllocations: props.riskAllocations ? {
    upsert: props.riskAllocations.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        assetType: item.assetType !== undefined ? {
            set: item.assetType  
           } : undefined,
        allocation: item.allocation !== undefined ? {
            set: item.allocation  
           } : undefined,
      },
      create: {
        assetType: item.assetType !== undefined ? item.assetType : undefined,
        allocation: item.allocation !== undefined ? item.allocation : undefined,
      },
    }))
  } : undefined,
  alerts: props.alerts ? {
    upsert: props.alerts.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        message: item.message !== undefined ? {
            set: item.message  
           } : undefined,
        type: item.type !== undefined ? {
            set: item.type  
           } : undefined,
        isRead: item.isRead !== undefined ? {
            set: item.isRead  
           } : undefined,
      },
      create: {
        message: item.message !== undefined ? item.message : undefined,
        type: item.type !== undefined ? item.type : undefined,
        isRead: item.isRead !== undefined ? item.isRead : undefined,
      },
    }))
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ updateOneUser: UserType }>({ mutation: UPDATE_ONE_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneUser) {
        return response.data.updateOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneUser:', error);
      throw error;
    }
  },

  /**
   * Delete a single User record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted User or null.
   */
  async delete(props: UserType, client: ApolloClient<NormalizedCacheObject>): Promise<UserType> {
    const DELETE_ONE_USER = gql`
      mutation deleteOneUser($where: UserWhereUniqueInput!) {
        deleteOneUser(where: $where) {
          id
          name
          email
          emailVerified
          image
          createdAt
          updatedAt
          role
          workspaces {
            id
            userId
            workspaceId
            user {
              id
            }
            workspace {
              id
              name
              slug
              description
              descriptionShort
              image
              colors
              website
              emailDomain
              addUsersByEmailDomain
              industry
              foundingYear
              legalName
              address
              streetAddress
              postalCode
              city {
                id
                name
                workspace {
                  id
                }
              }
              state {
                id
                name
                workspace {
                  id
                }
                country {
                  id
                }
                countryId
              }
              country {
                id
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              telephone
              email
              sameAs
              headquarters
              locations {
                id
                label
                value
                workspace {
                  id
                }
                workspaceId
              }
              areasOfFocus
              createdAt
              updatedAt
              environmentVariables {
                id
                key
                value
                description
                workspaceId
                workspace {
                  id
                }
                createdAt
                updatedAt
              }
              users {
                id
              }
              stateId
              countryId
              cityId
            }
            role
            createdAt
            updatedAt
          }
          bio
          jobTitle
          currentWorkspace
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
          holdings {
            id
            userId
            assetId
            quantity
            averagePrice
            createdAt
            updatedAt
            user {
              id
            }
            asset {
              id
              symbol
              name
              type
              logoUrl
              createdAt
              updatedAt
              holdings {
                id
              }
              trades {
                id
                userId
                assetId
                action
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              orders {
                id
                userId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              recommendations {
                id
                userId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
            }
          }
          trades {
            id
          }
          orders {
            id
          }
          aiRecommendations {
            id
          }
          riskAllocations {
            id
            userId
            assetType
            allocation
            createdAt
            updatedAt
            user {
              id
            }
          }
          alerts {
            id
            userId
            message
            type
            isRead
            createdAt
            updatedAt
            user {
              id
            }
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneUser: UserType }>({ mutation: DELETE_ONE_USER, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneUser) {
        return response.data.deleteOneUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneUser:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single User record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved User or null.
   */
  async get(props: UserType, client: ApolloClient<NormalizedCacheObject>): Promise<UserType> {
    const GET_ONE_USER = gql`
      query getOneUser($where: UserWhereUniqueInput!) {
        User(where: $where) {
          id
          name
          email
          emailVerified
          image
          createdAt
          updatedAt
          role
          workspaces {
            id
            userId
            workspaceId
            user {
              id
            }
            workspace {
              id
              name
              slug
              description
              descriptionShort
              image
              colors
              website
              emailDomain
              addUsersByEmailDomain
              industry
              foundingYear
              legalName
              address
              streetAddress
              postalCode
              city {
                id
                name
                workspace {
                  id
                }
              }
              state {
                id
                name
                workspace {
                  id
                }
                country {
                  id
                }
                countryId
              }
              country {
                id
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              telephone
              email
              sameAs
              headquarters
              locations {
                id
                label
                value
                workspace {
                  id
                }
                workspaceId
              }
              areasOfFocus
              createdAt
              updatedAt
              environmentVariables {
                id
                key
                value
                description
                workspaceId
                workspace {
                  id
                }
                createdAt
                updatedAt
              }
              users {
                id
              }
              stateId
              countryId
              cityId
            }
            role
            createdAt
            updatedAt
          }
          bio
          jobTitle
          currentWorkspace
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
          holdings {
            id
            userId
            assetId
            quantity
            averagePrice
            createdAt
            updatedAt
            user {
              id
            }
            asset {
              id
              symbol
              name
              type
              logoUrl
              createdAt
              updatedAt
              holdings {
                id
              }
              trades {
                id
                userId
                assetId
                action
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              orders {
                id
                userId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              recommendations {
                id
                userId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
            }
          }
          trades {
            id
          }
          orders {
            id
          }
          aiRecommendations {
            id
          }
          riskAllocations {
            id
            userId
            assetType
            allocation
            createdAt
            updatedAt
            user {
              id
            }
          }
          alerts {
            id
            userId
            message
            type
            isRead
            createdAt
            updatedAt
            user {
              id
            }
          }
        }
      }`;

    const variables = {
      data: {
        name: props.name !== undefined ? props.name : undefined,
        email: props.email !== undefined ? props.email : undefined,
      },
  };
    try {
      const response = await client.query<{ User: UserType }>({ query: GET_ONE_USER, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.User ?? null;
    } catch (error) {
      console.error('Error in getOneUser:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Users records.
   * @param client - Apollo Client instance.
   * @returns An array of User records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<UserType[] | null> {
    const GET_ALL_USER = gql`
      query getAllUser {
        Users {
          id
          name
          email
          emailVerified
          image
          createdAt
          updatedAt
          role
          workspaces {
            id
            userId
            workspaceId
            user {
              id
            }
            workspace {
              id
              name
              slug
              description
              descriptionShort
              image
              colors
              website
              emailDomain
              addUsersByEmailDomain
              industry
              foundingYear
              legalName
              address
              streetAddress
              postalCode
              city {
                id
                name
                workspace {
                  id
                }
              }
              state {
                id
                name
                workspace {
                  id
                }
                country {
                  id
                }
                countryId
              }
              country {
                id
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              telephone
              email
              sameAs
              headquarters
              locations {
                id
                label
                value
                workspace {
                  id
                }
                workspaceId
              }
              areasOfFocus
              createdAt
              updatedAt
              environmentVariables {
                id
                key
                value
                description
                workspaceId
                workspace {
                  id
                }
                createdAt
                updatedAt
              }
              users {
                id
              }
              stateId
              countryId
              cityId
            }
            role
            createdAt
            updatedAt
          }
          bio
          jobTitle
          currentWorkspace
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
          holdings {
            id
            userId
            assetId
            quantity
            averagePrice
            createdAt
            updatedAt
            user {
              id
            }
            asset {
              id
              symbol
              name
              type
              logoUrl
              createdAt
              updatedAt
              holdings {
                id
              }
              trades {
                id
                userId
                assetId
                action
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              orders {
                id
                userId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              recommendations {
                id
                userId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
            }
          }
          trades {
            id
          }
          orders {
            id
          }
          aiRecommendations {
            id
          }
          riskAllocations {
            id
            userId
            assetType
            allocation
            createdAt
            updatedAt
            user {
              id
            }
          }
          alerts {
            id
            userId
            message
            type
            isRead
            createdAt
            updatedAt
            user {
              id
            }
          }
      }
      }`;

    try {
      const response = await client.query<{ Users: UserType[] }>({ query: GET_ALL_USER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Users ?? null;
    } catch (error) {
      console.error('Error in getAllUser:', error);
      throw error;
    }
  },

  /**
   * Find multiple User records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found User records or null.
   */
  async findMany(props: UserType, client: ApolloClient<NormalizedCacheObject>): Promise<UserType[]> {
    const FIND_MANY_USER = gql`
      query findManyUser($where: UserWhereInput!) {
        Users(where: $where) {
          id
          name
          email
          emailVerified
          image
          createdAt
          updatedAt
          role
          workspaces {
            id
            userId
            workspaceId
            user {
              id
            }
            workspace {
              id
              name
              slug
              description
              descriptionShort
              image
              colors
              website
              emailDomain
              addUsersByEmailDomain
              industry
              foundingYear
              legalName
              address
              streetAddress
              postalCode
              city {
                id
                name
                workspace {
                  id
                }
              }
              state {
                id
                name
                workspace {
                  id
                }
                country {
                  id
                }
                countryId
              }
              country {
                id
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              telephone
              email
              sameAs
              headquarters
              locations {
                id
                label
                value
                workspace {
                  id
                }
                workspaceId
              }
              areasOfFocus
              createdAt
              updatedAt
              environmentVariables {
                id
                key
                value
                description
                workspaceId
                workspace {
                  id
                }
                createdAt
                updatedAt
              }
              users {
                id
              }
              stateId
              countryId
              cityId
            }
            role
            createdAt
            updatedAt
          }
          bio
          jobTitle
          currentWorkspace
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
          holdings {
            id
            userId
            assetId
            quantity
            averagePrice
            createdAt
            updatedAt
            user {
              id
            }
            asset {
              id
              symbol
              name
              type
              logoUrl
              createdAt
              updatedAt
              holdings {
                id
              }
              trades {
                id
                userId
                assetId
                action
                quantity
                price
                total
                timestamp
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              orders {
                id
                userId
                assetId
                type
                action
                quantity
                price
                status
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
              recommendations {
                id
                userId
                assetId
                action
                confidence
                createdAt
                updatedAt
                user {
                  id
                }
                asset {
                  id
                }
              }
            }
          }
          trades {
            id
          }
          orders {
            id
          }
          aiRecommendations {
            id
          }
          riskAllocations {
            id
            userId
            assetType
            allocation
            createdAt
            updatedAt
            user {
              id
            }
          }
          alerts {
            id
            userId
            message
            type
            isRead
            createdAt
            updatedAt
            user {
              id
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
        email: props.email !== undefined ? {
            equals: props.email 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query<{ Users: UserType[] }>({ query: FIND_MANY_USER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Users) {
        return response.data.Users;
      } else {
       return [] as UserType[];
      }
    } catch (error) {
      console.error('Error in findManyUser:', error);
      throw error;
    }
  }
};
