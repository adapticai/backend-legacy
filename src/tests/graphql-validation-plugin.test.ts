import { GraphQLError } from 'graphql';
import {
  createValidationPlugin,
  VALIDATION_RULES,
} from '../middleware/graphql-validation-plugin';

describe('GraphQL Validation Plugin', () => {
  describe('VALIDATION_RULES', () => {
    it('should have rules for percentage fields', () => {
      const percentageRules = VALIDATION_RULES.filter(
        (rule) =>
          rule.pattern.test('allocationPct') ||
          rule.pattern.test('percentage') ||
          rule.pattern.test('tradePercent')
      );
      expect(percentageRules.length).toBeGreaterThan(0);
    });

    it('should have rules for quantity fields', () => {
      const quantityRules = VALIDATION_RULES.filter((rule) =>
        rule.pattern.test('quantity')
      );
      expect(quantityRules.length).toBeGreaterThan(0);
    });

    it('should have rules for threshold fields', () => {
      const thresholdRules = VALIDATION_RULES.filter((rule) =>
        rule.pattern.test('volumeThreshold')
      );
      expect(thresholdRules.length).toBeGreaterThan(0);
    });

    it('should have rules for required string fields', () => {
      const stringRules = VALIDATION_RULES.filter(
        (rule) =>
          rule.pattern.test('name') ||
          rule.pattern.test('title') ||
          rule.pattern.test('description')
      );
      expect(stringRules.length).toBeGreaterThan(0);
    });
  });

  describe('createValidationPlugin', () => {
    it('should create a valid Apollo Server plugin', () => {
      const plugin = createValidationPlugin();
      expect(plugin).toBeDefined();
      expect(typeof plugin.requestDidStart).toBe('function');
    });

    it('should return a request listener', async () => {
      const plugin = createValidationPlugin();
      const listener = await plugin.requestDidStart!();
      expect(listener).toBeDefined();
      expect(typeof listener.didResolveOperation).toBe('function');
    });
  });

  describe('Validation behavior', () => {
    let plugin: ReturnType<typeof createValidationPlugin>;
    let listener: Awaited<
      ReturnType<NonNullable<typeof plugin.requestDidStart>>
    >;

    beforeEach(async () => {
      plugin = createValidationPlugin();
      listener = await plugin.requestDidStart!();
    });

    it('should skip validation for queries', async () => {
      const requestContext = {
        operation: {
          operation: 'query',
        },
        request: {
          variables: {
            data: { allocationPct: 150 },
          },
        },
      };

      await expect(
        listener.didResolveOperation!(requestContext as any)
      ).resolves.not.toThrow();
    });

    it('should validate mutation with percentage field', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {
          variables: {
            data: { allocationPct: 150 }, // Invalid percentage
          },
        },
      };

      await expect(
        listener.didResolveOperation!(requestContext as any)
      ).rejects.toThrow(GraphQLError);
    });

    it('should accept valid percentage values', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {
          variables: {
            data: { allocationPct: 50 },
          },
        },
      };

      await expect(
        listener.didResolveOperation!(requestContext as any)
      ).resolves.not.toThrow();
    });

    it('should validate nested data objects', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {
          variables: {
            input: {
              data: {
                allocationPct: 150,
                quantity: -5,
              },
            },
          },
        },
      };

      try {
        await listener.didResolveOperation!(requestContext as any);
        fail('Should have thrown GraphQLError');
      } catch (error) {
        expect(error).toBeInstanceOf(GraphQLError);
        if (error instanceof GraphQLError) {
          expect(error.extensions.code).toBe('BAD_USER_INPUT');
          expect(error.extensions.validationErrors).toBeDefined();
          expect(
            (error.extensions.validationErrors as any[]).length
          ).toBeGreaterThan(0);
        }
      }
    });

    it('should validate multiple fields and report all errors', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {
          variables: {
            data: {
              tradeAllocationPct: 150, // Invalid percentage
              quantity: -10, // Invalid positive number
              name: '', // Invalid non-empty string
            },
          },
        },
      };

      try {
        await listener.didResolveOperation!(requestContext as any);
        fail('Should have thrown GraphQLError');
      } catch (error) {
        expect(error).toBeInstanceOf(GraphQLError);
        if (error instanceof GraphQLError) {
          const validationErrors = error.extensions.validationErrors as any[];
          expect(validationErrors.length).toBeGreaterThanOrEqual(2); // At least percentage and quantity
        }
      }
    });

    it('should skip null and undefined values', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {
          variables: {
            data: {
              allocationPct: null,
              quantity: undefined,
              name: 'Valid Name',
            },
          },
        },
      };

      await expect(
        listener.didResolveOperation!(requestContext as any)
      ).resolves.not.toThrow();
    });

    it('should validate threshold fields', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {
          variables: {
            data: {
              volumeThreshold: -1000, // Invalid positive number
            },
          },
        },
      };

      await expect(
        listener.didResolveOperation!(requestContext as any)
      ).rejects.toThrow(GraphQLError);
    });

    it('should accept zero for threshold fields', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {
          variables: {
            data: {
              volumeThreshold: 0, // Zero is acceptable for thresholds
            },
          },
        },
      };

      await expect(
        listener.didResolveOperation!(requestContext as any)
      ).resolves.not.toThrow();
    });

    it('should validate deeply nested objects', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {
          variables: {
            data: {
              portfolio: {
                allocation: {
                  stocksPct: 150, // Invalid percentage in nested object
                },
              },
            },
          },
        },
      };

      await expect(
        listener.didResolveOperation!(requestContext as any)
      ).rejects.toThrow(GraphQLError);
    });

    it('should handle empty variables object', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {
          variables: {},
        },
      };

      await expect(
        listener.didResolveOperation!(requestContext as any)
      ).resolves.not.toThrow();
    });

    it('should handle missing variables', async () => {
      const requestContext = {
        operation: {
          operation: 'mutation',
        },
        request: {},
      };

      await expect(
        listener.didResolveOperation!(requestContext as any)
      ).resolves.not.toThrow();
    });
  });
});
