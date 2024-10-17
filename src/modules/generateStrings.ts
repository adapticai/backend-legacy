// generateTypeStrings.ts

import { promises as fs } from 'fs';
import path from 'path';
import { getDMMF } from '@prisma/internals';
import { DMMF } from '@prisma/generator-helper';
const SCHEMA_PATH = path.join(__dirname, '../../prisma', 'schema.prisma');
const OUTPUT_DIR = path.join(__dirname, '../../src', 'generated', 'typeStrings');
const INDEX_FILE = path.join(OUTPUT_DIR, 'index.ts');
const MAX_DEPTH = 4; // Set maximum recursion depth

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
  return typeMap[type] || type; // Return the type itself for enums and models
};

/**
 * Generates TypeScript enum declarations with inline comments.
 */
const generateEnumTS = (enums: DMMF.DatamodelEnum[]): string => {
  return enums
    .map((enumObj) => {
      const enumDescription = enumObj.documentation
        ? `// ${enumObj.documentation}\n`
        : '';
      const values = enumObj.values.map((v) => `  ${v.name} = "${v.name}"`).join(',\n');
      return `${enumDescription}export enum ${enumObj.name} {\n${values}\n}\n`;
    })
    .join('\n');
};

/**
 * Generates a simplified TypeScript interface with only the ID field.
 */
const generateSimplifiedInterface = (model: DMMF.Model): string => {
  const idField = model.fields.find((field) => field.isId) || model.fields[0];
  const tsType = prismaToTsType(idField.type);
  const isArray = idField.isList ? '[]' : '';
  const fieldDescription = idField.documentation
    ? `// ${idField.documentation}\n`
    : '';
  return `// Simplified reference to ${model.name}.\nexport interface ${model.name} {\n${fieldDescription}  ${idField.name}: ${tsType}${isArray};\n}\n\n`;
};

/**
 * Recursively collects all dependent types (enums and models) for a given model.
 * Incorporates maxDepth to limit recursion and prevent stack overflow.
 */
const collectDependencies = (
  model: DMMF.Model,
  enums: DMMF.DatamodelEnum[],
  models: DMMF.Model[],
  collected: Set<string>,
  processed: Set<string>,
  currentDepth: number,
  maxDepth: number
): string => {
  if (currentDepth > maxDepth) {
    return ''; // Exceeded max depth, do not collect further dependencies
  }

  let dependencyString = '';

  for (const field of model.fields) {
    // If the field type is an enum and not yet collected
    if (enums.some((e) => e.name === field.type) && !collected.has(field.type)) {
      const enumObj = enums.find((e) => e.name === field.type)!;
      const enumDescription = enumObj.documentation
        ? `// ${enumObj.documentation}\n`
        : '';
      const values = enumObj.values.map((v) => `  ${v.name} = "${v.name}"`).join(',\n');
      dependencyString += `${enumDescription}export enum ${enumObj.name} {\n${values}\n}\n\n`;
      collected.add(field.type); // Mark enum as collected
    }

    // If the field type is another model and not yet collected
    if (models.some((m) => m.name === field.type) && !collected.has(field.type)) {
      const referencedModel = models.find((m) => m.name === field.type)!;

      if (processed.has(referencedModel.name)) {
        continue; // Already processed this model in this type string
      }

      collected.add(referencedModel.name); // Mark model as collected before processing to prevent recursion
      processed.add(referencedModel.name); // Mark as processed

      if (currentDepth === maxDepth) {
        // At max depth, include only simplified interface
        dependencyString += generateSimplifiedInterface(referencedModel);
        continue;
      }

      // Recursively collect dependencies for the referenced model
      dependencyString += collectDependencies(referencedModel, enums, models, collected, processed, currentDepth + 1, maxDepth);

      // Generate the TypeScript interface for the referenced model
      const modelDescription = referencedModel.documentation
        ? `// ${referencedModel.documentation}\n`
        : '';
      dependencyString += `${modelDescription}export interface ${referencedModel.name} {\n`;
      for (const refField of referencedModel.fields) {
        const tsType = prismaToTsType(refField.type);
        const isOptional = refField.isRequired ? '' : '?';
        const isArray = refField.isList ? '[]' : '';
        // Add inline comments for fields
        const fieldDescription = refField.documentation
          ? `  // ${refField.documentation}\n`
          : '';
        dependencyString += `${fieldDescription}  ${refField.name}${isOptional}: ${tsType}${isArray};\n`;
      }
      dependencyString += '}\n\n';
    }
  }

  return dependencyString;
};

/**
 * Helper to lowercase the first letter of a string.
 * @param str The input string.
 * @returns The string with the first letter in lowercase.
 */
const lowerFirst = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

/**
 * Generates TypeScript type declarations for a given model with dependencies and inline comments.
 */
const generateModelTypeString = (
  model: DMMF.Model,
  enums: DMMF.DatamodelEnum[],
  models: DMMF.Model[],
  collected: Set<string>,
  processed: Set<string>,
  currentDepth: number,
  maxDepth: number
): string => {
  let typeString = '';

  // Collect nested types and enums used by this model
  const nestedTypes = new Set<string>();
  const usedEnums = new Set<string>();

  for (const field of model.fields) {
    if (enums.some((e) => e.name === field.type)) {
      usedEnums.add(field.type);
    } else if (models.some((m) => m.name === field.type)) {
      nestedTypes.add(field.type);
    }
  }

  // Generate the custom instruction line
  let instructionLine = `Your response should adhere to the following type definition for the "${model.name}" type`;

  if (nestedTypes.size > 0) {
    instructionLine += `, and its nested object types (which include ${Array.from(nestedTypes).map((t) => `'${t}'`).join(', ')} ${nestedTypes.size > 1 ? 'types' : 'type'})`;
  }

  if (usedEnums.size > 0) {
    instructionLine += `, as well as any ENUMS used by it (which include ${Array.from(usedEnums).map((e) => `'${e}'`).join(', ')} enum${usedEnums.size > 1 ? 's' : ''})`;
  }

  instructionLine += '.\n\nImportantly, DO NOT include any annotations in your response (i.e. remove the ones we have provided for your reference below).\n\n';

  typeString += instructionLine;

  // Add model description as inline comment
  if (model.documentation) {
    typeString += `// ${model.documentation}\n`;
  }

  // Define the TypeScript interface for the main model
  typeString += `export interface ${model.name} {\n`;
  for (const field of model.fields) {
    const tsType = prismaToTsType(field.type);
    const isOptional = field.isRequired ? '' : '?';
    const isArray = field.isList ? '[]' : '';
    // Add inline comments for fields
    const fieldDescription = field.documentation
      ? `  // ${field.documentation}\n`
      : '';
    typeString += `${fieldDescription}  ${field.name}${isOptional}: ${tsType}${isArray};\n`;
  }
  typeString += '}\n\n';

  // Collect and append dependencies
  typeString += collectDependencies(model, enums, models, collected, processed, currentDepth, maxDepth);

  return typeString;
};

/**
 * Main function to generate TypeScript type strings.
 */
const main = async () => {
  try {
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Delete all files within the output directory
    const files = await fs.readdir(OUTPUT_DIR);
    for (const file of files) {
      await fs.unlink(path.join(OUTPUT_DIR, file));

    }

    // Read Prisma schema
    const schema = await fs.readFile(SCHEMA_PATH, 'utf-8');

    // Parse Prisma schema using Prisma Internals
    const dmmf = await getDMMF({ datamodel: schema });

    // Separate enums and models
    const enums = dmmf.datamodel.enums;
    const models = dmmf.datamodel.models;

    // Generate enums.ts
    const enumsTS = generateEnumTS([...enums]);
    await fs.writeFile(path.join(OUTPUT_DIR, 'enums.ts'), enumsTS, 'utf-8');
    console.log('Generated enums.ts');

    // Generate type strings for each model
    const exportStatements: string[] = [];

    for (const model of models) {
      const collected = new Set<string>();
      const processed = new Set<string>();
      collected.add(model.name); // Mark the main model as collected to avoid self-reference
      processed.add(model.name); // Mark the main model as processed

      const typeString = generateModelTypeString(
        model,
        enums as DMMF.DatamodelEnum[],
        models as DMMF.Model[],
        collected,
        processed,
        1, // Start at depth 1
        MAX_DEPTH
      );
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
      exportStatements.push(`  ${lowerFirst(model.name)}: ${constName},`);
    }

    // Generate index.ts
    const indexContent =
      models
        .map((model) => `import { ${model.name}TypeString } from './${model.name}';`)
        .join('\n') +
      `\n\nexport const typeStrings = {\n` +
      exportStatements.join('\n') +
      `\n} as const;\n
      \nexport default typeStrings;`;

    await fs.writeFile(INDEX_FILE, indexContent, 'utf-8');
    console.log('Generated index.ts');
  } catch (error) {
    console.error('Error generating type strings:', error);
  }
};

main();
