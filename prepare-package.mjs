// script that copies the package.json and README.md files to the dist folder
import fs from 'fs';
import path from 'path';

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

// copy the package.json and README.md files to the dist folder
fs.copyFileSync('package-npm.json', 'dist/package.json');
fs.copyFileSync('README-npm.md', 'dist/README.md');

const functionsDir = 'dist/';
const functionsFiles = getFilesRecursively(functionsDir);

functionsFiles.forEach((file) => {
  if (file.endsWith('.ts')) {
    let content
    content = fs.readFileSync(file, 'utf8');
    // Regex to find import statements with the specified path
    content = content.replace(
      /({[^}]+}\s*from\s*['"]\.\.\/\.\.\/generated\/typegraphql-prisma\/models\/[^'"]+)(['"])/g,
      'type $1.d.ts$2'
    );
    fs.writeFileSync(file, content, 'utf8');
  }
}
);

const indexFile = 'dist/generated/typegraphql-prisma/models/index.d.ts';
let content = fs.readFileSync(indexFile, 'utf8');

// Updated regex to match the export statements in index.d.ts
content = content.replace(
  /export\s*{([^}]+)}\s*from\s*(['"])\.\/([^'"]+)\2;/g,
  'export type {$1} from $2./$3.d.ts$2;'
);

fs.writeFileSync(indexFile, content, 'utf8');

// copy all of the files from dist/esm to dist
const esmDir = 'dist/esm';
let esmFiles = getFilesRecursively(esmDir);

// rename .js to .mjs files in the dist/esm directory
esmFiles.forEach((file) => {
  if (!file.endsWith('.js')) return;
  const newFile = file.replace('.js', '.mjs');
  fs.renameSync(file, newFile);
});

esmFiles = getFilesRecursively(esmDir);

esmFiles.forEach((file) => {
  if (!file.endsWith('.mjs')) return;
  const newFile = file.replace('dist/esm/', 'dist/');
  fs.copyFileSync(file, newFile);
});

// delete the dist/esm directory
fs.rmdirSync(esmDir, { recursive: true });

