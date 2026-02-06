import {
  validatePercentage,
  validatePositiveNumber,
  validateEmail,
  validateUrl,
  validateNonEmpty,
  validateConfidenceScore,
  validateFields,
  ValidationError,
} from '../middleware/input-validator';

describe('Input Validator', () => {
  describe('validatePercentage', () => {
    it('should accept valid percentages', () => {
      expect(() => validatePercentage(0, 'testField')).not.toThrow();
      expect(() => validatePercentage(50, 'testField')).not.toThrow();
      expect(() => validatePercentage(100, 'testField')).not.toThrow();
      expect(() => validatePercentage(0.5, 'testField')).not.toThrow();
      expect(() => validatePercentage(99.99, 'testField')).not.toThrow();
    });

    it('should reject percentages below 0', () => {
      expect(() => validatePercentage(-1, 'testField')).toThrow(ValidationError);
      expect(() => validatePercentage(-0.1, 'testField')).toThrow(ValidationError);
    });

    it('should reject percentages above 100', () => {
      expect(() => validatePercentage(101, 'testField')).toThrow(ValidationError);
      expect(() => validatePercentage(100.1, 'testField')).toThrow(ValidationError);
    });

    it('should reject non-numeric values', () => {
      expect(() => validatePercentage(NaN, 'testField')).toThrow(ValidationError);
      expect(() => validatePercentage('50' as unknown as number, 'testField')).toThrow(
        ValidationError
      );
    });

    it('should include field name and constraint in error', () => {
      try {
        validatePercentage(150, 'allocationPct');
        fail('Should have thrown ValidationError');
      } catch (error) {
        expect(error).toBeInstanceOf(ValidationError);
        if (error instanceof ValidationError) {
          expect(error.fields[0].field).toBe('allocationPct');
          expect(error.fields[0].constraint).toBe('range');
        }
      }
    });
  });

  describe('validatePositiveNumber', () => {
    it('should accept positive numbers', () => {
      expect(() => validatePositiveNumber(1, 'testField')).not.toThrow();
      expect(() => validatePositiveNumber(0.1, 'testField')).not.toThrow();
      expect(() => validatePositiveNumber(1000, 'testField')).not.toThrow();
    });

    it('should reject zero', () => {
      expect(() => validatePositiveNumber(0, 'testField')).toThrow(ValidationError);
    });

    it('should reject negative numbers', () => {
      expect(() => validatePositiveNumber(-1, 'testField')).toThrow(ValidationError);
      expect(() => validatePositiveNumber(-0.1, 'testField')).toThrow(ValidationError);
    });

    it('should reject non-numeric values', () => {
      expect(() => validatePositiveNumber(NaN, 'testField')).toThrow(ValidationError);
      expect(() => validatePositiveNumber('5' as unknown as number, 'testField')).toThrow(
        ValidationError
      );
    });

    it('should include field name and constraint in error', () => {
      try {
        validatePositiveNumber(-5, 'quantity');
        fail('Should have thrown ValidationError');
      } catch (error) {
        expect(error).toBeInstanceOf(ValidationError);
        if (error instanceof ValidationError) {
          expect(error.fields[0].field).toBe('quantity');
          expect(error.fields[0].constraint).toBe('positive');
        }
      }
    });
  });

  describe('validateEmail', () => {
    it('should accept valid email formats', () => {
      expect(() => validateEmail('user@example.com')).not.toThrow();
      expect(() => validateEmail('test.user@domain.co.uk')).not.toThrow();
      expect(() => validateEmail('name+tag@company.org')).not.toThrow();
    });

    it('should reject invalid email formats', () => {
      expect(() => validateEmail('invalid')).toThrow(ValidationError);
      expect(() => validateEmail('invalid@')).toThrow(ValidationError);
      expect(() => validateEmail('@domain.com')).toThrow(ValidationError);
      expect(() => validateEmail('user@.com')).toThrow(ValidationError);
      expect(() => validateEmail('user @domain.com')).toThrow(ValidationError);
    });

    it('should reject non-string values', () => {
      expect(() => validateEmail(123 as unknown as string)).toThrow(ValidationError);
      expect(() => validateEmail(null as unknown as string)).toThrow(ValidationError);
    });
  });

  describe('validateUrl', () => {
    it('should accept valid URLs', () => {
      expect(() => validateUrl('https://example.com')).not.toThrow();
      expect(() => validateUrl('http://localhost:3000')).not.toThrow();
      expect(() => validateUrl('https://example.com/path?query=value')).not.toThrow();
    });

    it('should reject invalid URLs', () => {
      expect(() => validateUrl('not-a-url')).toThrow(ValidationError);
      expect(() => validateUrl('ftp://invalid')).not.toThrow(); // URL constructor accepts this
      expect(() => validateUrl('//example.com')).toThrow(ValidationError);
    });

    it('should reject non-string values', () => {
      expect(() => validateUrl(123 as unknown as string)).toThrow(ValidationError);
      expect(() => validateUrl(null as unknown as string)).toThrow(ValidationError);
    });
  });

  describe('validateNonEmpty', () => {
    it('should accept non-empty strings', () => {
      expect(() => validateNonEmpty('test', 'testField')).not.toThrow();
      expect(() => validateNonEmpty('a', 'testField')).not.toThrow();
      expect(() => validateNonEmpty('  text  ', 'testField')).not.toThrow();
    });

    it('should reject empty strings', () => {
      expect(() => validateNonEmpty('', 'testField')).toThrow(ValidationError);
      expect(() => validateNonEmpty('   ', 'testField')).toThrow(ValidationError);
    });

    it('should reject non-string values', () => {
      expect(() => validateNonEmpty(123 as unknown as string, 'testField')).toThrow(
        ValidationError
      );
      expect(() => validateNonEmpty(null as unknown as string, 'testField')).toThrow(
        ValidationError
      );
    });

    it('should include field name in error', () => {
      try {
        validateNonEmpty('', 'username');
        fail('Should have thrown ValidationError');
      } catch (error) {
        expect(error).toBeInstanceOf(ValidationError);
        if (error instanceof ValidationError) {
          expect(error.fields[0].field).toBe('username');
          expect(error.fields[0].constraint).toBe('notEmpty');
        }
      }
    });
  });

  describe('validateConfidenceScore', () => {
    it('should accept valid confidence scores', () => {
      expect(() => validateConfidenceScore(0)).not.toThrow();
      expect(() => validateConfidenceScore(0.5)).not.toThrow();
      expect(() => validateConfidenceScore(1)).not.toThrow();
      expect(() => validateConfidenceScore(0.123456)).not.toThrow();
    });

    it('should reject scores below 0', () => {
      expect(() => validateConfidenceScore(-0.1)).toThrow(ValidationError);
      expect(() => validateConfidenceScore(-1)).toThrow(ValidationError);
    });

    it('should reject scores above 1', () => {
      expect(() => validateConfidenceScore(1.1)).toThrow(ValidationError);
      expect(() => validateConfidenceScore(2)).toThrow(ValidationError);
    });

    it('should reject non-numeric values', () => {
      expect(() => validateConfidenceScore(NaN)).toThrow(ValidationError);
      expect(() => validateConfidenceScore('0.5' as unknown as number)).toThrow(
        ValidationError
      );
    });
  });

  describe('validateFields', () => {
    it('should pass when all validations succeed', () => {
      expect(() =>
        validateFields([
          () => validatePercentage(50, 'field1'),
          () => validatePositiveNumber(10, 'field2'),
          () => validateNonEmpty('test', 'field3'),
        ])
      ).not.toThrow();
    });

    it('should accumulate multiple validation errors', () => {
      try {
        validateFields([
          () => validatePercentage(150, 'field1'),
          () => validatePositiveNumber(-5, 'field2'),
          () => validateNonEmpty('', 'field3'),
        ]);
        fail('Should have thrown ValidationError');
      } catch (error) {
        expect(error).toBeInstanceOf(ValidationError);
        if (error instanceof ValidationError) {
          expect(error.fields).toHaveLength(3);
          expect(error.fields[0].field).toBe('field1');
          expect(error.fields[1].field).toBe('field2');
          expect(error.fields[2].field).toBe('field3');
        }
      }
    });

    it('should continue validating after first error', () => {
      try {
        validateFields([
          () => validatePercentage(50, 'validField'),
          () => validatePercentage(150, 'invalidField1'),
          () => validatePercentage(-10, 'invalidField2'),
        ]);
        fail('Should have thrown ValidationError');
      } catch (error) {
        expect(error).toBeInstanceOf(ValidationError);
        if (error instanceof ValidationError) {
          expect(error.fields).toHaveLength(2);
        }
      }
    });
  });
});
