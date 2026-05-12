/**
 * TypeGraphQL **global middleware** that enforces the "must be
 * authenticated" default policy on every resolver invocation.
 *
 * The TypeGraphQL `authChecker` is only invoked for resolvers/fields
 * carrying an `@Authorized()` decorator. The generated CRUD resolvers
 * have no such decorators, so the checker alone would NOT block them.
 * This middleware fills that gap by sitting in `globalMiddlewares` and
 * running before every field's resolver function.
 *
 * Bypass list: operations named in `IS_PUBLIC_OPERATION` (from
 * `./apollo-context`) skip the gate. The current set is empty — every
 * GraphQL operation must authenticate. The set is a named export so
 * future additions are visible to code review.
 *
 * The middleware also short-circuits at the **top-level fields only**
 * (queries/mutations/subscriptions). Once the top-level resolver has
 * run, child-field resolution does not pay the auth check again — the
 * caller is already authenticated.
 */

import type { MiddlewareFn } from 'type-graphql';

import {
  IS_PUBLIC_OPERATION,
  unauthenticatedError,
  type BackendContext,
} from './apollo-context';

/**
 * Global auth-guard middleware. Throws `GraphQLError("Unauthenticated")`
 * when `context.user` is missing.
 *
 * The check runs only at the operation root field (parent path is
 * undefined). Nested-field resolution skips the check.
 */
export const authGuardMiddleware: MiddlewareFn<BackendContext> = (
  { context, info },
  next
) => {
  // Only gate top-level fields. Once the root resolver authorised the
  // call, child resolvers don't need to re-check.
  const isRootField = info.path.prev === undefined;
  if (!isRootField) {
    return next();
  }

  // Per-operation bypass list. Empty as of CORTEX-P0-001.
  if (info.operation.name?.value && IS_PUBLIC_OPERATION.has(info.operation.name.value)) {
    return next();
  }
  if (info.fieldName && IS_PUBLIC_OPERATION.has(info.fieldName)) {
    return next();
  }

  if (!context.user) {
    throw unauthenticatedError();
  }

  return next();
};
