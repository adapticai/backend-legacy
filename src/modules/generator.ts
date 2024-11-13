import path from 'path';
import fs from 'fs';
import pluralize from 'pluralize';
import { FieldDefinition, InputTypePaths } from './types';
import { capitalizeFirstLetter, lowerCaseFirstLetter } from './utils';
import { getInputTypeDefinition } from './parser';
import { selectionSets } from '../generated/selectionSets';

type ModelName = keyof typeof selectionSets;

type OperationType = 'create' | 'createMany' | 'update' | 'updateMany' | 'where' | 'findMany' | 'none' | 'upsert' | 'delete' | 'deleteMany' | 'get' | 'getAll';


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
  maxDepth: number = 5
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

    // Add dynamic handling for cases where accessor is an object with only one field 'id'. If so, use 'connect' instead of 'connectOrCreate', and use accessor.id instead of accessor.
    const openingLine = field.type.isList
      ? `Array.isArray(${accessor}) && ${accessor}.length > 0 &&  ${accessor}.every((item: any) => typeof item === 'object' && 'id' in item && Object.keys(item).length === 1) ? {
    ${indent}connect: ${indent} ${accessor}.map((item: any) => ({
    ${indent}   id: item.id
    ${indent}}))\n }\n : { ${operationFieldName}: ${accessor}.map((item: any) => ({\n`
      : `typeof ${accessor} === 'object' && Object.keys(${accessor}).length === 1 && Object.keys(${accessor})[0] === 'id'
    ? { connect: {
     ${indent} id: ${accessor}.id
     ${indent} }
    ${indent}}
    : { ${operationFieldName}: {\n`;

    const closingLine = field.type.isList ? `${indent}  }))\n` : `${indent}  }\n`;

    if (depth + 2 >= maxDepth) {
      return '';
    }

    let code =
      `${indent}${field.name}: ${accessor} ? \n` +
      `${indent}  ${openingLine}` +
      `${indent}    where: {\n` +
      whereFields
        .map((whereField) => {
          if (isUniqueField(whereField.name)) {
            const nestedAccessor = field.type.isList ? `item.${whereField.name}` : `${accessor}.${whereField.name}`;
            if (isUniqueField(whereField.name) && whereField.type.isScalar && whereField.type.isFilterObject) {
              return `${indent}      ${whereField.name}: ${nestedAccessor} !== undefined ? {\n${indent}          equals: ${nestedAccessor} \n ${indent}        } : undefined,\n`;
            } else if (whereField.type.isScalar && isUniqueField(whereField.name)) {
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

  if (field.type.isScalar && field.type.isFieldUpdate || field.type.isFieldUpdate) {
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
            if (isUniqueField(whereField.name) && whereField.type.isScalar && whereField.type.isFilterObject) {
              return `${indent}      ${whereField.name}: ${nestedAccessor} !== undefined ? {\n${indent}          equals: ${nestedAccessor} \n ${indent}        } : undefined,\n`;
            } else if (isUniqueField(whereField.name) && whereField.type.isScalar) {
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

/**
 * Generates the JSON object string for the 'where' field in a GraphQL query.
 * This function traverses the field definitions and constructs the appropriate
 * 'where' conditions based on scalar and relational fields.
 *
 * @param field - The current field definition being processed.
 * @param accessor - The accessor string to retrieve the value for the field.
 * @param inputsPath - The path to the input type definitions.
 * @param modelsPath - The path to the model definitions.
 * @param depth - The current depth of recursion.
 * @param maxDepth - The maximum allowed depth of recursion to prevent infinite loops.
 * @returns A string representing the 'where' condition for the field.
 */
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

  if (field.type.isScalar) {
    // Check if the scalar field requires an "equals" wrapper
    if (field.type.isFilterObject && isUniqueField(field.name)) {
      return `${indent}${field.name}: ${accessor} !== undefined ? {\n${indent}  equals: ${accessor} \n${indent}} : undefined,\n`;
    } else {
      // Handle regular scalar fields without "equals" wrapper
      return `${indent}${field.name}: ${accessor} !== undefined ? ${accessor} : undefined,\n`;
    }
  } else {
    // Handle relational fields
    if (depth + 1 >= maxDepth) {
      return '';
    }

    const nestedFilterTypeName = capitalizeFirstLetter(field.type.name) + 'Filter';
    const nestedFilterTypePath = path.join(inputsPath || '', `${nestedFilterTypeName}.ts`);

    if (!fs.existsSync(nestedFilterTypePath)) {
      console.warn(`Nested filter type file does not exist: ${nestedFilterTypePath}`);
      return '';
    }

    const nestedFilterFields = getInputTypeDefinition(nestedFilterTypePath);

    if (nestedFilterFields.length === 0) {
      console.warn(`No fields found in nested filter type: ${nestedFilterTypePath}`);
      return '';
    }

    let condition = '';

    if (field.type.isList) {
      // If the field is a list, use some or every conditions
      condition += `${indent}${field.name}: ${accessor} !== undefined ? {\n` +
        `${indent}  some: {\n` +
        nestedFilterFields
          .map((nestedField) => {
            const nestedAccessor = `${accessor}.${nestedField.name}`;
            return handleWhereOperation(
              nestedField,
              nestedAccessor,
              inputsPath,
              modelsPath,
              depth + 2,
              maxDepth
            );
          })
          .join('') +
        `${indent}  }\n` +
        `${indent}} : undefined,\n`;
    } else {
      // If the field is a single relation, apply the nested filter directly
      condition += `${indent}${field.name}: ${accessor} !== undefined ? {\n` +
        nestedFilterFields
          .map((nestedField) => {
            const nestedAccessor = `${accessor}.${nestedField.name}`;
            return handleWhereOperation(
              nestedField,
              nestedAccessor,
              inputsPath,
              modelsPath,
              depth + 2,
              maxDepth
            );
          })
          .join('') +
        `${indent}} : undefined,\n`;
    }

    return condition;
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
  // if name includes "Id", return true
  if (name.includes('Id')) {
    return true;
  }

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
  const capitalModelName = capitalizeFirstLetter(modelName) as ModelName;
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


  const imports = `
import { ${capitalModelName} as ${capitalModelName}Type } from './generated/typegraphql-prisma/models/${capitalModelName}';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  `;

  const operations = `
  ${imports}
  /**
   * CRUD operations for the ${capitalModelName} model.
   */

  const selectionSet = \`
    ${selectionSets[capitalModelName]}
  \`;

  export const ${modelName} = {

    /**
     * Create a new ${capitalModelName} record.
     * @param props - Properties for the new record.
     * @returns The created ${capitalModelName} or null.
     */

    async create(props: ${capitalModelName}Type): Promise<${capitalModelName}Type> {

    const client = createApolloClient();

    const CREATE_ONE_${capitalModelName.toUpperCase()} = gql\`
        mutation createOne${capitalModelName}($data: ${capitalModelName}CreateInput!) {
          createOne${capitalModelName}(data: $data) {
            \${selectionSet}
          }
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
   * @param props - Array of ${capitalModelName} objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: ${capitalModelName}Type[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

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
   * @returns The updated ${capitalModelName} or null.
   */
  async update(props: ${capitalModelName}Type): Promise<${capitalModelName}Type> {

    const client = createApolloClient();

      const UPDATE_ONE_${capitalModelName.toUpperCase()} = gql\`
      mutation updateOne${capitalModelName}($data: ${capitalModelName}UpdateInput!, $where: ${capitalModelName}WhereUniqueInput!) {
        updateOne${capitalModelName}(data: $data, where: $where) {
          \${selectionSet}
        }
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
   * Update multiple ${capitalModelName} records.
   * @param props - Array of ${capitalModelName} objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: ${capitalModelName}Type[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_${capitalModelName.toUpperCase()} = gql\`
      mutation updateMany${capitalModelName}($data: [${capitalModelName}CreateManyInput!]!) {
        updateMany${capitalModelName}(data: $data) {
          count
        }
      }\`;

    const variables = props.map(prop => ({
      where: {
        ${constructVariablesObject(
    'prop',
    inputTypePaths.whereUnique,
    capitalModelName,
    inputsPath,
    modelsPath,
    'where'
  )}
      },
      data: {
        ${constructVariablesObject(
    'prop',
    inputTypePaths.update,
    capitalModelName,
    inputsPath,
    modelsPath,
    'updateMany'
  )}
      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_${capitalModelName.toUpperCase()}, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateMany${capitalModelName}) {
        return response.data.updateMany${capitalModelName};
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateMany${capitalModelName}:', error);
      throw error;
    }
  },

  /**
   * Delete a single ${capitalModelName} record.
   * @param props - Properties to update.
   * @returns The deleted ${capitalModelName} or null.
   */
  async delete(props: ${capitalModelName}Type): Promise<${capitalModelName}Type> {

    const client = createApolloClient();

      const DELETE_ONE_${capitalModelName.toUpperCase()} = gql\`
      mutation deleteOne${capitalModelName}($where: ${capitalModelName}WhereUniqueInput!) {
        deleteOne${capitalModelName}(where: $where) {
          \${selectionSet}
        }
      }\`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_${capitalModelName.toUpperCase()}, variables: filteredVariables });
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
   * @returns The retrieved ${capitalModelName} or null.
   */
  async get(props: ${capitalModelName}Type): Promise<${capitalModelName}Type | null> {

    const client = createApolloClient();

      const GET_${capitalModelName.toUpperCase()} = gql\`
      query get${capitalModelName}($where: ${capitalModelName}WhereUniqueInput!) {
        get${capitalModelName}(where: $where) {
          \${selectionSet}
        }
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
  )}},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_${capitalModelName.toUpperCase()}, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.get${capitalModelName} ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No ${capitalModelName} found') {
        return null;
      } else {
        console.error('Error in get${capitalModelName}:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all ${pluralModelName} records.
   * @returns An array of ${capitalModelName} records or null.
   */
  async getAll(): Promise<${capitalModelName}Type[] | null> {

    const client = createApolloClient();

      const GET_ALL_${capitalModelName.toUpperCase()} = gql\`
      query getAll${capitalModelName} {
        ${lowerCaseFirstLetter(pluralModelName)} {
          \${selectionSet}
        }
      }\`;

    try {
      const response = await client.query({ query: GET_ALL_${capitalModelName.toUpperCase()} });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.${lowerCaseFirstLetter(pluralModelName)} ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No ${capitalModelName} found') {
        return null;
      } else {
        console.error('Error in get${capitalModelName}:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple ${capitalModelName} records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found ${capitalModelName} records or null.
   */
  async findMany(props: ${capitalModelName}Type): Promise<${capitalModelName}Type[] | null> {

    const client = createApolloClient();

      const FIND_MANY_${capitalModelName.toUpperCase()} = gql\`
      query findMany${capitalModelName}($where: ${capitalModelName}WhereInput!) {
        ${lowerCaseFirstLetter(pluralModelName)}(where: $where) {
          \${selectionSet}
        }
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
      if (error instanceof ApolloError && error.message === 'No ${capitalModelName} found') {
        return null;
      } else {
        console.error('Error in get${capitalModelName}:', error);
        throw error;
      }
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
