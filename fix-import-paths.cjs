const fs = require('fs');
const path = require('path');

const generatedDir = path.join(__dirname, 'src', 'generated', 'typegraphql-prisma');
const modelsDir = path.join(generatedDir, 'models');
const outputsDir = path.join(generatedDir, 'resolvers', 'outputs');

// Function to get all files in a directory recursively
function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

// Get all model files
const modelFiles = getFilesRecursively(modelsDir).map((file) =>
  path.basename(file, '.ts')
);

// Function to fix import paths in a file
function fixImportPaths(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      let fixedData = data;
      modelFiles.forEach((model) => {
        const importPath = `../outputs/${model}`;
        const newImportPath = `../../models/${model}`;
        const regex = new RegExp(`from "${importPath}"`, 'g');
        fixedData = fixedData.replace(regex, `from "${newImportPath}"`);

        // Change all instances of findUniqueOrThrow to findUnique in any file under dist/generated/typegraphql-prisma/resolvers/
        const findUniqueOrThrowPath = `findUniqueOrThrow`;
        const findUniquePath = `findUnique`;
        const findUniqueRegex = new RegExp(findUniqueOrThrowPath, 'g');
        fixedData = fixedData.replace(findUniqueRegex, findUniquePath);

      });

      fs.writeFile(filePath, fixedData, 'utf8', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(path.basename(filePath));
        }
      });
    });
  });
}

// Get all output files
const outputFiles = getFilesRecursively(outputsDir);

// Fix import paths in all output files and collect results
Promise.all(outputFiles.map(fixImportPaths))
  .then(fixedFiles => {
    console.log(`Fixed import paths in ${fixedFiles.length} files: ${fixedFiles.join(', ')}`);
  })
  .catch(error => {
    console.error('Error fixing import paths:', error);
  });
