import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Global Namespace
const GLOBAL_NAMESPACE = process.env.GLOBAL_NAMESPACE || 'adaptic';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

/**
 * Recursively retrieves all file paths under the given directory.
 * @param {string} dir - The starting directory.
 * @returns {string[]} - Array of file paths.
 */
function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.resolve(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

/**
 * Returns all JavaScript files in a directory.
 * (Used for generating documentation; assumes files end with .mjs.)
 * @param {string} dir - The directory path.
 * @returns {string[]} - Array of filenames.
 */
function getJavaScriptFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`);
    return [];
  }
  const files = fs.readdirSync(dir);
  return files.filter((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    return stat.isFile() && file.endsWith('.mjs') && !file.includes('index');
  });
}

/**
 * Converts the first character of the string to lowercase.
 * @param {string} string - The input string.
 * @returns {string} - The modified string.
 */
function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} - The capitalized string.
 */
export function capitalizeFirstLetter(str) {
  if (!str) {
    throw new Error('Model name is undefined');
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generates a Markdown section documenting each model and its CRUD resolvers.
 * @returns {string} - The generated Markdown section.
 */
function generateModelsSection() {
  const modelFiles = getJavaScriptFiles(modelsDir);
  const enumFiles = getJavaScriptFiles(enumsDir);

  // Extract model and enum names (without the .mjs extension)
  const models = modelFiles.map((file) => path.basename(file, '.mjs'));
  const enums = enumFiles.map((file) => path.basename(file, '.mjs'));

  let section = `### Model TypeStrings, Types, and available CRUD Resolvers\n\n`;
  section += `The \`adaptic-backend\` package includes a comprehensive set of CRUD (Create, Read, Update, Delete) resolvers for each of your models. Each model has the following functions (available directly under the \`${GLOBAL_NAMESPACE}\` namespace) and types (under the \`types\` namespace):\n\n`;
  section += `| Model Name | TypeString | Type | CRUD Resolvers |\n`;
  section += `|------------|------------|------------|-----------------|\n`;

  models.forEach((model) => {
    const ModelName = model.charAt(0).toUpperCase() + model.slice(1);
    const typeName = `types.${ModelName}`;
    const typeString = `typeStrings.${ModelName}`;
    const crudResolvers = `\`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(
      ModelName
    )}.create\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(
      ModelName
    )}.createMany\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(
      ModelName
    )}.update\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(
      ModelName
    )}.delete\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(
      ModelName
    )}.get\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(
      ModelName
    )}.getAll\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(ModelName)}.findMany\``;
    section += `| ${ModelName} | \`${typeString}\` | \`${typeName}\` | ${crudResolvers} |\n`;
  });

  section += `\n### Enums\n\n`;
  section += `The following enums are available for use under the \`enums\` namespace :\n\n`;
  section += `| Enum Name |\n`;
  section += `|-----------|\n`;
  enums.forEach((enumName) => {
    // Dynamic import to retrieve enum keys (for documentation only)
    const enumValues = Object.keys(import(path.join(enumsDir, `${enumName}.mjs`)));
    section += `| ${enumName} |\n`;
  });

  return section;
}

// -----------------------------------------------------------------------------
// Paths
// -----------------------------------------------------------------------------

const projectRoot = __dirname;
const distDir = path.join(projectRoot, 'dist');
const readmePath = path.join(distDir, 'README.md');
// The ESM (formerly server) folder will now be named "esm"
const esmDir = path.join(distDir, 'esm');
// Models & enums remain in their generated subfolders
const modelsDir = path.join(distDir, 'generated', 'typegraphql-prisma', 'models');
const enumsDir = path.join(distDir, 'generated', 'typegraphql-prisma', 'enums');

// -----------------------------------------------------------------------------
// Step 0: Rename "server" folder to "esm" (if it exists)
// -----------------------------------------------------------------------------
try {
  const serverDir = path.join(distDir, 'server');
  if (fs.existsSync(serverDir)) {
    fs.renameSync(serverDir, esmDir);
    console.log('Renamed "server" folder to "esm".');
  } else {
    console.log('No "server" folder found; assuming "esm" folder already exists.');
  }
} catch (err) {
  console.error('Error renaming "server" folder to "esm":', err);
  process.exit(1);
}

// -----------------------------------------------------------------------------
// Step 1: Copy package-npm.json and README-npm.md to dist as package.json and README.md
// -----------------------------------------------------------------------------
try {
  fs.copyFileSync(path.join(projectRoot, 'package-npm.json'), path.join(distDir, 'package.json'));
  fs.copyFileSync(path.join(projectRoot, 'README-npm.md'), readmePath);
  console.log('Copied package.json and README.md to dist.');
} catch (err) {
  console.error('Error copying package.json or README.md:', err);
  process.exit(1);
}

// -----------------------------------------------------------------------------
// Step 2: Update package.json exports for ESM and CJS (including types)
// -----------------------------------------------------------------------------
try {
  const packageJsonPath = path.join(distDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  packageJson.type = 'module'; // Set package as ESM by default

  // With this configuration:
  // - Files in the root (non‑esm) are renamed to .cjs (CommonJS).
  // - Files in the esm folder are renamed to .mjs (ESM).
  packageJson.exports = {
    ".": {
      "import": "./esm/index.mjs",
      "require": "./index.cjs",
      "types": "./index.d.ts"
    },
    "./*": {
      "import": "./esm/*.mjs",
      "require": "./*.cjs",
      "types": "./*.d.ts"
    }
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json exports for ESM and CJS, including types.');
} catch (err) {
  console.error('Error updating package.json exports:', err);
  process.exit(1);
}

// -----------------------------------------------------------------------------
// Step 3: Rename files based on location
//   • Files in dist/esm: rename .js → .mjs (ESM)
//   • All other files in dist (excluding esm): rename .js → .cjs (CJS)
// -----------------------------------------------------------------------------

// Step 3a: Process files in the esm folder
try {
  if (fs.existsSync(esmDir)) {
    const esmFiles = getFilesRecursively(esmDir);
    esmFiles.forEach((file) => {
      if (file.endsWith('.js')) {
        const newFile = file.replace(/\.js$/, '.mjs');
        fs.renameSync(file, newFile);
        console.log(`Renamed ${file} to ${newFile} (ESM in esm folder).`);
      }
    });
  } else {
    console.log('No esm folder found in dist.');
  }
} catch (err) {
  console.error('Error processing dist/esm:', err);
  process.exit(1);
}

// Step 3b: Process all other files in dist (exclude esm folder)
try {
  const allFiles = getFilesRecursively(distDir);
  const cjsFiles = allFiles.filter((file) => {
    return !file.startsWith(esmDir) && file.endsWith('.js');
  });
  cjsFiles.forEach((file) => {
    const newFile = file.replace(/\.js$/, '.cjs');
    fs.renameSync(file, newFile);
    console.log(`Renamed ${file} to ${newFile} (CJS in non-esm folder).`);
  });
} catch (err) {
  console.error('Error processing dist for CJS files:', err);
  process.exit(1);
}

// Step 4: Clean up client files
//   • Delete client.ts in the dist/esm folder
//   • Rename client-esm.mjs to client.mjs in dist/esm
//   • Delete any client-esm.* from the root dist

try {
  const clientTsPath = path.join(esmDir, 'client.ts');
  // Safeguard: ensure clientTsPath starts with distDir
  if (
    clientTsPath.startsWith(distDir) &&
    fs.existsSync(clientTsPath)
  ) {
    fs.unlinkSync(clientTsPath);
    console.log('Deleted client.ts from esm folder.', clientTsPath);
  } else {
    console.log('No client.ts found in esm folder.', clientTsPath);
  }

  // 2. Rename dist/esm/client-esm.mjs -> dist/esm/client.mjs
  const clientEsmPath = path.join(esmDir, 'client-esm.mjs');
  const newClientEsmPath = path.join(esmDir, 'client.mjs');
  if (clientEsmPath.startsWith(distDir) && fs.existsSync(clientEsmPath)) {
    fs.renameSync(clientEsmPath, newClientEsmPath);
    console.log('Renamed client-esm.mjs to client.mjs in esm folder.');
  } else {
    console.log('No client-esm.mjs found in esm folder.');
  }

  // 3. In the dist root folder, delete any client-esm.cjs or client-esm.mjs
  const clientEsmRootCjs = path.join(distDir, 'client-esm.cjs');
  if (clientEsmRootCjs.startsWith(distDir) && fs.existsSync(clientEsmRootCjs)) {
    fs.unlinkSync(clientEsmRootCjs);
    console.log('Deleted client-esm.cjs from root folder.');
  } else {
    const clientEsmRootMjs = path.join(distDir, 'client-esm.mjs');
    if (clientEsmRootMjs.startsWith(distDir) && fs.existsSync(clientEsmRootMjs)) {
      fs.unlinkSync(clientEsmRootMjs);
      console.log('Deleted client-esm.mjs from root folder.');
    } else {
      console.log('No client-esm file found in root folder.');
    }
  }
} catch (err) {
  console.error('Error cleaning up client files:', err);
  process.exit(1);
}

// -----------------------------------------------------------------------------
// Step 5: Update import paths in entry files
//   • For index.cjs in dist, update generated/typeStrings import to use .cjs
//   • For esm/index.mjs, update generated/typeStrings import to use .mjs
// -----------------------------------------------------------------------------

// 5a: Update index.cjs (root)
try {
  const indexCjsPath = path.join(distDir, 'index.cjs');
  if (fs.existsSync(indexCjsPath)) {
    let content = fs.readFileSync(indexCjsPath, 'utf8');
    content = content.replace(/\.\/generated\/typeStrings\/index/g, './generated/typeStrings/index.cjs');
    fs.writeFileSync(indexCjsPath, content, 'utf8');
    console.log('Updated import in index.cjs for "./generated/typeStrings/index" to use .cjs extension.');
  } else {
    console.log('index.cjs not found, skipping update for index.cjs.');
  }
} catch (err) {
  console.error('Error updating import in index.cjs:', err);
  process.exit(1);
}

// 5b: Update esm/index.mjs (ESM entry point)
try {
  const esmIndexPath = path.join(esmDir, 'index.mjs');
  if (fs.existsSync(esmIndexPath)) {
    let content = fs.readFileSync(esmIndexPath, 'utf8');
    content = content.replace(/\.\/generated\/typeStrings\/index/g, './generated/typeStrings/index.mjs');
    fs.writeFileSync(esmIndexPath, content, 'utf8');
    console.log('Updated import in esm/index.mjs for "./generated/typeStrings/index" to use .mjs extension.');
  } else {
    console.log('esm/index.mjs not found, skipping update for esm/index.mjs.');
  }
} catch (err) {
  console.error('Error updating import in esm/index.mjs:', err);
  process.exit(1);
}

// -----------------------------------------------------------------------------
// Step 6: Update README.md with the Models and CRUD Resolvers section
// -----------------------------------------------------------------------------
try {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  // Remove any existing Models and CRUD Resolvers section
  readmeContent = readmeContent.replace(/### Models and CRUD Resolvers[\s\S]*?(?=###|$)/, '');
  // Append the new section
  readmeContent += `\n${generateModelsSection()}\n`;
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log('Updated README.md with Models and CRUD Resolvers section.');
} catch (err) {
  console.error('Error updating README.md:', err);
  process.exit(1);
}

// Update all references in README.md to match GLOBAL_NAMESPACE
try {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/adaptic/g, GLOBAL_NAMESPACE);
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log('Updated README.md with GLOBAL_NAMESPACE (lowercase).');
} catch (err) {
  console.error('Error updating README.md (lowercase):', err);
  process.exit(1);
}

try {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/Adaptic/g, capitalizeFirstLetter(GLOBAL_NAMESPACE));
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log('Updated README.md with GLOBAL_NAMESPACE (capitalized).');
} catch (err) {
  console.error('Error updating README.md (capitalized):', err);
  process.exit(1);
}

try {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  readmeContent = readmeContent.replace(/ADAPTIC/g, GLOBAL_NAMESPACE.toUpperCase());
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log('Updated README.md with GLOBAL_NAMESPACE (uppercase).');
} catch (err) {
  console.error('Error updating README.md (uppercase):', err);
  process.exit(1);
}

// -----------------------------------------------------------------------------
// Step 7: Update internal import/require statements in built files
//   • In .mjs files, ensure relative imports include a .mjs extension.
//   • In .cjs files, update require() calls to include a .cjs extension.
// -----------------------------------------------------------------------------

// 7a: Update import statements in .mjs files
try {
  const mjsFiles = getFilesRecursively(distDir).filter((file) => file.endsWith('.mjs'));
  mjsFiles.forEach((file) => {
    // Exclude known entry files if necessary (adjust the list as needed)
    const baseName = path.basename(file);
    if (['utils.mjs', 'client.mjs', 'prismaClient.mjs'].includes(baseName)) {
      return;
    }
    let content;
    try {
      content = fs.readFileSync(file, 'utf8');
    } catch (err) {
      console.error(`Error reading file ${file}:`, err);
      return;
    }
    const updatedContent = content.replace(
      /import\s+((?:\*\s+as\s+\w+)|(?:\{[^}]+\})|(?:\w+))\s+from\s+(['"])\.\/([^'"]+)\2;/g,
      (match, p1, p2, p3) => `import ${p1} from ${p2}./${p3}.mjs${p2};`
    );
    fs.writeFileSync(file, updatedContent, 'utf8');
  });
  console.log('Updated import statements in .mjs files.');
} catch (err) {
  console.error('Error updating import statements in .mjs files:', err);
  process.exit(1);
}

// 7b: Update a specific import in client.mjs: change "./getToken" to "./getToken.mjs"
try {
  const clientMjsFile = path.join(esmDir, 'client.mjs');
  let content = fs.readFileSync(clientMjsFile, 'utf8');
  content = content.replace(
    /import\s+{ getToken }\s+from\s+(['"])\.\/getToken\1;/g,
    `import { getToken } from "./getToken.mjs";`
  );
  fs.writeFileSync(clientMjsFile, content, 'utf8');
  console.log('Updated import in esm/client.mjs for "./getToken".');
} catch (err) {
  console.error('Error updating import in esm/client.mjs:', err);
  process.exit(1);
}

// 7c: Update require() calls in .cjs files to include a .cjs extension
try {
  const cjsFiles = getFilesRecursively(distDir).filter((file) => file.endsWith('.cjs'));
  cjsFiles.forEach((file) => {
    // Exclude specific files if needed
    const baseName = path.basename(file);
    if (['utils.cjs', 'client.cjs', 'prismaClient.cjs'].includes(baseName)) {
      return;
    }
    let content;
    try {
      content = fs.readFileSync(file, 'utf8');
    } catch (err) {
      console.error(`Error reading file ${file}:`, err);
      return;
    }
    const updatedContent = content.replace(
      /require\s*\(\s*(['"])\.\/([^'"]+)\1\s*\);/g,
      (match, p1, p2) => `require(${p1}./${p2}.cjs${p1});`
    );
    fs.writeFileSync(file, updatedContent, 'utf8');
  });
  console.log('Updated require() statements in .cjs files.');
} catch (err) {
  console.error('Error updating require() statements in .cjs files:', err);
  process.exit(1);
}

// 7d: Update a specific require() in client.cjs: change "./getToken" to "./getToken.cjs"
try {
  const clientCjsFile = path.join(distDir, 'client.cjs');
  let content = fs.readFileSync(clientCjsFile, 'utf8');
  content = content.replace(
    /require\s*\(\s*(['"])\.\/getToken\1\s*\);/g,
    `require($1./getToken.cjs$1);`
  );
  fs.writeFileSync(clientCjsFile, content, 'utf8');
  console.log('Updated require() in client.cjs for "./getToken".');
} catch (err) {
  console.error('Error updating require() in client.cjs:', err);
  process.exit(1);
}

// -----------------------------------------------------------------------------
// Step 8: Replace all instances of "findUniqueOrThrow" with "findUnique" in resolvers
// -----------------------------------------------------------------------------
try {
  const resolversDir = path.join(distDir, 'generated', 'typegraphql-prisma', 'resolvers');
  const resolverFiles = getFilesRecursively(resolversDir);
  resolverFiles.forEach((file) => {
    if (file.endsWith('.mjs') || file.endsWith('.cjs') || file.endsWith('.js')) {
      let content;
      try {
        content = fs.readFileSync(file, 'utf8');
      } catch (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }
      const findUniqueRegex = /findUniqueOrThrow/g;
      content = content.replace(findUniqueRegex, 'findUnique');
      fs.writeFileSync(file, content, 'utf8');
    }
  });
  console.log('Replaced "findUniqueOrThrow" with "findUnique" in resolvers.');
} catch (err) {
  console.error('Error replacing "findUniqueOrThrow" in resolvers:', err);
  process.exit(1);
}

// -----------------------------------------------------------------------------
// Step 9: Finalize Build
// -----------------------------------------------------------------------------
console.log('Package preparation completed successfully.');
