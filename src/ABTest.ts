
  
import { ABTest as ABTestType } from './generated/typegraphql-prisma/models/ABTest';
import { client as importedClient, ApolloClientType, NormalizedCacheObject, getApolloModules } from './client';
import { removeUndefinedProps } from './utils';
import { logger } from './utils/logger';
  
  /**
   * CRUD operations for the ABTest model.
   */

  const selectionSet = `
    
  id
  name
  description
  status
  modelVersionAId
  modelVersionBId
  controlVersion {
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
    abTestsAsTreatment {
id
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
  treatmentVersion {
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

  `;

  export const ABTest = {

    /**
     * Create a new ABTest record.
     * @param props - Properties for the new record.
     * @param client - Apollo Client instance.
     * @returns The created ABTest or null.
     */

    /**
     * Create a new ABTest record.
     * Enhanced with connection resilience against Prisma connection errors.
     * @param props - Properties for the new record.
     * @param globalClient - Apollo Client instance.
     * @returns The created ABTest or null.
     */
    async create(props: ABTestType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ABTestType> {
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

          const CREATE_ONE_ABTEST = gql`
              mutation createOneABTest($data: ABTestCreateInput!) {
                createOneABTest(data: $data) {
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
            mutation: CREATE_ONE_ABTEST,
            variables: filteredVariables,
            // Don't cache mutations, but ensure we're using the freshest context
            fetchPolicy: 'no-cache'
          });

          if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
          if (response && response.data && response.data.createOneABTest) {
            return response.data.createOneABTest;
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
   * Create multiple ABTest records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of ABTest objects for the new records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: ABTestType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const CREATE_MANY_ABTEST = gql`
          mutation createManyABTest($data: [ABTestCreateManyInput!]!) {
            createManyABTest(data: $data) {
              count
            }
          }`;

        const variables = {
          data: props.map(prop => ({
          })),
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.mutate({
          mutation: CREATE_MANY_ABTEST,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.createManyABTest) {
          return response.data.createManyABTest;
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
   * Update a single ABTest record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated ABTest or null.
   */
  async update(props: ABTestType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ABTestType> {
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

        const UPDATE_ONE_ABTEST = gql`
          mutation updateOneABTest($data: ABTestUpdateInput!, $where: ABTestWhereUniqueInput!) {
            updateOneABTest(data: $data, where: $where) {
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
          mutation: UPDATE_ONE_ABTEST,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateOneABTest) {
          return response.data.updateOneABTest;
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
   * Upsert a single ABTest record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to update.
   * @param globalClient - Apollo Client instance.
   * @returns The updated ABTest or null.
   */
  async upsert(props: ABTestType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ABTestType> {
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

        const UPSERT_ONE_ABTEST = gql`
          mutation upsertOneABTest($where: ABTestWhereUniqueInput!, $create: ABTestCreateInput!, $update: ABTestUpdateInput!) {
            upsertOneABTest(where: $where, create: $create, update: $update) {
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
          mutation: UPSERT_ONE_ABTEST,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.upsertOneABTest) {
          return response.data.upsertOneABTest;
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
   * Update multiple ABTest records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Array of ABTest objects for the updated records.
   * @param globalClient - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async updateMany(props: ABTestType[], globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<{ count: number } | null> {
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

        const UPDATE_MANY_ABTEST = gql`
          mutation updateManyABTest($data: [ABTestCreateManyInput!]!) {
            updateManyABTest(data: $data) {
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
          mutation: UPDATE_MANY_ABTEST,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.updateManyABTest) {
          return response.data.updateManyABTest;
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
   * Delete a single ABTest record.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record to delete.
   * @param globalClient - Apollo Client instance.
   * @returns The deleted ABTest or null.
   */
  async delete(props: ABTestType, globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ABTestType> {
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

        const DELETE_ONE_ABTEST = gql`
          mutation deleteOneABTest($where: ABTestWhereUniqueInput!) {
            deleteOneABTest(where: $where) {
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
          mutation: DELETE_ONE_ABTEST,
          variables: filteredVariables,
          // Don't cache mutations, but ensure we're using the freshest context
          fetchPolicy: 'no-cache'
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.deleteOneABTest) {
          return response.data.deleteOneABTest;
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
   * Retrieve a single ABTest record by ID.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Properties to identify the record.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns The retrieved ABTest or null.
   */
  async get(props: ABTestType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<ABTestType | null> {
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

        const GET_ABTEST = gql`
          query getABTest($where: ABTestWhereUniqueInput!) {
            getABTest(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
          },
        };
        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: GET_ABTEST,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.getABTest ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No ABTest found') {
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
   * Retrieve all ABTests records.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param globalClient - Apollo Client instance.
   * @returns An array of ABTest records or null.
   */
  async getAll(globalClient?: ApolloClientType<NormalizedCacheObject>): Promise<ABTestType[] | null> {
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

        const GET_ALL_ABTEST = gql`
          query getAllABTest {
            aBTests {
              ${selectionSet}
            }
          }`;

        const response = await client.query({
          query: GET_ALL_ABTEST,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        return response.data?.aBTests ?? null;
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No ABTest found') {
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
   * Find multiple ABTest records based on conditions.
   * Enhanced with connection resilience against Prisma connection errors.
   * @param props - Conditions to find records.
   * @param globalClient - Apollo Client instance.
   * @param whereInput - Optional custom where input.
   * @returns An array of found ABTest records or null.
   */
  async findMany(props: ABTestType, globalClient?: ApolloClientType<NormalizedCacheObject>, whereInput?: any): Promise<ABTestType[] | null> {
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

        const FIND_MANY_ABTEST = gql`
          query findManyABTest($where: ABTestWhereInput!) {
            aBTests(where: $where) {
              ${selectionSet}
            }
          }`;

        const variables = {
          where: whereInput ? whereInput : {
          },
        };

        const filteredVariables = removeUndefinedProps(variables);

        const response = await client.query({
          query: FIND_MANY_ABTEST,
          variables: filteredVariables,
          fetchPolicy: 'network-only', // Force network request to avoid stale cache
        });

        if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
        if (response && response.data && response.data.abtests) {
          return response.data.aBTests;
        } else {
          return [] as ABTestType[];
        }
      } catch (error: any) {
        lastError = error;

        // Check if this is a "No record found" error - this is an expected condition, not a failure
        if (error.message === 'No ABTest found') {
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
