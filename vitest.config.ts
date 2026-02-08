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
  },
});
