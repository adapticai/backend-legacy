// generateTypeStrings.ts

import { promises as fs } from 'fs';
import path from 'path';
import { getDMMF } from '@prisma/internals';
import { DMMF } from '@prisma/generator-helper';
import pluralize from 'pluralize';

const SCHEMA_PATH = path.join(__dirname, '../../prisma/schema.prisma');
const OUTPUT_DIR = path.join(__dirname, '../../src/generated/typeStrings');
const INDEX_FILE = path.join(OUTPUT_DIR, 'index.ts');
const MAX_DEPTH = 3; // Set maximum recursion depth

// Define the list of fields to exclude globally
const EXCLUDED_FIELDS = new Set([
  'id',
  'createdAt',
  'updatedAt',
  'slug',
  'alpacaAccountId',
]);

/**
 * Maps Prisma scalar types to TypeScript types.
 */
const SCALAR_TYPE_MAP: { [key: string]: string } = {
  String: 'string',
  Int: 'number',
  Float: 'number',
  Decimal: 'number',
  Boolean: 'boolean',
  DateTime: 'Date',
  Json: 'any',
  // Add more mappings as needed
};

/**
 * Converts a Prisma field to a TypeScript type.
 */
const prismaFieldToTsType = (field: DMMF.Field): string => {
  if (field.kind === 'scalar') {
    return SCALAR_TYPE_MAP[field.type] || 'any';
  } else if (field.kind === 'enum') {
    return field.type;
  } else if (field.kind === 'object') {
    return field.type;
  } else {
    return 'any';
  }
};

/**
 * Determines if a field should be excluded based on its name.
 */
const shouldExcludeField = (fieldName: string): boolean => {
  return (
    EXCLUDED_FIELDS.has(fieldName) ||
    fieldName === 'id' ||
    fieldName.endsWith('Id')
  );
};

/**
 * Parses meta tags from field documentation and returns the cleaned description.
 */
const parseMetaTags = (documentation?: string): { meta: { [key: string]: any }; description: string } => {
  const meta: { [key: string]: any } = {};
  if (!documentation) return { meta, description: '' };

  // Extract meta tags and description
  const metaTagRegex = /([A-Z]+)=((?:\[[^\]]+\])|(?:[^\s]+))/g;
  let match: RegExpExecArray | null;
  let description = documentation;

  while ((match = metaTagRegex.exec(documentation)) !== null) {
    const fullMatch = match[0];
    const key = match[1];
    const value = match[2];

    // Handle boolean values
    let parsedValue: any = value;
    if (value.toLowerCase() === 'true') parsedValue = true;
    else if (value.toLowerCase() === 'false') parsedValue = false;
    // Handle arrays
    else if (value.startsWith('[') && value.endsWith(']')) {
      parsedValue = value.slice(1, -1).split(',').map((s) => s.trim().replace(/['"]/g, ''));
    } else {
      // Remove any surrounding quotes
      parsedValue = value.replace(/['"]/g, '');
    }

    meta[key] = parsedValue;
    // Remove meta tag from description
    description = description.replace(fullMatch, '').trim();
  }

  return { meta, description };
};


/**
 * Generates TypeScript enum declarations.
 */
const generateEnumDeclarations = (
  enums: DMMF.DatamodelEnum[],
  includedEnums: Set<string>
): string => {
  let enumDeclarations = '';
  for (const enumObj of enums) {
    if (includedEnums.has(enumObj.name)) continue;

    const enumDescription = enumObj.documentation
      ? `// ${enumObj.documentation}\n`
      : '';
    const values = enumObj.values
      .map((v) => `  ${v.name} = "${v.name}"`)
      .join(',\n');
    enumDeclarations += `${enumDescription}export enum ${enumObj.name} {\n${values}\n}\n\n`;
    includedEnums.add(enumObj.name);
  }
  return enumDeclarations;
};

/**
 * Generates a fully inlined TypeScript type string for a model with proper indentation.
 */
const generateTypeString = (
  model: DMMF.Model,
  models: Map<string, DMMF.Model>,
  enums: Map<string, DMMF.DatamodelEnum>,
  includedEnums: Set<string>,
  depth: number,
  ancestors: Set<string>,
  indentLevel: number
): string => {
  if (depth > MAX_DEPTH) {
    return 'any';
  }

  ancestors.add(model.name);

  const indent = (level: number) => '  '.repeat(level);

  const fieldsDeclarations: string[] = [];

  for (const field of model.fields) {
    if (shouldExcludeField(field.name)) continue;

    // Parse meta tags and get cleaned description
    const { meta: metaTags, description } = parseMetaTags(field.documentation);
    if (metaTags['SKIP'] === true) continue;

    // Handle field inclusion
    const includeFields = metaTags['INCLUDE'] as string[] | undefined;

    const isOptional = field.isRequired ? '' : '?';
    const isArray = field.isList ? '[]' : '';
    let tsType: string;

    // Add field documentation
    const fieldDescription = description
      ? `${indent(indentLevel + 1)}// ${description}\n`
      : '';

    if (field.kind === 'scalar') {
      tsType = prismaFieldToTsType(field);
    } else if (field.kind === 'enum') {
      tsType = field.type;
      // Handle enums
      const enumObj = enums.get(field.type);
      if (enumObj && !includedEnums.has(enumObj.name)) {
        includedEnums.add(enumObj.name);
      }
    } else if (field.kind === 'object') {
      if (ancestors.has(field.type)) {
        // Check if the field name is the singular or plural form of the ancestor (case-insensitive)
        const singularTypeName = field.type;
        const pluralTypeName = pluralize(field.type);
        if (
          field.name.toLowerCase() === singularTypeName.toLowerCase() ||
          field.name.toLowerCase() === pluralTypeName.toLowerCase()
        ) {
          console.log(
            `Skipping field "${field.name}" in model "${model.name}" as it references the ancestor "${field.type}".`
          );
          continue; // Skip the field
        } else {
          tsType = field.type; // Reference by name to prevent endless loop
        }
      } else {
        const relatedModel = models.get(field.type);
        if (relatedModel) {
          // Recursively generate the nested type
          let nestedType: string;
          if (includeFields && includeFields.length > 0) {
            // Include only specified fields
            nestedType = `{\n${includeFields
              .map((f) => {
                const nestedField = relatedModel.fields.find((nf) => nf.name === f);
                if (!nestedField) return '';
                const nfIsOptional = nestedField.isRequired ? '' : '?';
                const nfType = prismaFieldToTsType(nestedField);
                return `${indent(indentLevel + 2)}${nestedField.name}${nfIsOptional}: ${nfType};`;
              })
              .join('\n')}\n${indent(indentLevel + 1)}}`;
          } else {
            nestedType = generateTypeString(
              relatedModel,
              models,
              enums,
              includedEnums,
              depth + 1,
              new Set(ancestors),
              indentLevel + 1
            );
          }

          // Wrap the nested type with proper indentation
          tsType = nestedType.startsWith('{')
            ? nestedType
            : `{\n${indent(indentLevel + 2)}${nestedType}\n${indent(indentLevel + 1)}}`;
        } else {
          tsType = 'any';
        }
      }
    } else {
      tsType = 'any';
    }

    fieldsDeclarations.push(
      `${fieldDescription}${indent(indentLevel + 1)}${field.name}${isOptional}: ${tsType}${isArray};`
    );
  }

  ancestors.delete(model.name);

  return `{\n${fieldsDeclarations.join('\n')}\n${indent(indentLevel)}}`;
};

/**
 * Main function to generate TypeScript type strings.
 */
const main = async () => {
  try {
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Clean up output directory
    const files = await fs.readdir(OUTPUT_DIR);
    for (const file of files) {
      if (file !== 'index.ts') {
        await fs.unlink(path.join(OUTPUT_DIR, file));
      }
    }

    // Read Prisma schema
    const schema = await fs.readFile(SCHEMA_PATH, 'utf-8');

    // Parse schema
    const dmmf = await getDMMF({ datamodel: schema });

    const enums = new Map(dmmf.datamodel.enums.map((e) => [e.name, e]));
    const models = new Map(dmmf.datamodel.models.map((m) => [m.name, m]));

    // Generate type strings for each model
    const exportStatements: string[] = [];

    for (const [modelName, model] of models) {
      const includedEnums = new Set<string>();
      const ancestors = new Set<string>();

      const instructionLine = `Your response should adhere to the following type definition for the "${model.name}" type.\n\nImportantly, DO NOT include any annotations in your response (i.e., remove the ones we have provided for your reference below).\n\n`;

      // Generate the fully inlined type string with proper indentation
      const typeBody = generateTypeString(
        model,
        models,
        enums,
        includedEnums,
        1,
        ancestors,
        0
      );

      const typeDeclaration = `export type ${model.name} = ${typeBody};\n`;

      // Generate enum declarations
      const enumDeclarations = generateEnumDeclarations(
        Array.from(includedEnums).map((name) => enums.get(name)!),
        new Set()
      );

      const typeString = instructionLine + typeDeclaration + enumDeclarations;

      const fileName = `${model.name}.ts`;
      const filePath = path.join(OUTPUT_DIR, fileName);
      const constName = `${model.name}TypeString`;

      // Escape backticks and dollar signs
      const escapedTypeString = typeString
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$\{/g, '\\${');

      const fileContent = `export const ${constName} = \`\n${escapedTypeString}\`;\n`;
      await fs.writeFile(filePath, fileContent, 'utf-8');
      console.log(`Generated ${fileName}`);

      // Prepare export statement
      const exportName = modelName.charAt(0).toLowerCase() + modelName.slice(1);
      exportStatements.push(`  ${exportName}: ${constName},`);
    }

    // Generate index.ts
    const indexContent =
      Array.from(models.keys())
        .map((modelName) => `import { ${modelName}TypeString } from './${modelName}';`)
        .join('\n') +
      `\n\nexport const typeStrings = {\n` +
      exportStatements.join('\n') +
      `\n} as const;\n\nexport default typeStrings;`;

    await fs.writeFile(INDEX_FILE, indexContent, 'utf-8');
    console.log('Generated index.ts');
  } catch (error) {
    console.error('Error generating type strings:', error);
  }
};

main();
