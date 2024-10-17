// generateTypeStrings.ts

import { promises as fs } from 'fs';
import path from 'path';
import { parseSchema, DMMF } from '@prisma/sdk';

const SCHEMA_PATH = path.join(__dirname, 'prisma', 'schema.prisma');
const OUTPUT_DIR = path.join(__dirname, 'src', 'generated', 'type-strings');
const INDEX_FILE = path.join(OUTPUT_DIR, 'index.ts');

/**
 * Converts Prisma scalar types to TypeScript types.
 */
const prismaToTsType = (type: string): string => {
  const typeMap: { [key: string]: string } = {
    String: 'string',
    Int: 'number',
    Float: 'number',
    Boolean: 'boolean',
    DateTime: 'Date',
    Json: 'any',
    // Add more mappings as needed
  };
  return typeMap[type] || 'any';
};

/**
 * Generates TypeScript enum declarations.
 */
const generateEnumTS = (enums: DMMF.DatamodelEnum[]): string => {
  return enums
    .map((enumObj) => {
      const values = enumObj.values.map((v) => `  ${v.name} = "${v.name}"`).join(',\n');
      return `export enum ${enumObj.name} {\n${values}\n}\n`;
    })
    .join('\n');
};

/**
 * Generates TypeScript type declarations for a given model.
 */
const generateModelTypeString = (
  model: DMMF.Model,
  enums: DMMF.DatamodelEnum[]
): string => {
  let typeString = '';

  // Collect required enums for this model
  const usedEnums = new Set<string>();

  model.fields.forEach((field) => {
    // Check if the field type is an enum
    if (enums.find((e) => e.name === field.type)) {
      usedEnums.add(field.type);
    }
    // Check if the field is a relation to another model (skip for type declarations)
  });

  // Import necessary enums
  if (usedEnums.size > 0) {
    typeString += `import { ${Array.from(usedEnums).join(', ')} } from './enums';\n\n`;
  }

  // Define the TypeScript interface
  typeString += `export interface ${model.name} {\n`;

  model.fields.forEach((field) => {
    const tsType = prismaToTsType(field.type);
    const isOptional = field.isRequired ? '' : '?';
    const isArray = field.isList ? '[]' : '';
    typeString += `  ${field.name}${isOptional}: ${tsType}${isArray};\n`;
  });

  typeString += '}\n';

  return typeString;
};

/**
 * Main function to generate TypeScript type strings.
 */
const main = async () => {
  try {
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Read Prisma schema
    const schema = await fs.readFile(SCHEMA_PATH, 'utf-8');

    // Parse Prisma schema using Prisma SDK
    const dmmf = await parseSchema(schema);

    // Separate enums and models
    const enums = dmmf.datamodel.enums;
    const models = dmmf.datamodel.models;

    // Generate enums.ts
    const enumsTS = generateEnumTS(enums);
    await fs.writeFile(path.join(OUTPUT_DIR, 'enums.ts'), enumsTS, 'utf-8');
    console.log('Generated enums.ts');

    // Generate type strings for each model
    const exportStatements: string[] = [];

    for (const model of models) {
      const typeString = generateModelTypeString(model, enums);
      const fileName = `${model.name}.ts`;
      const filePath = path.join(OUTPUT_DIR, fileName);
      const constName = `${model.name}TypeString`;

      // Escape backticks and dollar signs to prevent breaking the template literal
      const escapedTypeString = typeString
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$\{/g, '\\${');

      const fileContent = `export const ${constName} = \`\n${escapedTypeString}\`;\n`;

      await fs.writeFile(filePath, fileContent, 'utf-8');
      console.log(`Generated ${fileName}`);

      // Prepare export statement for index.ts
      exportStatements.push(`  ${model.name.toLowerCase()}: ${constName},`);
    }

    // Generate index.ts
    const indexContent = `import * as Enums from './enums';\n` +
      models.map(model => `import { ${model.name}TypeString } from './${model.name}';`).join('\n') +
      `\n\nexport const string = {\n` +
      exportStatements.join('\n') +
      `\n} as const;\n`;

    await fs.writeFile(INDEX_FILE, indexContent, 'utf-8');
    console.log('Generated index.ts');
  } catch (error) {
    console.error('Error generating type strings:', error);
  }
};

main();
