import { GraphQLError } from 'graphql';

/**
 * Validation error details for field-level error reporting
 */
export interface ValidationErrorDetail {
  field: string;
  value: unknown;
  message: string;
  constraint: string;
}

/**
 * Custom error class for validation failures
 */
export class ValidationError extends GraphQLError {
  public readonly fields: ValidationErrorDetail[];

  constructor(message: string, fields: ValidationErrorDetail[]) {
    super(message, {
      extensions: {
        code: 'BAD_USER_INPUT',
        validationErrors: fields,
      },
    });
    this.fields = fields;
  }
}

/**
 * Validates that a number is within the 0-100 percentage range
 * @param value - The numeric value to validate
 * @param fieldName - The name of the field for error reporting
 * @throws ValidationError if the value is not between 0 and 100
 */
export function validatePercentage(value: number, fieldName: string): void {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new ValidationError('Invalid percentage value', [
      {
        field: fieldName,
        value,
        message: 'Must be a valid number',
        constraint: 'isNumber',
      },
    ]);
  }

  if (value < 0 || value > 100) {
    throw new ValidationError('Percentage out of range', [
      {
        field: fieldName,
        value,
        message: 'Must be between 0 and 100',
        constraint: 'range',
      },
    ]);
  }
}

/**
 * Validates that a number is positive (greater than 0)
 * @param value - The numeric value to validate
 * @param fieldName - The name of the field for error reporting
 * @throws ValidationError if the value is not positive
 */
export function validatePositiveNumber(value: number, fieldName: string): void {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new ValidationError('Invalid numeric value', [
      {
        field: fieldName,
        value,
        message: 'Must be a valid number',
        constraint: 'isNumber',
      },
    ]);
  }

  if (value <= 0) {
    throw new ValidationError('Number must be positive', [
      {
        field: fieldName,
        value,
        message: 'Must be greater than 0',
        constraint: 'positive',
      },
    ]);
  }
}

/**
 * Validates that a string is a valid email format
 * @param value - The string value to validate
 * @throws ValidationError if the value is not a valid email
 */
export function validateEmail(value: string): void {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (typeof value !== 'string') {
    throw new ValidationError('Invalid email value', [
      {
        field: 'email',
        value,
        message: 'Must be a string',
        constraint: 'isString',
      },
    ]);
  }

  if (!emailRegex.test(value)) {
    throw new ValidationError('Invalid email format', [
      {
        field: 'email',
        value,
        message: 'Must be a valid email address',
        constraint: 'email',
      },
    ]);
  }
}

/**
 * Validates that a string is a valid URL format
 * @param value - The string value to validate
 * @throws ValidationError if the value is not a valid URL
 */
export function validateUrl(value: string): void {
  if (typeof value !== 'string') {
    throw new ValidationError('Invalid URL value', [
      {
        field: 'url',
        value,
        message: 'Must be a string',
        constraint: 'isString',
      },
    ]);
  }

  try {
    new URL(value);
  } catch {
    throw new ValidationError('Invalid URL format', [
      {
        field: 'url',
        value,
        message: 'Must be a valid URL',
        constraint: 'url',
      },
    ]);
  }
}

/**
 * Validates that a string is non-empty
 * @param value - The string value to validate
 * @param fieldName - The name of the field for error reporting
 * @throws ValidationError if the value is empty or not a string
 */
export function validateNonEmpty(value: string, fieldName: string): void {
  if (typeof value !== 'string') {
    throw new ValidationError('Invalid string value', [
      {
        field: fieldName,
        value,
        message: 'Must be a string',
        constraint: 'isString',
      },
    ]);
  }

  if (value.trim().length === 0) {
    throw new ValidationError('String cannot be empty', [
      {
        field: fieldName,
        value,
        message: 'Must not be empty',
        constraint: 'notEmpty',
      },
    ]);
  }
}

/**
 * Validates that a confidence score is within the 0-1 range
 * @param value - The numeric value to validate
 * @throws ValidationError if the value is not between 0 and 1
 */
export function validateConfidenceScore(value: number): void {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new ValidationError('Invalid confidence score', [
      {
        field: 'confidenceScore',
        value,
        message: 'Must be a valid number',
        constraint: 'isNumber',
      },
    ]);
  }

  if (value < 0 || value > 1) {
    throw new ValidationError('Confidence score out of range', [
      {
        field: 'confidenceScore',
        value,
        message: 'Must be between 0 and 1',
        constraint: 'range',
      },
    ]);
  }
}

/**
 * Validates multiple fields and accumulates all validation errors
 * @param validations - Array of validation functions to execute
 * @throws ValidationError with all accumulated field errors
 */
export function validateFields(validations: Array<() => void>): void {
  const errors: ValidationErrorDetail[] = [];

  for (const validation of validations) {
    try {
      validation();
    } catch (error) {
      if (error instanceof ValidationError) {
        errors.push(...error.fields);
      } else {
        throw error;
      }
    }
  }

  if (errors.length > 0) {
    throw new ValidationError('Validation failed for multiple fields', errors);
  }
}
