import { describe, it, expect } from 'vitest';
import {
  parseMutationOperation,
  extractUserId,
  extractRecordId,
  extractChangedFields,
} from '../audit-logger';

describe('parseMutationOperation', () => {
  it('should parse createOne operations', () => {
    const result = parseMutationOperation('createOneUser');
    expect(result).toEqual({
      operationType: 'CREATE',
      modelName: 'User',
      operationName: 'createOneUser',
    });
  });

  it('should parse createMany operations', () => {
    const result = parseMutationOperation('createManyTrade');
    expect(result).toEqual({
      operationType: 'CREATE',
      modelName: 'Trade',
      operationName: 'createManyTrade',
    });
  });

  it('should parse updateOne operations', () => {
    const result = parseMutationOperation('updateOneAlpacaAccount');
    expect(result).toEqual({
      operationType: 'UPDATE',
      modelName: 'AlpacaAccount',
      operationName: 'updateOneAlpacaAccount',
    });
  });

  it('should parse updateMany operations', () => {
    const result = parseMutationOperation('updateManyAction');
    expect(result).toEqual({
      operationType: 'UPDATE',
      modelName: 'Action',
      operationName: 'updateManyAction',
    });
  });

  it('should parse deleteOne operations', () => {
    const result = parseMutationOperation('deleteOneUser');
    expect(result).toEqual({
      operationType: 'DELETE',
      modelName: 'User',
      operationName: 'deleteOneUser',
    });
  });

  it('should parse deleteMany operations', () => {
    const result = parseMutationOperation('deleteManyTrade');
    expect(result).toEqual({
      operationType: 'DELETE',
      modelName: 'Trade',
      operationName: 'deleteManyTrade',
    });
  });

  it('should parse upsertOne as CREATE', () => {
    const result = parseMutationOperation('upsertOneUser');
    expect(result).toEqual({
      operationType: 'CREATE',
      modelName: 'User',
      operationName: 'upsertOneUser',
    });
  });

  it('should return null for unrecognized operations', () => {
    expect(parseMutationOperation('findManyUser')).toBeNull();
    expect(parseMutationOperation('randomOperation')).toBeNull();
    expect(parseMutationOperation('')).toBeNull();
  });

  it('should return null for query operations', () => {
    expect(parseMutationOperation('user')).toBeNull();
    expect(parseMutationOperation('users')).toBeNull();
    expect(parseMutationOperation('findUniqueUser')).toBeNull();
  });
});

describe('extractUserId', () => {
  it('should extract sub from user object', () => {
    expect(extractUserId({ sub: 'user-123' })).toBe('user-123');
  });

  it('should extract id from user object when sub is missing', () => {
    expect(extractUserId({ id: 'user-456' })).toBe('user-456');
  });

  it('should prefer sub over id', () => {
    expect(extractUserId({ sub: 'sub-value', id: 'id-value' })).toBe('sub-value');
  });

  it('should return the string directly for string users', () => {
    expect(extractUserId('user-string')).toBe('user-string');
  });

  it('should return null for null or undefined', () => {
    expect(extractUserId(null)).toBeNull();
    expect(extractUserId(undefined)).toBeNull();
  });

  it('should return null for user object with no id fields', () => {
    expect(extractUserId({ name: 'John' })).toBeNull();
  });
});

describe('extractRecordId', () => {
  it('should extract id from mutation result', () => {
    const data = {
      createOneUser: { id: 'abc-123', name: 'Test' },
    };
    expect(extractRecordId(data)).toBe('abc-123');
  });

  it('should return unknown for null data', () => {
    expect(extractRecordId(null)).toBe('unknown');
    expect(extractRecordId(undefined)).toBe('unknown');
  });

  it('should return unknown for empty data', () => {
    expect(extractRecordId({})).toBe('unknown');
  });

  it('should return unknown when result has no id field', () => {
    const data = {
      createOneUser: { name: 'Test' },
    };
    expect(extractRecordId(data)).toBe('unknown');
  });

  it('should handle primitive result values', () => {
    const data = { count: 5 };
    expect(extractRecordId(data)).toBe('unknown');
  });
});

describe('extractChangedFields', () => {
  it('should extract input data for CREATE operations', () => {
    const variables = {
      data: { name: 'John', email: 'john@example.com' },
    };
    const result = extractChangedFields('CREATE', variables);
    expect(result).toEqual({
      input: { name: 'John', email: 'john@example.com' },
    });
  });

  it('should extract where and data for UPDATE operations', () => {
    const variables = {
      where: { id: 'abc-123' },
      data: { name: 'Updated Name' },
    };
    const result = extractChangedFields('UPDATE', variables);
    expect(result).toEqual({
      where: { id: 'abc-123' },
      data: { name: 'Updated Name' },
    });
  });

  it('should extract where clause for DELETE operations', () => {
    const variables = {
      where: { id: 'abc-123' },
    };
    const result = extractChangedFields('DELETE', variables);
    expect(result).toEqual({
      where: { id: 'abc-123' },
    });
  });

  it('should return empty object for null variables', () => {
    expect(extractChangedFields('CREATE', null)).toEqual({});
    expect(extractChangedFields('UPDATE', undefined)).toEqual({});
  });

  it('should use entire variables as input when data field is missing for CREATE', () => {
    const variables = { name: 'Direct Input' };
    const result = extractChangedFields('CREATE', variables);
    expect(result).toEqual({
      input: { name: 'Direct Input' },
    });
  });
});
