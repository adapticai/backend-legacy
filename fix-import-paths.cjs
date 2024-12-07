const fs = require('fs');
const path = require('path');

const generatedDir = path.join(__dirname, 'src', 'generated', 'typegraphql-prisma');
const modelsDir = path.join(generatedDir, 'models');
const outputsDir = path.join(generatedDir, 'resolvers', 'outputs');
const distGeneratedDir = path.join(__dirname, 'generated', 'typegraphql-prisma');

// Safely get files in a directory
function getFilesRecursively(dir) {
  if (!fs.existsSync(dir)) return [];
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

// Fix import paths in output files
function fixImportPaths(filePath, modelFiles) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);

      let fixedData = data;
      modelFiles.forEach((model) => {
        const regex = new RegExp(`from ['"]\\.\\.\\/outputs\\/${model}['"]`, 'g');
        fixedData = fixedData.replace(regex, `from "../../models/${model}"`);
      });

      fs.writeFile(filePath, fixedData, 'utf8', (err) => {
        if (err) return reject(err);
        resolve(filePath);
      });
    });
  });
}

// Replace findUniqueOrThrow with findUnique
function replaceFindUnique(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);

      const fixedData = data.replace(/\bfindUniqueOrThrow\s*\(/g, 'findUnique(');
      fs.writeFile(filePath, fixedData, 'utf8', (err) => {
        if (err) return reject(err);
        resolve(filePath);
      });
    });
  });
}

const modelFiles = getFilesRecursively(modelsDir).map((file) => path.basename(file, '.ts'));
const outputFiles = getFilesRecursively(outputsDir);
const allFiles = getFilesRecursively(generatedDir).concat(getFilesRecursively(distGeneratedDir));

// Fix imports and findUniqueOrThrow replacements
Promise.allSettled(outputFiles.map((file) => fixImportPaths(file, modelFiles)))
  .then(() => Promise.allSettled(allFiles.map(replaceFindUnique)))
  .then(() => {
    console.log('All operations completed successfully.');
  })
  .catch((err) => {
    console.error('Error during file operations:', err);
  });
