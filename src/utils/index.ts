/**
 * Utils module index
 * Re-exports utility functions for CRUD operations
 *
 * This file provides a utils/index.mjs export path for ESM imports
 * from generated CRUD files that import from './utils/index.mjs'
 */

/**
 * Recursively removes undefined and null properties from an object or array.
 *
 * This utility is called by generated CRUD functions to clean GraphQL variables
 * before passing them to Apollo Client. The input objects contain Prisma-typed
 * fields (Date, Decimal, bigint, JsonValue, nested relations, etc.) which cannot
 * be enumerated exhaustively. The return value is used as Apollo OperationVariables.
 *
 * We use Record<string, unknown> for the parameter to accept all generated Prisma
 * input shapes without needing to enumerate every possible field type.
 */
export function removeUndefinedProps(
  obj: Record<string, unknown> | Record<string, unknown>[] | unknown
): Record<string, unknown> | undefined {
  if (Array.isArray(obj)) {
    return obj
      .map((item) => removeUndefinedProps(item))
      .filter(
        (item) =>
          item !== undefined &&
          item !== null &&
          (typeof item !== 'object' ||
            Object.keys(item as Record<string, unknown>).length > 0)
      ) as unknown as Record<string, unknown>;
  } else if (
    typeof obj === 'object' &&
    obj !== null &&
    !(obj instanceof Date)
  ) {
    const record = obj as Record<string, unknown>;
    return Object.keys(record).reduce((acc: Record<string, unknown>, key) => {
      const value = record[key];

      if (value !== undefined && value !== null) {
        let cleanedValue: unknown;

        if (
          key === 'where' &&
          typeof value === 'object' &&
          value !== null &&
          !(value instanceof Date)
        ) {
          const whereObj = value as Record<string, unknown>;
          if (
            Object.prototype.hasOwnProperty.call(whereObj, 'id') &&
            whereObj.id !== undefined
          ) {
            // Retain only the 'id' field within 'where'
            cleanedValue = {
              id: removeUndefinedProps(whereObj.id as Record<string, unknown>),
            };
          } else {
            // Process 'where' object normally if 'id' is undefined or doesn't exist
            cleanedValue = removeUndefinedProps(
              value as Record<string, unknown>
            );
          }
        } else {
          // Process other keys normally
          cleanedValue = removeUndefinedProps(value as Record<string, unknown>);
        }

        if (
          cleanedValue !== undefined &&
          cleanedValue !== null &&
          (typeof cleanedValue !== 'object' ||
            cleanedValue instanceof Date ||
            Object.keys(cleanedValue as Record<string, unknown>).length > 0)
        ) {
          acc[key] = cleanedValue;
        }
      }

      return acc;
    }, {});
  }

  return obj !== undefined && obj !== null
    ? (obj as Record<string, unknown>)
    : undefined;
}
