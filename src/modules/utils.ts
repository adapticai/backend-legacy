// src/modules/utils.ts

// Function to capitalize the first letter, ensuring the value is not undefined
export function capitalizeFirstLetter(str: string | undefined): string {
  if (!str) {
    throw new Error('Model name is undefined');
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Removes undefined properties from an object recursively.
 * @param obj - The object to filter.
 * @returns A new object without undefined properties.
 */
export const removeUndefinedProps = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(removeUndefinedProps);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj)
      .filter(([_, v]) => v !== undefined)
      .reduce((acc, [k, v]) => {
        acc[k] = removeUndefinedProps(v);
        return acc;
      }, {} as any);
  }
  return obj;
};
