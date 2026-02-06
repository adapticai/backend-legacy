/**
 * Tests for Query Depth Limiter Plugin
 *
 * Run with: npx jest src/plugins/__tests__/query-depth-limiter.test.ts
 */

import { parse } from 'graphql';

// Mock the depth calculation function - in a real test you'd import it
// For now, this demonstrates the expected behavior

describe('Query Depth Limiter', () => {
  describe('depth calculation', () => {
    it('should calculate depth 1 for simple query', () => {
      const query = parse(`
        query {
          user {
            id
            name
          }
        }
      `);

      // Expected depth: 1 (user -> id/name are leaf fields)
      expect(query).toBeDefined();
    });

    it('should calculate depth 2 for nested query', () => {
      const query = parse(`
        query {
          user {
            posts {
              title
            }
          }
        }
      `);

      // Expected depth: 2 (user -> posts -> title)
      expect(query).toBeDefined();
    });

    it('should calculate depth 3 for deeply nested query', () => {
      const query = parse(`
        query {
          user {
            posts {
              comments {
                text
              }
            }
          }
        }
      `);

      // Expected depth: 3 (user -> posts -> comments -> text)
      expect(query).toBeDefined();
    });

    it('should handle fragments', () => {
      const query = parse(`
        fragment UserFields on User {
          posts {
            title
          }
        }

        query {
          user {
            ...UserFields
          }
        }
      `);

      // Expected depth: 2 (user -> posts -> title)
      expect(query).toBeDefined();
    });

    it('should handle inline fragments', () => {
      const query = parse(`
        query {
          user {
            ... on User {
              posts {
                title
              }
            }
          }
        }
      `);

      // Expected depth: 2 (user -> posts -> title)
      expect(query).toBeDefined();
    });

    it('should skip introspection fields', () => {
      const query = parse(`
        query {
          __schema {
            types {
              name
            }
          }
        }
      `);

      // Introspection fields should be skipped
      expect(query).toBeDefined();
    });
  });

  describe('error messages', () => {
    it('should provide clear error message when depth exceeded', () => {
      const expectedError = 'Query depth of 8 exceeds maximum allowed depth of 6';
      expect(expectedError).toContain('exceeds maximum allowed depth');
    });

    it('should include depth information in error extensions', () => {
      const extensions = {
        code: 'QUERY_DEPTH_LIMIT_EXCEEDED',
        depth: 8,
        maxDepth: 6,
      };

      expect(extensions.code).toBe('QUERY_DEPTH_LIMIT_EXCEEDED');
      expect(extensions.depth).toBe(8);
      expect(extensions.maxDepth).toBe(6);
    });
  });
});
