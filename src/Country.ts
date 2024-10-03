

import { Country as CountryType } from './generated/typegraphql-prisma/models/Country';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the Country model.
 */

export const Country = {
  /**
   * Create a new Country record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created Country or null.
   */
  async create(props: CountryType, client: ApolloClient<NormalizedCacheObject>): Promise<CountryType> {
    const CREATE_ONE_COUNTRY = gql`
      mutation createOneCountry($data: CountryCreateInput!) {
        createOneCountry(data: $data) {
          id
          name
          states {
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
                name
                workspace {
                  id
                }
              }
              state {
                id
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
            country {
              id
            }
            countryId
          }
          workspace {
            id
          }
        }
      }
   `;

    const variables = {
      data: {
          name: props.name !== undefined ? props.name : undefined,
  states: props.states ? {
    connectOrCreate: props.states.map((item: any) => ({
      where: {
        id: item.id !== undefined ? item.id : undefined,
        name: item.name !== undefined ? {
            equals: item.name 
           } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
    workspace: item.workspace ? {
      connectOrCreate: item.workspace.map((item: any) => ({
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
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
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
    city: item.city ? {
      connectOrCreate: {
        where: {
          id: item.city.id !== undefined ? item.city.id : undefined,
          name: item.city.name !== undefined ? {
              equals: item.city.name 
             } : undefined,
        },
        create: {
          name: item.city.name !== undefined ? item.city.name : undefined,
        },
      }
    } : undefined,
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
      const response = await client.mutate<{ createOneCountry: CountryType }>({ mutation: CREATE_ONE_COUNTRY, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneCountry) {
        return response.data.createOneCountry;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneCountry:', error);
      throw error;
    }
  },

  /**
   * Create multiple Country records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: CountryType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_COUNTRY = gql`
      mutation createManyCountry($data: [CountryCreateManyInput!]!) {
        createManyCountry(data: $data) {
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
      const response = await client.mutate<{ createManyCountry: { count: number } }>({ mutation: CREATE_MANY_COUNTRY, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyCountry) {
        return response.data.createManyCountry;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyCountry:', error);
      throw error;
    }
  },

  /**
   * Update a single Country record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated Country or null.
   */
  async update(props: CountryType, client: ApolloClient<NormalizedCacheObject>): Promise<CountryType> {
    const UPDATE_ONE_COUNTRY = gql`
      mutation updateOneCountry($data: CountryUpdateInput!, $where: CountryWhereUniqueInput!) {
        updateOneCountry(data: $data, where: $where) {
          id
          name
          states {
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
                name
                workspace {
                  id
                }
              }
              state {
                id
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
            country {
              id
            }
            countryId
          }
          workspace {
            id
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
  states: props.states ? {
    upsert: props.states.map((item: any) => ({
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
    workspace: item.workspace ? {
      upsert: item.workspace.map((item: any) => ({
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
        },
      }))
    } : undefined,
      },
      create: {
        name: item.name !== undefined ? item.name : undefined,
    workspace: item.workspace ? {
      connectOrCreate: item.workspace.map((item: any) => ({
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
        },
      }))
    } : undefined,
      },
    }))
  } : undefined,
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
    city: item.city ? {
      upsert: {
        where: {
          id: item.city.id !== undefined ? {
              equals: item.city.id 
             } : undefined,
          name: item.city.name !== undefined ? {
              equals: item.city.name 
             } : undefined,
        },
        update: {
          name: item.city.name !== undefined ? {
              set: item.city.name  
             } : undefined,
        },
        create: {
          name: item.city.name !== undefined ? item.city.name : undefined,
        },
      }
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
    city: item.city ? {
      connectOrCreate: {
        where: {
          id: item.city.id !== undefined ? item.city.id : undefined,
          name: item.city.name !== undefined ? {
              equals: item.city.name 
             } : undefined,
        },
        create: {
          name: item.city.name !== undefined ? item.city.name : undefined,
        },
      }
    } : undefined,
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
      const response = await client.mutate<{ updateOneCountry: CountryType }>({ mutation: UPDATE_ONE_COUNTRY, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneCountry) {
        return response.data.updateOneCountry;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneCountry:', error);
      throw error;
    }
  },

  /**
   * Delete a single Country record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted Country or null.
   */
  async delete(props: CountryType, client: ApolloClient<NormalizedCacheObject>): Promise<CountryType> {
    const DELETE_ONE_COUNTRY = gql`
      mutation deleteOneCountry($where: CountryWhereUniqueInput!) {
        deleteOneCountry(where: $where) {
          id
          name
          states {
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
                name
                workspace {
                  id
                }
              }
              state {
                id
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
            country {
              id
            }
            countryId
          }
          workspace {
            id
          }
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneCountry: CountryType }>({ mutation: DELETE_ONE_COUNTRY, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneCountry) {
        return response.data.deleteOneCountry;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneCountry:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single Country record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved Country or null.
   */
  async get(props: CountryType, client: ApolloClient<NormalizedCacheObject>): Promise<CountryType> {
    const GET_ONE_COUNTRY = gql`
      query getOneCountry($where: CountryWhereUniqueInput!) {
        Country(where: $where) {
          id
          name
          states {
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
                name
                workspace {
                  id
                }
              }
              state {
                id
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
            country {
              id
            }
            countryId
          }
          workspace {
            id
          }
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ Country: CountryType }>({ query: GET_ONE_COUNTRY, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Country ?? null;
    } catch (error) {
      console.error('Error in getOneCountry:', error);
      throw error;
    }
  },

  /**
   * Retrieve all Countries records.
   * @param client - Apollo Client instance.
   * @returns An array of Country records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<CountryType[] | null> {
    const GET_ALL_COUNTRY = gql`
      query getAllCountry {
        Countries {
          id
          name
          states {
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
                name
                workspace {
                  id
                }
              }
              state {
                id
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
            country {
              id
            }
            countryId
          }
          workspace {
            id
          }
      }
      }`;

    try {
      const response = await client.query<{ Countries: CountryType[] }>({ query: GET_ALL_COUNTRY });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.Countries ?? null;
    } catch (error) {
      console.error('Error in getAllCountry:', error);
      throw error;
    }
  },

  /**
   * Find multiple Country records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found Country records or null.
   */
  async findMany(props: CountryType, client: ApolloClient<NormalizedCacheObject>): Promise<CountryType[]> {
    const FIND_MANY_COUNTRY = gql`
      query findManyCountry($where: CountryWhereInput!) {
        Countries(where: $where) {
          id
          name
          states {
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
                name
                workspace {
                  id
                }
              }
              state {
                id
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
            country {
              id
            }
            countryId
          }
          workspace {
            id
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
      const response = await client.query<{ Countries: CountryType[] }>({ query: FIND_MANY_COUNTRY, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.Countries) {
        return response.data.Countries;
      } else {
       return [] as CountryType[];
      }
    } catch (error) {
      console.error('Error in findManyCountry:', error);
      throw error;
    }
  }
};
