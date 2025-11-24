#!/usr/bin/env node
/**
 * Post-build script to fix ESM import paths
 * Ensures all directory imports have explicit /index.mjs extensions
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageDir = join(__dirname, 'package');
const indexMjsPath = join(packageDir, 'esm', 'index.mjs');

console.log('🔧 Fixing ESM import paths...');

try {
  let content = readFileSync(indexMjsPath, 'utf-8');

  // Fix directory import for resolvers/custom
  const before = content;
  content = content.replace(
    /export \* from ['"]\.\/resolvers\/custom['"]/g,
    "export * from './resolvers/custom/index.mjs'"
  );

  writeFileSync(indexMjsPath, content, 'utf-8');

  if (content !== before) {
    console.log('✅ Fixed ESM import paths in index.mjs');
  } else {
    console.log('ℹ️  No ESM import paths needed fixing');
  }
} catch (error) {
  console.error('❌ Error fixing ESM imports:', error);
  process.exit(1);
}
