// tests/parser.test.ts
import { getInputTypeDefinition } from '../src/modules/parser';

test('Parses fields from a model file', () => {
  const fields = getInputTypeDefinition('./src/generated/typegraphql-prisma/models/User.ts');
  expect(fields).toHaveLength(5); // assuming User model has 5 fields
});
