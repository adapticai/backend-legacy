export function removeUndefinedProps(obj: any): any {
  if (Array.isArray(obj)) {
    return obj
      .map(item => removeUndefinedProps(item))
      .filter(item => item !== undefined && Object.keys(item).length > 0);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc: any, key) => {
      const value = obj[key];

      if (value !== undefined) {
        const cleanedValue = removeUndefinedProps(value);

        if (cleanedValue !== undefined && (typeof cleanedValue !== 'object' || Object.keys(cleanedValue).length > 0)) {
          acc[key] = cleanedValue;
        }
      }

      return acc;
    }, {});
  }

  return obj !== undefined ? obj : undefined;
}
