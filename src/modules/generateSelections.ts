import { promises as fs } from 'fs';
import path from 'path';
import { getDMMF } from '@prisma/internals';
import { DMMF } from '@prisma/generator-helper';

/**
 * Determines if a type is a scalar type in Prisma or an enum.
 */
const isScalarType = (typeName: string, enumNames: Set<string>): boolean => {
  const scalarTypes = new Set([
    'Int',
    'String',
    'Float',
    'Boolean',
    'DateTime',
    'Json',
    'Bytes',
    'BigInt',
    // Add other scalar types if any
  ]);
  return scalarTypes.has(typeName) || enumNames.has(typeName);
};

// Configuration Constants
const SCHEMA_PATH = path.join(__dirname, '../../prisma/schema.prisma');
const OUTPUT_DIR = path.join(__dirname, '../../src/generated/selectionSets');
const INDEX_FILE = path.join(OUTPUT_DIR, 'index.ts');
const MAX_DEPTH = 5; // Set maximum recursion depth

/**
 * Represents metadata extracted from field documentation.
 */
interface MetaTags {
  GQL?: {
    SKIP?: boolean;
    EXCLUDE?: string[];
  };
  [key: string]: any;
}

/**
 * Parses meta tags from field documentation.
 * Specifically looks for GQL.SKIP and GQL.EXCLUDE.
 */
const parseMetaTags = (documentation?: string): MetaTags => {
  const meta: MetaTags = {};
  if (!documentation) return meta;

  const metaTagRegex = /GQL\.(SKIP|EXCLUDE)=((?:\[[^\]]+\])|(?:[^ \n]+))/g;
  let match: RegExpExecArray | null;

  while ((match = metaTagRegex.exec(documentation)) !== null) {
    const key = match[1]; // SKIP or EXCLUDE
    let value: any = match[2];

    if (key === 'SKIP') {
      value = value.toLowerCase() === 'true';
      meta.GQL = meta.GQL || {};
      meta.GQL.SKIP = value;
    } else if (key === 'EXCLUDE') {
      // Expecting an array format: ['field1','field2']
      if (value.startsWith('[') && value.endsWith(']')) {
        // Remove brackets and split by comma
        value = value
          .slice(1, -1)
          .split(',')
          .map((s: string) => s.trim().replace(/['"]/g, ''));
        meta.GQL = meta.GQL || {};
        meta.GQL.EXCLUDE = value;
      }
    }
  }

  return meta;
};

/**
 * Capitalizes the first letter of a string.
 */
const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Generates the GraphQL selection set for a given model.
 *
 * @param model - The current Prisma model being processed.
 * @param dmmf - The DMMF document representing the Prisma schema.
 * @param currentDepth - The current recursion depth.
 * @param maxDepth - The maximum allowed recursion depth.
 * @param enumNames - A Set containing all enum type names.
 * @param ancestors - An array of ancestor model names to prevent direct circular relations.
 * @returns A string representing the GraphQL selection set.
 */
const generateSelectionSet = (
  model: DMMF.Model,
  dmmf: DMMF.Document,
  currentDepth: number,
  maxDepth: number,
  enumNames: Set<string>,
  ancestors: string[] = [],
  indentLevel: number = 1
): string => {
  const indent = (level: number) => '  '.repeat(level);


  if (currentDepth > maxDepth) {
    return `${indent(indentLevel + 1)}id`;
  }


  const selectionFields: string[] = [];

  for (const field of model.fields) {
    const { GQL } = parseMetaTags(field.documentation);

    // Handle GQL.SKIP
    if (GQL?.SKIP) {
      console.log(`Skipping field: ${model.name}.${field.name}`);
      continue;
    }

    const fieldName = field.name;
    const fieldType = field.type;
    const isList = field.isList;

    if (isScalarType(fieldType, enumNames)) {
      selectionFields.push(fieldName);
      console.log(`Including scalar/enum field: ${model.name}.${field.name}`);
      continue;
    } else {
      // It's a relation field
      const relatedModel = dmmf.datamodel.models.find((m) => m.name === fieldType);
      if (!relatedModel) {
        console.warn(`Related model "${fieldType}" for field "${fieldName}" not found.`);
        continue;
      }

      // Check for direct circular relation
      if (ancestors[ancestors.length - 1] === relatedModel.name) {
        console.log(`Skipping relation field to direct ancestor: ${model.name}.${field.name}`);
        continue;
      }

      let nestedSelection = '';

      if (GQL?.EXCLUDE && GQL.EXCLUDE.length > 0) {
        // Filter the fields to include based on GQL.EXCLUDE
        const includedFields = relatedModel.fields.filter((f) => !GQL.EXCLUDE!.includes(f.name));

        if (includedFields.length > 0) {
          nestedSelection = includedFields
            .map((f) => {
              const { GQL: nestedGQL } = parseMetaTags(f.documentation);

              if (nestedGQL?.SKIP) {
                console.log(`Skipping nested field: ${relatedModel.name}.${f.name}`);
                return null;
              }

              if (isScalarType(f.type, enumNames)) {
                return indent(indentLevel + 1) + f.name;
              } else {
                // Further nested relations
                if (nestedGQL?.EXCLUDE && nestedGQL.EXCLUDE.length > 0) {
                  const nestedRelatedModel = dmmf.datamodel.models.find((m) => m.name === f.type);
                  if (nestedRelatedModel) {
                    return `${indent(indentLevel + 1)}${f.name} { ${generateSelectionSet(nestedRelatedModel, dmmf, currentDepth + 1, maxDepth, enumNames, [...ancestors, model.name], indentLevel + 1)} }`;
                  }
                }
                // Default to 'id' for deeper relations
                return `${indent(indentLevel + 1)}${f.name} { id }`;
              }
            })
            .filter((f): f is string => f !== null)
            .join('\n  ');
        }
      } else {
        // No EXCLUDE specified, include all scalar fields and nested relations
        nestedSelection = relatedModel.fields
          .map((f) => {
            const { GQL: nestedGQL } = parseMetaTags(f.documentation);

            if (nestedGQL?.SKIP) {
              console.log(`Skipping nested field: ${relatedModel.name}.${f.name}`);
              return null;
            }

            if (isScalarType(f.type, enumNames)) {
              return indent(indentLevel + 1) + f.name;
            } else {
              // For nested relations without EXCLUDE, include 'id'
              return `${indent(indentLevel + 1)}${f.name} { id }`;
            }
          })
          .filter((f): f is string => f !== null)
          .join('\n  ');
      }

      if (nestedSelection) {
        const formattedSelection = nestedSelection
          .split('\n')
          .map(line => `  ${line}`)
          .join('\n');

        if (isList) {
          selectionFields.push(`${indent(indentLevel + 1)}${fieldName} {\n${formattedSelection}\n${indent(indentLevel + 1)}}`);
        } else {
          selectionFields.push(`${indent(indentLevel + 1)}${fieldName} {\n${formattedSelection}\n${indent(indentLevel + 1)}}`);
        }
        console.log(`Including relation field: ${model.name}.${field.name}`);
      } else {
        // If no fields to include, default to 'id'
        selectionFields.push(`${indent(indentLevel + 1)}${fieldName} { id }`);
        console.log(`Including relation field with default 'id': ${model.name}.${field.name}`);
      }
    }
  }

  return selectionFields.length > 0 ? selectionFields.join('\n  ') : 'id';
};

/**
 * Generates GraphQL selection sets for all models based on GQL annotations.
 */
const main = async () => {
  try {
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Clean up output directory (optional)
    const files = await fs.readdir(OUTPUT_DIR);
    for (const file of files) {
      if (file !== 'index.ts') {
        await fs.unlink(path.join(OUTPUT_DIR, file));
      }
    }

    // Read Prisma schema
    const schema = await fs.readFile(SCHEMA_PATH, 'utf-8');

    // Parse schema to DMMF
    const dmmf: DMMF.Document = await getDMMF({ datamodel: schema });

    // Extract all enum names
    const enumNames = new Set<string>(dmmf.datamodel.enums.map(enumDef => enumDef.name));

    // Generate selection sets for each model
    const exportStatements: string[] = [];

    for (const model of dmmf.datamodel.models) {
      const selectionSet = generateSelectionSet(model, dmmf, 1, MAX_DEPTH, enumNames, []);

      const selectionSetString = `{\n  ${selectionSet}\n}`;

      const fileName = `${model.name}.ts`;
      const filePath = path.join(OUTPUT_DIR, fileName);
      const constName = `${model.name}`;

      // Escape backticks and dollar signs
      const escapedSelectionSet = selectionSetString
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$\{/g, '\\${');

      const fileContent = `export const ${constName} = \`\n${escapedSelectionSet}\`;\n`;
      await fs.writeFile(filePath, fileContent, 'utf-8');
      console.log(`Generated ${fileName}`);

      // Prepare export statement
      const exportName = `${model.name}`;
      exportStatements.push(`  ${exportName},`);
    }

    // Generate index.ts with explicit type annotation to prevent TS7056 error
    const indexImports = dmmf.datamodel.models
      .map((model) => `import { ${model.name} } from './${model.name}';`)
      .join('\n');

    // Use Record<string, string> as the type annotation
    const indexExports = `export const selectionSets: Record<string, string> = {\n${exportStatements.join('\n')}\n};\n\nexport default selectionSets;\n`;

    const indexContent = `${indexImports}\n\n${indexExports}`;
    await fs.writeFile(INDEX_FILE, indexContent, 'utf-8');
    console.log('Generated index.ts');
  } catch (error) {
    console.error('Error generating selection sets:', error);
  }
};

main();
