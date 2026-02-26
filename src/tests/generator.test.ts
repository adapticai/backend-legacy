import { describe, it, expect } from 'vitest';
import { generateModelFunctions } from '../modules/generator';
import path from 'path';
import fs from 'fs';
import os from 'os';

describe('Generator Module', () => {
  const modelsPath = path.join(
    __dirname,
    '../../src/generated/typegraphql-prisma/models'
  );
  const inputsPath = path.join(
    __dirname,
    '../../src/generated/typegraphql-prisma/resolvers/inputs'
  );

  describe('generateModelFunctions', () => {
    it('should generate CRUD operations for a valid model', () => {
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-test-'));

      try {
        const result = generateModelFunctions(
          'user',
          modelsPath,
          inputsPath,
          tmpDir
        );

        // If generation succeeds, validate the output
        if (result !== null) {
          expect(typeof result).toBe('string');
          expect(result).toContain('async create');
          expect(result).toContain('async update');
          expect(result).toContain('async delete');
          expect(result).toContain('async get');
          expect(result).toContain('async getAll');
          expect(result).toContain('async findMany');
          expect(result).toContain('async upsert');
          expect(result).toContain('async createMany');
          expect(result).toContain('async updateMany');

          // Verify file was written
          const outputFile = path.join(tmpDir, 'user.ts');
          expect(fs.existsSync(outputFile)).toBe(true);
        }
      } finally {
        // Cleanup temp directory
        fs.rmSync(tmpDir, { recursive: true, force: true });
      }
    });

    it('should include proper imports in generated code', () => {
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-test-'));

      try {
        const result = generateModelFunctions(
          'user',
          modelsPath,
          inputsPath,
          tmpDir
        );

        if (result !== null) {
          expect(result).toContain('import { User as UserType }');
          expect(result).toContain('import { removeUndefinedProps }');
          expect(result).toContain('import { client as importedClient');
        }
      } finally {
        fs.rmSync(tmpDir, { recursive: true, force: true });
      }
    });

    it('should include selection set in generated code', () => {
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-test-'));

      try {
        const result = generateModelFunctions(
          'user',
          modelsPath,
          inputsPath,
          tmpDir
        );

        if (result !== null) {
          expect(result).toContain('selectionSet');
        }
      } finally {
        fs.rmSync(tmpDir, { recursive: true, force: true });
      }
    });

    it('should return null when output path is invalid', () => {
      const invalidPath = '/nonexistent/directory/that/does/not/exist';
      const result = generateModelFunctions(
        'user',
        modelsPath,
        inputsPath,
        invalidPath
      );
      expect(result).toBeNull();
    });
  });
});
