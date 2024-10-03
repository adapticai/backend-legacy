

import { State as StateType } from './generated/typegraphql-prisma/models/State';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the State model.
 */

export const State = {
  /**
   * Create a new State record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created State or null.
   */
  async create(props: StateType, client: ApolloClient<NormalizedCacheObject>): Promise<StateType> {
    const CREATE_ONE_STATE = gql`
      mutation createOneState($data: StateCreateInput!) {
        createOneState(data: $data) {
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
          country {
            id
          }
          countryId
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
    workspace: props.country.workspace ? {
      connectOrCreate: props.country.workspace.map((item: any) => ({
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
    }
  } : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createOneState: StateType }>({ mutation: CREATE_ONE_STATE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneState) {
        return response.data.createOneState;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneState:', error);
      throw error;
    }
  },

  /**
   * Create multiple State records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: StateType[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_STATE = gql`
      mutation createManyState($data: [StateCreateManyInput!]!) {
        createManyState(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  name: prop.name !== undefined ? prop.name : undefined,
  countryId: prop.countryId !== undefined ? prop.countryId : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ createManyState: { count: number } }>({ mutation: CREATE_MANY_STATE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyState) {
        return response.data.createManyState;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyState:', error);
      throw error;
    }
  },

  /**
   * Update a single State record.
   * @param id - Unique identifier of the record to update.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated State or null.
   */
  async update(props: StateType, client: ApolloClient<NormalizedCacheObject>): Promise<StateType> {
    const UPDATE_ONE_STATE = gql`
      mutation updateOneState($data: StateUpdateInput!, $where: StateWhereUniqueInput!) {
        updateOneState(data: $data, where: $where) {
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
          country {
            id
          }
          countryId
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
    workspace: props.country.workspace ? {
      upsert: props.country.workspace.map((item: any) => ({
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
        name: props.country.name !== undefined ? props.country.name : undefined,
    workspace: props.country.workspace ? {
      connectOrCreate: props.country.workspace.map((item: any) => ({
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
    }
  } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate<{ updateOneState: StateType }>({ mutation: UPDATE_ONE_STATE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneState) {
        return response.data.updateOneState;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneState:', error);
      throw error;
    }
  },

  /**
   * Delete a single State record.
   * @param id - Unique identifier of the record to delete.
   * @param client - Apollo Client instance.
   * @returns The deleted State or null.
   */
  async delete(props: StateType, client: ApolloClient<NormalizedCacheObject>): Promise<StateType> {
    const DELETE_ONE_STATE = gql`
      mutation deleteOneState($where: StateWhereUniqueInput!) {
        deleteOneState(where: $where) {
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
          country {
            id
          }
          countryId
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate<{ deleteOneState: StateType }>({ mutation: DELETE_ONE_STATE, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneState) {
        return response.data.deleteOneState;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneState:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single State record by ID.
   * @param id - Unique identifier of the record.
   * @param client - Apollo Client instance.
   * @returns The retrieved State or null.
   */
  async get(props: StateType, client: ApolloClient<NormalizedCacheObject>): Promise<StateType> {
    const GET_ONE_STATE = gql`
      query getOneState($where: StateWhereUniqueInput!) {
        State(where: $where) {
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
          country {
            id
          }
          countryId
        }
      }`;

    const variables = {
      data: {
      },
  };
    try {
      const response = await client.query<{ State: StateType }>({ query: GET_ONE_STATE, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.State ?? null;
    } catch (error) {
      console.error('Error in getOneState:', error);
      throw error;
    }
  },

  /**
   * Retrieve all States records.
   * @param client - Apollo Client instance.
   * @returns An array of State records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<StateType[] | null> {
    const GET_ALL_STATE = gql`
      query getAllState {
        States {
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
          country {
            id
          }
          countryId
      }
      }`;

    try {
      const response = await client.query<{ States: StateType[] }>({ query: GET_ALL_STATE });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.States ?? null;
    } catch (error) {
      console.error('Error in getAllState:', error);
      throw error;
    }
  },

  /**
   * Find multiple State records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found State records or null.
   */
  async findMany(props: StateType, client: ApolloClient<NormalizedCacheObject>): Promise<StateType[]> {
    const FIND_MANY_STATE = gql`
      query findManyState($where: StateWhereInput!) {
        States(where: $where) {
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
          country {
            id
          }
          countryId
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
      const response = await client.query<{ States: StateType[] }>({ query: FIND_MANY_STATE, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.States) {
        return response.data.States;
      } else {
       return [] as StateType[];
      }
    } catch (error) {
      console.error('Error in findManyState:', error);
      throw error;
    }
  }
};
