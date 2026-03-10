
  
import { ModelVersionArtifact as ModelVersionArtifactType } from './generated/typegraphql-prisma/models/ModelVersionArtifact';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the ModelVersionArtifact model.
   */

  const selectionSet = `
    
  id
  modelVersionId
  modelArtifactId
  modelVersion {
    id
    modelName
    version
    status
    parentVersionId
    parentVersion {
id
    }
    childVersions {
id
    }
    performanceAccuracy
    performancePrecision
    performanceRecall
    performanceF1Score
    performanceAuc
    performanceSharpeRatio
    performanceMaxDrawdown
    performanceWinRate
    performanceAvgReturn
    performanceCalibrationScore
    performanceStabilityScore
    validationCrossValidationScore
    validationOutOfSamplePerformance
    validationBacktestResults
    validationStatTestResults
    deploymentEnvironment
    deploymentTrafficAllocation
    deploymentRolloutStrategy
    deploymentHealthCheckConfig
    trainingStartTime
    trainingEndTime
    trainingDuration
    trainingDatasetSize
    trainingFeaturesUsed
    trainingHyperparameters
    trainingResourcePeakMemoryMB
    trainingResourceTotalCpuHours
    trainingResourceGpuHours
    createdAt
    updatedAt
    deployedAt
    deprecatedAt
    abTestsAsControl {
      id
      name
      description
      status
      modelVersionAId
      modelVersionBId
      treatmentVersion {
id
      }
      trafficSplitControlPercent
      trafficSplitTreatmentPercent
      targetMetrics
      successCriteriaPrimaryMetric
      successCriteriaMinimumDetectableEffect
      successCriteriaSignificanceLevel
      successCriteriaPowerLevel
      startDate
      endDate
      plannedDuration
      resultsControlMetrics
      resultsTreatmentMetrics
      resultsStatisticalSignificance
      resultsPValues
      resultsConfidenceIntervals
      resultsRecommendation
      metadataEnvironment
      metadataEligibilityCriteria
      metadataExclusionCriteria
      metadataSegmentationRules
      createdAt
      updatedAt
      completedAt
    }
    abTestsAsTreatment {
      id
      name
      description
      status
      modelVersionAId
      modelVersionBId
      controlVersion {
id
      }
      trafficSplitControlPercent
      trafficSplitTreatmentPercent
      targetMetrics
      successCriteriaPrimaryMetric
      successCriteriaMinimumDetectableEffect
      successCriteriaSignificanceLevel
      successCriteriaPowerLevel
      startDate
      endDate
      plannedDuration
      resultsControlMetrics
      resultsTreatmentMetrics
      resultsStatisticalSignificance
      resultsPValues
      resultsConfidenceIntervals
      resultsRecommendation
      metadataEnvironment
      metadataEligibilityCriteria
      metadataExclusionCriteria
      metadataSegmentationRules
      createdAt
      updatedAt
      completedAt
    }
    featureImportanceAnalyses {
      id
      modelVersionId
      analysisType
      featureImportances
      globalImportance
      localImportance
      analysisMetadataSampleSize
      analysisMetadataBaselineAccuracy
      analysisMetadataAnalysisDate
      analysisMetadataComputationTime
      analysisMetadataAnalysisParameters
      insightsTopFeatures
      insightsRedundantFeatures
      insightsUnexpectedImportances
      insightsStabilityScore
      insightsRecommendations
      createdAt
      updatedAt
    }
  }
  modelArtifact {
    id
    modelName
    version
    artifactType
    storageUrl
    storageProvider
    fileSize
    checksum
    compressionType
    metadataFramework
    metadataPythonVersion
    metadataDependencies
    metadataTrainingDate
    metadataDatasetSize
    metadataHyperparameters
    createdAt
    updatedAt
  }
  createdAt

  `;

  export const ModelVersionArtifact = {

    /**
     * Create a new ModelVersionArtifact record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created ModelVersionArtifact or null.
     */

    /**
     * Create a new ModelVersionArtifact record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created ModelVersionArtifact or null.
     */
    async create(props: ModelVersionArtifactType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ModelVersionArtifactType> {
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

          const CREATE_ONE_MODELVERSIONARTIFACT = gql`
              mutation createOneModelVersionArtifact($data: ModelVersionArtifactCreateInput!) {
                createOneModelVersionArtifact(data: $data) {
                  ${selectionSet}
                }
              }
           `;

          const variables = {
            data: {
              
            },
          };

          const filteredVariables = removeUndefinedProps(variables);

          const response = await client.mutate({
            mutation: CREATE_ONE_MODELVERSIONARTIFACT,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneModelVersionArtifact) {
            return response.data.createOneModelVersionArtifact;
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
            logger.warn("Database connection error, retrying...");
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          // Log the error and rethrow
          logger.error("Database error occurred", { error: String(error) });
          throw error;
        }
      }

      // If we exhausted retries, throw the last error
      throw lastError;
    },

  /**
   * Create multiple ModelVersionArtifact records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of ModelVersionArtifact objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: ModelVersionArtifactType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_MODELVERSIONARTIFACT = gql`
          mutation createManyModelVersionArtifact($data: [ModelVersionArtifactCreateManyInput!]!) {
            createManyModelVersionArtifact(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
          })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_MODELVERSIONARTIFACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyModelVersionArtifact) {
          return response.data.createManyModelVersionArtifact;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update a single ModelVersionArtifact record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated ModelVersionArtifact or null.
   */
  async update(props: ModelVersionArtifactType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ModelVersionArtifactType> {
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

        const UPDATE_ONE_MODELVERSIONARTIFACT = gql`
          mutation updateOneModelVersionArtifact($data: ModelVersionArtifactUpdateInput!, $where: ModelVersionArtifactWhereUniqueInput!) {
            updateOneModelVersionArtifact(data: $data, where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
                },
          data: {
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_ONE_MODELVERSIONARTIFACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneModelVersionArtifact) {
          return response.data.updateOneModelVersionArtifact;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Upsert a single ModelVersionArtifact record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated ModelVersionArtifact or null.
   */
  async upsert(props: ModelVersionArtifactType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ModelVersionArtifactType> {
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

        const UPSERT_ONE_MODELVERSIONARTIFACT = gql`
          mutation upsertOneModelVersionArtifact($where: ModelVersionArtifactWhereUniqueInput!, $create: ModelVersionArtifactCreateInput!, $update: ModelVersionArtifactUpdateInput!) {
            upsertOneModelVersionArtifact(where: $where, create: $create, update: $update) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: {
                },
          create: {
            },
          update: {
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPSERT_ONE_MODELVERSIONARTIFACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneModelVersionArtifact) {
          return response.data.upsertOneModelVersionArtifact;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Update multiple ModelVersionArtifact records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of ModelVersionArtifact objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: ModelVersionArtifactType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_MODELVERSIONARTIFACT = gql`
          mutation updateManyModelVersionArtifact($data: [ModelVersionArtifactCreateManyInput!]!) {
            updateManyModelVersionArtifact(data: $data) {
              count
            }
          }`;

        const variables = props.map(prop => ({
          where: {
            
          },
          data: {
            
          },
        }));

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: UPDATE_MANY_MODELVERSIONARTIFACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyModelVersionArtifact) {
          return response.data.updateManyModelVersionArtifact;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Delete a single ModelVersionArtifact record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted ModelVersionArtifact or null.
   */
  async delete(props: ModelVersionArtifactType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ModelVersionArtifactType> {
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

        const DELETE_ONE_MODELVERSIONARTIFACT = gql`
          mutation deleteOneModelVersionArtifact($where: ModelVersionArtifactWhereUniqueInput!) {
            deleteOneModelVersionArtifact(where: $where) {
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
          mutation: DELETE_ONE_MODELVERSIONARTIFACT,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneModelVersionArtifact) {
          return response.data.deleteOneModelVersionArtifact;
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve a single ModelVersionArtifact record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved ModelVersionArtifact or null.
   */
  async get(props: ModelVersionArtifactType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<ModelVersionArtifactType | null> {
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

        const GET_MODELVERSIONARTIFACT = gql`
          query getModelVersionArtifact($where: ModelVersionArtifactWhereUniqueInput!) {
            getModelVersionArtifact(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
          },
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_MODELVERSIONARTIFACT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getModelVersionArtifact ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No ModelVersionArtifact found') {
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Retrieve all ModelVersionArtifacts records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of ModelVersionArtifact records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ModelVersionArtifactType[] | null> {
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

        const GET_ALL_MODELVERSIONARTIFACT = gql`
          query getAllModelVersionArtifact {
            modelVersionArtifacts {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_MODELVERSIONARTIFACT,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.modelVersionArtifacts ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No ModelVersionArtifact found') {
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  },

  /**
   * Find multiple ModelVersionArtifact records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found ModelVersionArtifact records or null.
   */
  async findMany(props: ModelVersionArtifactType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<ModelVersionArtifactType[] | null> {
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

        const FIND_MANY_MODELVERSIONARTIFACT = gql`
          query findManyModelVersionArtifact($where: ModelVersionArtifactWhereInput!) {
            modelVersionArtifacts(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_MODELVERSIONARTIFACT,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.modelversionartifacts) {
          return response.data.modelVersionArtifacts;
        } else {
          return [] as ModelVersionArtifactType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No ModelVersionArtifact found') {
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
          logger.warn("Database connection error, retrying...");
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }

        // Log the error and rethrow
        logger.error("Database error occurred", { error: String(error) });
        throw error;
      }
    }

    // If we exhausted retries, throw the last error
    throw lastError;
  }
};
