import { describe, it, expect } from 'vitest';
import { removeUndefinedProps } from '../utils';

describe('removeUndefinedProps', () => {
  it('should remove undefined properties from a flat object', () => {
    const input = { a: 1, b: undefined, c: 'hello' };
    const result = removeUndefinedProps(input);
    expect(result).toEqual({ a: 1, c: 'hello' });
  });

  it('should remove null properties from a flat object', () => {
    const input = { a: 1, b: null, c: 'hello' };
    const result = removeUndefinedProps(input);
    expect(result).toEqual({ a: 1, c: 'hello' });
  });

  it('should handle nested objects recursively', () => {
    const input = {
      a: 1,
      b: {
        c: undefined,
        d: 'value',
        e: {
          f: undefined,
          g: 42,
        },
      },
    };
    const result = removeUndefinedProps(input);
    expect(result).toEqual({
      a: 1,
      b: {
        d: 'value',
        e: {
          g: 42,
        },
      },
    });
  });

  it('should filter arrays removing undefined and null items', () => {
    const input = [1, undefined, 'hello', null, 42];
    const result = removeUndefinedProps(input);
    expect(result).toEqual([1, 'hello', 42]);
  });

  it('should remove empty objects from arrays', () => {
    const input = [{ a: undefined }, { b: 1 }];
    const result = removeUndefinedProps(input);
    expect(result).toEqual([{ b: 1 }]);
  });

  it('should return primitives unchanged', () => {
    expect(removeUndefinedProps(42)).toBe(42);
    expect(removeUndefinedProps('hello')).toBe('hello');
    expect(removeUndefinedProps(true)).toBe(true);
    expect(removeUndefinedProps(false)).toBe(false);
  });

  it('should return undefined for null input', () => {
    expect(removeUndefinedProps(null)).toBeUndefined();
  });

  it('should return undefined for undefined input', () => {
    expect(removeUndefinedProps(undefined)).toBeUndefined();
  });

  it('should retain only id field within where clause when id is present', () => {
    const input = {
      where: {
        id: 'abc-123',
        name: 'test',
        email: 'test@example.com',
      },
    };
    const result = removeUndefinedProps(input);
    expect(result).toEqual({
      where: {
        id: 'abc-123',
      },
    });
  });

  it('should process where clause normally when id is not present', () => {
    const input = {
      where: {
        name: 'test',
        email: 'test@example.com',
      },
    };
    const result = removeUndefinedProps(input);
    expect(result).toEqual({
      where: {
        name: 'test',
        email: 'test@example.com',
      },
    });
  });

  it('should remove empty nested objects', () => {
    const input = {
      a: 1,
      b: {
        c: undefined,
      },
    };
    const result = removeUndefinedProps(input);
    expect(result).toEqual({ a: 1 });
  });

  it('should handle deeply nested structures', () => {
    const input = {
      data: {
        user: {
          name: 'John',
          settings: {
            theme: undefined,
            language: 'en',
          },
        },
      },
    };
    const result = removeUndefinedProps(input);
    expect(result).toEqual({
      data: {
        user: {
          name: 'John',
          settings: {
            language: 'en',
          },
        },
      },
    });
  });
});
