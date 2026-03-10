
  
import { FeatureImportanceAnalysis as FeatureImportanceAnalysisType } from './generated/typegraphql-prisma/models/FeatureImportanceAnalysis';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the FeatureImportanceAnalysis model.
   */

  const selectionSet = `
    
  id
  modelVersionId
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
    artifacts {
      id
      modelVersionId
      modelArtifactId
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
  }
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

  `;

  export const FeatureImportanceAnalysis = {

    /**
     * Create a new FeatureImportanceAnalysis record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created FeatureImportanceAnalysis or null.
     */

    /**
     * Create a new FeatureImportanceAnalysis record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created FeatureImportanceAnalysis or null.
     */
    async create(props: FeatureImportanceAnalysisType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FeatureImportanceAnalysisType> {
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

          const CREATE_ONE_FEATUREIMPORTANCEANALYSIS = gql`
              mutation createOneFeatureImportanceAnalysis($data: FeatureImportanceAnalysisCreateInput!) {
                createOneFeatureImportanceAnalysis(data: $data) {
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
            mutation: CREATE_ONE_FEATUREIMPORTANCEANALYSIS,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneFeatureImportanceAnalysis) {
            return response.data.createOneFeatureImportanceAnalysis;
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
   * Create multiple FeatureImportanceAnalysis records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of FeatureImportanceAnalysis objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: FeatureImportanceAnalysisType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_FEATUREIMPORTANCEANALYSIS = gql`
          mutation createManyFeatureImportanceAnalysis($data: [FeatureImportanceAnalysisCreateManyInput!]!) {
            createManyFeatureImportanceAnalysis(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
          })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_FEATUREIMPORTANCEANALYSIS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyFeatureImportanceAnalysis) {
          return response.data.createManyFeatureImportanceAnalysis;
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
   * Update a single FeatureImportanceAnalysis record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated FeatureImportanceAnalysis or null.
   */
  async update(props: FeatureImportanceAnalysisType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FeatureImportanceAnalysisType> {
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

        const UPDATE_ONE_FEATUREIMPORTANCEANALYSIS = gql`
          mutation updateOneFeatureImportanceAnalysis($data: FeatureImportanceAnalysisUpdateInput!, $where: FeatureImportanceAnalysisWhereUniqueInput!) {
            updateOneFeatureImportanceAnalysis(data: $data, where: $where) {
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
          mutation: UPDATE_ONE_FEATUREIMPORTANCEANALYSIS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneFeatureImportanceAnalysis) {
          return response.data.updateOneFeatureImportanceAnalysis;
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
   * Upsert a single FeatureImportanceAnalysis record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated FeatureImportanceAnalysis or null.
   */
  async upsert(props: FeatureImportanceAnalysisType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FeatureImportanceAnalysisType> {
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

        const UPSERT_ONE_FEATUREIMPORTANCEANALYSIS = gql`
          mutation upsertOneFeatureImportanceAnalysis($where: FeatureImportanceAnalysisWhereUniqueInput!, $create: FeatureImportanceAnalysisCreateInput!, $update: FeatureImportanceAnalysisUpdateInput!) {
            upsertOneFeatureImportanceAnalysis(where: $where, create: $create, update: $update) {
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
          mutation: UPSERT_ONE_FEATUREIMPORTANCEANALYSIS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneFeatureImportanceAnalysis) {
          return response.data.upsertOneFeatureImportanceAnalysis;
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
   * Update multiple FeatureImportanceAnalysis records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of FeatureImportanceAnalysis objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: FeatureImportanceAnalysisType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_FEATUREIMPORTANCEANALYSIS = gql`
          mutation updateManyFeatureImportanceAnalysis($data: [FeatureImportanceAnalysisCreateManyInput!]!) {
            updateManyFeatureImportanceAnalysis(data: $data) {
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
          mutation: UPDATE_MANY_FEATUREIMPORTANCEANALYSIS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyFeatureImportanceAnalysis) {
          return response.data.updateManyFeatureImportanceAnalysis;
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
   * Delete a single FeatureImportanceAnalysis record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted FeatureImportanceAnalysis or null.
   */
  async delete(props: FeatureImportanceAnalysisType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FeatureImportanceAnalysisType> {
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

        const DELETE_ONE_FEATUREIMPORTANCEANALYSIS = gql`
          mutation deleteOneFeatureImportanceAnalysis($where: FeatureImportanceAnalysisWhereUniqueInput!) {
            deleteOneFeatureImportanceAnalysis(where: $where) {
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
          mutation: DELETE_ONE_FEATUREIMPORTANCEANALYSIS,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneFeatureImportanceAnalysis) {
          return response.data.deleteOneFeatureImportanceAnalysis;
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
   * Retrieve a single FeatureImportanceAnalysis record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved FeatureImportanceAnalysis or null.
   */
  async get(props: FeatureImportanceAnalysisType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<FeatureImportanceAnalysisType | null> {
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

        const GET_FEATUREIMPORTANCEANALYSIS = gql`
          query getFeatureImportanceAnalysis($where: FeatureImportanceAnalysisWhereUniqueInput!) {
            getFeatureImportanceAnalysis(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
          },
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_FEATUREIMPORTANCEANALYSIS,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getFeatureImportanceAnalysis ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No FeatureImportanceAnalysis found') {
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
   * Retrieve all FeatureImportanceAnalyses records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of FeatureImportanceAnalysis records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<FeatureImportanceAnalysisType[] | null> {
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

        const GET_ALL_FEATUREIMPORTANCEANALYSIS = gql`
          query getAllFeatureImportanceAnalysis {
            featureImportanceAnalyses {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_FEATUREIMPORTANCEANALYSIS,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.featureImportanceAnalyses ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No FeatureImportanceAnalysis found') {
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
   * Find multiple FeatureImportanceAnalysis records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found FeatureImportanceAnalysis records or null.
   */
  async findMany(props: FeatureImportanceAnalysisType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<FeatureImportanceAnalysisType[] | null> {
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

        const FIND_MANY_FEATUREIMPORTANCEANALYSIS = gql`
          query findManyFeatureImportanceAnalysis($where: FeatureImportanceAnalysisWhereInput!) {
            featureImportanceAnalyses(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_FEATUREIMPORTANCEANALYSIS,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.featureimportanceanalyses) {
          return response.data.featureImportanceAnalyses;
        } else {
          return [] as FeatureImportanceAnalysisType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No FeatureImportanceAnalysis found') {
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
