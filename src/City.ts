

import { City as CityType } from './generated/typegraphql-prisma/models/City';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the City model.
 */

export const City = {
  /**
   * Create a new City record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created City or null.
   */
  async create(props: CityType, client: ApolloClient<NormalizedCacheObject>): Promise<CityType> {
    const CREATE_ONE_CITY = gql`
      mutation createOneCity($data: CityCreateInput!) {
        createOneCity(data: $data) {
          id
          name
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
        }
      }
   `;

    const variables = {
      data: {
          name: props.name !== undefined ? props.name : undefined,
  workspace: props.workspace ? {
    connectOrCreate: props.workspace.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        slug: item.slug !== undefined ? item.slug : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
        email: item.email !== undefined ? {
            equals: item.email 
           } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
        slug: item.slug !== undefined ? item.slug : undefined,
        description: item.description !== undefined ? item.description : undefined,
        descriptionShort: item.descriptionShort !== undefined ? item.descriptionShort : undefined,
        image: item.image !== undefined ? item.image : undefined,
        colors: item.colors !== undefined ? item.colors : undefined,
        website: item.website !== undefined ? item.website : undefined,
        emailDomain: item.emailDomain !== undefined ? item.emailDomain : undefined,
        addUsersByEmailDomain: item.addUsersByEmailDomain !== undefined ? item.addUsersByEmailDomain : undefined,
        industry: item.industry !== undefined ? item.industry : undefined,
        foundingYear: item.foundingYear !== undefined ? item.foundingYear : undefined,
        legalName: item.legalName !== undefined ? item.legalName : undefined,
        address: item.address !== undefined ? item.address : undefined,
        streetAddress: item.streetAddress !== undefined ? item.streetAddress : undefined,
        postalCode: item.postalCode !== undefined ? item.postalCode : undefined,
        telephone: item.telephone !== undefined ? item.telephone : undefined,
        email: item.email !== undefined ? item.email : undefined,
        sameAs: item.sameAs !== undefined ? item.sameAs : undefined,
        headquarters: item.headquarters !== undefined ? item.headquarters : undefined,
        areasOfFocus: item.areasOfFocus !== undefined ? item.areasOfFocus : undefined,
    state: item.state ? {
      connectOrCreate: {
        where: {
          id: item.state.id !== undefined ? item.state.id : undefined,
          name: item.state.name !== undefined ? {
              equals: item.state.name 
             } : undefined,
        },
        create: {
          name: item.state.name !== undefined ? item.state.name : undefined,
        },
      }
    } : undefined,
    country: item.country ? {
      connectOrCreate: {
        where: {
          id: item.country.id !== undefined ? item.country.id : undefined,
          name: item.country.name !== undefined ? {
              equals: item.country.name 
             } : undefined,
        },
        create: {
          name: item.country.name !== undefined ? item.country.name : undefined,
        },
      }
    } : undefined,
    locations: item.locations ? {
      connectOrCreate: item.locations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: item.environmentVariables ? {
      connectOrCreate: item.environmentVariables.map((item: any) => ({
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
    users: item.users ? {
      connectOrCreate: item.users.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
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
      const response = await client.mutate<{ createOneCity: CityType }>({ mutation: CREATE_ONE_CITY, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneCity) {
        return response.data.createOneCity;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneCity:', error);
      throw error;
    }
  },

  /**
   * Create multiple City records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: CityType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_CITY = gql`
      mutation createManyCity($data: [CityCreateManyInput!]!) {
        createManyCity(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  name: prop.name !== undefined ? prop.name : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyCity: { count: number } }>({ mutation: CREATE_MANY_CITY, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyCity) {
        return response.data.createManyCity;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyCity:', error);
      throw error;
    }
  },

  /**
   * Update a single City record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated City or null.
   */
  async update(props: CityType, client: ApolloClient<NormalizedCacheObject>): Promise<CityType> {
    const UPDATE_ONE_CITY = gql`
      mutation updateOneCity($data: CityUpdateInput!, $where: CityWhereUniqueInput!) {
        updateOneCity(data: $data, where: $where) {
          id
          name
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
  workspace: props.workspace ? {
    upsert: props.workspace.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        slug: item.slug !== undefined ? item.slug : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
        email: item.email !== undefined ? {
            equals: item.email 
           } : undefined,
      },
      update: {
        name: item.name !== undefined ? {
            set: item.name  
           } : undefined,
        slug: item.slug !== undefined ? {
            set: item.slug  
           } : undefined,
        description: item.description !== undefined ? {
            set: item.description  
           } : undefined,
        descriptionShort: item.descriptionShort !== undefined ? {
            set: item.descriptionShort  
           } : undefined,
        image: item.image !== undefined ? {
            set: item.image  
           } : undefined,
        colors: item.colors !== undefined ? {
            set: item.colors  
           } : undefined,
        website: item.website !== undefined ? {
            set: item.website  
           } : undefined,
        emailDomain: item.emailDomain !== undefined ? {
            set: item.emailDomain  
           } : undefined,
        addUsersByEmailDomain: item.addUsersByEmailDomain !== undefined ? {
            set: item.addUsersByEmailDomain  
           } : undefined,
        industry: item.industry !== undefined ? {
            set: item.industry  
           } : undefined,
        foundingYear: item.foundingYear !== undefined ? {
            set: item.foundingYear  
           } : undefined,
        legalName: item.legalName !== undefined ? {
            set: item.legalName  
           } : undefined,
        address: item.address !== undefined ? {
            set: item.address  
           } : undefined,
        streetAddress: item.streetAddress !== undefined ? {
            set: item.streetAddress  
           } : undefined,
        postalCode: item.postalCode !== undefined ? {
            set: item.postalCode  
           } : undefined,
        telephone: item.telephone !== undefined ? {
            set: item.telephone  
           } : undefined,
        email: item.email !== undefined ? {
            set: item.email  
           } : undefined,
        sameAs: item.sameAs !== undefined ? {
            set: item.sameAs  
           } : undefined,
        headquarters: item.headquarters !== undefined ? {
            set: item.headquarters  
           } : undefined,
        areasOfFocus: item.areasOfFocus !== undefined ? {
            set: item.areasOfFocus  
           } : undefined,
    state: item.state ? {
      upsert: {
        where: {
          id: item.state.id !== undefined ? {
              equals: item.state.id 
             } : undefined,
          name: item.state.name !== undefined ? {
              equals: item.state.name 
             } : undefined,
        },
        update: {
          name: item.state.name !== undefined ? {
              set: item.state.name  
             } : undefined,
        },
        create: {
          name: item.state.name !== undefined ? item.state.name : undefined,
        },
      }
    } : undefined,
    country: item.country ? {
      upsert: {
        where: {
          id: item.country.id !== undefined ? {
              equals: item.country.id 
             } : undefined,
          name: item.country.name !== undefined ? {
              equals: item.country.name 
             } : undefined,
        },
        update: {
          name: item.country.name !== undefined ? {
              set: item.country.name  
             } : undefined,
        },
        create: {
          name: item.country.name !== undefined ? item.country.name : undefined,
        },
      }
    } : undefined,
    locations: item.locations ? {
      upsert: item.locations.map((item: any) => ({
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
    environmentVariables: item.environmentVariables ? {
      upsert: item.environmentVariables.map((item: any) => ({
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
    users: item.users ? {
      upsert: item.users.map((item: any) => ({
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
        name: item.name !== undefined ? item.name : undefined,
        slug: item.slug !== undefined ? item.slug : undefined,
        description: item.description !== undefined ? item.description : undefined,
        descriptionShort: item.descriptionShort !== undefined ? item.descriptionShort : undefined,
        image: item.image !== undefined ? item.image : undefined,
        colors: item.colors !== undefined ? item.colors : undefined,
        website: item.website !== undefined ? item.website : undefined,
        emailDomain: item.emailDomain !== undefined ? item.emailDomain : undefined,
        addUsersByEmailDomain: item.addUsersByEmailDomain !== undefined ? item.addUsersByEmailDomain : undefined,
        industry: item.industry !== undefined ? item.industry : undefined,
        foundingYear: item.foundingYear !== undefined ? item.foundingYear : undefined,
        legalName: item.legalName !== undefined ? item.legalName : undefined,
        address: item.address !== undefined ? item.address : undefined,
        streetAddress: item.streetAddress !== undefined ? item.streetAddress : undefined,
        postalCode: item.postalCode !== undefined ? item.postalCode : undefined,
        telephone: item.telephone !== undefined ? item.telephone : undefined,
        email: item.email !== undefined ? item.email : undefined,
        sameAs: item.sameAs !== undefined ? item.sameAs : undefined,
        headquarters: item.headquarters !== undefined ? item.headquarters : undefined,
        areasOfFocus: item.areasOfFocus !== undefined ? item.areasOfFocus : undefined,
    state: item.state ? {
      connectOrCreate: {
        where: {
          id: item.state.id !== undefined ? item.state.id : undefined,
          name: item.state.name !== undefined ? {
              equals: item.state.name 
             } : undefined,
        },
        create: {
          name: item.state.name !== undefined ? item.state.name : undefined,
        },
      }
    } : undefined,
    country: item.country ? {
      connectOrCreate: {
        where: {
          id: item.country.id !== undefined ? item.country.id : undefined,
          name: item.country.name !== undefined ? {
              equals: item.country.name 
             } : undefined,
        },
        create: {
          name: item.country.name !== undefined ? item.country.name : undefined,
        },
      }
    } : undefined,
    locations: item.locations ? {
      connectOrCreate: item.locations.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          label: item.label !== undefined ? item.label : undefined,
          value: item.value !== undefined ? item.value : undefined,
        },
      }))
    } : undefined,
    environmentVariables: item.environmentVariables ? {
      connectOrCreate: item.environmentVariables.map((item: any) => ({
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
    users: item.users ? {
      connectOrCreate: item.users.map((item: any) => ({
        where: {
          id: item.id !== undefined ? item.id : undefined,
        },
        create: {
          role: item.role !== undefined ? item.role : undefined,
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
      const response = await client.mutate<{ updateOneCity: CityType }>({ mutation: UPDATE_ONE_CITY, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneCity) {
        return response.data.updateOneCity;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneCity:', error);
      throw error;
    }
  },

  /**
   * Delete a single City record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted City or null.
   */
  async delete(props: CityType, client: ApolloClient<NormalizedCacheObject>): Promise<CityType> {
    const DELETE_ONE_CITY = gql`
      mutation deleteOneCity($where: CityWhereUniqueInput!) {
        deleteOneCity(where: $where) {
          id
          name
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
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneCity: CityType }>({ mutation: DELETE_ONE_CITY, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneCity) {
        return response.data.deleteOneCity;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneCity:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single City record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved City or null.
   */
  async get(props: CityType, client: ApolloClient<NormalizedCacheObject>): Promise<CityType> {
    const GET_ONE_CITY = gql`
      query getOneCity($where: CityWhereUniqueInput!) {
        City(where: $where) {
          id
          name
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
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ City: CityType }>({ query: GET_ONE_CITY, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.City ?? null;
    } catch (error) {
      console.error('Error in getOneCity:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Cities records.
   * @param client - Apollo Client instance.
   * @returns An array of City records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<CityType[] | null> {
    const GET_ALL_CITY = gql`
      query getAllCity {
        Cities {
          id
          name
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
      }
      }`;

    try {
      const response = await client.query<{ Cities: CityType[] }>({ query: GET_ALL_CITY });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Cities ?? null;
    } catch (error) {
      console.error('Error in getAllCity:', error);
      throw error;
    }
  },

  /**
   * Find multiple City records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found City records or null.
   */
  async findMany(props: CityType, client: ApolloClient<NormalizedCacheObject>): Promise<CityType[]> {
    const FIND_MANY_CITY = gql`
      query findManyCity($where: CityWhereInput!) {
        Cities(where: $where) {
          id
          name
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
      const response = await client.query<{ Cities: CityType[] }>({ query: FIND_MANY_CITY, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Cities) {
        return response.data.Cities;
      } else {
       return [] as CityType[];
      }
    } catch (error) {
      console.error('Error in findManyCity:', error);
      throw error;
    }
  }
};
