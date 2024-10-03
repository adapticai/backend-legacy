

import { EnvironmentVariable as EnvironmentVariableType } from './generated/typegraphql-prisma/models/EnvironmentVariable';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the EnvironmentVariable model.
 */

export const EnvironmentVariable = {
  /**
   * Create a new EnvironmentVariable record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created EnvironmentVariable or null.
   */
  async create(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType> {
    const CREATE_ONE_ENVIRONMENTVARIABLE = gql`
      mutation createOneEnvironmentVariable($data: EnvironmentVariableCreateInput!) {
        createOneEnvironmentVariable(data: $data) {
          id
          key
          value
          description
          workspaceId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                holdings {
                  id
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
                }
                alerts {
                  id
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
          createdAt
          updatedAt
        }
      }
   `;

    const variables = {
      data: {
          key: props.key !== undefined ? props.key : undefined,
  value: props.value !== undefined ? props.value : undefined,
  description: props.description !== undefined ? props.description : undefined,
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
    users: props.workspace.users ? {
      connectOrCreate: props.workspace.users.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
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
      const response = await client.mutate<{ createOneEnvironmentVariable: EnvironmentVariableType }>({ mutation: CREATE_ONE_ENVIRONMENTVARIABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneEnvironmentVariable) {
        return response.data.createOneEnvironmentVariable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Create multiple EnvironmentVariable records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: EnvironmentVariableType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_ENVIRONMENTVARIABLE = gql`
      mutation createManyEnvironmentVariable($data: [EnvironmentVariableCreateManyInput!]!) {
        createManyEnvironmentVariable(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  key: prop.key !== undefined ? prop.key : undefined,
  value: prop.value !== undefined ? prop.value : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  workspaceId: prop.workspaceId !== undefined ? prop.workspaceId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyEnvironmentVariable: { count: number } }>({ mutation: CREATE_MANY_ENVIRONMENTVARIABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyEnvironmentVariable) {
        return response.data.createManyEnvironmentVariable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Update a single EnvironmentVariable record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated EnvironmentVariable or null.
   */
  async update(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType> {
    const UPDATE_ONE_ENVIRONMENTVARIABLE = gql`
      mutation updateOneEnvironmentVariable($data: EnvironmentVariableUpdateInput!, $where: EnvironmentVariableWhereUniqueInput!) {
        updateOneEnvironmentVariable(data: $data, where: $where) {
          id
          key
          value
          description
          workspaceId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                holdings {
                  id
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
                }
                alerts {
                  id
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
          createdAt
          updatedAt
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
  description: props.description !== undefined ? {
            set: props.description 
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
    users: props.workspace.users ? {
      upsert: props.workspace.users.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        update: {
          role: item.role !== undefined ? {
              set: item.role  
             } : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
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
    users: props.workspace.users ? {
      connectOrCreate: props.workspace.users.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
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
      const response = await client.mutate<{ updateOneEnvironmentVariable: EnvironmentVariableType }>({ mutation: UPDATE_ONE_ENVIRONMENTVARIABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneEnvironmentVariable) {
        return response.data.updateOneEnvironmentVariable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Delete a single EnvironmentVariable record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted EnvironmentVariable or null.
   */
  async delete(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType> {
    const DELETE_ONE_ENVIRONMENTVARIABLE = gql`
      mutation deleteOneEnvironmentVariable($where: EnvironmentVariableWhereUniqueInput!) {
        deleteOneEnvironmentVariable(where: $where) {
          id
          key
          value
          description
          workspaceId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                holdings {
                  id
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
                }
                alerts {
                  id
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
      const response = await client.mutate<{ deleteOneEnvironmentVariable: EnvironmentVariableType }>({ mutation: DELETE_ONE_ENVIRONMENTVARIABLE, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneEnvironmentVariable) {
        return response.data.deleteOneEnvironmentVariable;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single EnvironmentVariable record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved EnvironmentVariable or null.
   */
  async get(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType> {
    const GET_ONE_ENVIRONMENTVARIABLE = gql`
      query getOneEnvironmentVariable($where: EnvironmentVariableWhereUniqueInput!) {
        EnvironmentVariable(where: $where) {
          id
          key
          value
          description
          workspaceId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                holdings {
                  id
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
                }
                alerts {
                  id
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
          createdAt
          updatedAt
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ EnvironmentVariable: EnvironmentVariableType }>({ query: GET_ONE_ENVIRONMENTVARIABLE, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.EnvironmentVariable ?? null;
    } catch (error) {
      console.error('Error in getOneEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Retrieve all EnvironmentVariables records.
   * @param client - Apollo Client instance.
   * @returns An array of EnvironmentVariable records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType[] | null> {
    const GET_ALL_ENVIRONMENTVARIABLE = gql`
      query getAllEnvironmentVariable {
        EnvironmentVariables {
          id
          key
          value
          description
          workspaceId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                holdings {
                  id
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
                }
                alerts {
                  id
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
          createdAt
          updatedAt
      }
      }`;

    try {
      const response = await client.query<{ EnvironmentVariables: EnvironmentVariableType[] }>({ query: GET_ALL_ENVIRONMENTVARIABLE });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.EnvironmentVariables ?? null;
    } catch (error) {
      console.error('Error in getAllEnvironmentVariable:', error);
      throw error;
    }
  },

  /**
   * Find multiple EnvironmentVariable records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found EnvironmentVariable records or null.
   */
  async findMany(props: EnvironmentVariableType, client: ApolloClient<NormalizedCacheObject>): Promise<EnvironmentVariableType[]> {
    const FIND_MANY_ENVIRONMENTVARIABLE = gql`
      query findManyEnvironmentVariable($where: EnvironmentVariableWhereInput!) {
        EnvironmentVariables(where: $where) {
          id
          key
          value
          description
          workspaceId
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
                }
                customerId
                accounts {
                  id
                }
                sessions {
                  id
                }
                authenticators {
                  id
                }
                plan
                holdings {
                  id
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
                }
                alerts {
                  id
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
      const response = await client.query<{ EnvironmentVariables: EnvironmentVariableType[] }>({ query: FIND_MANY_ENVIRONMENTVARIABLE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.EnvironmentVariables) {
        return response.data.EnvironmentVariables;
      } else {
       return [] as EnvironmentVariableType[];
      }
    } catch (error) {
      console.error('Error in findManyEnvironmentVariable:', error);
      throw error;
    }
  }
};
