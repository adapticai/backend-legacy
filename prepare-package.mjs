// script that copies the package.json and README.md files to the dist folder
import fs from 'fs';
import path from 'path';
// import path from 'path';

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

// clone all .js files in dist directory (including subdirectories) to .mjs files
const distDir = 'dist';
const distFiles = getFilesRecursively(distDir);
distFiles.forEach((file) => {
  if (file.endsWith('.js')) {
    const newFile = file.replace(/\.js$/, '.mjs');
    fs.copyFileSync(file, newFile);
  }
});

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

