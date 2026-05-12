/**
 * TypeGraphQL AuthChecker for `@adaptic/backend-legacy`.
 *
 * Two integration points use this:
 *
 *  1. The global auth-guard middleware (`./auth-guard.ts`) consults the
 *     same `BackendContext.user` predicate to fail closed on every
 *     resolver invocation. The default policy is "must be authenticated".
 *
 *  2. Any custom resolver decorated with `@Authorized(...)` is gated by
 *     this checker for role-based access (e.g. server-only DTO resolvers
 *     that return credentials).
 *
 * Roles are a finite enumeration. New roles MUST be added here and to
 * `BackendRole` so that the compiler enforces consistent string-literal
 * checks at every callsite.
 *
 * Design notes:
 *
 *  - We do not consult any other source of identity (no header re-reading,
 *    no in-line JWT verification) — identity is established once by the
 *    Apollo context factory (`./apollo-context.ts`) and frozen on the
 *    context. The checker is a pure read of that established identity.
 *
 *  - Returning `false` from the checker, combined with `authMode: 'error'`,
 *    surfaces a `ForbiddenError` from type-graphql which Apollo Server
 *    serialises with `extensions.code = 'FORBIDDEN'`. For unauthenticated
 *    callers, the global auth-guard runs FIRST and throws
 *    `UNAUTHENTICATED` before this checker is consulted.
 */

import type { AuthChecker } from 'type-graphql';

import { unauthenticatedError, type BackendContext, type BackendUser } from './apollo-context';

/**
 * Finite set of role strings recognised by the backend.
 *
 * - `server` — caller identified by the `SERVER_AUTH_TOKEN` static token
 *   (engine, app server-side traffic). Has read access to fields gated by
 *   `@Authorized(["server"])`, such as encrypted credential retrieval
 *   endpoints.
 * - `admin` — caller with `role: "admin"` in their JWT. Reserved for
 *   privileged operations such as user role changes and audit-log reads.
 * - `user` — caller with a verified user JWT. Default for browser-issued
 *   bearer tokens. May not read server-grade fields.
 */
export type BackendRole = 'server' | 'admin' | 'user';

/**
 * Read the role strings carried on the authenticated user. Tolerates the
 * legacy `role: string` field as well as the new `roles: string[]` field.
 */
function extractRoles(user: BackendUser): string[] {
  if (Array.isArray(user.roles) && user.roles.length > 0) {
    return user.roles;
  }
  if (typeof user.role === 'string' && user.role.length > 0) {
    return [user.role];
  }
  return [];
}

/**
 * AuthChecker implementation. Two failure shapes:
 *
 *  - No authenticated user on context: throws `GraphQLError("Unauthenticated")`
 *    with `extensions.code = "UNAUTHENTICATED"`. This **must** distinguish
 *    from the "wrong role" case — clients (and the failing test that
 *    guards this contract) rely on the distinction to handle re-auth vs.
 *    permission-elevation paths.
 *
 *  - Authenticated user but missing role: returns `false`. With
 *    `authMode: 'error'`, type-graphql then throws its built-in
 *    `AuthorizationError` (extensions.code = `"UNAUTHORIZED"`), which is
 *    the correct semantics for "you're known but not permitted".
 *
 *  - Authenticated user with at least one of the required roles, or
 *    `@Authorized()` with no specific role list: returns `true`.
 *
 * The previous behaviour returned `false` on missing user, which (because
 * type-graphql's built-in AuthMiddleware emits `AuthorizationError` for
 * any `false` from a `@Authorized([...])` decorator with a non-empty role
 * list) surfaced as `UNAUTHORIZED` — indistinguishable from a real
 * permission denial. That made the consumer's re-auth flow harder to
 * design and contradicted the spec for these tests.
 */
export const authChecker: AuthChecker<BackendContext, BackendRole> = (
  { context },
  roles
) => {
  if (!context.user) {
    // Throwing here propagates through the AuthMiddleware's check and
    // bypasses its `AuthorizationError` fallback, giving the response a
    // proper UNAUTHENTICATED code.
    throw unauthenticatedError();
  }
  if (!roles || roles.length === 0) return true;
  const userRoles = extractRoles(context.user);
  return roles.some((required) => userRoles.includes(required));
};
