import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Global Namespace

const GLOBAL_NAMESPACE = process.env.GLOBAL_NAMESPACE || 'adaptic';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to get all files in a directory recursively
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
 * Function to get all JavaScript files in a specified directory.
 * @param {string} dir - The directory to read files from.
 * @returns {string[]} - An array of filenames.
 */
function getJavaScriptFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`);
    return [];
  }

  const files = fs.readdirSync(dir);
  return files.filter(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    return (
      stat.isFile() &&
      file.endsWith('.mjs') &&
      !file.includes('index')
    );
  });
}

// function to convert first letter to lowercase
function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}


// Function to capitalize the first letter, ensuring the value is not undefined
export function capitalizeFirstLetter(str) {
  if (!str) {
    throw new Error('Model name is undefined');
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate Models and CRUD Resolvers Section
 * This function creates a Markdown table documenting each model,
 * its corresponding type, enum, and available CRUD resolvers.
 * @returns {string} - The generated Markdown section.
 */
function generateModelsSection() {
  const modelFiles = getJavaScriptFiles(modelsDir);
  const enumFiles = getJavaScriptFiles(enumsDir);

  // Extract model and enum names without the .js extension
  const models = modelFiles.map(file => path.basename(file, '.mjs'));
  const enums = enumFiles.map(file => path.basename(file, '.mjs'));

  // Start building the Markdown section
  let section = `### Model Types and CRUD Resolvers\n\n`;
  section += `The \`adaptic-backend\` package includes a comprehensive set of CRUD (Create, Read, Update, Delete) resolvers for each of your models. Each model has the following functions (available directly under the \`${GLOBAL_NAMESPACE}\` namespace) and types (under the \`types\` namespace):\n\n`;
  section += `| Model Name | Type | CRUD Resolvers |\n`;
  section += `|------------|-------|-----------------|\n`;

  models.forEach(model => {
    // Capitalize the first letter for consistency
    const ModelName = model.charAt(0).toUpperCase() + model.slice(1);

    // Define the type name
    const typeName = `types.${ModelName}`;

    // Define the CRUD resolvers
    const crudResolvers = `\`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(ModelName)}.create\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(ModelName)}.createMany\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(ModelName)}.update\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(ModelName)}.delete\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(ModelName)}.get\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(ModelName)}.getAll\`, \`${GLOBAL_NAMESPACE}.${lowerCaseFirstLetter(ModelName)}.findMany\``;

    // Append the row to the table
    section += `| ${ModelName} | \`${typeName}\` | ${crudResolvers} |\n`;
  });

  // Add a section for enums
  section += `\n### Enums\n\n`;
  section += `The following enums are available for use under the \`enums\` namespace :\n\n`;
  section += `| Enum Name |\n`;
  section += `|-----------|\n`;

  enums.forEach(enumName => {
    const enumValues = Object.keys(import(path.join(enumsDir, `${enumName}.mjs`)));
    section += `| ${enumName} |\n`;
  }

  );

  return section;
}

// Paths

const projectRoot = __dirname;
const distDir = path.join(projectRoot, 'dist');
const distServerDir = path.join(distDir, 'server');
const readmePath = path.join(distDir, 'README.md');
const modelsDir = path.join(distDir, 'server/generated/typegraphql-prisma/models');
const enumsDir = path.join(distDir, 'server/generated/typegraphql-prisma/enums');

// Step 1: Copy `package-npm.json` and `README-npm.md` to `dist` as `package.json` and `README.md`
try {
  fs.copyFileSync(path.join(projectRoot, 'package-npm.json'), path.join(distDir, 'package.json'));
  fs.copyFileSync(path.join(projectRoot, 'README-npm.md'), path.join(distDir, 'README.md'));
  console.log('Copied package.json and README.md to dist.');
} catch (err) {
  console.error('Error copying package.json or README.md:', err);
  process.exit(1);
}

// Step 2: Update the `exports` field in `package.json` for SERVER and TS, AND JS, including types
try {
  const packageJsonPath = path.join(distDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  packageJson.type = 'module'; // Ensure ESM by default

  packageJson.exports = {
    ".": {
      "import": "./index.cjs",
      "require": "./index.cjs",
      "types": "./index.d.ts"
    },
    "./*": {
      "import": "./*.cjs",
      "require": "./*.cjs",
      "types": "./*.d.ts"
    },
    "./server": {
      "import": "./server/index.mjs",
      "require": "./server/index.cjs",
      "types": "./server/index.d.ts"
    },
    "./server/*": {
      "import": "./server/*.mjs",
      "require": "./server/*.cjs",
      "types": "./server/*.d.ts"
    }
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  console.log('Updated package.json exports for ESM and CJS, including types.');
} catch (err) {
  console.error('Error updating package.json exports:', err);
  process.exit(1);
}

// Step 3: Rename .js to .mjs in dist/server/
try {
  const serverFiles = getFilesRecursively(distServerDir);
  serverFiles.forEach((file) => {
    if (file.endsWith('.js')) {
      const newFile = file.replace(/\.js$/, '.mjs');
      fs.renameSync(file, newFile);
    }
  });
  console.log('Renamed .js files to .mjs in dist/server.');
} catch (err) {
  console.error('Error processing dist/server:', err);
  process.exit(1);
}



// Step 3b: Rename .js to .cjs in dist/
try {
  const cjsFiles = getFilesRecursively(distDir);
  cjsFiles.forEach((file) => {
    if (file.endsWith('.js')) {
      const newFile = file.replace(/\.js$/, '.cjs');
      fs.renameSync(file, newFile);
    }
  });
  console.log('Renamed .js files to .cjs in dist.');
} catch (err) {
  console.error('Error processing dist:', err);
  process.exit(1);
}
// Step 4: Update the README.md with Models and CRUD Resolvers section based on the models in the project

// Read the current README
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Remove existing Models and CRUD Resolvers section if present
readmeContent = readmeContent.replace(/### Models and CRUD Resolvers[\s\S]*?(?=###|$)/, '');

// Append the new Models and CRUD Resolvers section
readmeContent += `\n${generateModelsSection()}\n`;

// Write back to README.md
fs.writeFileSync(readmePath, readmeContent, 'utf8');

console.log('README.md updated with Models and CRUD Resolvers section.');

// update every reference to 'adaptic' within the README.md file to the GLOBAL_NAMESPACE value
try {
  const readmeContent = fs.readFileSync(readmePath, 'utf8');
  const updatedReadmeContent = readmeContent.replace(/adaptic/g, GLOBAL_NAMESPACE);
  fs.writeFileSync(readmePath, updatedReadmeContent, 'utf8');
  console.log('Updated README.md with GLOBAL_NAMESPACE value.');

} catch (err) {
  console.error('Error updating README.md with GLOBAL_NAMESPACE value:', err);
  process.exit(1);
}

// update every reference to 'Adaptic' within the README.md file to the GLOBAL_NAMESPACE value
try {
  const readmeContent = fs.readFileSync(readmePath, 'utf8');
  const updatedReadmeContent = readmeContent.replace(/Adaptic/g, capitalizeFirstLetter(GLOBAL_NAMESPACE));
  fs.writeFileSync(readmePath, updatedReadmeContent, 'utf8');
  console.log('Updated README.md with GLOBAL_NAMESPACE value.');

} catch (err) {
  console.error('Error updating README.md with GLOBAL_NAMESPACE value:', err);
  process.exit(1);
}

// update every reference to 'ADAPTIC' within the README.md file to the GLOBAL_NAMESPACE value

try {
  const readmeContent = fs.readFileSync(readmePath, 'utf8');
  const updatedReadmeContent = readmeContent.replace(/ADAPTIC/g, GLOBAL_NAMESPACE.toUpperCase());
  fs.writeFileSync(readmePath, updatedReadmeContent, 'utf8');
  console.log('Updated README.md with GLOBAL_NAMESPACE value.');

} catch (err) {
  console.error('Error updating README.md with GLOBAL_NAMESPACE value:', err);
  process.exit(1);
}

// Step 5: Update Apollo Client imports in dist/server/*.mjs files
try {
  const serverMjsFiles = getFilesRecursively(distServerDir).filter(file => file.endsWith('.mjs'));

  serverMjsFiles.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    // Replace import { gql } from "@apollo/client"; with import pkg from "@apollo/client"; const { gql } = pkg;
    content = content.replace(
      /import\s+\{([^}]+)\}\s+from\s+(['"])(@apollo\/client)\2;/g,
      (match, p1, p2, p3) => `import pkg from '${p3}';\nconst { ${p1.trim()} } = pkg;`
    );
    fs.writeFileSync(file, content, 'utf8');
  });
  console.log('Updated Apollo client imports in .mjs files.');
} catch (err) {
  console.error('Error updating Apollo client imports in .mjs files:', err);
  process.exit(1);
}

// Step 6. Update import paths with .mjs in dist/server .mjs files
try {
  const serverMjsFiles = getFilesRecursively(distServerDir).filter(file => file.endsWith('.mjs'));
  serverMjsFiles.forEach((file) => {
    if (file.endsWith('.mjs') && (file !== 'server.mjs' && file !== 'utils.mjs' && file !== 'client.mjs' && file !== 'prismaClient.mjs')) {
      let content;
      try {
        content = fs.readFileSync(file, 'utf8');
      } catch (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }

      // Replace import statements to include .mjs extension
      const updatedContent = content.replace(
        /import\s+((?:\*\s+as\s+\w+)|(?:\{[^}]+\})|(?:\w+))\s+from\s+(['"])\.\/([^'"]+)\2;/g,
        (match, p1, p2, p3) => `import ${p1} from ${p2}./${p3}.mjs${p2};`
      );

      fs.writeFileSync(file, updatedContent, 'utf8');
    }
  });
  console.log('Updated import statements in .mjs files.');
} catch (err) {
  console.error('Error updating import statements in .mjs files:', err);
  process.exit(1);
}

// Step 6b. Update import paths for one specific 'from': "./getToken"; to from "./getToken.mjs"; in dist/server client.mjs file
try {
  const clientMjsFile = path.join(distServerDir, 'client.mjs');
  let content = fs.readFileSync(clientMjsFile, 'utf8');
  content = content.replace(
    /import\s+{ getToken }\s+from\s+(['"])\.\/getToken\1;/g,
    `import { getToken } from "./getToken.mjs";`
  );
  fs.writeFileSync(clientMjsFile, content, 'utf8');
  console.log('Updated import statements in client.mjs file.');
} catch (err) {
  console.error('Error updating import statements in client.mjs file:', err);
  process.exit(1);
}

// Step 7. Update import paths with .mjs in dist/server .mjs files

const cjsFiles = getFilesRecursively(distDir).filter(file => file.endsWith('.cjs'));
cjsFiles.forEach((file) => {

  if (file.endsWith('.cjs') && (file !== 'server.cjs' && file !== 'utils.cjs' && file !== 'client.cjs' && file !== 'prismaClient.cjs' && !file.includes('/server'))) {
    let content;
    try {
      content = fs.readFileSync(file, 'utf8');
    } catch (err) {
      console.error(`Error reading file ${file}:`, err);
      return;
    }

    // Replace import statements to include .cjs extension. IF require("./Account"); then require("./Account.cjs");
    const updatedContent = content.replace(
      /require\s*\(\s*(['"])\.\/([^'"]+)\1\s*\);/g,
      (match, p1, p2) => `require(${p1}./${p2}.cjs${p1});`
    );

    fs.writeFileSync(file, updatedContent, 'utf8');
  }
});

console.log('Updated import statements in .cjs files.');

// Step 7b. Update import paths for one specific 'from': "./getToken"; to from "./getToken.vjs"; in dist/client.cjs file

try {
  const clientCjsFile = path.join(distDir, 'client.cjs');
  let content = fs.readFileSync(clientCjsFile, 'utf8');
  content = content.replace(
    /require\s*\(\s*(['"])\.\/getToken\1\s*\);/g,
    `require($1./getToken.cjs$1);`
  );
  fs.writeFileSync(clientCjsFile, content, 'utf8');
  console.log('Updated import statements in client.cjs file.');
} catch (err) {
  console.error('Error updating import statements in client.cjs file:', err);
  process.exit(1);
}

// Step 8: Finalize Build
console.log('Package preparation completed successfully.');
