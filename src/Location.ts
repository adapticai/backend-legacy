

import { Location as LocationType } from './generated/typegraphql-prisma/models/Location';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Location model.
 */

export const Location = {
  /**
   * Create a new Location record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Location or null.
   */
  async create(props: LocationType, client: ApolloClient<NormalizedCacheObject>): Promise<LocationType> {
    const CREATE_ONE_LOCATION = gql`
      mutation createOneLocation($data: LocationCreateInput!) {
        createOneLocation(data: $data) {
          id
          label
          value
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
          workspaceId
        }
      }
   `;

    const variables = {
      data: {
          label: props.label !== undefined ? props.label : undefined,
  value: props.value !== undefined ? props.value : undefined,
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
      const response = await client.mutate<{ createOneLocation: LocationType }>({ mutation: CREATE_ONE_LOCATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneLocation) {
        return response.data.createOneLocation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneLocation:', error);
      throw error;
    }
  },

  /**
   * Create multiple Location records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: LocationType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_LOCATION = gql`
      mutation createManyLocation($data: [LocationCreateManyInput!]!) {
        createManyLocation(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  label: prop.label !== undefined ? prop.label : undefined,
  value: prop.value !== undefined ? prop.value : undefined,
  workspaceId: prop.workspaceId !== undefined ? prop.workspaceId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyLocation: { count: number } }>({ mutation: CREATE_MANY_LOCATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyLocation) {
        return response.data.createManyLocation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyLocation:', error);
      throw error;
    }
  },

  /**
   * Update a single Location record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated Location or null.
   */
  async update(props: LocationType, client: ApolloClient<NormalizedCacheObject>): Promise<LocationType> {
    const UPDATE_ONE_LOCATION = gql`
      mutation updateOneLocation($data: LocationUpdateInput!, $where: LocationWhereUniqueInput!) {
        updateOneLocation(data: $data, where: $where) {
          id
          label
          value
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
          workspaceId
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
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
      const response = await client.mutate<{ updateOneLocation: LocationType }>({ mutation: UPDATE_ONE_LOCATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneLocation) {
        return response.data.updateOneLocation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneLocation:', error);
      throw error;
    }
  },

  /**
   * Delete a single Location record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted Location or null.
   */
  async delete(props: LocationType, client: ApolloClient<NormalizedCacheObject>): Promise<LocationType> {
    const DELETE_ONE_LOCATION = gql`
      mutation deleteOneLocation($where: LocationWhereUniqueInput!) {
        deleteOneLocation(where: $where) {
          id
          label
          value
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
          workspaceId
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneLocation: LocationType }>({ mutation: DELETE_ONE_LOCATION, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneLocation) {
        return response.data.deleteOneLocation;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneLocation:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Location record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved Location or null.
   */
  async get(props: LocationType, client: ApolloClient<NormalizedCacheObject>): Promise<LocationType> {
    const GET_ONE_LOCATION = gql`
      query getOneLocation($where: LocationWhereUniqueInput!) {
        Location(where: $where) {
          id
          label
          value
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
          workspaceId
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ Location: LocationType }>({ query: GET_ONE_LOCATION, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Location ?? null;
    } catch (error) {
      console.error('Error in getOneLocation:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Locations records.
   * @param client - Apollo Client instance.
   * @returns An array of Location records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<LocationType[] | null> {
    const GET_ALL_LOCATION = gql`
      query getAllLocation {
        Locations {
          id
          label
          value
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
          workspaceId
      }
      }`;

    try {
      const response = await client.query<{ Locations: LocationType[] }>({ query: GET_ALL_LOCATION });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Locations ?? null;
    } catch (error) {
      console.error('Error in getAllLocation:', error);
      throw error;
    }
  },

  /**
   * Find multiple Location records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Location records or null.
   */
  async findMany(props: LocationType, client: ApolloClient<NormalizedCacheObject>): Promise<LocationType[]> {
    const FIND_MANY_LOCATION = gql`
      query findManyLocation($where: LocationWhereInput!) {
        Locations(where: $where) {
          id
          label
          value
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
          workspaceId
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
      const response = await client.query<{ Locations: LocationType[] }>({ query: FIND_MANY_LOCATION, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Locations) {
        return response.data.Locations;
      } else {
       return [] as LocationType[];
      }
    } catch (error) {
      console.error('Error in findManyLocation:', error);
      throw error;
    }
  }
};
