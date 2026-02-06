/**
 * Type definitions for validation middleware
 */

import { GraphQLError } from 'graphql';
import { ValidationErrorDetail } from './input-validator';

/**
 * Configuration options for the validation plugin
 */
export interface ValidationPluginOptions {
  /**
   * Whether to skip validation for specific operations
   */
  skipOperations?: string[];

  /**
   * Custom validation rules to add to the default set
   */
  customRules?: FieldValidationRule[];

  /**
   * Whether to log validation errors for debugging
   */
  debug?: boolean;
}

/**
 * Field validation rule definition
 */
export interface FieldValidationRule {
  /**
   * Regular expression pattern to match field names
   */
  pattern: RegExp;

  /**
   * Validation function to apply to matching fields
   * @param value - The field value to validate
   * @param fieldName - The name of the field being validated
   */
  validator: (value: unknown, fieldName: string) => void;

  /**
   * Human-readable description of what this rule validates
   */
  description: string;
}

/**
 * GraphQL operation context with validation information
 */
export interface ValidationContext {
  /**
   * The GraphQL operation being executed
   */
  operation: {
    operation: 'query' | 'mutation' | 'subscription';
    name?: {
      value: string;
    };
  };

  /**
   * The request variables
   */
  request: {
    variables?: Record<string, unknown>;
  };
}

/**
 * Result of a validation check
 */
export interface ValidationResult {
  /**
   * Whether validation passed
   */
  valid: boolean;

  /**
   * Array of validation errors (empty if valid)
   */
  errors: ValidationErrorDetail[];
}

/**
 * Type guard to check if an error is a ValidationError
 */
export function isValidationError(error: unknown): error is GraphQLError {
  return (
    error instanceof GraphQLError &&
    error.extensions?.code === 'BAD_USER_INPUT' &&
    'validationErrors' in (error.extensions || {})
  );
}

/**
 * Type-safe validator function signature
 */
export type Validator<T> = (value: T, fieldName: string) => void;

/**
 * Validation constraint types
 */
export type ValidationConstraint =
  | 'isNumber'
  | 'isString'
  | 'range'
  | 'positive'
  | 'negative'
  | 'notEmpty'
  | 'email'
  | 'url'
  | 'minimum'
  | 'maximum'
  | 'sum'
  | 'comparison'
  | 'userLimit'
  | 'maxLength'
  | 'custom';
