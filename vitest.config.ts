import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    exclude: [
      'node_modules',
      'dist',
      'src/generated/**',
      'src/modules/**',
    ],
    testTimeout: 10000,
    hookTimeout: 10000,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary', 'json', 'json-summary', 'lcov', 'html'],
      reportsDirectory: './coverage',
      include: [
        'src/**/*.ts',
      ],
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.spec.ts',
        'src/generated/**',
        'src/modules/**',
        'src/resolvers/**',
        'node_modules/**',
      ],
      thresholds: {
        lines: 60,
        functions: 50,
        branches: 40,
        statements: 60,
      },
    },
  },
});
