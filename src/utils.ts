export function removeUndefinedProps(obj: any): any {
  if (Array.isArray(obj)) {
    return obj
      .map(item => removeUndefinedProps(item))
      .filter(item => item !== undefined && Object.keys(item).length > 0);
  } else if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc: any, key) => {
      let value = obj[key];

      if (value !== undefined) {
        let cleanedValue;

        if (key === 'where' && typeof value === 'object' && value !== null) {
          if (value.hasOwnProperty('id') && value.id !== undefined) {
            // Retain only the 'id' field within 'where'
            cleanedValue = { id: removeUndefinedProps(value.id) };
          } else {
            // Process 'where' object normally if 'id' is undefined or doesn't exist
            cleanedValue = removeUndefinedProps(value);
          }
        } else {
          // Process other keys normally
          cleanedValue = removeUndefinedProps(value);
        }

        if (
          cleanedValue !== undefined &&
          (typeof cleanedValue !== 'object' || Object.keys(cleanedValue).length > 0)
        ) {
          acc[key] = cleanedValue;
        }
      }

      return acc;
    }, {});
  }

  return obj !== undefined ? obj : undefined;
}
