// generateTypeStrings.ts

import { promises as fs } from 'fs';
import path from 'path';
import { getDMMF } from '@prisma/internals';
import { DMMF } from '@prisma/generator-helper';

const SCHEMA_PATH = path.join(__dirname, '../../prisma', 'schema.prisma');
const OUTPUT_DIR = path.join(__dirname, '../../src', 'generated', 'typeStrings');
const INDEX_FILE = path.join(OUTPUT_DIR, 'index.ts');
const MAX_DEPTH = 3; // Set maximum recursion depth

// Define the list of fields to exclude from content models
const EXCLUDED_FIELDS = ['id', 'createdAt', 'updatedAt', 'slug'];

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
 * Determines if a model is a content model based on the presence of excluded fields.
 * @param model The Prisma model.
 * @returns True if the model is a content model; otherwise, false.
 */
const isContentModel = (model: DMMF.Model): boolean => {
  return model.fields.some((field) => EXCLUDED_FIELDS.includes(field.name));
};

/**
 * Determines if a field should be excluded based on its name.
 * Excludes fields that are in EXCLUDED_FIELDS, exactly "id", or contain "Id" (exact casing).
 * @param fieldName The name of the field.
 * @returns True if the field should be excluded; otherwise, false.
 */
const shouldExcludeField = (fieldName: string): boolean => {
  // Exclude if field name is in EXCLUDED_FIELDS
  if (EXCLUDED_FIELDS.includes(fieldName)) {
    return true;
  }
  // Exclude if field name is exactly 'id'
  if (fieldName === 'id') {
    return true;
  }
  // Exclude if field name includes 'Id' (exact casing)
  if (fieldName.includes('Id')) {
    return true;
  }
  return false;
};

/**
 * Recursively collects all dependent types (enums and models) for a given model.
 * Incorporates maxDepth to limit recursion and prevent stack overflow.
 * Prevents self-referencing loops by tracking ancestor models.
 */
const collectDependencies = (
  model: DMMF.Model,
  enums: DMMF.DatamodelEnum[],
  models: DMMF.Model[],
  collected: Set<string>,
  processed: Set<string>,
  currentDepth: number,
  maxDepth: number,
  ancestors: Set<string>
): string => {
  if (currentDepth > maxDepth) {
    return ''; // Exceeded max depth, do not collect further dependencies
  }

  let dependencyString = '';

  for (const field of model.fields) {
    // Handle Enums
    if (enums.some((e) => e.name === field.type) && !collected.has(field.type)) {
      const enumObj = enums.find((e) => e.name === field.type)!;
      const enumDescription = enumObj.documentation
        ? `// ${enumObj.documentation}\n`
        : '';
      const values = enumObj.values.map((v) => `  ${v.name} = "${v.name}"`).join(',\n');
      dependencyString += `${enumDescription}export enum ${enumObj.name} {\n${values}\n}\n\n`;
      collected.add(field.type); // Mark enum as collected
    }

    // Handle Models
    if (models.some((m) => m.name === field.type) && !collected.has(field.type)) {
      const referencedModel = models.find((m) => m.name === field.type)!;

      // Prevent self-referencing loops
      if (ancestors.has(referencedModel.name)) {
        continue; // Skip to avoid self-reference
      }

      if (processed.has(referencedModel.name)) {
        continue; // Already processed this model in this type string
      }

      collected.add(referencedModel.name); // Mark model as collected before processing to prevent recursion
      processed.add(referencedModel.name); // Mark as processed
      ancestors.add(referencedModel.name); // Add to ancestors

      if (currentDepth === maxDepth) {
        ancestors.delete(referencedModel.name); // Clean up ancestors
        continue; // Do not recurse further
      }

      // Recursively collect dependencies for the referenced model
      dependencyString += collectDependencies(
        referencedModel,
        enums,
        models,
        collected,
        processed,
        currentDepth + 1,
        maxDepth,
        ancestors
      );

      // Generate the TypeScript type for the referenced model
      const modelDescription = referencedModel.documentation
        ? `// ${referencedModel.documentation}\n`
        : '';
      dependencyString += `${modelDescription}export type ${referencedModel.name} = {\n`;
      for (const refField of referencedModel.fields) {
        // Exclude fields based on name
        if (shouldExcludeField(refField.name)) {
          continue; // Exclude this field
        }

        // Exclude fields that reference ancestor models
        if (models.some((m) => m.name === refField.type)) {
          if (ancestors.has(refField.type)) {
            continue; // Exclude to prevent self-reference
          }
        }

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

      ancestors.delete(referencedModel.name); // Clean up ancestors after processing
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
    instructionLine += `, and its nested object types (which include ${Array.from(nestedTypes)
      .map((t) => `'${t}'`)
      .join(', ')} ${nestedTypes.size > 1 ? 'types' : 'type'})`;
  }

  if (usedEnums.size > 0) {
    instructionLine += `, as well as any ENUMS used by it (which include ${Array.from(usedEnums)
      .map((e) => `'${e}'`)
      .join(', ')} enum${usedEnums.size > 1 ? 's' : ''})`;
  }

  instructionLine += '.\n\nImportantly, DO NOT include any annotations in your response (i.e. remove the ones we have provided for your reference below).\n\n';

  typeString += instructionLine;

  // Add model description as inline comment
  if (model.documentation) {
    typeString += `// ${model.documentation}\n`;
  }

  // Determine if the model is a content model
  const contentModel = isContentModel(model);

  // Define the TypeScript type for the main model
  typeString += `export type ${model.name} = {\n`;
  for (const field of model.fields) {
    // Exclude specified fields if the model is a content model
    if (contentModel && shouldExcludeField(field.name)) {
      continue; // Exclude this field
    }

    // Exclude fields that reference ancestor models
    if (models.some((m) => m.name === field.type)) {
      // If the field's type is already in the collected set (ancestors), skip it
      if (collected.has(field.type)) {
        continue;
      }
    }

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

  // Initialize ancestors with the current model to prevent self-references
  const ancestors = new Set<string>();
  ancestors.add(model.name);

  // Collect and append dependencies
  typeString += collectDependencies(
    model,
    enums,
    models,
    collected,
    processed,
    currentDepth,
    maxDepth,
    ancestors
  );

  return typeString;
};

/**
 * Main function to generate TypeScript type strings.
 */
const main = async () => {
  try {
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Delete all files within the output directory except index.ts and enums.ts
    const files = await fs.readdir(OUTPUT_DIR);
    for (const file of files) {
      if (file !== 'index.ts' && file !== 'enums.ts') {
        await fs.unlink(path.join(OUTPUT_DIR, file));
      }
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
      `\n} as const;\n\nexport default typeStrings;`;

    await fs.writeFile(INDEX_FILE, indexContent, 'utf-8');
    console.log('Generated index.ts');
  } catch (error) {
    console.error('Error generating type strings:', error);
  }
};

main();
