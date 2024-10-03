

import { WorkspaceUser as WorkspaceUserType } from './generated/typegraphql-prisma/models/WorkspaceUser';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the WorkspaceUser model.
 */

export const WorkspaceUser = {
  /**
   * Create a new WorkspaceUser record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created WorkspaceUser or null.
   */
  async create(props: WorkspaceUserType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceUserType> {
    const CREATE_ONE_WORKSPACEUSER = gql`
      mutation createOneWorkspaceUser($data: WorkspaceUserCreateInput!) {
        createOneWorkspaceUser(data: $data) {
          id
          userId
          workspaceId
          user {
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
                }
                orders {
                  id
                }
                recommendations {
                  id
                }
              }
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
            aiRecommendations {
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
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              countryId
            }
            country {
              id
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
      }
   `;

    const variables = {
      data: {
          role: props.role !== undefined ? props.role : undefined,
  user: props.user ? {
    connectOrCreate: {
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
        currentWorkspace: props.user.currentWorkspace !== undefined ? props.user.currentWorkspace : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    customer: props.user.customer ? {
      connectOrCreate: {
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
    accounts: props.user.accounts ? {
      connectOrCreate: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? {
      connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? {
      connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    holdings: props.user.holdings ? {
      connectOrCreate: props.user.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
        },
      }))
    } : undefined,
    trades: props.user.trades ? {
      connectOrCreate: props.user.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        },
      }))
    } : undefined,
    orders: props.user.orders ? {
      connectOrCreate: props.user.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    aiRecommendations: props.user.aiRecommendations ? {
      connectOrCreate: props.user.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.user.riskAllocations ? {
      connectOrCreate: props.user.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.user.alerts ? {
      connectOrCreate: props.user.alerts.map((item: any) => ({
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
    }
  } : undefined,
  workspace: props.workspace ? {
    connectOrCreate: {
      where: {
        id: props.workspace.id !== undefined ? props.workspace.id : undefined,
        slug: props.workspace.slug !== undefined ? props.workspace.slug : undefined,
        name: props.workspace.name !== undefined ? {
            equals: props.workspace.name 
           } : undefined,
        email: props.workspace.email !== undefined ? {
            equals: props.workspace.email 
           } : undefined,
      },
      create: {
        name: props.workspace.name !== undefined ? props.workspace.name : undefined,
        slug: props.workspace.slug !== undefined ? props.workspace.slug : undefined,
        description: props.workspace.description !== undefined ? props.workspace.description : undefined,
        descriptionShort: props.workspace.descriptionShort !== undefined ? props.workspace.descriptionShort : undefined,
        image: props.workspace.image !== undefined ? props.workspace.image : undefined,
        colors: props.workspace.colors !== undefined ? props.workspace.colors : undefined,
        website: props.workspace.website !== undefined ? props.workspace.website : undefined,
        emailDomain: props.workspace.emailDomain !== undefined ? props.workspace.emailDomain : undefined,
        addUsersByEmailDomain: props.workspace.addUsersByEmailDomain !== undefined ? props.workspace.addUsersByEmailDomain : undefined,
        industry: props.workspace.industry !== undefined ? props.workspace.industry : undefined,
        foundingYear: props.workspace.foundingYear !== undefined ? props.workspace.foundingYear : undefined,
        legalName: props.workspace.legalName !== undefined ? props.workspace.legalName : undefined,
        address: props.workspace.address !== undefined ? props.workspace.address : undefined,
        streetAddress: props.workspace.streetAddress !== undefined ? props.workspace.streetAddress : undefined,
        postalCode: props.workspace.postalCode !== undefined ? props.workspace.postalCode : undefined,
        telephone: props.workspace.telephone !== undefined ? props.workspace.telephone : undefined,
        email: props.workspace.email !== undefined ? props.workspace.email : undefined,
        sameAs: props.workspace.sameAs !== undefined ? props.workspace.sameAs : undefined,
        headquarters: props.workspace.headquarters !== undefined ? props.workspace.headquarters : undefined,
        areasOfFocus: props.workspace.areasOfFocus !== undefined ? props.workspace.areasOfFocus : undefined,
    city: props.workspace.city ? {
      connectOrCreate: {
        where: {
          id: props.workspace.city.id !== undefined ? props.workspace.city.id : undefined,
          name: props.workspace.city.name !== undefined ? {
              equals: props.workspace.city.name 
             } : undefined,
        },
        create: {
          name: props.workspace.city.name !== undefined ? props.workspace.city.name : undefined,
        },
      }
    } : undefined,
    state: props.workspace.state ? {
      connectOrCreate: {
        where: {
          id: props.workspace.state.id !== undefined ? props.workspace.state.id : undefined,
          name: props.workspace.state.name !== undefined ? {
              equals: props.workspace.state.name 
             } : undefined,
        },
        create: {
          name: props.workspace.state.name !== undefined ? props.workspace.state.name : undefined,
        },
      }
    } : undefined,
    country: props.workspace.country ? {
      connectOrCreate: {
        where: {
          id: props.workspace.country.id !== undefined ? props.workspace.country.id : undefined,
          name: props.workspace.country.name !== undefined ? {
              equals: props.workspace.country.name 
             } : undefined,
        },
        create: {
          name: props.workspace.country.name !== undefined ? props.workspace.country.name : undefined,
        },
      }
    } : undefined,
    locations: props.workspace.locations ? {
      connectOrCreate: props.workspace.locations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: props.workspace.environmentVariables ? {
      connectOrCreate: props.workspace.environmentVariables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          key: item.key !== undefined ? item.key : undefined,
          value: item.value !== undefined ? item.value : undefined,
          description: item.description !== undefined ? item.description : undefined,
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
      const response = await client.mutate<{ createOneWorkspaceUser: WorkspaceUserType }>({ mutation: CREATE_ONE_WORKSPACEUSER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneWorkspaceUser) {
        return response.data.createOneWorkspaceUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneWorkspaceUser:', error);
      throw error;
    }
  },

  /**
   * Create multiple WorkspaceUser records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: WorkspaceUserType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_WORKSPACEUSER = gql`
      mutation createManyWorkspaceUser($data: [WorkspaceUserCreateManyInput!]!) {
        createManyWorkspaceUser(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  userId: prop.userId !== undefined ? prop.userId : undefined,
  workspaceId: prop.workspaceId !== undefined ? prop.workspaceId : undefined,
  role: prop.role !== undefined ? prop.role : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyWorkspaceUser: { count: number } }>({ mutation: CREATE_MANY_WORKSPACEUSER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyWorkspaceUser) {
        return response.data.createManyWorkspaceUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyWorkspaceUser:', error);
      throw error;
    }
  },

  /**
   * Update a single WorkspaceUser record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated WorkspaceUser or null.
   */
  async update(props: WorkspaceUserType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceUserType> {
    const UPDATE_ONE_WORKSPACEUSER = gql`
      mutation updateOneWorkspaceUser($data: WorkspaceUserUpdateInput!, $where: WorkspaceUserWhereUniqueInput!) {
        updateOneWorkspaceUser(data: $data, where: $where) {
          id
          userId
          workspaceId
          user {
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
                }
                orders {
                  id
                }
                recommendations {
                  id
                }
              }
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
            aiRecommendations {
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
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              countryId
            }
            country {
              id
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
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  role: props.role !== undefined ? {
            set: props.role 
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
        currentWorkspace: props.user.currentWorkspace !== undefined ? {
            set: props.user.currentWorkspace  
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
    sessions: props.user.sessions ? {
      upsert: props.user.sessions.map((item: any) => ({
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
    authenticators: props.user.authenticators ? {
      upsert: props.user.authenticators.map((item: any) => ({
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
    holdings: props.user.holdings ? {
      upsert: props.user.holdings.map((item: any) => ({
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
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
        },
      }))
    } : undefined,
    trades: props.user.trades ? {
      upsert: props.user.trades.map((item: any) => ({
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
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        },
      }))
    } : undefined,
    orders: props.user.orders ? {
      upsert: props.user.orders.map((item: any) => ({
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
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    aiRecommendations: props.user.aiRecommendations ? {
      upsert: props.user.aiRecommendations.map((item: any) => ({
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
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.user.riskAllocations ? {
      upsert: props.user.riskAllocations.map((item: any) => ({
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
    alerts: props.user.alerts ? {
      upsert: props.user.alerts.map((item: any) => ({
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
      create: {
        name: props.user.name !== undefined ? props.user.name : undefined,
        email: props.user.email !== undefined ? props.user.email : undefined,
        emailVerified: props.user.emailVerified !== undefined ? props.user.emailVerified : undefined,
        image: props.user.image !== undefined ? props.user.image : undefined,
        role: props.user.role !== undefined ? props.user.role : undefined,
        bio: props.user.bio !== undefined ? props.user.bio : undefined,
        jobTitle: props.user.jobTitle !== undefined ? props.user.jobTitle : undefined,
        currentWorkspace: props.user.currentWorkspace !== undefined ? props.user.currentWorkspace : undefined,
        plan: props.user.plan !== undefined ? props.user.plan : undefined,
    customer: props.user.customer ? {
      connectOrCreate: {
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
    accounts: props.user.accounts ? {
      connectOrCreate: props.user.accounts.map((item: any) => ({
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
    sessions: props.user.sessions ? {
      connectOrCreate: props.user.sessions.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          sessionToken: item.sessionToken !== undefined ? item.sessionToken : undefined,
          expires: item.expires !== undefined ? item.expires : undefined,
        },
      }))
    } : undefined,
    authenticators: props.user.authenticators ? {
      connectOrCreate: props.user.authenticators.map((item: any) => ({
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
    holdings: props.user.holdings ? {
      connectOrCreate: props.user.holdings.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          averagePrice: item.averagePrice !== undefined ? item.averagePrice : undefined,
        },
      }))
    } : undefined,
    trades: props.user.trades ? {
      connectOrCreate: props.user.trades.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          total: item.total !== undefined ? item.total : undefined,
          timestamp: item.timestamp !== undefined ? item.timestamp : undefined,
        },
      }))
    } : undefined,
    orders: props.user.orders ? {
      connectOrCreate: props.user.orders.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          type: item.type !== undefined ? item.type : undefined,
          action: item.action !== undefined ? item.action : undefined,
          quantity: item.quantity !== undefined ? item.quantity : undefined,
          price: item.price !== undefined ? item.price : undefined,
          status: item.status !== undefined ? item.status : undefined,
        },
      }))
    } : undefined,
    aiRecommendations: props.user.aiRecommendations ? {
      connectOrCreate: props.user.aiRecommendations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          action: item.action !== undefined ? item.action : undefined,
          confidence: item.confidence !== undefined ? item.confidence : undefined,
        },
      }))
    } : undefined,
    riskAllocations: props.user.riskAllocations ? {
      connectOrCreate: props.user.riskAllocations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          assetType: item.assetType !== undefined ? item.assetType : undefined,
          allocation: item.allocation !== undefined ? item.allocation : undefined,
        },
      }))
    } : undefined,
    alerts: props.user.alerts ? {
      connectOrCreate: props.user.alerts.map((item: any) => ({
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
    }
  } : undefined,
  workspace: props.workspace ? {
    upsert: {
      where: {
        id: props.workspace.id !== undefined ? {
            equals: props.workspace.id 
           } : undefined,
        name: props.workspace.name !== undefined ? {
            equals: props.workspace.name 
           } : undefined,
        slug: props.workspace.slug !== undefined ? {
            equals: props.workspace.slug 
           } : undefined,
        email: props.workspace.email !== undefined ? {
            equals: props.workspace.email 
           } : undefined,
      },
      update: {
        name: props.workspace.name !== undefined ? {
            set: props.workspace.name  
           } : undefined,
        slug: props.workspace.slug !== undefined ? {
            set: props.workspace.slug  
           } : undefined,
        description: props.workspace.description !== undefined ? {
            set: props.workspace.description  
           } : undefined,
        descriptionShort: props.workspace.descriptionShort !== undefined ? {
            set: props.workspace.descriptionShort  
           } : undefined,
        image: props.workspace.image !== undefined ? {
            set: props.workspace.image  
           } : undefined,
        colors: props.workspace.colors !== undefined ? {
            set: props.workspace.colors  
           } : undefined,
        website: props.workspace.website !== undefined ? {
            set: props.workspace.website  
           } : undefined,
        emailDomain: props.workspace.emailDomain !== undefined ? {
            set: props.workspace.emailDomain  
           } : undefined,
        addUsersByEmailDomain: props.workspace.addUsersByEmailDomain !== undefined ? {
            set: props.workspace.addUsersByEmailDomain  
           } : undefined,
        industry: props.workspace.industry !== undefined ? {
            set: props.workspace.industry  
           } : undefined,
        foundingYear: props.workspace.foundingYear !== undefined ? {
            set: props.workspace.foundingYear  
           } : undefined,
        legalName: props.workspace.legalName !== undefined ? {
            set: props.workspace.legalName  
           } : undefined,
        address: props.workspace.address !== undefined ? {
            set: props.workspace.address  
           } : undefined,
        streetAddress: props.workspace.streetAddress !== undefined ? {
            set: props.workspace.streetAddress  
           } : undefined,
        postalCode: props.workspace.postalCode !== undefined ? {
            set: props.workspace.postalCode  
           } : undefined,
        telephone: props.workspace.telephone !== undefined ? {
            set: props.workspace.telephone  
           } : undefined,
        email: props.workspace.email !== undefined ? {
            set: props.workspace.email  
           } : undefined,
        sameAs: props.workspace.sameAs !== undefined ? {
            set: props.workspace.sameAs  
           } : undefined,
        headquarters: props.workspace.headquarters !== undefined ? {
            set: props.workspace.headquarters  
           } : undefined,
        areasOfFocus: props.workspace.areasOfFocus !== undefined ? {
            set: props.workspace.areasOfFocus  
           } : undefined,
    city: props.workspace.city ? {
      upsert: {
        where: {
          id: props.workspace.city.id !== undefined ? {
              equals: props.workspace.city.id 
             } : undefined,
          name: props.workspace.city.name !== undefined ? {
              equals: props.workspace.city.name 
             } : undefined,
        },
        update: {
          name: props.workspace.city.name !== undefined ? {
              set: props.workspace.city.name  
             } : undefined,
        },
        create: {
          name: props.workspace.city.name !== undefined ? props.workspace.city.name : undefined,
        },
      }
    } : undefined,
    state: props.workspace.state ? {
      upsert: {
        where: {
          id: props.workspace.state.id !== undefined ? {
              equals: props.workspace.state.id 
             } : undefined,
          name: props.workspace.state.name !== undefined ? {
              equals: props.workspace.state.name 
             } : undefined,
        },
        update: {
          name: props.workspace.state.name !== undefined ? {
              set: props.workspace.state.name  
             } : undefined,
        },
        create: {
          name: props.workspace.state.name !== undefined ? props.workspace.state.name : undefined,
        },
      }
    } : undefined,
    country: props.workspace.country ? {
      upsert: {
        where: {
          id: props.workspace.country.id !== undefined ? {
              equals: props.workspace.country.id 
             } : undefined,
          name: props.workspace.country.name !== undefined ? {
              equals: props.workspace.country.name 
             } : undefined,
        },
        update: {
          name: props.workspace.country.name !== undefined ? {
              set: props.workspace.country.name  
             } : undefined,
        },
        create: {
          name: props.workspace.country.name !== undefined ? props.workspace.country.name : undefined,
        },
      }
    } : undefined,
    locations: props.workspace.locations ? {
      upsert: props.workspace.locations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          label: item.label !== undefined ? {
              set: item.label  
             } : undefined,
          value: item.value !== undefined ? {
              set: item.value  
             } : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: props.workspace.environmentVariables ? {
      upsert: props.workspace.environmentVariables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          key: item.key !== undefined ? {
              set: item.key  
             } : undefined,
          value: item.value !== undefined ? {
              set: item.value  
             } : undefined,
          description: item.description !== undefined ? {
              set: item.description  
             } : undefined,
        },
        create: {
          key: item.key !== undefined ? item.key : undefined,
          value: item.value !== undefined ? item.value : undefined,
          description: item.description !== undefined ? item.description : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.workspace.name !== undefined ? props.workspace.name : undefined,
        slug: props.workspace.slug !== undefined ? props.workspace.slug : undefined,
        description: props.workspace.description !== undefined ? props.workspace.description : undefined,
        descriptionShort: props.workspace.descriptionShort !== undefined ? props.workspace.descriptionShort : undefined,
        image: props.workspace.image !== undefined ? props.workspace.image : undefined,
        colors: props.workspace.colors !== undefined ? props.workspace.colors : undefined,
        website: props.workspace.website !== undefined ? props.workspace.website : undefined,
        emailDomain: props.workspace.emailDomain !== undefined ? props.workspace.emailDomain : undefined,
        addUsersByEmailDomain: props.workspace.addUsersByEmailDomain !== undefined ? props.workspace.addUsersByEmailDomain : undefined,
        industry: props.workspace.industry !== undefined ? props.workspace.industry : undefined,
        foundingYear: props.workspace.foundingYear !== undefined ? props.workspace.foundingYear : undefined,
        legalName: props.workspace.legalName !== undefined ? props.workspace.legalName : undefined,
        address: props.workspace.address !== undefined ? props.workspace.address : undefined,
        streetAddress: props.workspace.streetAddress !== undefined ? props.workspace.streetAddress : undefined,
        postalCode: props.workspace.postalCode !== undefined ? props.workspace.postalCode : undefined,
        telephone: props.workspace.telephone !== undefined ? props.workspace.telephone : undefined,
        email: props.workspace.email !== undefined ? props.workspace.email : undefined,
        sameAs: props.workspace.sameAs !== undefined ? props.workspace.sameAs : undefined,
        headquarters: props.workspace.headquarters !== undefined ? props.workspace.headquarters : undefined,
        areasOfFocus: props.workspace.areasOfFocus !== undefined ? props.workspace.areasOfFocus : undefined,
    city: props.workspace.city ? {
      connectOrCreate: {
        where: {
          id: props.workspace.city.id !== undefined ? props.workspace.city.id : undefined,
          name: props.workspace.city.name !== undefined ? {
              equals: props.workspace.city.name 
             } : undefined,
        },
        create: {
          name: props.workspace.city.name !== undefined ? props.workspace.city.name : undefined,
        },
      }
    } : undefined,
    state: props.workspace.state ? {
      connectOrCreate: {
        where: {
          id: props.workspace.state.id !== undefined ? props.workspace.state.id : undefined,
          name: props.workspace.state.name !== undefined ? {
              equals: props.workspace.state.name 
             } : undefined,
        },
        create: {
          name: props.workspace.state.name !== undefined ? props.workspace.state.name : undefined,
        },
      }
    } : undefined,
    country: props.workspace.country ? {
      connectOrCreate: {
        where: {
          id: props.workspace.country.id !== undefined ? props.workspace.country.id : undefined,
          name: props.workspace.country.name !== undefined ? {
              equals: props.workspace.country.name 
             } : undefined,
        },
        create: {
          name: props.workspace.country.name !== undefined ? props.workspace.country.name : undefined,
        },
      }
    } : undefined,
    locations: props.workspace.locations ? {
      connectOrCreate: props.workspace.locations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: props.workspace.environmentVariables ? {
      connectOrCreate: props.workspace.environmentVariables.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          key: item.key !== undefined ? item.key : undefined,
          value: item.value !== undefined ? item.value : undefined,
          description: item.description !== undefined ? item.description : undefined,
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
      const response = await client.mutate<{ updateOneWorkspaceUser: WorkspaceUserType }>({ mutation: UPDATE_ONE_WORKSPACEUSER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneWorkspaceUser) {
        return response.data.updateOneWorkspaceUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneWorkspaceUser:', error);
      throw error;
    }
  },

  /**
   * Delete a single WorkspaceUser record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted WorkspaceUser or null.
   */
  async delete(props: WorkspaceUserType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceUserType> {
    const DELETE_ONE_WORKSPACEUSER = gql`
      mutation deleteOneWorkspaceUser($where: WorkspaceUserWhereUniqueInput!) {
        deleteOneWorkspaceUser(where: $where) {
          id
          userId
          workspaceId
          user {
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
                }
                orders {
                  id
                }
                recommendations {
                  id
                }
              }
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
            aiRecommendations {
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
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              countryId
            }
            country {
              id
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
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneWorkspaceUser: WorkspaceUserType }>({ mutation: DELETE_ONE_WORKSPACEUSER, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneWorkspaceUser) {
        return response.data.deleteOneWorkspaceUser;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneWorkspaceUser:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single WorkspaceUser record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved WorkspaceUser or null.
   */
  async get(props: WorkspaceUserType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceUserType> {
    const GET_ONE_WORKSPACEUSER = gql`
      query getOneWorkspaceUser($where: WorkspaceUserWhereUniqueInput!) {
        WorkspaceUser(where: $where) {
          id
          userId
          workspaceId
          user {
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
                }
                orders {
                  id
                }
                recommendations {
                  id
                }
              }
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
            aiRecommendations {
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
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              countryId
            }
            country {
              id
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
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ WorkspaceUser: WorkspaceUserType }>({ query: GET_ONE_WORKSPACEUSER, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.WorkspaceUser ?? null;
    } catch (error) {
      console.error('Error in getOneWorkspaceUser:', error);
      throw error;
    }
  },

  /**
   * Retrieve all WorkspaceUsers records.
   * @param client - Apollo Client instance.
   * @returns An array of WorkspaceUser records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceUserType[] | null> {
    const GET_ALL_WORKSPACEUSER = gql`
      query getAllWorkspaceUser {
        WorkspaceUsers {
          id
          userId
          workspaceId
          user {
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
                }
                orders {
                  id
                }
                recommendations {
                  id
                }
              }
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
            aiRecommendations {
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
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              countryId
            }
            country {
              id
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
      }`;

    try {
      const response = await client.query<{ WorkspaceUsers: WorkspaceUserType[] }>({ query: GET_ALL_WORKSPACEUSER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.WorkspaceUsers ?? null;
    } catch (error) {
      console.error('Error in getAllWorkspaceUser:', error);
      throw error;
    }
  },

  /**
   * Find multiple WorkspaceUser records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found WorkspaceUser records or null.
   */
  async findMany(props: WorkspaceUserType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceUserType[]> {
    const FIND_MANY_WORKSPACEUSER = gql`
      query findManyWorkspaceUser($where: WorkspaceUserWhereInput!) {
        WorkspaceUsers(where: $where) {
          id
          userId
          workspaceId
          user {
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
                }
                orders {
                  id
                }
                recommendations {
                  id
                }
              }
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
            aiRecommendations {
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
                name
                states {
                  id
                }
                workspace {
                  id
                }
              }
              countryId
            }
            country {
              id
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
      const response = await client.query<{ WorkspaceUsers: WorkspaceUserType[] }>({ query: FIND_MANY_WORKSPACEUSER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.WorkspaceUsers) {
        return response.data.WorkspaceUsers;
      } else {
       return [] as WorkspaceUserType[];
      }
    } catch (error) {
      console.error('Error in findManyWorkspaceUser:', error);
      throw error;
    }
  }
};
