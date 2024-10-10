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
      const match = line.match(/^\s*(\w+)\s+([\w\[\]]+)/);
      if (match) {
        const [, fieldName, fieldType] = match;
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

  // 1. Implement recursive handling of nested arrays
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

    // if field.type.name includes FieldUpdateOperationsInput, set isFieldUpdate to true
    if (ts.isTypeReferenceNode(typeNode)) {
      const typeName = typeNode.typeName.getText(sourceFile);
      if (typeName.includes('FieldUpdateOperationsInput')) {
        isFieldUpdate = true;
      }
    }
    
    // Handle nullable types
    if (ts.isUnionTypeNode(typeNode)) {
      const types = typeNode.types.filter(t => !isNullOrUndefined(t, sourceFile));
      isNullable = types.length !== typeNode.types.length;
      baseType = types.length === 1 ? types[0] : typeNode;
    }

    // Handle array types
    const arrayInfo = extractArrayInfo(baseType, sourceFile);
    isList = arrayInfo.isList;
    baseType = arrayInfo.baseType;

    // Handle type references (e.g., custom types, generics)
    if (ts.isTypeReferenceNode(baseType)) {
      return handleTypeReference(baseType, sourceFile, isList, isNullable, depth);
    }

    // Handle literal types
    if (ts.isLiteralTypeNode(baseType)) {
      return handleLiteralType(baseType, isList, isNullable);
    }


    // if field.type.name includes 'NestedMany', set isList to true
    if (ts.isTypeReferenceNode(typeNode)) {
      const typeName = typeNode.typeName.getText(sourceFile);
      if (typeName.includes('NestedInput') && typeName.includes('Many')) {
        isList = true;
      }
    }
    // if field.type.name includes 'NestedOne', set isList to true
    if (ts.isTypeReferenceNode(typeNode)) {
      const typeName = typeNode.typeName.getText(sourceFile);
      if (typeName.includes('NestedOne')) {
        isList = true;
      }
    }

    // if field.type.name includes 'Filter', set isFilterObject to true
    if (ts.isTypeReferenceNode(typeNode)) {
      const typeName = typeNode.typeName.getText(sourceFile);
      if (typeName.includes('Filter')) {
        isFilterObject = true;
      }
    }

    // if field.type.name includes 'ListRelationFilter', set isList to true
    if (ts.isTypeReferenceNode(typeNode)) {
      const typeName = typeNode.typeName.getText(sourceFile);
      if (typeName.includes('ListRelationFilter')) {
        isList = true;
      }
    }

    // if field.type.name contains `CreateNestedManyWithout`, set isList of parent to true
    if (ts.isTypeReferenceNode(typeNode)) {
      const typeName = typeNode.typeName.getText(sourceFile);
      if (typeName.includes('CreateNestedMany')) {
        isList = true;
      }
    }

    // if field.type.name contains `[]` and is not a scalar type, set isList to true
    if (ts.isArrayTypeNode(typeNode)) {
      const typeName = typeNode.elementType.getText(sourceFile);
      if (!isScalarType(typeName) && typeName.includes('[]')) {
        isList = true;
      }
    }

    // Handle other types
    const typeText = baseType.getText(sourceFile);
    if (isScalarType(typeText)) {
      isScalar = true;
    }

    return {
      name: typeText,
      isScalar,
      isList,
      isNullable,
      isFieldUpdate,
      isFilterObject
    };
  }

  // Helper function to extract array information
  function extractArrayInfo(typeNode: ts.TypeNode, sourceFile: ts.SourceFile): { isList: boolean; baseType: ts.TypeNode } {
    let isList = false;
    let baseType = typeNode;

    while (ts.isArrayTypeNode(baseType) || (ts.isTypeReferenceNode(baseType) && baseType.typeName.getText(sourceFile) === 'Array')) {
      isList = true;
      if (ts.isArrayTypeNode(baseType)) {
        baseType = baseType.elementType;
      } else if (ts.isTypeReferenceNode(baseType) && baseType.typeArguments && baseType.typeArguments.length > 0) {
        baseType = baseType.typeArguments[0];
      }
    }

    return { isList, baseType };
  }

  // Helper function to handle type references
  function handleTypeReference(
    node: ts.TypeReferenceNode,
    sourceFile: ts.SourceFile,
    isList: boolean,
    isNullable: boolean,
    depth: number
  ): FieldType {
    const typeName = node.typeName.getText(sourceFile);
    const isScalar = isScalarType(typeName);
    const isFieldUpdate = typeName.includes('FieldUpdateOperationsInput');
    let isFilterObject = false;


    // if field.type.name includes 'Enum' and 'Filter', set isFilterObject to true
    if (typeName.includes('Filter')) {
      isFilterObject = true;
    }

    // if field.type.name includes 'NestedMany', set isList to true
    if (typeName.includes('NestedInput') && typeName.includes('Many')) {
      isList = true;
    }

    // if field.type.name includes 'ListRelationFilter', set isList to true
    if (typeName.includes('ListRelationFilter')) {
      isList = true;
    }

    // if field.type.name contains `CreateNestedManyWithout`, set isList of parent to true
    if (typeName.includes('CreateNestedMany')) {
      isList = true;
    }

    // if field.type.name contains `[]` and is not a scalar type, set isList to true
    if (!isScalarType(typeName) && typeName.includes('[]')) {
      isList = true;
    }

    if (node.typeArguments && node.typeArguments.length > 0) {
      // Handle generic types
      const genericArgs = node.typeArguments.map(arg => extractTypeInfo(arg, sourceFile, depth + 1));
      return {
        name: capitalizeFirstLetter(typeName),
        isScalar: false,
        isList,
        isNullable,
        isFieldUpdate,
        isFilterObject,
        ofType: genericArgs.filter((arg): arg is FieldType => arg !== null),
      };
    }

    return {
      name: typeName,
      isScalar,
      isList,
      isNullable,
      isFieldUpdate,
      isFilterObject,
    };
  }

  // Helper function to handle literal types
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

  try {
    ts.forEachChild(sourceFile, (child) => visitor(child));
  } catch (e) {
    console.error('Error processing AST: ', e);
  }
  return fields;
}

// Helper function to check if a type is null or undefined
function isNullOrUndefined(type: ts.TypeNode, sourceFile: ts.SourceFile): boolean {
  const typeText = type.getText(sourceFile);
  return typeText === 'null' || typeText === 'undefined';
}
