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

import type { BackendContext, BackendUser } from './apollo-context';

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
 * AuthChecker implementation. Returns:
 *  - `false` if no authenticated user is on the context (fail-closed).
 *  - `true` if no roles were specified (any authenticated user is OK).
 *  - `true` iff the user's role set intersects the required roles.
 *
 * When type-graphql is built with `authMode: 'error'`, a `false` here
 * causes a `ForbiddenError` to bubble to the GraphQL response.
 */
export const authChecker: AuthChecker<BackendContext, BackendRole> = (
  { context },
  roles
) => {
  if (!context.user) return false;
  if (!roles || roles.length === 0) return true;
  const userRoles = extractRoles(context.user);
  return roles.some((required) => userRoles.includes(required));
};
