# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- Build: `npm run build`
- Development: `npm run dev`
- Clean: `npm run clean`
- Database migration: `npm run migrate:dev` or `npm run migrate`
- Generate code: `npm run generate`
- Generate functions: `npm run generate:functions`
- Generate strings: `npm run generate:strings`
- Generate selections: `npm run generate:selections`
- Test: Run individual test with `npx jest src/tests/[test-file].test.ts`

## Code Style Guidelines

- TypeScript with strict typing enabled
- ES2018 target with 2-space indentation, 80 char line width
- Single quotes for strings, semicolons required
- Use camelCase for variables/methods, PascalCase for classes/interfaces/models
- Arrow functions with parentheses: `(arg) => {}`
- Use absolute imports with paths alias: `@/*`
- Handle errors with try/catch blocks
- Use async/await for asynchronous operations
- Organize imports with local modules after external libraries
- Use JSDoc comments for function documentation
- Follow Prisma/GraphQL model structure in generated code
- When adding new model fields, update the selectionSet strings
