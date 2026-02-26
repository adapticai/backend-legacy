import { describe, it, expect } from 'vitest';
import {
  getInputTypeDefinition,
  isScalarType,
  isScalarArrayType,
  isInputObjectType,
  isSetObjectType,
  GRAPHQL_SCALARS,
} from '../modules/parser';
import path from 'path';
import fs from 'fs';

describe('Parser Module', () => {
  describe('isScalarType', () => {
    it('should identify standard GraphQL scalar types', () => {
      expect(isScalarType('String')).toBe(true);
      expect(isScalarType('Int')).toBe(true);
      expect(isScalarType('Float')).toBe(true);
      expect(isScalarType('Boolean')).toBe(true);
      expect(isScalarType('DateTime')).toBe(true);
    });

    it('should identify enum types as scalars', () => {
      expect(isScalarType('EnumUserRole')).toBe(true);
      expect(isScalarType('EnumStatus')).toBe(true);
    });

    it('should identify string literal types as scalars', () => {
      expect(isScalarType('"active"')).toBe(true);
    });

    it('should not identify non-scalar types as scalars', () => {
      expect(isScalarType('UserCreateInput')).toBe(false);
      expect(isScalarType('SomeCustomObject')).toBe(false);
    });
  });

  describe('isScalarArrayType', () => {
    it('should identify array bracket notation', () => {
      expect(isScalarArrayType('String[]')).toBe(true);
      expect(isScalarArrayType('Int[]')).toBe(true);
    });

    it('should identify generic Array notation', () => {
      expect(isScalarArrayType('Array<String>')).toBe(true);
    });

    it('should identify list filter types', () => {
      expect(isScalarArrayType('StringListFilter')).toBe(true);
      expect(isScalarArrayType('IntNullableListFilter')).toBe(true);
    });

    it('should identify nested many types', () => {
      expect(isScalarArrayType('UserCreateNestedManyInput')).toBe(true);
    });

    it('should return false for non-array types', () => {
      expect(isScalarArrayType('String')).toBe(false);
      expect(isScalarArrayType('Int')).toBe(false);
    });
  });

  describe('isInputObjectType', () => {
    it('should identify input types', () => {
      expect(isInputObjectType('UserCreateInput')).toBe(true);
      expect(isInputObjectType('AccountUpdateInput')).toBe(true);
    });

    it('should return false for non-input types', () => {
      expect(isInputObjectType('User')).toBe(false);
      expect(isInputObjectType('String')).toBe(false);
    });
  });

  describe('isSetObjectType', () => {
    it('should identify set object types matching Create/Update/Upsert pattern', () => {
      expect(isSetObjectType('UserCreateTagsInput')).toBe(true);
      expect(isSetObjectType('AccountUpdateNameInput')).toBe(true);
      expect(isSetObjectType('OrderUpsertDataInput')).toBe(true);
    });

    it('should return false for non-set types', () => {
      expect(isSetObjectType('UserWhereInput')).toBe(false);
      expect(isSetObjectType('String')).toBe(false);
    });
  });

  describe('GRAPHQL_SCALARS', () => {
    it('should contain common scalar types', () => {
      expect(GRAPHQL_SCALARS.has('String')).toBe(true);
      expect(GRAPHQL_SCALARS.has('Int')).toBe(true);
      expect(GRAPHQL_SCALARS.has('Float')).toBe(true);
      expect(GRAPHQL_SCALARS.has('Boolean')).toBe(true);
      expect(GRAPHQL_SCALARS.has('DateTime')).toBe(true);
      expect(GRAPHQL_SCALARS.has('Json')).toBe(true);
    });

    it('should contain Prisma filter types', () => {
      expect(GRAPHQL_SCALARS.has('DateTimeFilter')).toBe(true);
      expect(GRAPHQL_SCALARS.has('IntFilter')).toBe(true);
      expect(GRAPHQL_SCALARS.has('StringFilter')).toBe(true);
      expect(GRAPHQL_SCALARS.has('BooleanFilter')).toBe(true);
    });
  });

  describe('getInputTypeDefinition', () => {
    it('should return empty array for non-existent file', () => {
      const result = getInputTypeDefinition('/non/existent/path.ts');
      expect(result).toEqual([]);
    });

    it('should parse fields from an existing generated model file', () => {
      const userModelPath = path.join(
        __dirname,
        '../../src/generated/typegraphql-prisma/models/User.ts'
      );
      if (fs.existsSync(userModelPath)) {
        const fields = getInputTypeDefinition(userModelPath);
        expect(Array.isArray(fields)).toBe(true);
        expect(fields.length).toBeGreaterThan(0);

        // Each field should have a name and type
        for (const field of fields) {
          expect(field).toHaveProperty('name');
          expect(field).toHaveProperty('type');
          expect(typeof field.name).toBe('string');
          expect(field.type).toHaveProperty('isScalar');
        }
      }
    });
  });
});
