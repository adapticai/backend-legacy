import { describe, it, expect } from 'vitest';
import { deepMerge } from '../helpers/deep-merge';

describe('deepMerge', () => {
  it('merges flat object properties', () => {
    expect(deepMerge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it('right side overrides left side', () => {
    expect(deepMerge({ a: 1, b: 2 }, { b: 3 })).toEqual({ a: 1, b: 3 });
  });

  it('deep-merges nested objects', () => {
    expect(deepMerge({ a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } })).toEqual({
      a: { x: 1, y: 3, z: 4 },
    });
  });

  it('right side overrides arrays (does not concat)', () => {
    expect(deepMerge({ a: [1, 2] }, { a: [3] })).toEqual({ a: [3] });
  });

  it('null on right side overrides left value with null', () => {
    expect(deepMerge({ a: 1 }, { a: null })).toEqual({ a: null });
  });

  it('undefined on right side is treated as absent (left value retained)', () => {
    expect(deepMerge({ a: 1 }, { a: undefined })).toEqual({ a: 1 });
  });

  it('does not mutate inputs', () => {
    const left = { a: { x: 1 } };
    const right = { a: { y: 2 } };
    deepMerge(left, right);
    expect(left).toEqual({ a: { x: 1 } });
    expect(right).toEqual({ a: { y: 2 } });
  });
});
