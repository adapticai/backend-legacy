/**
 * Input Validation Middleware
 *
 * Provides GraphQL mutation input validation through:
 * 1. Manual validation functions for custom resolvers
 * 2. Automatic validation plugin for pattern-based rules
 */

// Export validation functions
export {
  validatePercentage,
  validatePositiveNumber,
  validateEmail,
  validateUrl,
  validateNonEmpty,
  validateConfidenceScore,
  validateFields,
  ValidationError,
  ValidationErrorDetail,
} from './input-validator';

// Export GraphQL validation plugin
export {
  createValidationPlugin,
  VALIDATION_RULES,
} from './graphql-validation-plugin';

// Export authentication middleware
export {
  authMiddleware,
  AuthenticatedRequest,
} from './auth';

// Export example validators for reference
export { CustomValidators } from './validation-examples';
