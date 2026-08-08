import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    exclude: ['node_modules', 'dist', 'src/generated/**', 'src/modules/**'],
    testTimeout: 10000,
    hookTimeout: 10000,
    // The generator suite runs the full codegen in-process, and its logger
    // emits tens of thousands of warn lines. With console interception ON,
    // every line is forwarded over the vitest worker-RPC channel, which can
    // starve it past its timeout and fail the run with an unhandled
    // "[vitest-worker]: Timeout calling onTaskUpdate" error even when all
    // tests pass (observed on the CI publish gate, run 31244014211).
    // Writing console output straight to stdout removes the RPC flood
    // without hiding any output.
    disableConsoleIntercept: true,
    // The generator writes through src/utils/logger.ts (raw process.stdout,
    // not console), so interception is not the only flood path — the sheer
    // stdout volume through the forked worker's IPC pipe can still starve
    // the task-update RPC. Suppress sub-error log noise at the source for
    // test runs; production default (LOG_LEVEL unset → debug) is unchanged.
    env: {
      LOG_LEVEL: 'error',
    },
    coverage: {
      provider: 'v8',
      reporter: [
        'text',
        'text-summary',
        'json',
        'json-summary',
        'lcov',
        'html',
      ],
      reportsDirectory: './coverage',
      include: ['src/**/*.ts'],
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
