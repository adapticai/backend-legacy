// script that copies the package.json and README.md files to the dist folder
import fs from 'fs';
fs.copyFileSync('package-npm.json', 'dist/package.json');
fs.copyFileSync('README-npm.md', 'dist/README.md');
