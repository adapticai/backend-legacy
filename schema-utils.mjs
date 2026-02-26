export function parseModels(schema) {
  const models = [];
  const regex = /^model\s+(\w+)\s*{([^}]*)}/gm;
  let match;

  while ((match = regex.exec(schema)) !== null) {
    models.push({
      name: match[1],
      content: match[0].trim(),
    });
  }

  return models;
}

export function findChangedModels(schema, prevSchema) {
  const schemaModels = parseModels(schema);
  const prevSchemaModels = parseModels(prevSchema);
  const changedModels = new Set();

  const prevSchemaMap = new Map(
    prevSchemaModels.map((model) => [model.name, model.content])
  );

  // Compare models
  schemaModels.forEach((model) => {
    const prevModelContent = prevSchemaMap.get(model.name);

    if (!prevModelContent || prevModelContent !== model.content) {
      // Model is new or has changed
      changedModels.add(model.name);
    }
  });

  return Array.from(changedModels);
}
