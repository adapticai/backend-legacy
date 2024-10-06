import path from 'path';
import fs from 'fs';
import pluralize from 'pluralize'; // Accurate pluralization
import { FieldDefinition, InputTypePaths } from './types';
import { capitalizeFirstLetter, lowerCaseFirstLetter } from './utils';
import { getInputTypeDefinition, isScalarType } from './parser';

type OperationType = 'create' | 'createMany' | 'update' | 'updateMany' | 'where' | 'findMany' | 'none' | 'upsert' | 'delete' | 'deleteMany' | 'get' | 'getAll';


/**
 * Constructs a GraphQL selection set for a given model.
 * @param modelName - Name of the model.
 * @param modelsPath - Path to the models directory.
 * @param visited - Set of already visited models to prevent circular references.
 * @param indent - Current indentation for formatting.
 * @param currentDepth - Current recursion depth.
 * @param maxDepth - Maximum recursion depth.
 * @returns GraphQL selection set as a string.
 */
function constructSelectionSet(
  modelName: string,
  modelsPath: string,
  visited: Set<string> = new Set(),
  indent: string = '          ',
  currentDepth: number = 0,
  maxDepth: number = 4
): string {
  // Trim inputs to remove unintended whitespace or line breaks
  modelName = modelName.trim();
  modelsPath = modelsPath.trim();

  // Check if we've already visited this model or reached max depth
  if (visited.has(modelName) || currentDepth >= maxDepth) {
    return `${indent}id\n`; // Return basic id to avoid circular references
  }

  // Mark this model as visited
  visited.add(modelName);

  // Use path.join to construct the file path
  const modelPath = path.join(modelsPath, `${modelName}.ts`);

  if (!fs.existsSync(modelPath)) {
    console.warn(`Warning: Model file does not exist: ${modelPath}`);
    return '';
  }

  const fields = getInputTypeDefinition(modelPath);

  if (fields.length === 0) {
    console.warn(`Warning: No fields found in model file: ${modelPath}`);
    return '';
  }

  let selectionSet = '';

  fields.forEach((field) => {
    const fieldName: string = field.name; // The name of the field in the model

    // Extract the type name, handling nested types and lists
    let typeName: string | undefined;
    let isList = false;

    // Function to recursively unwrap types (e.g., NonNull, List)
    function unwrapType(type: any): { name?: string; isList: boolean } {
      if (type.kind === 'NON_NULL') {
        return unwrapType(type.ofType);
      } else if (type.kind === 'LIST') {
        const inner = unwrapType(type.ofType);
        return { name: inner.name, isList: true };
      } else {
        return { name: type.name, isList: false };
      }
    }

    const unwrapped = unwrapType(field.type);
    typeName = unwrapped.name;
    isList = unwrapped.isList;

    if (!typeName) {
      console.warn(`Warning: Unable to determine type for field "${fieldName}" in model "${modelName}".`);
      return;
    }

    // Determine if the type is scalar
    const isScalar = isScalarType(typeName);

    if (fieldName === '_count') {
      return; // Skip _count fields
    }

    if (isScalar) {
      // For scalar fields, simply add the field name
      selectionSet += `${indent}${fieldName}\n`;
    } else {
      const nestedInputTypeName = capitalizeFirstLetter(typeName);

      if (nestedInputTypeName === modelName || visited.has(nestedInputTypeName)) {
        // Avoid circular references by only selecting 'id'
        selectionSet += `${indent}${fieldName} {\n${indent}  id\n${indent}}\n`;
      } else if (currentDepth + 1 >= maxDepth) {
        // If approaching max depth, limit to 'id'
        selectionSet += `${indent}${fieldName} {\n${indent}  id\n${indent}}\n`;
      } else {
        // Recursively construct the selection set for the nested model
        selectionSet += `${indent}${fieldName} {\n`;
        selectionSet += constructSelectionSet(
          nestedInputTypeName,
          modelsPath,
          visited, // Pass the same visited set by reference
          indent + '  ',
          currentDepth + 1,
          maxDepth
        );
        selectionSet += `${indent}}\n`;
      }
    }
  });

  return selectionSet;
}

/**
 * Constructs a variables object for GraphQL operations.
 * @param propsAccessor - The accessor string for properties.
 * @param modelPath - Path to the input type file.
 * @param rootModelName - Name of the root model.
 * @param inputsPath - Path to the inputs directory.
 * @param operationType - Type of the operation (create, update, etc.).
 * @param depth - Current recursion depth.
 * @param maxDepth - Maximum allowed depth for recursion.
 * @returns Variables object as a string.
 */
const constructVariablesObject = (
  propsAccessor: string,
  modelPath: string | null = null,
  rootModelName: string,
  inputsPath: string | null = null,
  modelsPath: string | null = null,
  operationType: OperationType = 'none',
  depth: number = 0,
  maxDepth: number = 4
): string => {
  let fields: FieldDefinition[] = [];
  let inputPath: string | null = null;

  if (modelPath && fs.existsSync(modelPath)) {
    fields = getInputTypeDefinition(modelPath);
  } else {
    inputPath = path.join(inputsPath || '', `${rootModelName}.ts`);
    if (fs.existsSync(inputPath)) {
      fields = getInputTypeDefinition(inputPath);
    } else {
      console.warn(`Warning: Model file does not exist: ${inputPath}`);
      return '';
    }
  }

  if (depth >= maxDepth) {
    return '';
  }

  let variablesObject = '';

  fields.forEach((field) => {
    // Skip meta fields during create operations
    if (
      ['create', 'createMany'].includes(operationType) &&
      ['id', 'createdAt', 'updatedAt'].includes(field.name)
    ) {
      return;
    }

    let accessor = `${propsAccessor}.${field.name}`;

    switch (operationType) {
      case 'create':
      case 'createMany':
        variablesObject += handleCreateOperation(
          field,
          accessor,
          inputsPath,
          modelsPath,
          depth,
          maxDepth
        );
        break;
      case 'update':
      case 'updateMany':
      case 'upsert':
        variablesObject += handleUpdateOperation(
          field,
          accessor,
          inputsPath,
          modelsPath,
          depth,
          maxDepth
        );
        break;
      case 'where':
      case 'findMany':
      case 'get':
        variablesObject += handleWhereOperation(
          field,
          accessor,
          inputsPath,
          modelsPath,
          depth,
          maxDepth
        );
        break;
      // Handle other operation types as needed
      default:
        break;
    }
  });

  return variablesObject;
};

const handleCreateOperation = (
  field: FieldDefinition,
  accessor: string,
  inputsPath: string | null,
  modelsPath: string | null,
  depth: number,
  maxDepth: number
): string => {
  const indent = '  '.repeat(depth + 1);
  if (depth >= maxDepth) {
    return '';
  }

  if (field.type.isScalar) {
    return `${indent}${field.name}: ${accessor} !== undefined ? ${accessor} : undefined,\n`;
  } else {
    if (depth + 1 >= maxDepth) {
      return '';
    }

    const nestedInputTypeName = capitalizeFirstLetter(field.type.name);
    const nestedInputTypePath = path.join(inputsPath || '', `${nestedInputTypeName}.ts`);

    if (!fs.existsSync(nestedInputTypePath)) {
      console.warn(`Nested model input type file does not exist: ${nestedInputTypePath}`);
      return '';
    }

    const nestedItems = getInputTypeDefinition(nestedInputTypePath);

    // Try to find 'connectOrCreate' field
    const connectOrCreateField = nestedItems.find((item) => item.name === 'connectOrCreate');
    if (!connectOrCreateField) {
      console.warn(`No 'connectOrCreate' field found in ${nestedInputTypePath}`);
      return '';
    }

    const operationField = connectOrCreateField;
    const operationFieldName = 'connectOrCreate';
    const operationInputTypeName = operationField.type.name;
    const operationInputTypePath = path.join(inputsPath || '', `${operationInputTypeName}.ts`);
    const operationInputItems = getInputTypeDefinition(operationInputTypePath);

    const whereField = operationInputItems.find((item) => item.name === 'where');
    const createField = operationInputItems.find((item) => item.name === 'create') || operationInputItems.find((item) => item.name === 'data');

    if (!whereField || !createField) {
      console.warn(`Missing 'where', 'update', or 'create' fields in ${operationInputTypePath}`);
      return '';
    }

    const whereInputTypeName = whereField?.type.name;
    const whereInputTypePath = path.join(inputsPath || '', `${whereInputTypeName}.ts`);
    const whereFields = getInputTypeDefinition(whereInputTypePath);

    const createInputTypeName = createField?.type.name;
    const createInputTypePath = path.join(inputsPath || '', `${createInputTypeName}.ts`);
    const createFields = getInputTypeDefinition(createInputTypePath);

    if (createFields.length === 0 || !createFields || !whereFields || whereFields.length === 0) {
      console.warn(`No fields found in create input type: ${createInputTypePath}`);
      return '';
    }

    const openingLine = field.type.isList
      ? `${operationFieldName}: ${accessor}.map((item: any) => ({\n`
      : `${operationFieldName}: {\n`;

    const closingLine = field.type.isList ? `${indent}  }))\n` : `${indent}  }\n`;

    if (depth + 2 >= maxDepth) {
      return '';
    }

    let code =
      `${indent}${field.name}: ${accessor} ? {\n` +
      `${indent}  ${openingLine}` +
      `${indent}    where: {\n` +
      whereFields
        .map((whereField) => {
          if (isUniqueField(whereField.name)) {
            const nestedAccessor = field.type.isList ? `item.${whereField.name}` : `${accessor}.${whereField.name}`;
            if (whereField.type.isScalar && isUniqueField(whereField.name) && whereField.type.isFilterObject) {
              return `${indent}      ${whereField.name}: ${nestedAccessor} !== undefined ? {\n${indent}          equals: ${nestedAccessor} \n ${indent}        } : undefined,\n`;
            } else if (whereField.type.isScalar) {
              return `${indent}      ${whereField.name}: ${nestedAccessor} !== undefined ? ${nestedAccessor} : undefined,\n`;
            } else {
              if (depth + 1 >= maxDepth) {
                return '';
              }
              return `${handleCreateOperation(whereField, nestedAccessor, inputsPath, modelsPath, depth + 1, maxDepth)}`;
            }
          }
        })
        .join('') +
      `${indent}    },\n`

    if (createFields && createFields.length > 0) {
      if (depth + 2 >= maxDepth) {
        return '';
      }
      code +=
        `${indent}    create: {\n` +
        createFields
          .map((createField) => {
            if (['id', 'createdAt', 'updatedAt'].includes(createField.name)) {
              return ''; // Skip meta fields
            }
            const nestedAccessor = field.type.isList ? `item.${createField.name}` : `${accessor}.${createField.name}`;

            if (createField.type.isScalar) {
              return `${indent}      ${createField.name}: ${nestedAccessor} !== undefined ? ${nestedAccessor} : undefined,\n`;
            } else {
              if (depth + 2 >= maxDepth) {
                return '';
              }
              return `${handleCreateOperation(createField, nestedAccessor, inputsPath, modelsPath, depth + 1, maxDepth)}`;
            }
          })
          .join('') +
        `${indent}    },\n`;
    }

    code += `${closingLine}` + `${indent}} : undefined,\n`;

    return code;
  }
};

const handleUpdateOperation = (
  field: FieldDefinition,
  accessor: string,
  inputsPath: string | null,
  modelsPath: string | null,
  depth: number,
  maxDepth: number
): string => {
  const indent = '  '.repeat(depth + 1);
  if (depth >= maxDepth) {
    return '';
  }

  if (field.type.isScalar && field.type.isFieldUpdate) {
    return `${indent}${field.name}: ${accessor} !== undefined ? {\n${indent}          set: ${accessor} \n ${indent}        } : undefined,\n`;
  } else {
    if (depth + 1 >= maxDepth) {
      return '';
    }

    const nestedInputTypeName = capitalizeFirstLetter(field.type.name);
    const nestedInputTypePath = path.join(inputsPath || '', `${nestedInputTypeName}.ts`);

    if (!fs.existsSync(nestedInputTypePath)) {
      console.warn(`Nested model input type file does not exist: ${nestedInputTypePath}`);
      return '';
    }

    const nestedItems = getInputTypeDefinition(nestedInputTypePath);

    // Try to find 'upsert' field
    const upsertField = nestedItems.find((item) => item.name === 'upsert');
    if (!upsertField) {
      console.warn(`No 'upsert' field found in ${nestedInputTypePath}`);
      return '';
    }

    const operationField = upsertField;
    const operationFieldName = 'upsert';
    const operationInputTypeName = operationField.type.name;
    const operationInputTypePath = path.join(inputsPath || '', `${operationInputTypeName}.ts`);
    const operationInputItems = getInputTypeDefinition(operationInputTypePath);

    const whereField = operationInputItems.find((item) => item.name === 'where');
    const updateField = operationInputItems.find((item) => item.name === 'update' || item.name === 'data');
    const createField = operationInputItems.find((item) => item.name === 'create') || operationInputItems.find((item) => item.name === 'data');

    if (!whereField || !updateField) {
      console.warn(`Missing 'where', 'update', or 'create' fields in ${operationInputTypePath}`);
      return '';
    }

    const whereInputTypeName = whereField?.type.name;
    const whereInputTypePath = path.join(inputsPath || '', `${whereInputTypeName}.ts`);
    const whereFields = getInputTypeDefinition(whereInputTypePath);

    const updateInputTypeName = updateField?.type.name;
    const updateInputTypePath = path.join(inputsPath || '', `${updateInputTypeName}.ts`);
    const updateFields = getInputTypeDefinition(updateInputTypePath);

    const createInputTypeName = createField?.type.name;
    const createInputTypePath = path.join(inputsPath || '', `${createInputTypeName}.ts`);
    const createFields = getInputTypeDefinition(createInputTypePath);


    if (updateFields.length === 0 || !updateFields || createFields.length === 0 || !createFields || !whereFields || whereFields.length === 0) {
      console.warn(`No fields found in update input type: ${updateInputTypePath}`);
      return '';
    }

    const openingLine = field.type.isList
      ? `${operationFieldName}: ${accessor}.map((item: any) => ({\n`
      : `${operationFieldName}: {\n`;

    const closingLine = field.type.isList ? `${indent}  }))\n` : `${indent}  }\n`;

    if (depth + 2 >= maxDepth) {
      return '';
    }

    let code =
      `${indent}${field.name}: ${accessor} ? {\n` +
      `${indent}  ${openingLine}` +
      `${indent}    where: {\n` +
      whereFields
        .map((whereField) => {
          if (isUniqueField(whereField.name)) {
            const nestedAccessor = field.type.isList ? `item.${whereField.name}` : `${accessor}.${whereField.name}`;
            if (whereField.type.isScalar && whereField.type.isFilterObject && isUniqueField(whereField.name) || (whereField.type.isFilterObject && isUniqueField(whereField.name))) {
              return `${indent}      ${whereField.name}: ${nestedAccessor} !== undefined ? {\n${indent}          equals: ${nestedAccessor} \n ${indent}        } : undefined,\n`;
            } else if (whereField.type.isScalar) {
              return `${indent}      ${whereField.name}: ${nestedAccessor} !== undefined ? ${nestedAccessor} : undefined,\n`;
            } else {
              if (depth + 1 >= maxDepth) {
                return '';
              }
              return `${handleUpdateOperation(whereField, nestedAccessor, inputsPath, modelsPath, depth + 1, maxDepth)}`;
            }
          }
        })
        .join('') +
      `${indent}    },\n`

    if (operationFieldName === 'upsert' && updateFields && updateFields.length > 0) {
      if (depth + 2 >= maxDepth) {
        return '';
      }
      code +=
        `${indent}    ${operationFieldName === 'upsert' ? 'update' : 'data'}: {\n` +
        updateFields
          .map((updateField) => {
            const nestedAccessor = field.type.isList ? `item.${updateField.name}` : `${accessor}.${updateField.name}`;
            if (updateField.type.isScalar) {
              return `${indent}      ${updateField.name}: ${nestedAccessor} !== undefined ? {\n${indent}          set: ${nestedAccessor}  \n ${indent}        } : undefined,\n`;
            } else if (updateField.type.isFieldUpdate) {

              // skip meta fields
              if (['id', 'createdAt', 'updatedAt'].includes(updateField.name)) {
                return '';
              }
              return `${indent}      ${updateField.name}: ${nestedAccessor} !== undefined ? {\n${indent}          set: ${nestedAccessor}  \n ${indent}        } : undefined,\n`;
            } else if (updateField.type.isNullable) {
              if (depth + 2 >= maxDepth) {
                return '';
              }
              return `${handleUpdateOperation(updateField, nestedAccessor, inputsPath, modelsPath, depth + 1, maxDepth)}`;
            } else {
              if (depth + 2 >= maxDepth) {
                return '';
              }
              return `${handleUpdateOperation(updateField, nestedAccessor, inputsPath, modelsPath, depth + 1, maxDepth)}`;
            }
          })
          .join('') +
        `${indent}    },\n`;
    }

    if (operationFieldName === 'upsert' && createFields && createFields.length > 0) {
      if (depth + 2 >= maxDepth) {
        return '';
      }
      code +=
        `${indent}    create: {\n` +
        createFields
          .map((createField) => {
            if (['id', 'createdAt', 'updatedAt'].includes(createField.name)) {
              return ''; // Skip meta fields
            }
            const nestedAccessor = field.type.isList ? `item.${createField.name}` : `${accessor}.${createField.name}`;

            if (createField.type.isScalar) {
              return `${indent}      ${createField.name}: ${nestedAccessor} !== undefined ? ${nestedAccessor} : undefined,\n`;
            } else {
              if (depth + 2 >= maxDepth) {
                return '';
              }
              return `${handleCreateOperation(createField, nestedAccessor, inputsPath, modelsPath, depth + 1, maxDepth)}`;
            }
          })
          .join('') +
        `${indent}    },\n`;
    }

    code += `${closingLine}` + `${indent}} : undefined,\n`;

    return code;
  }
};

const handleWhereOperation = (
  field: FieldDefinition,
  accessor: string,
  inputsPath: string | null,
  modelsPath: string | null,
  depth: number,
  maxDepth: number
): string => {
  const indent = '  '.repeat(depth + 1);
  if (depth >= maxDepth) {
    return '';
  }

  if (field.type.isScalar && field.type.isFilterObject && isUniqueField(field.name) || (field.type.isFilterObject && isUniqueField(field.name))) {
    return `${indent}      ${field.name}: ${accessor} !== undefined ? {\n${indent}          equals: ${accessor} \n ${indent}        } : undefined,\n`;
  } else if (field.type.isScalar && isUniqueField(field.name)) {
    return `${indent}      ${field.name}: ${accessor} !== undefined ? ${accessor} : undefined,\n`;
  } else {
    if (depth + 1 >= maxDepth) {
      return '';
    }

    const nestedInputTypeName = capitalizeFirstLetter(field.type.name);
    const nestedInputTypePath = path.join(inputsPath || '', `${nestedInputTypeName}.ts`);

    if (!fs.existsSync(nestedInputTypePath)) {
      console.warn(`Nested model input type file does not exist: ${nestedInputTypePath}`);
      return '';
    }

    const nestedItems = getInputTypeDefinition(nestedInputTypePath);

    // Try to find 'where' field
    const whereField = nestedItems.find((item) => item.name === 'where');
    if (!whereField) {
      console.warn(`No 'where' field found in ${nestedInputTypePath}`);
      return '';
    }

    const operationField = whereField;
    const operationFieldName = 'where';
    const operationInputTypeName = operationField.type.name;
    const operationInputTypePath = path.join(inputsPath || '', `${operationInputTypeName}.ts`);
    const operationInputItems = getInputTypeDefinition(operationInputTypePath);

    const openingLine = field.type.isList
      ? `${operationFieldName}: ${accessor}.map((item: any) => ({\n`
      : `${operationFieldName}: {\n`;

    const closingLine = field.type.isList ? `${indent}  }))\n` : `${indent}  }\n`;

    if (depth + 2 >= maxDepth) {
      return '';
    }

    let code =
      `${indent}${field.name}: ${accessor} ? {\n` +
      `${indent}  ${openingLine}` +
      operationInputItems
        .map((whereField) => {
          if (isUniqueField(whereField.name)) {
            const nestedAccessor = field.type.isList ? `item.${whereField.name}` : `${accessor}.${whereField.name}`;
            if (whereField.type.isScalar && whereField.type.isFilterObject && isUniqueField(whereField.name) || (whereField.type.isFilterObject && isUniqueField(whereField.name))) {
              return `${indent}      ${whereField.name}: ${nestedAccessor} !== undefined ? {\n${indent}          equals: ${nestedAccessor} \n ${indent}        } : undefined,\n`;
            } else {
              if (depth + 1 >= maxDepth) {
                return '';
              }
              return `${handleWhereOperation(whereField, nestedAccessor, inputsPath, modelsPath, depth + 1, maxDepth)}`;
            }
          }
        })
        .join('') +
      `${indent}    },\n`

    code += `${closingLine}` + `${indent}}\n`;

    return code;
  }
};
/**
 * Checks if a field name is reserved and should be skipped.
 * @param name - The field name to check.
 * @returns Boolean indicating if the field is reserved.
 */
const isReservedField = (name: string): boolean => {
  const reservedFields = [
    'AND', 'OR', 'NOT',
    'connect', 'disconnect', 'set',
    'update', 'create', 'delete',
    'connectOrCreate', 'upsert',
    'createMany', 'deleteMany', 'updateMany',
    'some', 'none', 'every'
  ];
  return reservedFields.includes(name);
};

/**
 * Checks if a field name is unique and should be used for filtering.
 * @param name - The field name to check.
 * @returns Boolean indicating if the field is unique.
 * */

const isUniqueField = (name: string): boolean => {
  // return true if the field matches any of the unique fields
  const uniqueFields = ['id', 'email', 'username', 'slug', 'name', 'title', 'url', 'key', 'handle', 'symbol'];
  return uniqueFields.includes(name);
};

/**
 * Generates CRUD operations for a given model.
 * @param modelName - Name of the model.
 * @param modelsPath - Path to the models directory.
 * @param inputsPath - Path to the inputs directory.
 * @param functionsOutputPath - Path to output generated functions.
 * @returns Generated TypeScript code for CRUD operations.
 */
export const generateModelFunctions = (
  modelName: string,
  modelsPath: string,
  inputsPath: string,
  functionsOutputPath: string
): string | null => {
  const capitalModelName = capitalizeFirstLetter(modelName);
  const pluralModelName = pluralize(capitalModelName); // Accurate pluralization

  const inputTypes: InputTypePaths = {
    create: `${capitalModelName}CreateInput.ts`,
    createMany: `${capitalModelName}CreateManyInput.ts`,
    update: `${capitalModelName}UpdateInput.ts`,
    updateMany: `${capitalModelName}UpdateManyMutationInput.ts`,
    whereUnique: `${capitalModelName}WhereUniqueInput.ts`,
    scalarWhere: `${capitalModelName}ScalarWhereInput.ts`,
    where: `${capitalModelName}WhereInput.ts`,
  };

  const inputTypePaths: InputTypePaths = {
    create: path.join(inputsPath, inputTypes.create),
    createMany: path.join(inputsPath, inputTypes.createMany),
    update: path.join(inputsPath, inputTypes.update),
    updateMany: path.join(inputsPath, inputTypes.updateMany),
    whereUnique: path.join(inputsPath, inputTypes.whereUnique),
    scalarWhere: path.join(inputsPath, inputTypes.scalarWhere),
    where: path.join(inputsPath, inputTypes.where),
  };

  const selectionSet = constructSelectionSet(capitalModelName, modelsPath);

  const imports = `
import { ${capitalModelName} as ${capitalModelName}Type } from './generated/typegraphql-prisma/models/${capitalModelName}';
import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { removeUndefinedProps } from './utils';
  `;

  const operations = `
${imports}
/**
 * CRUD operations for the ${capitalModelName} model.
 */

export const ${modelName} = {
  /**
   * Create a new ${capitalModelName} record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created ${capitalModelName} or null.
   */
  async create(props: ${capitalModelName}Type, client: ApolloClient<NormalizedCacheObject>): Promise<${capitalModelName}Type> {
    const CREATE_ONE_${capitalModelName.toUpperCase()} = gql\`
      mutation createOne${capitalModelName}($data: ${capitalModelName}CreateInput!) {
        createOne${capitalModelName}(data: $data) {
${selectionSet}        }
      }
   \`;

    const variables = {
      data: {
        ${constructVariablesObject(
    'props',
    inputTypePaths.create,
    capitalModelName,
    inputsPath,
    modelsPath,
    'create'
  )}
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_${capitalModelName.toUpperCase()}, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOne${capitalModelName}) {
        return response.data.createOne${capitalModelName};
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOne${capitalModelName}:', error);
      throw error;
    }
  },

  /**
   * Create multiple ${capitalModelName} records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: ${capitalModelName}Type[], client: ApolloClient<NormalizedCacheObject>): Promise<{ count: number } | null> {
    const CREATE_MANY_${capitalModelName.toUpperCase()} = gql\`
      mutation createMany${capitalModelName}($data: [${capitalModelName}CreateManyInput!]!) {
        createMany${capitalModelName}(data: $data) {
          count
        }
      }\`;

    const variables = {
      data: props.map(prop => ({
${constructVariablesObject(
    'prop',
    inputTypePaths.createMany,
    capitalModelName,
    inputsPath,
    modelsPath,
    'createMany'
  )}      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_${capitalModelName.toUpperCase()}, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createMany${capitalModelName}) {
        return response.data.createMany${capitalModelName};
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createMany${capitalModelName}:', error);
      throw error;
    }
  },

  /**
   * Update a single ${capitalModelName} record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated ${capitalModelName} or null.
   */
  async update(props: ${capitalModelName}Type, client: ApolloClient<NormalizedCacheObject>): Promise<${capitalModelName}Type> {
    const UPDATE_ONE_${capitalModelName.toUpperCase()} = gql\`
      mutation updateOne${capitalModelName}($data: ${capitalModelName}UpdateInput!, $where: ${capitalModelName}WhereUniqueInput!) {
        updateOne${capitalModelName}(data: $data, where: $where) {
${selectionSet}      }
      }\`;

    const variables = {
      where: {
      ${constructVariablesObject(
    'props',
    inputTypePaths.whereUnique,
    capitalModelName,
    inputsPath,
    modelsPath,
    'where'
  )}      },
      data: {
${constructVariablesObject(
    'props',
    inputTypePaths.update,
    capitalModelName,
    inputsPath,
    modelsPath,
    'update'
  )}      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_${capitalModelName.toUpperCase()}, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOne${capitalModelName}) {
        return response.data.updateOne${capitalModelName};
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOne${capitalModelName}:', error);
      throw error;
    }
  },

  /**
   * Delete a single ${capitalModelName} record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The deleted ${capitalModelName} or null.
   */
  async delete(props: ${capitalModelName}Type, client: ApolloClient<NormalizedCacheObject>): Promise<${capitalModelName}Type> {
    const DELETE_ONE_${capitalModelName.toUpperCase()} = gql\`
      mutation deleteOne${capitalModelName}($where: ${capitalModelName}WhereUniqueInput!) {
        deleteOne${capitalModelName}(where: $where) {
${selectionSet}      }
      }\`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_${capitalModelName.toUpperCase()}, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOne${capitalModelName}) {
        return response.data.deleteOne${capitalModelName};
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOne${capitalModelName}:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single ${capitalModelName} record by ID.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The retrieved ${capitalModelName} or null.
   */
  async get(props: ${capitalModelName}Type, client: ApolloClient<NormalizedCacheObject>): Promise<${capitalModelName}Type> {
    const GET_${capitalModelName.toUpperCase()} = gql\`
      query get${capitalModelName}($where: ${capitalModelName}WhereInput!) {
        get${capitalModelName}(where: $where) {
${selectionSet}        }
      }\`;

    const variables = {
      where: {
      ${constructVariablesObject(
    'props',
    inputTypePaths.where,
    capitalModelName,
    inputsPath,
    modelsPath,
    'where'
  )}      },
};
    try {
      const response = await client.query({ query: GET_${capitalModelName.toUpperCase()}, variables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.get${capitalModelName} ?? null;
    } catch (error) {
      console.error('Error in get${capitalModelName}:', error);
      throw error;
    }
  },

  /**
   * Retrieve all ${pluralModelName} records.
   * @param client - Apollo Client instance.
   * @returns An array of ${capitalModelName} records or null.
   */
  async getAll(client: ApolloClient<NormalizedCacheObject>): Promise<${capitalModelName}Type[] | null> {
    const GET_ALL_${capitalModelName.toUpperCase()} = gql\`
      query getAll${capitalModelName} {
        ${lowerCaseFirstLetter(pluralModelName)} {
${selectionSet}      }
      }\`;

    try {
      const response = await client.query({ query: GET_ALL_${capitalModelName.toUpperCase()} });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.${lowerCaseFirstLetter(pluralModelName)} ?? null;
    } catch (error) {
      console.error('Error in getAll${capitalModelName}:', error);
      throw error;
    }
  },

  /**
   * Find multiple ${capitalModelName} records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found ${capitalModelName} records or null.
   */
  async findMany(props: ${capitalModelName}Type, client: ApolloClient<NormalizedCacheObject>): Promise<${capitalModelName}Type[]> {
    const FIND_MANY_${capitalModelName.toUpperCase()} = gql\`
      query findMany${capitalModelName}($where: ${capitalModelName}WhereInput!) {
        ${lowerCaseFirstLetter(pluralModelName)}(where: $where) {
${selectionSet}      }
      }\`;

    const variables = {
      where: {
${constructVariablesObject(
    'props',
    inputTypePaths.where,
    capitalModelName,
    inputsPath,
    modelsPath,
    'findMany'
  )}      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_${capitalModelName.toUpperCase()}, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.${pluralModelName}) {
        return response.data.${lowerCaseFirstLetter(pluralModelName)};
      } else {
       return [] as ${capitalModelName}Type[];
      }
    } catch (error) {
      console.error('Error in findMany${capitalModelName}:', error);
      throw error;
    }
  }
};
`;

  // Write the generated operations to a file
  const outputFilePath = path.join(functionsOutputPath, `${modelName}.ts`);
  try {
    fs.writeFileSync(outputFilePath, operations, 'utf-8');
  } catch (error) {
    console.error(`Failed to write functions for model ${modelName}:`, error);
    return null;
  }

  return operations;
};
