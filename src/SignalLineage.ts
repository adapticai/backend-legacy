import { SignalLineage as SignalLineageType } from './generated/typegraphql-prisma/models/SignalLineage';
import {
  client as importedClient,
  ApolloClientType,
  NormalizedCacheObject,
  getApolloModules,
} from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';

/**
 * CRUD operations for the SignalLineage model.
 */

const selectionSet = `
    
  id
  timestamp
  lineageId
  signalId
  symbol
  signalType
  createdAt
  generatorSource
  generatorVersion
  inputSources
  technicalIndicators
  llmAnalysis
  preAnalysisValidations
  filterResult
  coordinationDecision
  executionOutcome
  originalSignal
  finalSignal
  lifecycleEvents
  performanceAttribution
  lastUpdated
  storageLocation
  retentionDays
  complianceTags
  customTags
  executionStatus
  decisionType
  pnlPercentage
  dataQuality

  `;

export const SignalLineage = {
  /**
   * Create a new SignalLineage record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created SignalLineage or null.
   */

  /**
   * Create a new SignalLineage record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties for the new record.
   * @param globalClient - Apollo Client instance.
   * @returns The created SignalLineage or null.
   */
  async create(
    props: SignalLineageType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<SignalLineageType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_ONE_SIGNALLINEAGE = gql`
              mutation createOneSignalLineage($data: SignalLineageCreateInput!) {
                createOneSignalLineage(data: $data) {
                  ${selectionSet}
                }
              }
           `;

        const variables = {
          data: {
            timestamp:
              props.timestamp !== undefined ? props.timestamp : undefined,
            lineageId:
              props.lineageId !== undefined ? props.lineageId : undefined,
            signalId: props.signalId !== undefined ? props.signalId : undefined,
            symbol: props.symbol !== undefined ? props.symbol : undefined,
            signalType:
              props.signalType !== undefined ? props.signalType : undefined,
            generatorSource:
              props.generatorSource !== undefined
                ? props.generatorSource
                : undefined,
            generatorVersion:
              props.generatorVersion !== undefined
                ? props.generatorVersion
                : undefined,
            inputSources:
              props.inputSources !== undefined ? props.inputSources : undefined,
            technicalIndicators:
              props.technicalIndicators !== undefined
                ? props.technicalIndicators
                : undefined,
            llmAnalysis:
              props.llmAnalysis !== undefined ? props.llmAnalysis : undefined,
            preAnalysisValidations:
              props.preAnalysisValidations !== undefined
                ? props.preAnalysisValidations
                : undefined,
            filterResult:
              props.filterResult !== undefined ? props.filterResult : undefined,
            coordinationDecision:
              props.coordinationDecision !== undefined
                ? props.coordinationDecision
                : undefined,
            executionOutcome:
              props.executionOutcome !== undefined
                ? props.executionOutcome
                : undefined,
            originalSignal:
              props.originalSignal !== undefined
                ? props.originalSignal
                : undefined,
            finalSignal:
              props.finalSignal !== undefined ? props.finalSignal : undefined,
            lifecycleEvents:
              props.lifecycleEvents !== undefined
                ? props.lifecycleEvents
                : undefined,
            performanceAttribution:
              props.performanceAttribution !== undefined
                ? props.performanceAttribution
                : undefined,
            storageLocation:
              props.storageLocation !== undefined
                ? props.storageLocation
                : undefined,
            retentionDays:
              props.retentionDays !== undefined
                ? props.retentionDays
                : undefined,
            complianceTags:
              props.complianceTags !== undefined
                ? props.complianceTags
                : undefined,
            customTags:
              props.customTags !== undefined ? props.customTags : undefined,
            executionStatus:
              props.executionStatus !== undefined
                ? props.executionStatus
                : undefined,
            decisionType:
              props.decisionType !== undefined ? props.decisionType : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_ONE_SIGNALLINEAGE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createOneSignalLineage) {
          return response.data.createOneSignalLineage;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Create multiple SignalLineage records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of SignalLineage objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(
    props: SignalLineageType[],
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const CREATE_MANY_SIGNALLINEAGE = gql`
          mutation createManySignalLineage(
            $data: [SignalLineageCreateManyInput!]!
          ) {
            createManySignalLineage(data: $data) {
              count
            }
          }
        `;

        const variables = {
          data: props.map((prop) => ({
            timestamp:
              prop.timestamp !== undefined ? prop.timestamp : undefined,
            lineageId:
              prop.lineageId !== undefined ? prop.lineageId : undefined,
            signalId: prop.signalId !== undefined ? prop.signalId : undefined,
            symbol: prop.symbol !== undefined ? prop.symbol : undefined,
            signalType:
              prop.signalType !== undefined ? prop.signalType : undefined,
            generatorSource:
              prop.generatorSource !== undefined
                ? prop.generatorSource
                : undefined,
            generatorVersion:
              prop.generatorVersion !== undefined
                ? prop.generatorVersion
                : undefined,
            inputSources:
              prop.inputSources !== undefined ? prop.inputSources : undefined,
            technicalIndicators:
              prop.technicalIndicators !== undefined
                ? prop.technicalIndicators
                : undefined,
            llmAnalysis:
              prop.llmAnalysis !== undefined ? prop.llmAnalysis : undefined,
            preAnalysisValidations:
              prop.preAnalysisValidations !== undefined
                ? prop.preAnalysisValidations
                : undefined,
            filterResult:
              prop.filterResult !== undefined ? prop.filterResult : undefined,
            coordinationDecision:
              prop.coordinationDecision !== undefined
                ? prop.coordinationDecision
                : undefined,
            executionOutcome:
              prop.executionOutcome !== undefined
                ? prop.executionOutcome
                : undefined,
            originalSignal:
              prop.originalSignal !== undefined
                ? prop.originalSignal
                : undefined,
            finalSignal:
              prop.finalSignal !== undefined ? prop.finalSignal : undefined,
            lifecycleEvents:
              prop.lifecycleEvents !== undefined
                ? prop.lifecycleEvents
                : undefined,
            performanceAttribution:
              prop.performanceAttribution !== undefined
                ? prop.performanceAttribution
                : undefined,
            storageLocation:
              prop.storageLocation !== undefined
                ? prop.storageLocation
                : undefined,
            retentionDays:
              prop.retentionDays !== undefined ? prop.retentionDays : undefined,
            complianceTags:
              prop.complianceTags !== undefined
                ? prop.complianceTags
                : undefined,
            customTags:
              prop.customTags !== undefined ? prop.customTags : undefined,
            executionStatus:
              prop.executionStatus !== undefined
                ? prop.executionStatus
                : undefined,
            decisionType:
              prop.decisionType !== undefined ? prop.decisionType : undefined,
          })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_SIGNALLINEAGE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.createManySignalLineage
        ) {
          return response.data.createManySignalLineage;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single SignalLineage record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated SignalLineage or null.
   */
  async update(
    props: SignalLineageType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<SignalLineageType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_ONE_SIGNALLINEAGE = gql`
          mutation updateOneSignalLineage($data: SignalLineageUpdateInput!, $where: SignalLineageWhereUniqueInput!) {
            updateOneSignalLineage(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
            lineageId:
              props.lineageId !== undefined ? props.lineageId : undefined,
            signalId:
              props.signalId !== undefined
                ? {
                    equals: props.signalId,
                  }
                : undefined,
            symbol:
              props.symbol !== undefined
                ? {
                    equals: props.symbol,
                  }
                : undefined,
          },
          data: {
            id:
              props.id !== undefined
                ? {
                    set: props.id,
                  }
                : undefined,
            timestamp:
              props.timestamp !== undefined
                ? {
                    set: props.timestamp,
                  }
                : undefined,
            lineageId:
              props.lineageId !== undefined
                ? {
                    set: props.lineageId,
                  }
                : undefined,
            signalId:
              props.signalId !== undefined
                ? {
                    set: props.signalId,
                  }
                : undefined,
            symbol:
              props.symbol !== undefined
                ? {
                    set: props.symbol,
                  }
                : undefined,
            signalType:
              props.signalType !== undefined
                ? {
                    set: props.signalType,
                  }
                : undefined,
            createdAt:
              props.createdAt !== undefined
                ? {
                    set: props.createdAt,
                  }
                : undefined,
            generatorSource:
              props.generatorSource !== undefined
                ? {
                    set: props.generatorSource,
                  }
                : undefined,
            generatorVersion:
              props.generatorVersion !== undefined
                ? {
                    set: props.generatorVersion,
                  }
                : undefined,
            inputSources:
              props.inputSources !== undefined
                ? {
                    set: props.inputSources,
                  }
                : undefined,
            technicalIndicators:
              props.technicalIndicators !== undefined
                ? {
                    set: props.technicalIndicators,
                  }
                : undefined,
            llmAnalysis:
              props.llmAnalysis !== undefined
                ? {
                    set: props.llmAnalysis,
                  }
                : undefined,
            preAnalysisValidations:
              props.preAnalysisValidations !== undefined
                ? {
                    set: props.preAnalysisValidations,
                  }
                : undefined,
            filterResult:
              props.filterResult !== undefined
                ? {
                    set: props.filterResult,
                  }
                : undefined,
            coordinationDecision:
              props.coordinationDecision !== undefined
                ? {
                    set: props.coordinationDecision,
                  }
                : undefined,
            executionOutcome:
              props.executionOutcome !== undefined
                ? {
                    set: props.executionOutcome,
                  }
                : undefined,
            originalSignal:
              props.originalSignal !== undefined
                ? {
                    set: props.originalSignal,
                  }
                : undefined,
            finalSignal:
              props.finalSignal !== undefined
                ? {
                    set: props.finalSignal,
                  }
                : undefined,
            lifecycleEvents:
              props.lifecycleEvents !== undefined
                ? {
                    set: props.lifecycleEvents,
                  }
                : undefined,
            performanceAttribution:
              props.performanceAttribution !== undefined
                ? {
                    set: props.performanceAttribution,
                  }
                : undefined,
            lastUpdated:
              props.lastUpdated !== undefined
                ? {
                    set: props.lastUpdated,
                  }
                : undefined,
            storageLocation:
              props.storageLocation !== undefined
                ? {
                    set: props.storageLocation,
                  }
                : undefined,
            retentionDays:
              props.retentionDays !== undefined
                ? {
                    set: props.retentionDays,
                  }
                : undefined,
            complianceTags:
              props.complianceTags !== undefined
                ? {
                    set: props.complianceTags,
                  }
                : undefined,
            customTags:
              props.customTags !== undefined
                ? {
                    set: props.customTags,
                  }
                : undefined,
            executionStatus:
              props.executionStatus !== undefined
                ? {
                    set: props.executionStatus,
                  }
                : undefined,
            decisionType:
              props.decisionType !== undefined
                ? {
                    set: props.decisionType,
                  }
                : undefined,
            pnlPercentage:
              props.pnlPercentage !== undefined
                ? {
                    set: props.pnlPercentage,
                  }
                : undefined,
            dataQuality:
              props.dataQuality !== undefined
                ? {
                    set: props.dataQuality,
                  }
                : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_SIGNALLINEAGE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneSignalLineage) {
          return response.data.updateOneSignalLineage;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single SignalLineage record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated SignalLineage or null.
   */
  async upsert(
    props: SignalLineageType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<SignalLineageType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const UPSERT_ONE_SIGNALLINEAGE = gql`
          mutation upsertOneSignalLineage($where: SignalLineageWhereUniqueInput!, $create: SignalLineageCreateInput!, $update: SignalLineageUpdateInput!) {
            upsertOneSignalLineage(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
            id: props.id !== undefined ? props.id : undefined,
            lineageId:
              props.lineageId !== undefined ? props.lineageId : undefined,
            signalId:
              props.signalId !== undefined
                ? {
                    equals: props.signalId,
                  }
                : undefined,
            symbol:
              props.symbol !== undefined
                ? {
                    equals: props.symbol,
                  }
                : undefined,
          },
          create: {
            timestamp:
              props.timestamp !== undefined ? props.timestamp : undefined,
            lineageId:
              props.lineageId !== undefined ? props.lineageId : undefined,
            signalId: props.signalId !== undefined ? props.signalId : undefined,
            symbol: props.symbol !== undefined ? props.symbol : undefined,
            signalType:
              props.signalType !== undefined ? props.signalType : undefined,
            generatorSource:
              props.generatorSource !== undefined
                ? props.generatorSource
                : undefined,
            generatorVersion:
              props.generatorVersion !== undefined
                ? props.generatorVersion
                : undefined,
            inputSources:
              props.inputSources !== undefined ? props.inputSources : undefined,
            technicalIndicators:
              props.technicalIndicators !== undefined
                ? props.technicalIndicators
                : undefined,
            llmAnalysis:
              props.llmAnalysis !== undefined ? props.llmAnalysis : undefined,
            preAnalysisValidations:
              props.preAnalysisValidations !== undefined
                ? props.preAnalysisValidations
                : undefined,
            filterResult:
              props.filterResult !== undefined ? props.filterResult : undefined,
            coordinationDecision:
              props.coordinationDecision !== undefined
                ? props.coordinationDecision
                : undefined,
            executionOutcome:
              props.executionOutcome !== undefined
                ? props.executionOutcome
                : undefined,
            originalSignal:
              props.originalSignal !== undefined
                ? props.originalSignal
                : undefined,
            finalSignal:
              props.finalSignal !== undefined ? props.finalSignal : undefined,
            lifecycleEvents:
              props.lifecycleEvents !== undefined
                ? props.lifecycleEvents
                : undefined,
            performanceAttribution:
              props.performanceAttribution !== undefined
                ? props.performanceAttribution
                : undefined,
            storageLocation:
              props.storageLocation !== undefined
                ? props.storageLocation
                : undefined,
            retentionDays:
              props.retentionDays !== undefined
                ? props.retentionDays
                : undefined,
            complianceTags:
              props.complianceTags !== undefined
                ? props.complianceTags
                : undefined,
            customTags:
              props.customTags !== undefined ? props.customTags : undefined,
            executionStatus:
              props.executionStatus !== undefined
                ? props.executionStatus
                : undefined,
            decisionType:
              props.decisionType !== undefined ? props.decisionType : undefined,
          },
          update: {
            timestamp:
              props.timestamp !== undefined
                ? {
                    set: props.timestamp,
                  }
                : undefined,
            lineageId:
              props.lineageId !== undefined
                ? {
                    set: props.lineageId,
                  }
                : undefined,
            signalId:
              props.signalId !== undefined
                ? {
                    set: props.signalId,
                  }
                : undefined,
            symbol:
              props.symbol !== undefined
                ? {
                    set: props.symbol,
                  }
                : undefined,
            signalType:
              props.signalType !== undefined
                ? {
                    set: props.signalType,
                  }
                : undefined,
            generatorSource:
              props.generatorSource !== undefined
                ? {
                    set: props.generatorSource,
                  }
                : undefined,
            generatorVersion:
              props.generatorVersion !== undefined
                ? {
                    set: props.generatorVersion,
                  }
                : undefined,
            inputSources:
              props.inputSources !== undefined
                ? {
                    set: props.inputSources,
                  }
                : undefined,
            technicalIndicators:
              props.technicalIndicators !== undefined
                ? {
                    set: props.technicalIndicators,
                  }
                : undefined,
            llmAnalysis:
              props.llmAnalysis !== undefined
                ? {
                    set: props.llmAnalysis,
                  }
                : undefined,
            preAnalysisValidations:
              props.preAnalysisValidations !== undefined
                ? {
                    set: props.preAnalysisValidations,
                  }
                : undefined,
            filterResult:
              props.filterResult !== undefined
                ? {
                    set: props.filterResult,
                  }
                : undefined,
            coordinationDecision:
              props.coordinationDecision !== undefined
                ? {
                    set: props.coordinationDecision,
                  }
                : undefined,
            executionOutcome:
              props.executionOutcome !== undefined
                ? {
                    set: props.executionOutcome,
                  }
                : undefined,
            originalSignal:
              props.originalSignal !== undefined
                ? {
                    set: props.originalSignal,
                  }
                : undefined,
            finalSignal:
              props.finalSignal !== undefined
                ? {
                    set: props.finalSignal,
                  }
                : undefined,
            lifecycleEvents:
              props.lifecycleEvents !== undefined
                ? {
                    set: props.lifecycleEvents,
                  }
                : undefined,
            performanceAttribution:
              props.performanceAttribution !== undefined
                ? {
                    set: props.performanceAttribution,
                  }
                : undefined,
            lastUpdated:
              props.lastUpdated !== undefined
                ? {
                    set: props.lastUpdated,
                  }
                : undefined,
            storageLocation:
              props.storageLocation !== undefined
                ? {
                    set: props.storageLocation,
                  }
                : undefined,
            retentionDays:
              props.retentionDays !== undefined
                ? {
                    set: props.retentionDays,
                  }
                : undefined,
            complianceTags:
              props.complianceTags !== undefined
                ? {
                    set: props.complianceTags,
                  }
                : undefined,
            customTags:
              props.customTags !== undefined
                ? {
                    set: props.customTags,
                  }
                : undefined,
            executionStatus:
              props.executionStatus !== undefined
                ? {
                    set: props.executionStatus,
                  }
                : undefined,
            decisionType:
              props.decisionType !== undefined
                ? {
                    set: props.decisionType,
                  }
                : undefined,
            pnlPercentage:
              props.pnlPercentage !== undefined
                ? {
                    set: props.pnlPercentage,
                  }
                : undefined,
            dataQuality:
              props.dataQuality !== undefined
                ? {
                    set: props.dataQuality,
                  }
                : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_SIGNALLINEAGE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneSignalLineage) {
          return response.data.upsertOneSignalLineage;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple SignalLineage records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of SignalLineage objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(
    props: SignalLineageType[],
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<{ count: number } | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const UPDATE_MANY_SIGNALLINEAGE = gql`
          mutation updateManySignalLineage(
            $data: [SignalLineageCreateManyInput!]!
          ) {
            updateManySignalLineage(data: $data) {
              count
            }
          }
        `;

        const variables = props.map((prop) => ({
          where: {
            id: prop.id !== undefined ? prop.id : undefined,
            lineageId:
              prop.lineageId !== undefined ? prop.lineageId : undefined,
            signalId:
              prop.signalId !== undefined
                ? {
                    equals: prop.signalId,
                  }
                : undefined,
            symbol:
              prop.symbol !== undefined
                ? {
                    equals: prop.symbol,
                  }
                : undefined,
          },
          data: {
            id:
              prop.id !== undefined
                ? {
                    set: prop.id,
                  }
                : undefined,
            timestamp:
              prop.timestamp !== undefined
                ? {
                    set: prop.timestamp,
                  }
                : undefined,
            lineageId:
              prop.lineageId !== undefined
                ? {
                    set: prop.lineageId,
                  }
                : undefined,
            signalId:
              prop.signalId !== undefined
                ? {
                    set: prop.signalId,
                  }
                : undefined,
            symbol:
              prop.symbol !== undefined
                ? {
                    set: prop.symbol,
                  }
                : undefined,
            signalType:
              prop.signalType !== undefined
                ? {
                    set: prop.signalType,
                  }
                : undefined,
            createdAt:
              prop.createdAt !== undefined
                ? {
                    set: prop.createdAt,
                  }
                : undefined,
            generatorSource:
              prop.generatorSource !== undefined
                ? {
                    set: prop.generatorSource,
                  }
                : undefined,
            generatorVersion:
              prop.generatorVersion !== undefined
                ? {
                    set: prop.generatorVersion,
                  }
                : undefined,
            inputSources:
              prop.inputSources !== undefined
                ? {
                    set: prop.inputSources,
                  }
                : undefined,
            technicalIndicators:
              prop.technicalIndicators !== undefined
                ? {
                    set: prop.technicalIndicators,
                  }
                : undefined,
            llmAnalysis:
              prop.llmAnalysis !== undefined
                ? {
                    set: prop.llmAnalysis,
                  }
                : undefined,
            preAnalysisValidations:
              prop.preAnalysisValidations !== undefined
                ? {
                    set: prop.preAnalysisValidations,
                  }
                : undefined,
            filterResult:
              prop.filterResult !== undefined
                ? {
                    set: prop.filterResult,
                  }
                : undefined,
            coordinationDecision:
              prop.coordinationDecision !== undefined
                ? {
                    set: prop.coordinationDecision,
                  }
                : undefined,
            executionOutcome:
              prop.executionOutcome !== undefined
                ? {
                    set: prop.executionOutcome,
                  }
                : undefined,
            originalSignal:
              prop.originalSignal !== undefined
                ? {
                    set: prop.originalSignal,
                  }
                : undefined,
            finalSignal:
              prop.finalSignal !== undefined
                ? {
                    set: prop.finalSignal,
                  }
                : undefined,
            lifecycleEvents:
              prop.lifecycleEvents !== undefined
                ? {
                    set: prop.lifecycleEvents,
                  }
                : undefined,
            performanceAttribution:
              prop.performanceAttribution !== undefined
                ? {
                    set: prop.performanceAttribution,
                  }
                : undefined,
            lastUpdated:
              prop.lastUpdated !== undefined
                ? {
                    set: prop.lastUpdated,
                  }
                : undefined,
            storageLocation:
              prop.storageLocation !== undefined
                ? {
                    set: prop.storageLocation,
                  }
                : undefined,
            retentionDays:
              prop.retentionDays !== undefined
                ? {
                    set: prop.retentionDays,
                  }
                : undefined,
            complianceTags:
              prop.complianceTags !== undefined
                ? {
                    set: prop.complianceTags,
                  }
                : undefined,
            customTags:
              prop.customTags !== undefined
                ? {
                    set: prop.customTags,
                  }
                : undefined,
            executionStatus:
              prop.executionStatus !== undefined
                ? {
                    set: prop.executionStatus,
                  }
                : undefined,
            decisionType:
              prop.decisionType !== undefined
                ? {
                    set: prop.decisionType,
                  }
                : undefined,
            pnlPercentage:
              prop.pnlPercentage !== undefined
                ? {
                    set: prop.pnlPercentage,
                  }
                : undefined,
            dataQuality:
              prop.dataQuality !== undefined
                ? {
                    set: prop.dataQuality,
                  }
                : undefined,
          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_SIGNALLINEAGE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (
          response &&
          response.data &&
          response.data.updateManySignalLineage
        ) {
          return response.data.updateManySignalLineage;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single SignalLineage record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted SignalLineage or null.
   */
  async delete(
    props: SignalLineageType,
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<SignalLineageType> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const DELETE_ONE_SIGNALLINEAGE = gql`
          mutation deleteOneSignalLineage(
            $where: SignalLineageWhereUniqueInput!
          ) {
            deleteOneSignalLineage(where: $where) {
              id
            }
          }
        `;

        const variables = {
          where: {
            id: props.id ? props.id : undefined,
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: DELETE_ONE_SIGNALLINEAGE,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache',
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneSignalLineage) {
          return response.data.deleteOneSignalLineage;
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
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single SignalLineage record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved SignalLineage or null.
   */
  async get(
    props: SignalLineageType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<SignalLineageType | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const GET_SIGNALLINEAGE = gql`
          query getSignalLineage($where: SignalLineageWhereUniqueInput!) {
            getSignalLineage(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput
            ? whereInput
            : {
                id: props.id !== undefined ? props.id : undefined,
                lineageId:
                  props.lineageId !== undefined ? props.lineageId : undefined,
                signalId:
                  props.signalId !== undefined
                    ? {
                        equals: props.signalId,
                      }
                    : undefined,
                symbol:
                  props.symbol !== undefined
                    ? {
                        equals: props.symbol,
                      }
                    : undefined,
              },
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_SIGNALLINEAGE,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.getSignalLineage ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No SignalLineage found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all SignalLineages records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of SignalLineage records or null.
   */
  async getAll(
    globalClient?: ApolloClientType<NormalizedCacheObject>
  ): Promise<SignalLineageType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const GET_ALL_SIGNALLINEAGE = gql`
          query getAllSignalLineage {
            signalLineages {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_SIGNALLINEAGE,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        return response.data?.signalLineages ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No SignalLineage found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple SignalLineage records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found SignalLineage records or null.
   */
  async findMany(
    props: SignalLineageType,
    globalClient?: ApolloClientType<NormalizedCacheObject>,
    whereInput?: any
  ): Promise<SignalLineageType[] | null> {
    // Maximum number of retries for database connection issues
    const MAX_RETRIES = 3;
    let retryCount = 0;
    let lastError: any = null;

    // Retry loop to handle potential database connection issues
    while (retryCount < MAX_RETRIES) {
      try {
        const [modules, client] = await Promise.all([
          getApolloModules(),
          globalClient ? Promise.resolve(globalClient) : importedClient,
        ]);

        const { gql, ApolloError } = modules;

        const FIND_MANY_SIGNALLINEAGE = gql`
          query findManySignalLineage($where: SignalLineageWhereInput!) {
            signalLineages(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput
            ? whereInput
            : {
                id:
                  props.id !== undefined
                    ? {
                        equals: props.id,
                      }
                    : undefined,
                lineageId:
                  props.lineageId !== undefined
                    ? {
                        equals: props.lineageId,
                      }
                    : undefined,
                signalId:
                  props.signalId !== undefined
                    ? {
                        equals: props.signalId,
                      }
                    : undefined,
                symbol:
                  props.symbol !== undefined
                    ? {
                        equals: props.symbol,
                      }
                    : undefined,
              },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_SIGNALLINEAGE,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0)
          throw new Error(response.errors[0].message);
        if (response && response.data && response.data.signallineages) {
          return response.data.signalLineages;
        } else {
          return [] as SignalLineageType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No SignalLineage found') {
          return null;
        }

        // Check if this is a database connection error that we should retry
        const isConnectionError =
          error.message?.includes('Server has closed the connection') ||
          error.message?.includes('Cannot reach database server') ||
          error.message?.includes('Connection timed out') ||
          error.message?.includes('Accelerate') || // Prisma Accelerate proxy errors
          (error.networkError &&
            error.networkError.message?.includes('Failed to fetch'));

        if (isConnectionError && retryCount < MAX_RETRIES - 1) {
          retryCount++;
          const delay = Math.pow(2, retryCount) * 100; // Exponential backoff: 200ms, 400ms, 800ms
          logger.warn('Database connection error, retrying...');
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error('Database error occurred', { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },
};
