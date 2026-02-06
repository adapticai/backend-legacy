import { ApolloServerPlugin, GraphQLRequestListener } from '@apollo/server';
import { GraphQLError } from 'graphql';
import {
  validatePercentage,
  validatePositiveNumber,
  validateNonEmpty,
  ValidationError,
  ValidationErrorDetail,
} from './input-validator';

/**
 * Field validation rules mapped by field name patterns
 */
interface FieldValidationRule {
  pattern: RegExp;
  validator: (value: unknown, fieldName: string) => void;
  description: string;
}

/**
 * Predefined validation rules for common field patterns
 */
const VALIDATION_RULES: FieldValidationRule[] = [
  // Percentage fields (0-100)
  {
    pattern: /.*Pct$/i,
    validator: (value, fieldName) => {
      if (typeof value === 'number') {
        validatePercentage(value, fieldName);
      }
    },
    description: 'Percentage fields ending with Pct',
  },
  {
    pattern: /.*Percent(age)?$/i,
    validator: (value, fieldName) => {
      if (typeof value === 'number') {
        validatePercentage(value, fieldName);
      }
    },
    description: 'Percentage fields ending with Percent or Percentage',
  },
  // Quantity fields (must be positive)
  {
    pattern: /^quantity$/i,
    validator: (value, fieldName) => {
      if (typeof value === 'number') {
        validatePositiveNumber(value, fieldName);
      }
    },
    description: 'Quantity fields',
  },
  {
    pattern: /.*Threshold$/i,
    validator: (value, fieldName) => {
      if (typeof value === 'number' && value !== 0) {
        validatePositiveNumber(value, fieldName);
      }
    },
    description: 'Threshold fields',
  },
  {
    pattern: /^count$/i,
    validator: (value, fieldName) => {
      if (typeof value === 'number') {
        validatePositiveNumber(value, fieldName);
      }
    },
    description: 'Count fields',
  },
  // Required string fields (non-empty)
  {
    pattern: /^(name|title|description|symbol|type|status)$/i,
    validator: (value, fieldName) => {
      if (typeof value === 'string') {
        validateNonEmpty(value, fieldName);
      }
    },
    description: 'Common required string fields',
  },
];

/**
 * Recursively validates an object's fields based on predefined rules
 */
function validateObject(
  obj: Record<string, unknown>,
  path: string = ''
): ValidationErrorDetail[] {
  const errors: ValidationErrorDetail[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const fieldPath = path ? `${path}.${key}` : key;

    // Skip null or undefined values
    if (value === null || value === undefined) {
      continue;
    }

    // Recursively validate nested objects
    if (typeof value === 'object' && !Array.isArray(value)) {
      const nestedErrors = validateObject(value as Record<string, unknown>, fieldPath);
      errors.push(...nestedErrors);
      continue;
    }

    // Apply validation rules to the field
    for (const rule of VALIDATION_RULES) {
      if (rule.pattern.test(key)) {
        try {
          rule.validator(value, fieldPath);
        } catch (error) {
          if (error instanceof ValidationError) {
            errors.push(...error.fields);
          }
        }
        break; // Only apply the first matching rule
      }
    }
  }

  return errors;
}

/**
 * Apollo Server plugin that validates GraphQL mutation inputs
 *
 * This plugin intercepts all mutation operations and validates input fields
 * before they reach the resolver. It applies validation rules based on field
 * name patterns to ensure data integrity.
 *
 * @example
 * ```typescript
 * const server = new ApolloServer({
 *   schema,
 *   plugins: [
 *     ApolloServerPluginDrainHttpServer({ httpServer }),
 *     createValidationPlugin(),
 *   ],
 * });
 * ```
 */
export function createValidationPlugin(): ApolloServerPlugin {
  return {
    async requestDidStart(): Promise<GraphQLRequestListener<Record<string, unknown>>> {
      return {
        async didResolveOperation(requestContext) {
          const { operation, request } = requestContext;

          // Only validate mutations
          if (!operation || operation.operation !== 'mutation') {
            return;
          }

          const variables = request.variables || {};
          const errors: ValidationErrorDetail[] = [];

          // Validate each mutation's variables
          for (const [variableName, variableValue] of Object.entries(variables)) {
            if (variableValue && typeof variableValue === 'object') {
              // Check if this is a data object (common pattern in mutations)
              const dataObj = variableValue as Record<string, unknown>;

              if ('data' in dataObj && typeof dataObj.data === 'object') {
                const validationErrors = validateObject(
                  dataObj.data as Record<string, unknown>,
                  variableName
                );
                errors.push(...validationErrors);
              } else {
                // Validate the entire variable object
                const validationErrors = validateObject(dataObj, variableName);
                errors.push(...validationErrors);
              }
            }
          }

          // If there are validation errors, throw before resolver execution
          if (errors.length > 0) {
            throw new GraphQLError(
              `Input validation failed for ${errors.length} field${errors.length > 1 ? 's' : ''}`,
              {
                extensions: {
                  code: 'BAD_USER_INPUT',
                  validationErrors: errors,
                },
              }
            );
          }
        },
      };
    },
  };
}

/**
 * Export validation rules for testing and documentation
 */
export { VALIDATION_RULES };
