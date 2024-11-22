import { promises as fs } from 'fs';
import path from 'path';
import { getDMMF } from '@prisma/internals';
import { DMMF } from '@prisma/generator-helper';
import pluralize from 'pluralize';

const SCHEMA_PATH = path.join(__dirname, '../../prisma/schema.prisma');
const OUTPUT_DIR = path.join(__dirname, '../../src/generated/typeStrings');
const INDEX_FILE = path.join(OUTPUT_DIR, 'index.ts');
const MAX_DEPTH = 5;

const EXCLUDED_FIELDS = new Set([
  'id',
  'createdAt',
  'updatedAt',
  'slug',
  'alpacaAccountId',
]);

const SCALAR_TYPE_MAP: { [key: string]: string } = {
  String: 'string',
  Int: 'number',
  Float: 'number',
  Decimal: 'number',
  Boolean: 'boolean',
  DateTime: 'Date',
  Json: 'any',
};

const prismaFieldToTsType = (field: DMMF.Field, includedEnums: Set<string>): string => {
  if (field.kind === 'scalar') {
    return SCALAR_TYPE_MAP[field.type] || 'any';
  } else if (field.kind === 'enum') {
    includedEnums.add(field.type);
    return field.type;
  } else if (field.kind === 'object') {
    return field.type;
  }
  return 'any';
};

const shouldExcludeField = (fieldName: string): boolean => {
  return (
    EXCLUDED_FIELDS.has(fieldName) ||
    fieldName === 'id' ||
    fieldName.endsWith('Id')
  );
};

const parseMetaTags = (documentation?: string): { meta: { [key: string]: any }; description: string } => {
  const meta: { [key: string]: any } = {};
  if (!documentation) return { meta, description: '' };

  const metaTagRegex = /([A-Z]+\.[A-Z]+)=((?:\[[^\]]+\])|(?:[^\s]+))/g;
  let match: RegExpExecArray | null;
  let description = documentation;

  while ((match = metaTagRegex.exec(documentation)) !== null) {
    const fullMatch = match[0];
    const key = match[1];
    const value = match[2];

    let parsedValue: any = value;
    if (value.toLowerCase() === 'true') parsedValue = true;
    else if (value.toLowerCase() === 'false') parsedValue = false;
    else if (value.startsWith('[') && value.endsWith(']')) {
      parsedValue = value.slice(1, -1).split(',').map((s) => s.trim().replace(/['"]/g, ''));
    } else {
      parsedValue = value.replace(/['"]/g, '');
    }

    meta[key] = parsedValue;
    description = description.replace(fullMatch, '').trim();
  }

  return { meta, description };
};

const generateEnumDeclarations = (
  enums: DMMF.DatamodelEnum[],
  declaredEnums: Set<string>
): string => {
  let enumDeclarations = '';

  for (const enumObj of enums) {
    if (declaredEnums.has(enumObj.name)) continue;

    // Add enum documentation if available
    const enumDescription = enumObj.documentation
      ? `// ${enumObj.documentation}\n`
      : '';

    // Process each enum member
    const values = enumObj.values
      .map((v) => {
        // Add inline annotation for the enum member if documentation exists
        const valueDocumentation = 'documentation' in v && v.documentation
          ? `  /// ${v.documentation}\n`
          : '';
        // Return the enum member without the `= "xxx"` syntax
        return `${valueDocumentation}  ${v.name}`;
      })
      .join('\n\n');

    // Combine enum documentation and members
    enumDeclarations += `${enumDescription}enum ${enumObj.name} {\n${values}\n}\n\n`;

    // Mark this enum as declared
    declaredEnums.add(enumObj.name);
  }

  return enumDeclarations;
};

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

    const { meta: metaTags, description } = parseMetaTags(field.documentation);

    // Check if the field should be processed based on our criteria
    const shouldProcess = shouldProcessField(field, metaTags);

    // Skip if explicitly marked to skip and not marked for processing
    if (metaTags['TYPESTRING.SKIP'] === true && !shouldProcess) continue;

    // Get included fields if specified
    let includeFields = metaTags['TYPESTRING.INCLUDE'] as string[] | undefined;

    const isOptional = field.isRequired ? '' : '?';
    const isArray = field.isList ? '[]' : '';
    let tsType: string;

    const fieldDescription = description
      ? `${indent(indentLevel + 1)}// ${description}\n`
      : '';

    if (field.kind === 'scalar') {
      tsType = prismaFieldToTsType(field, includedEnums);
    } else if (field.kind === 'enum') {
      tsType = prismaFieldToTsType(field, includedEnums);
    } else if (field.kind === 'object') {
      if (ancestors.has(field.type)) {
        const singularTypeName = field.type;
        const pluralTypeName = pluralize(field.type);
        if (
          field.name.toLowerCase() === singularTypeName.toLowerCase() ||
          field.name.toLowerCase() === pluralTypeName.toLowerCase()
        ) {
          console.log(
            `Skipping field "${field.name}" in model "${model.name}" as it references the ancestor "${field.type}".`
          );
          continue;
        } else {
          tsType = field.type;
        }
      } else {
        const relatedModel = models.get(field.type);
        if (relatedModel) {
          let nestedType: string;

          // If includeFields is specified, process only those fields
          if (includeFields && includeFields.length > 0) {
            nestedType = `{\n${includeFields
              .map((f) => {
                const nestedField = relatedModel.fields.find((nf) => nf.name === f);
                if (!nestedField) return '';

                const { meta: nestedMetaTags, description: nestedDescription } = parseMetaTags(nestedField.documentation);

                if (shouldProcessField(nestedField, nestedMetaTags)) {
                  const nestedObjectModel = models.get(nestedField.type);
                  if (nestedObjectModel) {
                    const nestedResult = generateTypeString(
                      nestedObjectModel,
                      models,
                      enums,
                      includedEnums,
                      depth + 1,
                      new Set(ancestors),
                      indentLevel + 2
                    );
                    return `${indent(indentLevel + 2)}${nestedField.name}${nestedField.isRequired ? '' : '?'}: ${nestedResult};`;
                  }
                }

                const nfIsOptional = nestedField.isRequired ? '' : '?';
                const nfType = prismaFieldToTsType(nestedField, includedEnums);
                return `${indent(indentLevel + 2)}${nestedField.name}${nfIsOptional}: ${nfType};`;
              })
              .filter(line => line !== '') // Remove empty lines
              .join('\n')}\n${indent(indentLevel + 1)}}`;
          } else {
            // Fully resolve the nested type
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

// Helper function to determine if a field should be processed
const shouldProcessField = (
  field: DMMF.Field,
  metaTags: { [key: string]: any }
): boolean => {
  if (metaTags['TYPESTRING.SKIP'] === true) {
    return false;
  }
  if (metaTags['TYPESTRING.INCLUDE']) {
    return false;
  }
  if (field.kind === 'object') {
    return true;
  }
  return false;
};

const main = async () => {
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    const files = await fs.readdir(OUTPUT_DIR);
    for (const file of files) {
      if (file !== 'index.ts') {
        await fs.unlink(path.join(OUTPUT_DIR, file));
      }
    }

    const schema = await fs.readFile(SCHEMA_PATH, 'utf-8');
    const dmmf = await getDMMF({ datamodel: schema });

    const enumsMap = new Map(dmmf.datamodel.enums.map((e) => [e.name, e]));
    const models = new Map(dmmf.datamodel.models.map((m) => [m.name, m]));

    const exportStatements: string[] = [];

    // Global set to track declared enums across all models to prevent duplicates
    const declaredEnums = new Set<string>();

    for (const [modelName, model] of models) {
      const includedEnums = new Set<string>();
      const ancestors = new Set<string>();

      const instructionLine = `Your response should adhere to the following type definition for the "${model.name}" type.\n\nImportantly, DO NOT include any annotations in your response (i.e., remove the ones we have provided for your reference below).\n\n`;

      const typeBody = generateTypeString(
        model,
        models,
        enumsMap,
        includedEnums,
        1,
        ancestors,
        0
      );

      const typeDeclaration = `export type ${model.name} = ${typeBody};\n\n`;

      // Generate enums for this model, ensuring no duplicates across models
      const enumDeclarations = generateEnumDeclarations(
        Array.from(includedEnums).map((name) => enumsMap.get(name)!),
        declaredEnums
      );

      const typeString = instructionLine + typeDeclaration + enumDeclarations;

      const fileName = `${model.name}.ts`;
      const filePath = path.join(OUTPUT_DIR, fileName);
      const constName = `${model.name}TypeString`;

      const escapedTypeString = typeString
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$\{/g, '\\${');

      const fileContent = `export const ${constName} = \`\n${escapedTypeString}\`;\n`;
      await fs.writeFile(filePath, fileContent, 'utf-8');
      console.log(`Generated ${fileName}`);

      const exportName = modelName.charAt(0).toLowerCase() + modelName.slice(1);
      exportStatements.push(`  ${exportName}: ${constName},`);
    }

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
