
  
import { TradeAuditEvent as TradeAuditEventType } from './generated/typegraphql-prisma/models/TradeAuditEvent';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the TradeAuditEvent model.
   */

  const selectionSet = `
    undefined
  `;

  export const TradeAuditEvent = {

    /**
     * Create a new TradeAuditEvent record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created TradeAuditEvent or null.
     */

    /**
     * Create a new TradeAuditEvent record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created TradeAuditEvent or null.
     */
    async create(props: TradeAuditEventType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeAuditEventType> {
      // Maximum number of retries for database connection issues
      const MAX_RETRIES = 3;
      let retryCount = 0;
      let lastError: any = null;

      // Retry loop to handle potential database connection issues
      while (retryCount < MAX_RETRIES) {
        try {
          const [modules, client] = await Promise.all([
            getApolloModules(),
            globalClient
              ? Promise.resolve(globalClient)
              : importedClient
          ]);

          const { gql, ApolloError } = modules;

          const CREATE_ONE_TRADEAUDITEVENT = gql`
              mutation createOneTradeAuditEvent($data: TradeAuditEventCreateInput!) {
                createOneTradeAuditEvent(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
                timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  eventId: props.eventId !== undefined ? props.eventId : undefined,
  eventType: props.eventType !== undefined ? props.eventType : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  accountId: props.accountId !== undefined ? props.accountId : undefined,
  tradeId: props.tradeId !== undefined ? props.tradeId : undefined,
  signalId: props.signalId !== undefined ? props.signalId : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
  userId: props.userId !== undefined ? props.userId : undefined,
  systemId: props.systemId !== undefined ? props.systemId : undefined,
  signatureJson: props.signatureJson !== undefined ? props.signatureJson : undefined,
  custodyJson: props.custodyJson !== undefined ? props.custodyJson : undefined,
  retentionPolicyId: props.retentionPolicyId !== undefined ? props.retentionPolicyId : undefined,
  immutable: props.immutable !== undefined ? props.immutable : undefined,
  encrypted: props.encrypted !== undefined ? props.encrypted : undefined,
  complianceTags: props.complianceTags !== undefined ? props.complianceTags : undefined,
  customTags: props.customTags !== undefined ? props.customTags : undefined,
  eventData: props.eventData !== undefined ? props.eventData : undefined,
  eventCategory: props.eventCategory !== undefined ? props.eventCategory : undefined,
  severity: props.severity !== undefined ? props.severity : undefined,
  passed: props.passed !== undefined ? props.passed : undefined,
  retentionDate: props.retentionDate !== undefined ? props.retentionDate : undefined,

            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_TRADEAUDITEVENT,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneTradeAuditEvent) {
            return response.data.createOneTradeAuditEvent;
          } else {
            return null as any;
          }
        } catch (error: any) {
          lastError = error;

          // Check if this is a database connection error that we should retry
          const isConnectionError =
            error.message?.includes('Server has closed the connection') ||
            error.message?.includes('Cannot reach database server') ||
            error.message?.includes('Connection timed out') ||
            error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
            (error.networkError && error.networkError.message?.includes('Failed to fetch'));

          if (isConnectionError && retryCount < MAX_RETRIES - 1) {
            retryCount++;
            const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
            console.warn("Database connection error, retrying...");
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log the error and rethrow
          console.error("Database error occurred:", error);
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple TradeAuditEvent records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of TradeAuditEvent objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: TradeAuditEventType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_TRADEAUDITEVENT = gql`
          mutation createManyTradeAuditEvent($data: [TradeAuditEventCreateManyInput!]!) {
            createManyTradeAuditEvent(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
      timestamp: prop.timestamp !== undefined ? prop.timestamp : undefined,
  eventId: prop.eventId !== undefined ? prop.eventId : undefined,
  eventType: prop.eventType !== undefined ? prop.eventType : undefined,
  symbol: prop.symbol !== undefined ? prop.symbol : undefined,
  accountId: prop.accountId !== undefined ? prop.accountId : undefined,
  tradeId: prop.tradeId !== undefined ? prop.tradeId : undefined,
  signalId: prop.signalId !== undefined ? prop.signalId : undefined,
  orderId: prop.orderId !== undefined ? prop.orderId : undefined,
  userId: prop.userId !== undefined ? prop.userId : undefined,
  systemId: prop.systemId !== undefined ? prop.systemId : undefined,
  signatureJson: prop.signatureJson !== undefined ? prop.signatureJson : undefined,
  custodyJson: prop.custodyJson !== undefined ? prop.custodyJson : undefined,
  retentionPolicyId: prop.retentionPolicyId !== undefined ? prop.retentionPolicyId : undefined,
  immutable: prop.immutable !== undefined ? prop.immutable : undefined,
  encrypted: prop.encrypted !== undefined ? prop.encrypted : undefined,
  complianceTags: prop.complianceTags !== undefined ? prop.complianceTags : undefined,
  customTags: prop.customTags !== undefined ? prop.customTags : undefined,
  eventData: prop.eventData !== undefined ? prop.eventData : undefined,
  eventCategory: prop.eventCategory !== undefined ? prop.eventCategory : undefined,
  severity: prop.severity !== undefined ? prop.severity : undefined,
  passed: prop.passed !== undefined ? prop.passed : undefined,
  retentionDate: prop.retentionDate !== undefined ? prop.retentionDate : undefined,
      })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_TRADEAUDITEVENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyTradeAuditEvent) {
          return response.data.createManyTradeAuditEvent;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single TradeAuditEvent record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated TradeAuditEvent or null.
   */
  async update(props: TradeAuditEventType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeAuditEventType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_TRADEAUDITEVENT = gql`
          mutation updateOneTradeAuditEvent($data: TradeAuditEventUpdateInput!, $where: TradeAuditEventWhereUniqueInput!) {
            updateOneTradeAuditEvent(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  eventId: props.eventId !== undefined ? props.eventId : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  accountId: props.accountId !== undefined ? {
    equals: props.accountId 
  } : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
  orderId: props.orderId !== undefined ? {
    equals: props.orderId 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
  systemId: props.systemId !== undefined ? {
    equals: props.systemId 
  } : undefined,
  retentionPolicyId: props.retentionPolicyId !== undefined ? {
    equals: props.retentionPolicyId 
  } : undefined,
      },
          data: {
      id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  eventId: props.eventId !== undefined ? {
            set: props.eventId 
           } : undefined,
  eventType: props.eventType !== undefined ? {
            set: props.eventType 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  accountId: props.accountId !== undefined ? {
            set: props.accountId 
           } : undefined,
  tradeId: props.tradeId !== undefined ? {
            set: props.tradeId 
           } : undefined,
  signalId: props.signalId !== undefined ? {
            set: props.signalId 
           } : undefined,
  orderId: props.orderId !== undefined ? {
            set: props.orderId 
           } : undefined,
  userId: props.userId !== undefined ? {
            set: props.userId 
           } : undefined,
  systemId: props.systemId !== undefined ? {
            set: props.systemId 
           } : undefined,
  signatureJson: props.signatureJson !== undefined ? {
            set: props.signatureJson 
           } : undefined,
  custodyJson: props.custodyJson !== undefined ? {
            set: props.custodyJson 
           } : undefined,
  retentionPolicyId: props.retentionPolicyId !== undefined ? {
            set: props.retentionPolicyId 
           } : undefined,
  immutable: props.immutable !== undefined ? {
            set: props.immutable 
           } : undefined,
  encrypted: props.encrypted !== undefined ? {
            set: props.encrypted 
           } : undefined,
  complianceTags: props.complianceTags !== undefined ? {
            set: props.complianceTags 
           } : undefined,
  customTags: props.customTags !== undefined ? {
            set: props.customTags 
           } : undefined,
  eventData: props.eventData !== undefined ? {
            set: props.eventData 
           } : undefined,
  eventCategory: props.eventCategory !== undefined ? {
            set: props.eventCategory 
           } : undefined,
  severity: props.severity !== undefined ? {
            set: props.severity 
           } : undefined,
  passed: props.passed !== undefined ? {
            set: props.passed 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  retentionDate: props.retentionDate !== undefined ? {
            set: props.retentionDate 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_TRADEAUDITEVENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneTradeAuditEvent) {
          return response.data.updateOneTradeAuditEvent;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single TradeAuditEvent record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated TradeAuditEvent or null.
   */
  async upsert(props: TradeAuditEventType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeAuditEventType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_TRADEAUDITEVENT = gql`
          mutation upsertOneTradeAuditEvent($where: TradeAuditEventWhereUniqueInput!, $create: TradeAuditEventCreateInput!, $update: TradeAuditEventUpdateInput!) {
            upsertOneTradeAuditEvent(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
  eventId: props.eventId !== undefined ? props.eventId : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  accountId: props.accountId !== undefined ? {
    equals: props.accountId 
  } : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
  orderId: props.orderId !== undefined ? {
    equals: props.orderId 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
  systemId: props.systemId !== undefined ? {
    equals: props.systemId 
  } : undefined,
  retentionPolicyId: props.retentionPolicyId !== undefined ? {
    equals: props.retentionPolicyId 
  } : undefined,
      },
          create: {
        timestamp: props.timestamp !== undefined ? props.timestamp : undefined,
  eventId: props.eventId !== undefined ? props.eventId : undefined,
  eventType: props.eventType !== undefined ? props.eventType : undefined,
  symbol: props.symbol !== undefined ? props.symbol : undefined,
  accountId: props.accountId !== undefined ? props.accountId : undefined,
  tradeId: props.tradeId !== undefined ? props.tradeId : undefined,
  signalId: props.signalId !== undefined ? props.signalId : undefined,
  orderId: props.orderId !== undefined ? props.orderId : undefined,
  userId: props.userId !== undefined ? props.userId : undefined,
  systemId: props.systemId !== undefined ? props.systemId : undefined,
  signatureJson: props.signatureJson !== undefined ? props.signatureJson : undefined,
  custodyJson: props.custodyJson !== undefined ? props.custodyJson : undefined,
  retentionPolicyId: props.retentionPolicyId !== undefined ? props.retentionPolicyId : undefined,
  immutable: props.immutable !== undefined ? props.immutable : undefined,
  encrypted: props.encrypted !== undefined ? props.encrypted : undefined,
  complianceTags: props.complianceTags !== undefined ? props.complianceTags : undefined,
  customTags: props.customTags !== undefined ? props.customTags : undefined,
  eventData: props.eventData !== undefined ? props.eventData : undefined,
  eventCategory: props.eventCategory !== undefined ? props.eventCategory : undefined,
  severity: props.severity !== undefined ? props.severity : undefined,
  passed: props.passed !== undefined ? props.passed : undefined,
  retentionDate: props.retentionDate !== undefined ? props.retentionDate : undefined,
      },
          update: {
      timestamp: props.timestamp !== undefined ? {
            set: props.timestamp 
           } : undefined,
  eventId: props.eventId !== undefined ? {
            set: props.eventId 
           } : undefined,
  eventType: props.eventType !== undefined ? {
            set: props.eventType 
           } : undefined,
  symbol: props.symbol !== undefined ? {
            set: props.symbol 
           } : undefined,
  accountId: props.accountId !== undefined ? {
            set: props.accountId 
           } : undefined,
  tradeId: props.tradeId !== undefined ? {
            set: props.tradeId 
           } : undefined,
  signalId: props.signalId !== undefined ? {
            set: props.signalId 
           } : undefined,
  orderId: props.orderId !== undefined ? {
            set: props.orderId 
           } : undefined,
  userId: props.userId !== undefined ? {
            set: props.userId 
           } : undefined,
  systemId: props.systemId !== undefined ? {
            set: props.systemId 
           } : undefined,
  signatureJson: props.signatureJson !== undefined ? {
            set: props.signatureJson 
           } : undefined,
  custodyJson: props.custodyJson !== undefined ? {
            set: props.custodyJson 
           } : undefined,
  retentionPolicyId: props.retentionPolicyId !== undefined ? {
            set: props.retentionPolicyId 
           } : undefined,
  immutable: props.immutable !== undefined ? {
            set: props.immutable 
           } : undefined,
  encrypted: props.encrypted !== undefined ? {
            set: props.encrypted 
           } : undefined,
  complianceTags: props.complianceTags !== undefined ? {
            set: props.complianceTags 
           } : undefined,
  customTags: props.customTags !== undefined ? {
            set: props.customTags 
           } : undefined,
  eventData: props.eventData !== undefined ? {
            set: props.eventData 
           } : undefined,
  eventCategory: props.eventCategory !== undefined ? {
            set: props.eventCategory 
           } : undefined,
  severity: props.severity !== undefined ? {
            set: props.severity 
           } : undefined,
  passed: props.passed !== undefined ? {
            set: props.passed 
           } : undefined,
  retentionDate: props.retentionDate !== undefined ? {
            set: props.retentionDate 
           } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_TRADEAUDITEVENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneTradeAuditEvent) {
          return response.data.upsertOneTradeAuditEvent;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple TradeAuditEvent records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of TradeAuditEvent objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: TradeAuditEventType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_TRADEAUDITEVENT = gql`
          mutation updateManyTradeAuditEvent($data: [TradeAuditEventCreateManyInput!]!) {
            updateManyTradeAuditEvent(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
              id: prop.id !== undefined ? prop.id : undefined,
  eventId: prop.eventId !== undefined ? prop.eventId : undefined,
  symbol: prop.symbol !== undefined ? {
    equals: prop.symbol 
  } : undefined,
  accountId: prop.accountId !== undefined ? {
    equals: prop.accountId 
  } : undefined,
  tradeId: prop.tradeId !== undefined ? {
    equals: prop.tradeId 
  } : undefined,
  signalId: prop.signalId !== undefined ? {
    equals: prop.signalId 
  } : undefined,
  orderId: prop.orderId !== undefined ? {
    equals: prop.orderId 
  } : undefined,
  userId: prop.userId !== undefined ? {
    equals: prop.userId 
  } : undefined,
  systemId: prop.systemId !== undefined ? {
    equals: prop.systemId 
  } : undefined,
  retentionPolicyId: prop.retentionPolicyId !== undefined ? {
    equals: prop.retentionPolicyId 
  } : undefined,

          },
          data: {
              id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  timestamp: prop.timestamp !== undefined ? {
            set: prop.timestamp 
           } : undefined,
  eventId: prop.eventId !== undefined ? {
            set: prop.eventId 
           } : undefined,
  eventType: prop.eventType !== undefined ? {
            set: prop.eventType 
           } : undefined,
  symbol: prop.symbol !== undefined ? {
            set: prop.symbol 
           } : undefined,
  accountId: prop.accountId !== undefined ? {
            set: prop.accountId 
           } : undefined,
  tradeId: prop.tradeId !== undefined ? {
            set: prop.tradeId 
           } : undefined,
  signalId: prop.signalId !== undefined ? {
            set: prop.signalId 
           } : undefined,
  orderId: prop.orderId !== undefined ? {
            set: prop.orderId 
           } : undefined,
  userId: prop.userId !== undefined ? {
            set: prop.userId 
           } : undefined,
  systemId: prop.systemId !== undefined ? {
            set: prop.systemId 
           } : undefined,
  signatureJson: prop.signatureJson !== undefined ? {
            set: prop.signatureJson 
           } : undefined,
  custodyJson: prop.custodyJson !== undefined ? {
            set: prop.custodyJson 
           } : undefined,
  retentionPolicyId: prop.retentionPolicyId !== undefined ? {
            set: prop.retentionPolicyId 
           } : undefined,
  immutable: prop.immutable !== undefined ? {
            set: prop.immutable 
           } : undefined,
  encrypted: prop.encrypted !== undefined ? {
            set: prop.encrypted 
           } : undefined,
  complianceTags: prop.complianceTags !== undefined ? {
            set: prop.complianceTags 
           } : undefined,
  customTags: prop.customTags !== undefined ? {
            set: prop.customTags 
           } : undefined,
  eventData: prop.eventData !== undefined ? {
            set: prop.eventData 
           } : undefined,
  eventCategory: prop.eventCategory !== undefined ? {
            set: prop.eventCategory 
           } : undefined,
  severity: prop.severity !== undefined ? {
            set: prop.severity 
           } : undefined,
  passed: prop.passed !== undefined ? {
            set: prop.passed 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  retentionDate: prop.retentionDate !== undefined ? {
            set: prop.retentionDate 
           } : undefined,

          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_TRADEAUDITEVENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyTradeAuditEvent) {
          return response.data.updateManyTradeAuditEvent;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single TradeAuditEvent record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted TradeAuditEvent or null.
   */
  async delete(props: TradeAuditEventType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeAuditEventType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_TRADEAUDITEVENT = gql`
          mutation deleteOneTradeAuditEvent($where: TradeAuditEventWhereUniqueInput!) {
            deleteOneTradeAuditEvent(where: $where) {
              id
            }
          }`;

        const variables = {
          where: {
            id: props.id ? props.id : undefined,
          }
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: DELETE_ONE_TRADEAUDITEVENT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneTradeAuditEvent) {
          return response.data.deleteOneTradeAuditEvent;
        } else {
          return null as any;
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single TradeAuditEvent record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved TradeAuditEvent or null.
   */
  async get(props: TradeAuditEventType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<TradeAuditEventType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_TRADEAUDITEVENT = gql`
          query getTradeAuditEvent($where: TradeAuditEventWhereUniqueInput!) {
            getTradeAuditEvent(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
            id: props.id !== undefined ? props.id : undefined,
  eventId: props.eventId !== undefined ? props.eventId : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  accountId: props.accountId !== undefined ? {
    equals: props.accountId 
  } : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
  orderId: props.orderId !== undefined ? {
    equals: props.orderId 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
  systemId: props.systemId !== undefined ? {
    equals: props.systemId 
  } : undefined,
  retentionPolicyId: props.retentionPolicyId !== undefined ? {
    equals: props.retentionPolicyId 
  } : undefined,
},
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_TRADEAUDITEVENT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getTradeAuditEvent ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No TradeAuditEvent found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all TradeAuditEvents records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of TradeAuditEvent records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<TradeAuditEventType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_TRADEAUDITEVENT = gql`
          query getAllTradeAuditEvent {
            tradeAuditEvents {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_TRADEAUDITEVENT,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.tradeAuditEvents ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No TradeAuditEvent found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple TradeAuditEvent records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found TradeAuditEvent records or null.
   */
  async findMany(props: TradeAuditEventType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<TradeAuditEventType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient
            ? Promise.resolve(globalClient)
            : importedClient
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_TRADEAUDITEVENT = gql`
          query findManyTradeAuditEvent($where: TradeAuditEventWhereInput!) {
            tradeAuditEvents(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
      id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  eventId: props.eventId !== undefined ? {
    equals: props.eventId 
  } : undefined,
  symbol: props.symbol !== undefined ? {
    equals: props.symbol 
  } : undefined,
  accountId: props.accountId !== undefined ? {
    equals: props.accountId 
  } : undefined,
  tradeId: props.tradeId !== undefined ? {
    equals: props.tradeId 
  } : undefined,
  signalId: props.signalId !== undefined ? {
    equals: props.signalId 
  } : undefined,
  orderId: props.orderId !== undefined ? {
    equals: props.orderId 
  } : undefined,
  userId: props.userId !== undefined ? {
    equals: props.userId 
  } : undefined,
  systemId: props.systemId !== undefined ? {
    equals: props.systemId 
  } : undefined,
  retentionPolicyId: props.retentionPolicyId !== undefined ? {
    equals: props.retentionPolicyId 
  } : undefined,
      },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_TRADEAUDITEVENT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.tradeauditevents) {
          return response.data.tradeAuditEvents;
        } else {
          return [] as TradeAuditEventType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No TradeAuditEvent found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError && error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          console.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        console.error("Database error occurred:", error);
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
