/**
 * Validation utilities for Allocation model
 */

export interface AllocationValidationError {
  field: string;
  message: string;
}

export interface AllocationValidationResult {
  isValid: boolean;
  errors: AllocationValidationError[];
}

export interface AllocationValues {
  equities?: number;
  optionsContracts?: number;
  futures?: number;
  etfs?: number;
  forex?: number;
  crypto?: number;
}

/**
 * Validates allocation percentages ensuring they sum to 100% and meet other constraints
 * @param values - Allocation values to validate
 * @returns Validation result with errors if any
 */
export function validateAllocationPercentages(
  values: AllocationValues
): AllocationValidationResult {
  const errors: AllocationValidationError[] = [];

  // Default values matching schema defaults
  const equities = values.equities ?? 70;
  const optionsContracts = values.optionsContracts ?? 5;
  const futures = values.futures ?? 0;
  const etfs = values.etfs ?? 10;
  const forex = values.forex ?? 0;
  const crypto = values.crypto ?? 15;

  // Validate all values are numbers
  const fields = [
    { name: 'equities', value: equities },
    { name: 'optionsContracts', value: optionsContracts },
    { name: 'futures', value: futures },
    { name: 'etfs', value: etfs },
    { name: 'forex', value: forex },
    { name: 'crypto', value: crypto },
  ];

  for (const field of fields) {
    if (typeof field.value !== 'number' || isNaN(field.value)) {
      errors.push({
        field: field.name,
        message: `${field.name} must be a valid number`,
      });
    }
  }

  // If any field is not a number, return early
  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  // Validate no negative values
  for (const field of fields) {
    if (field.value < 0) {
      errors.push({
        field: field.name,
        message: `${field.name} cannot be negative`,
      });
    }
  }

  // Calculate total sum
  const sum = equities + optionsContracts + futures + etfs + forex + crypto;

  // Validate sum is 100% with tolerance for floating point precision
  const MIN_SUM = 99.99;
  const MAX_SUM = 100.01;

  if (sum < MIN_SUM || sum > MAX_SUM) {
    errors.push({
      field: 'allocation',
      message:
        `Total allocation must sum to 100% (current: ${sum.toFixed(2)}%). ` +
        `Please adjust: equities (${equities}%) + optionsContracts (${optionsContracts}%) + ` +
        `futures (${futures}%) + etfs (${etfs}%) + forex (${forex}%) + crypto (${crypto}%)`,
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Throws an error if allocation validation fails
 * @param values - Allocation values to validate
 * @throws Error with detailed validation message
 */
export function assertValidAllocation(values: AllocationValues): void {
  const result = validateAllocationPercentages(values);

  if (!result.isValid) {
    const errorMessages = result.errors
      .map((error) => `${error.field}: ${error.message}`)
      .join('; ');

    throw new Error(`Allocation validation failed: ${errorMessages}`);
  }
}
