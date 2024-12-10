// src/modules/parser.ts

import fs from 'fs';
import ts from 'typescript';
import { FieldDefinition, FieldType } from './types';
import { URL } from 'url';
import { capitalizeFirstLetter } from './utils';
import path from 'path';

export function isScalarType(typeName: string): boolean {
  if (typeName.startsWith('Enum')) return true;
  if (typeName.startsWith('"')) return true;
  return updatedScalars.has(typeName);
}

const SCALAR_TYPES = ['String', 'Int', 'Float', 'Boolean', 'DateTime', 'Json'];

function parseSchema(schemaPath: string): Map<string, Set<string>> {
  const schemaContent = fs.readFileSync(schemaPath, 'utf-8');
  const models = schemaContent.split(/\n\s*model\s+/).slice(1);
  const modelMap = new Map<string, Set<string>>();

  models.forEach(model => {
    const lines = model.split('\n');
    const modelName = lines[0].split(/\s+/)[0];
    const scalarArrayFields = new Set<string>();

    lines.slice(1).forEach(line => {
      // This regex might be missing some patterns - let's enhance it
      const match = line.match(/^\s*(\w+)\s+([\w\[\]]+)/);
      if (match) {
        const [, fieldName, fieldType] = match;
        // For "dependsOn String[]" this should match
        if (fieldType.endsWith('[]') && SCALAR_TYPES.includes(fieldType.slice(0, -2))) {
          scalarArrayFields.add(fieldName);
        }
      }
    });

    if (scalarArrayFields.size > 0) {
      modelMap.set(modelName, scalarArrayFields);
    }
  });

  return modelMap;
}

export function isScalarArrayType(typeName: string): boolean {
  // Check for direct array notation
  if (typeName.endsWith('[]')) {
    const baseType = typeName.slice(0, -2);
    return isScalarType(baseType);
  }

  // Check for Array<Type> notation
  if (typeName.startsWith('Array<') && typeName.endsWith('>')) {
    const baseType = typeName.slice(6, -1);
    return isScalarType(baseType);
  }

  // Check for Prisma-specific list types
  if (typeName.includes('ListFilter') ||
    typeName.includes('NullableListFilter') ||
    typeName.includes('CreateNestedMany') ||
    typeName.includes('UpdateManyNested')) {
    return true;
  }

  return false;
}

export function isInputObjectType(typeName: string): boolean {
  // check if the type name ends with 'Input'
  return typeName.endsWith('Input');
}

function generateInputTypeNames(modelMap: Map<string, Set<string>>): Set<string> {
  const inputTypeNames = new Set<string>();

  const crudOperations = ['Create', 'CreateMany', 'Update', 'UpdateMany', 'Upsert'];
  const whereOperations = ['Where', 'WhereUnique', 'WhereInput'];

  modelMap.forEach((fields, modelName) => {
    fields.forEach(fieldName => {
      // Generate names for CRUD input types
      crudOperations.forEach(operation => {
        inputTypeNames.add(`${modelName}${operation}${fieldName}Input`);
      });

      // Generate names for where input types
      whereOperations.forEach(operation => {
        inputTypeNames.add(`${modelName}${operation}${fieldName}Input`);
      });

      // Add specific input types that TypeGraphQL-Prisma generates
      inputTypeNames.add(`${modelName}${fieldName}ComparisonInput`);
      inputTypeNames.add(`${fieldName}NullableListFilter`);
      inputTypeNames.add(`${fieldName}ListFilter`);
    });
  });

  return inputTypeNames;
}

export const GRAPHQL_SCALARS = new Set([
  // Basic Scalars
  'String',
  'string',
  'Int',
  'number',
  'Float',
  'float',
  'boolean',
  'Boolean',
  'ID',
  'UUID',
  'Date',
  'DateTime',

  // Prisma Scalars and Filters
  'UuidFilter',
  'Json',
  'JsonValue',
  'Prisma.Json',
  'Prisma.JsonValue',
  'Prisma.JsonFilter',
  'Prisma.InputJsonValue',
  'Prisma.JSONObject',
  'Prisma.JsonNullableFilter',
  'Prisma.JSONValue',
  'JsonNullableFilter',
  'Prisma.JSONValueFilter',
  'BigInt',
  'Decimal',
  'DateTimeFilter',
  'IntFilter',
  'StringFilter',
  'NullableStringFieldUpdateOperationsInput',
  'StringFieldUpdateOperationsInput',
  'StringNullableFilter',
  'BooleanFilter',
  'FloatFilter',
  'BigIntFilter',
  'DecimalFilter',
  'StringNullableListFilter',
  'StringListFilter',
  'IntNullableListFilter',
  'IntListFilter',
  'FloatNullableListFilter',
  'FloatListFilter',
  'DateTimeNullableFilter',
  'DateTimeListFilter',
]);

export function updateGraphQLScalars(schemaPath: string): Set<string> {
  const modelMap = parseSchema(schemaPath);
  const generatedInputTypes = generateInputTypeNames(modelMap);

  generatedInputTypes.forEach(inputType => GRAPHQL_SCALARS.add(inputType));

  return GRAPHQL_SCALARS;
}

const MAX_RECURSION_DEPTH = 10;

const schemaPath = path.join(__dirname, '../../prisma/schema.prisma');
const updatedScalars = updateGraphQLScalars(schemaPath);

export function getInputTypeDefinition(typeFilePath: string | number | Buffer | URL): FieldDefinition[] {
  if (!fs.existsSync(typeFilePath as string)) {
    console.warn(`Warning: Input type file does not exist: ${typeFilePath}`);
    return [];
  }

  const content = fs.readFileSync(typeFilePath, 'utf-8');
  const sourceFile = ts.createSourceFile(typeFilePath as string, content, ts.ScriptTarget.Latest, true);

  const fields: FieldDefinition[] = [];
  const visitedNodes = new Set<ts.Node>();

  const visitor = (node: ts.Node, depth = 0) => {
    if (depth > MAX_RECURSION_DEPTH) {
      console.warn(`Max recursion depth exceeded for node: ${node.getText(sourceFile)} `);
      return;
    }

    if (visitedNodes.has(node)) {
      return;
    }
    visitedNodes.add(node);

    if (ts.isPropertySignature(node) || ts.isPropertyDeclaration(node)) {
      const field = extractField(node, sourceFile);
      if (field) fields.push(field);
    }

    ts.forEachChild(node, (child) => visitor(child, depth + 1));
  };

  function extractField(node: ts.PropertySignature | ts.PropertyDeclaration, sourceFile: ts.SourceFile): FieldDefinition | null {
    const fieldName = node.name.getText(sourceFile);
    const fieldTypeNode = node.type;
    if (!fieldTypeNode) return null;

    const typeInfo = extractTypeInfo(fieldTypeNode, sourceFile) as FieldType;
    if (!typeInfo) return null;

    return {
      name: fieldName,
      type: typeInfo,
    };
  }

  function extractTypeInfo(
    typeNode: ts.TypeNode,
    sourceFile: ts.SourceFile,
    depth = 0
  ): FieldType | null {
    if (depth > MAX_RECURSION_DEPTH) {
      console.warn(`Max recursion depth exceeded for node: ${typeNode.getText(sourceFile)}`);
      return null;
    }

    let isNullable = false;
    let isList = false;
    let isScalar = false;
    let isFieldUpdate = false;
    let baseType: ts.TypeNode = typeNode;
    let isFilterObject = false;

    if (ts.isTypeReferenceNode(typeNode)) {
      const typeName = typeNode.typeName.getText(sourceFile);
      if (typeName.includes('FieldUpdateOperationsInput')) {
        isFieldUpdate = true;
      }
      if (typeName === 'BoolFieldUpdateOperationsInput') {
        isScalar = true;
        isFieldUpdate = true;
      }
      if (typeName === 'Prisma.InputJsonValue') {
        isFieldUpdate = true;
      }
    }

    // Handle nullable types
    if (ts.isUnionTypeNode(typeNode)) {
      const types = typeNode.types.filter(t => !isNullOrUndefined(t, sourceFile));
      isNullable = types.length !== typeNode.types.length;
      baseType = types.length === 1 ? types[0] : typeNode;
    }

    // Extract array information
    const arrayInfo = extractArrayInfo(baseType, sourceFile);
    isList = arrayInfo.isList;
    baseType = arrayInfo.baseType;

    if (ts.isTypeReferenceNode(baseType)) {
      const typeName = baseType.typeName.getText(sourceFile);
      if (typeName.includes('dependsOn') || typeName.includes('dependedOnBy')) {
        console.log('Parser Type Info:', {
          typeName,
          isScalar: isScalarType(typeName),
          isList: isList
        });
      }
    }

    // If still a type reference after array extraction, handle it
    if (ts.isTypeReferenceNode(baseType)) {
      const typeName = baseType.typeName.getText(sourceFile);
      // Check for scalar arrays first
      if (isScalarArrayType(typeName)) {
        isScalar = true;
        isList = true;
      }
      if (isInputObjectType(typeName)) {
        isScalar = false;
      }

      // Process through handleTypeReference to get the complete type info
      let fieldType = handleTypeReference(baseType, sourceFile, isList, isNullable, depth);
      // Apply additional array detection after handleTypeReference if needed
      fieldType = detectAdditionalListPatterns(fieldType, baseType, sourceFile);
      return fieldType;
    }

    // Handle literal types
    if (ts.isLiteralTypeNode(baseType)) {
      const literalField = handleLiteralType(baseType, isList, isNullable);
      return detectAdditionalListPatterns(literalField, baseType, sourceFile);
    }

    // If we get here, we have a non-type reference, non-literal node
    const typeText = baseType.getText(sourceFile);
    if (isScalarType(typeText)) {
      isScalar = true;
    }

    let field: FieldType = {
      name: typeText,
      isScalar,
      isList,
      isNullable,
      isFieldUpdate,
      isFilterObject
    };

    // Apply additional pattern detection for arrays and filters
    field = detectAdditionalListPatterns(field, baseType, sourceFile, typeText);

    return field;
  }

  // Extract array information from TS types (e.g. string[], Array<string>)
  function extractArrayInfo(typeNode: ts.TypeNode, sourceFile: ts.SourceFile): { isList: boolean; baseType: ts.TypeNode } {
    let isList = false;
    let baseType = typeNode;

    while (ts.isArrayTypeNode(baseType) || (ts.isTypeReferenceNode(baseType) && baseType.typeName.getText(sourceFile) === 'Array')) {
      isList = true;
      if (ts.isArrayTypeNode(baseType)) {
        baseType = baseType.elementType;
      } else if (
        ts.isTypeReferenceNode(baseType) &&
        baseType.typeArguments &&
        baseType.typeArguments.length > 0
      ) {
        baseType = baseType.typeArguments[0];
      }
    }

    return { isList, baseType };
  }

  function handleTypeReference(
    node: ts.TypeReferenceNode,
    sourceFile: ts.SourceFile,
    isList: boolean,
    isNullable: boolean,
    depth: number
  ): FieldType {
    const typeName = node.typeName.getText(sourceFile);
    const isScalar = isScalarType(typeName);
    const isFieldUpdate = typeName.includes('FieldUpdateOperationsInput') ||
      typeName.includes('BoolFieldUpdateOperationsInput') ||
      typeName.includes('Prisma.InputJsonValue') || typeName.includes('Input');

    let isFilterObject = false;
    if (typeName.includes('Filter')) {
      isFilterObject = true;
    }

    // Check known patterns for lists
    if (typeName.includes('NestedInput') && typeName.includes('Many')) {
      isList = true;
    }
    if (typeName.includes('ListRelationFilter')) {
      isList = true;
    }
    if (typeName.includes('CreateNestedMany')) {
      isList = true;
    }

    // If it's not a scalar type but includes '[]'
    if (!isScalarType(typeName) && typeName.includes('[]')) {
      isList = true;
    }

    let ofType: FieldType[] | undefined;
    if (node.typeArguments && node.typeArguments.length > 0) {
      // Handle generic types
      const genericArgs = node.typeArguments.map(arg => extractTypeInfo(arg, sourceFile, depth + 1));
      ofType = genericArgs.filter((arg): arg is FieldType => arg !== null);
    }

    const fieldType: FieldType = {
      name: capitalizeFirstLetter(typeName),
      isScalar,
      isList,
      isNullable,
      isFieldUpdate,
      isFilterObject,
      ofType,
    };

    return fieldType;
  }

  function handleLiteralType(node: ts.LiteralTypeNode, isList: boolean, isNullable: boolean): FieldType {
    const literal = node.literal;
    let literalType: string;

    if (ts.isStringLiteral(literal)) {
      literalType = 'string';
    } else if (ts.isNumericLiteral(literal)) {
      literalType = 'number';
    } else if (literal.kind === ts.SyntaxKind.TrueKeyword || literal.kind === ts.SyntaxKind.FalseKeyword) {
      literalType = 'boolean';
    } else {
      literalType = 'unknown';
    }

    return {
      name: literalType,
      isScalar: true,
      isList,
      isNullable,
      isFieldUpdate: false,
    };
  }

  // Additional fallback checks to detect lists from patterns in the type name
  function detectAdditionalListPatterns(
    field: FieldType,
    typeNode: ts.TypeNode,
    sourceFile: ts.SourceFile,
    typeText?: string
  ): FieldType {
    const typeName = ts.isTypeReferenceNode(typeNode) ? typeNode.typeName.getText(sourceFile) : (typeText ?? typeNode.getText(sourceFile));

    // If not already marked as list, check extra conditions
    if (!field.isList) {
      // Arrays indicated by brackets in the type name
      if (typeName.includes('[]')) {
        field.isList = true;
      }

      // If it's a known scalar and was an array in schema, just in case
      if (!field.isList && isScalarType(typeName) && typeName.endsWith('[]')) {
        field.isList = true;
      }

      // Additional known patterns
      if (typeName.includes('NestedMany')) {
        field.isList = true;
      }
      if (typeName.includes('ListRelationFilter')) {
        field.isList = true;
      }
      if (typeName.includes('CreateNestedMany')) {
        field.isList = true;
      }
    }

    return field;
  }

  try {
    ts.forEachChild(sourceFile, (child) => visitor(child));
  } catch (e) {
    console.error('Error processing AST: ', e);
  }

  return fields;
}

function isNullOrUndefined(type: ts.TypeNode, sourceFile: ts.SourceFile): boolean {
  const typeText = type.getText(sourceFile);
  return typeText === 'null' || typeText === 'undefined';
}
