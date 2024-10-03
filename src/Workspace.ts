

import { Workspace as WorkspaceType } from './generated/typegraphql-prisma/models/Workspace';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Workspace model.
 */

export const Workspace = {
  /**
   * Create a new Workspace record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Workspace or null.
   */
  async create(props: WorkspaceType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceType> {
    const CREATE_ONE_WORKSPACE = gql`
      mutation createOneWorkspace($data: WorkspaceCreateInput!) {
        createOneWorkspace(data: $data) {
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
            }
            role
            createdAt
            updatedAt
          }
          stateId
          countryId
          cityId
        }
      }
   `;

    const variables = {
      data: {
          name: props.name !== undefined ? props.name : undefined,
  slug: props.slug !== undefined ? props.slug : undefined,
  description: props.description !== undefined ? props.description : undefined,
  descriptionShort: props.descriptionShort !== undefined ? props.descriptionShort : undefined,
  image: props.image !== undefined ? props.image : undefined,
  colors: props.colors !== undefined ? props.colors : undefined,
  website: props.website !== undefined ? props.website : undefined,
  emailDomain: props.emailDomain !== undefined ? props.emailDomain : undefined,
  addUsersByEmailDomain: props.addUsersByEmailDomain !== undefined ? props.addUsersByEmailDomain : undefined,
  industry: props.industry !== undefined ? props.industry : undefined,
  foundingYear: props.foundingYear !== undefined ? props.foundingYear : undefined,
  legalName: props.legalName !== undefined ? props.legalName : undefined,
  address: props.address !== undefined ? props.address : undefined,
  streetAddress: props.streetAddress !== undefined ? props.streetAddress : undefined,
  postalCode: props.postalCode !== undefined ? props.postalCode : undefined,
  telephone: props.telephone !== undefined ? props.telephone : undefined,
  email: props.email !== undefined ? props.email : undefined,
  sameAs: props.sameAs !== undefined ? props.sameAs : undefined,
  headquarters: props.headquarters !== undefined ? props.headquarters : undefined,
  areasOfFocus: props.areasOfFocus !== undefined ? props.areasOfFocus : undefined,
  city: props.city ? {
    connectOrCreate: {
      where: {
        id: props.city.id !== undefined ? props.city.id : undefined,
        name: props.city.name !== undefined ? {
            equals: props.city.name 
           } : undefined,
      },
      create: {
        name: props.city.name !== undefined ? props.city.name : undefined,
      },
    }
  } : undefined,
  state: props.state ? {
    connectOrCreate: {
      where: {
        id: props.state.id !== undefined ? props.state.id : undefined,
        name: props.state.name !== undefined ? {
            equals: props.state.name 
           } : undefined,
      },
      create: {
        name: props.state.name !== undefined ? props.state.name : undefined,
    country: props.state.country ? {
      connectOrCreate: {
        where: {
          id: props.state.country.id !== undefined ? props.state.country.id : undefined,
          name: props.state.country.name !== undefined ? {
              equals: props.state.country.name 
             } : undefined,
        },
        create: {
          name: props.state.country.name !== undefined ? props.state.country.name : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
  country: props.country ? {
    connectOrCreate: {
      where: {
        id: props.country.id !== undefined ? props.country.id : undefined,
        name: props.country.name !== undefined ? {
            equals: props.country.name 
           } : undefined,
      },
      create: {
        name: props.country.name !== undefined ? props.country.name : undefined,
    states: props.country.states ? {
      connectOrCreate: props.country.states.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
        },
        create: {
          name: item.name !== undefined ? item.name : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  locations: props.locations ? {
    connectOrCreate: props.locations.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        label: item.label !== undefined ? item.label : undefined,
        value: item.value !== undefined ? item.value : undefined,
      },
    }))
  } : undefined,
  environmentVariables: props.environmentVariables ? {
    connectOrCreate: props.environmentVariables.map((item: any) => ({
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
  users: props.users ? {
    connectOrCreate: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      create: {
        role: item.role !== undefined ? item.role : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentWorkspace: item.user.currentWorkspace !== undefined ? item.user.currentWorkspace : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createOneWorkspace: WorkspaceType }>({ mutation: CREATE_ONE_WORKSPACE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneWorkspace) {
        return response.data.createOneWorkspace;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneWorkspace:', error);
      throw error;
    }
  },

  /**
   * Create multiple Workspace records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: WorkspaceType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_WORKSPACE = gql`
      mutation createManyWorkspace($data: [WorkspaceCreateManyInput!]!) {
        createManyWorkspace(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  name: prop.name !== undefined ? prop.name : undefined,
  slug: prop.slug !== undefined ? prop.slug : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  descriptionShort: prop.descriptionShort !== undefined ? prop.descriptionShort : undefined,
  image: prop.image !== undefined ? prop.image : undefined,
  colors: prop.colors !== undefined ? prop.colors : undefined,
  website: prop.website !== undefined ? prop.website : undefined,
  emailDomain: prop.emailDomain !== undefined ? prop.emailDomain : undefined,
  addUsersByEmailDomain: prop.addUsersByEmailDomain !== undefined ? prop.addUsersByEmailDomain : undefined,
  industry: prop.industry !== undefined ? prop.industry : undefined,
  foundingYear: prop.foundingYear !== undefined ? prop.foundingYear : undefined,
  legalName: prop.legalName !== undefined ? prop.legalName : undefined,
  address: prop.address !== undefined ? prop.address : undefined,
  streetAddress: prop.streetAddress !== undefined ? prop.streetAddress : undefined,
  postalCode: prop.postalCode !== undefined ? prop.postalCode : undefined,
  telephone: prop.telephone !== undefined ? prop.telephone : undefined,
  email: prop.email !== undefined ? prop.email : undefined,
  sameAs: prop.sameAs !== undefined ? prop.sameAs : undefined,
  headquarters: prop.headquarters !== undefined ? prop.headquarters : undefined,
  areasOfFocus: prop.areasOfFocus !== undefined ? prop.areasOfFocus : undefined,
  stateId: prop.stateId !== undefined ? prop.stateId : undefined,
  countryId: prop.countryId !== undefined ? prop.countryId : undefined,
  cityId: prop.cityId !== undefined ? prop.cityId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyWorkspace: { count: number } }>({ mutation: CREATE_MANY_WORKSPACE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyWorkspace) {
        return response.data.createManyWorkspace;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyWorkspace:', error);
      throw error;
    }
  },

  /**
   * Update a single Workspace record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated Workspace or null.
   */
  async update(props: WorkspaceType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceType> {
    const UPDATE_ONE_WORKSPACE = gql`
      mutation updateOneWorkspace($data: WorkspaceUpdateInput!, $where: WorkspaceWhereUniqueInput!) {
        updateOneWorkspace(data: $data, where: $where) {
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
            }
            role
            createdAt
            updatedAt
          }
          stateId
          countryId
          cityId
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        slug: props.slug !== undefined ? props.slug : undefined,
        name: props.name !== undefined ? {
            equals: props.name 
           } : undefined,
        email: props.email !== undefined ? {
            equals: props.email 
           } : undefined,
      },
      data: {
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  descriptionShort: props.descriptionShort !== undefined ? {
            set: props.descriptionShort 
           } : undefined,
  image: props.image !== undefined ? {
            set: props.image 
           } : undefined,
  website: props.website !== undefined ? {
            set: props.website 
           } : undefined,
  emailDomain: props.emailDomain !== undefined ? {
            set: props.emailDomain 
           } : undefined,
  industry: props.industry !== undefined ? {
            set: props.industry 
           } : undefined,
  legalName: props.legalName !== undefined ? {
            set: props.legalName 
           } : undefined,
  address: props.address !== undefined ? {
            set: props.address 
           } : undefined,
  streetAddress: props.streetAddress !== undefined ? {
            set: props.streetAddress 
           } : undefined,
  postalCode: props.postalCode !== undefined ? {
            set: props.postalCode 
           } : undefined,
  telephone: props.telephone !== undefined ? {
            set: props.telephone 
           } : undefined,
  email: props.email !== undefined ? {
            set: props.email 
           } : undefined,
  headquarters: props.headquarters !== undefined ? {
            set: props.headquarters 
           } : undefined,
  city: props.city ? {
    upsert: {
      where: {
        id: props.city.id !== undefined ? {
            equals: props.city.id 
           } : undefined,
        name: props.city.name !== undefined ? {
            equals: props.city.name 
           } : undefined,
      },
      update: {
        name: props.city.name !== undefined ? {
            set: props.city.name  
           } : undefined,
      },
      create: {
        name: props.city.name !== undefined ? props.city.name : undefined,
      },
    }
  } : undefined,
  state: props.state ? {
    upsert: {
      where: {
        id: props.state.id !== undefined ? {
            equals: props.state.id 
           } : undefined,
        name: props.state.name !== undefined ? {
            equals: props.state.name 
           } : undefined,
      },
      update: {
        name: props.state.name !== undefined ? {
            set: props.state.name  
           } : undefined,
    country: props.state.country ? {
      upsert: {
        where: {
          id: props.state.country.id !== undefined ? {
              equals: props.state.country.id 
             } : undefined,
          name: props.state.country.name !== undefined ? {
              equals: props.state.country.name 
             } : undefined,
        },
        update: {
          name: props.state.country.name !== undefined ? {
              set: props.state.country.name  
             } : undefined,
        },
        create: {
          name: props.state.country.name !== undefined ? props.state.country.name : undefined,
        },
      }
    } : undefined,
      },
      create: {
        name: props.state.name !== undefined ? props.state.name : undefined,
    country: props.state.country ? {
      connectOrCreate: {
        where: {
          id: props.state.country.id !== undefined ? props.state.country.id : undefined,
          name: props.state.country.name !== undefined ? {
              equals: props.state.country.name 
             } : undefined,
        },
        create: {
          name: props.state.country.name !== undefined ? props.state.country.name : undefined,
        },
      }
    } : undefined,
      },
    }
  } : undefined,
  country: props.country ? {
    upsert: {
      where: {
        id: props.country.id !== undefined ? {
            equals: props.country.id 
           } : undefined,
        name: props.country.name !== undefined ? {
            equals: props.country.name 
           } : undefined,
      },
      update: {
        name: props.country.name !== undefined ? {
            set: props.country.name  
           } : undefined,
    states: props.country.states ? {
      upsert: props.country.states.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
        },
        update: {
          name: item.name !== undefined ? {
              set: item.name  
             } : undefined,
        },
        create: {
          name: item.name !== undefined ? item.name : undefined,
        },
      }))
    } : undefined,
      },
      create: {
        name: props.country.name !== undefined ? props.country.name : undefined,
    states: props.country.states ? {
      connectOrCreate: props.country.states.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
          name: item.name !== undefined ? {
              equals: item.name 
             } : undefined,
        },
        create: {
          name: item.name !== undefined ? item.name : undefined,
        },
      }))
    } : undefined,
      },
    }
  } : undefined,
  locations: props.locations ? {
    upsert: props.locations.map((item: any) => ({
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
  environmentVariables: props.environmentVariables ? {
    upsert: props.environmentVariables.map((item: any) => ({
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
  users: props.users ? {
    upsert: props.users.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
      },
      update: {
        role: item.role !== undefined ? {
            set: item.role  
           } : undefined,
    user: item.user ? {
      upsert: {
        where: {
          id: item.user.id !== undefined ? {
              equals: item.user.id 
             } : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
          email: item.user.email !== undefined ? {
              equals: item.user.email 
             } : undefined,
        },
        update: {
          name: item.user.name !== undefined ? {
              set: item.user.name  
             } : undefined,
          email: item.user.email !== undefined ? {
              set: item.user.email  
             } : undefined,
          emailVerified: item.user.emailVerified !== undefined ? {
              set: item.user.emailVerified  
             } : undefined,
          image: item.user.image !== undefined ? {
              set: item.user.image  
             } : undefined,
          role: item.user.role !== undefined ? {
              set: item.user.role  
             } : undefined,
          bio: item.user.bio !== undefined ? {
              set: item.user.bio  
             } : undefined,
          jobTitle: item.user.jobTitle !== undefined ? {
              set: item.user.jobTitle  
             } : undefined,
          currentWorkspace: item.user.currentWorkspace !== undefined ? {
              set: item.user.currentWorkspace  
             } : undefined,
          plan: item.user.plan !== undefined ? {
              set: item.user.plan  
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentWorkspace: item.user.currentWorkspace !== undefined ? item.user.currentWorkspace : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
      },
      create: {
        role: item.role !== undefined ? item.role : undefined,
    user: item.user ? {
      connectOrCreate: {
        where: {
          id: item.user.id !== undefined ? item.user.id : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          name: item.user.name !== undefined ? {
              equals: item.user.name 
             } : undefined,
        },
        create: {
          name: item.user.name !== undefined ? item.user.name : undefined,
          email: item.user.email !== undefined ? item.user.email : undefined,
          emailVerified: item.user.emailVerified !== undefined ? item.user.emailVerified : undefined,
          image: item.user.image !== undefined ? item.user.image : undefined,
          role: item.user.role !== undefined ? item.user.role : undefined,
          bio: item.user.bio !== undefined ? item.user.bio : undefined,
          jobTitle: item.user.jobTitle !== undefined ? item.user.jobTitle : undefined,
          currentWorkspace: item.user.currentWorkspace !== undefined ? item.user.currentWorkspace : undefined,
          plan: item.user.plan !== undefined ? item.user.plan : undefined,
        },
      }
    } : undefined,
      },
    }))
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ updateOneWorkspace: WorkspaceType }>({ mutation: UPDATE_ONE_WORKSPACE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneWorkspace) {
        return response.data.updateOneWorkspace;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneWorkspace:', error);
      throw error;
    }
  },

  /**
   * Delete a single Workspace record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted Workspace or null.
   */
  async delete(props: WorkspaceType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceType> {
    const DELETE_ONE_WORKSPACE = gql`
      mutation deleteOneWorkspace($where: WorkspaceWhereUniqueInput!) {
        deleteOneWorkspace(where: $where) {
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
            }
            role
            createdAt
            updatedAt
          }
          stateId
          countryId
          cityId
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneWorkspace: WorkspaceType }>({ mutation: DELETE_ONE_WORKSPACE, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneWorkspace) {
        return response.data.deleteOneWorkspace;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneWorkspace:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Workspace record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved Workspace or null.
   */
  async get(props: WorkspaceType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceType> {
    const GET_ONE_WORKSPACE = gql`
      query getOneWorkspace($where: WorkspaceWhereUniqueInput!) {
        Workspace(where: $where) {
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
            }
            role
            createdAt
            updatedAt
          }
          stateId
          countryId
          cityId
        }
      }`;

    const variables = {
      data: {
        email: props.email !== undefined ? props.email : undefined,
      },
  };
    try {
      const response = await client.query<{ Workspace: WorkspaceType }>({ query: GET_ONE_WORKSPACE, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Workspace ?? null;
    } catch (error) {
      console.error('Error in getOneWorkspace:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Workspaces records.
   * @param client - Apollo Client instance.
   * @returns An array of Workspace records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceType[] | null> {
    const GET_ALL_WORKSPACE = gql`
      query getAllWorkspace {
        Workspaces {
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
            }
            role
            createdAt
            updatedAt
          }
          stateId
          countryId
          cityId
      }
      }`;

    try {
      const response = await client.query<{ Workspaces: WorkspaceType[] }>({ query: GET_ALL_WORKSPACE });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Workspaces ?? null;
    } catch (error) {
      console.error('Error in getAllWorkspace:', error);
      throw error;
    }
  },

  /**
   * Find multiple Workspace records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Workspace records or null.
   */
  async findMany(props: WorkspaceType, client: ApolloClient<NormalizedCacheObject>): Promise<WorkspaceType[]> {
    const FIND_MANY_WORKSPACE = gql`
      query findManyWorkspace($where: WorkspaceWhereInput!) {
        Workspaces(where: $where) {
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
            }
            role
            createdAt
            updatedAt
          }
          stateId
          countryId
          cityId
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
        slug: props.slug !== undefined ? {
            equals: props.slug 
           } : undefined,
        email: props.email !== undefined ? {
            equals: props.email 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query<{ Workspaces: WorkspaceType[] }>({ query: FIND_MANY_WORKSPACE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Workspaces) {
        return response.data.Workspaces;
      } else {
       return [] as WorkspaceType[];
      }
    } catch (error) {
      console.error('Error in findManyWorkspace:', error);
      throw error;
    }
  }
};
