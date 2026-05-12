/**
 * Apollo Server context factory and shared types for `@adaptic/backend-legacy`.
 *
 * This module is the SOLE entry point that establishes caller identity for
 * a GraphQL operation. It runs once per HTTP request (or WebSocket
 * connection) and either:
 *
 *  - establishes `context.user: BackendUser` with a verified identity, OR
 *  - throws `GraphQLError("Unauthenticated", { extensions: { code:
 *    "UNAUTHENTICATED" } })` to fail closed.
 *
 * Returning `{ user: null }` is FORBIDDEN. Every other layer in the
 * backend trusts that `context.user` is non-null. The previous behaviour
 * — silently constructing `{ user: null }` on a missing/invalid token —
 * let any unauthenticated caller introspect the schema and run mutations
 * against any model lacking `@Authorized()` (which is every generated
 * CRUD resolver). See CORTEX-P0-001 in the master plan.
 *
 * The factory is exported for both the HTTP and WebSocket entry points so
 * that they share identical token-verification logic — divergent verifiers
 * are how the WebSocket-vs-HTTP `ya29.` discrepancy snuck into the
 * pre-CORTEX server.
 */

import type { Request } from 'express';
import type { PrismaClient } from '@prisma/client';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';

import { jwtSecret } from '../config/jwtConfig';
import { logger } from '../utils/logger';

/**
 * The authenticated principal carried on every GraphQL context.
 *
 * `sub` is the standard JWT subject; for the static server token we
 * synthesise `sub: 'server'`. `role` and `roles` are both tolerated:
 * legacy JWTs carry a single `role` string, newer ones carry `roles[]`.
 * The auth-checker normalises both shapes.
 *
 * `provider` exists for compatibility with the (now-removed) Google
 * OAuth-prefix branch — it is preserved so audit logs that already key
 * on it continue to work. Token verification proper is the responsibility
 * of CORTEX-P0-002, which replaces the rest of this module's verifier.
 */
export interface BackendUser {
  sub?: string;
  name?: string;
  email?: string;
  role?: string;
  roles?: string[];
  provider?: string;
}

/**
 * The Apollo Server context for HTTP and WebSocket operations.
 *
 * The `req` field is only present for HTTP. WebSocket contexts use
 * `connectionParams` upstream of this factory and produce a context
 * without `req`.
 */
export interface BackendContext {
  prisma: PrismaClient;
  user: BackendUser;
  req?: Request;
}

/**
 * Set of operation names that are explicitly allowed without
 * authentication. As of CORTEX-P0-001 there are NONE — the health
 * endpoint is served by Express directly, not GraphQL, and every other
 * operation MUST authenticate. The set is kept as a named constant so
 * that any future addition is visible at code-review time and so the
 * auth gate has a single, auditable bypass list.
 */
export const IS_PUBLIC_OPERATION: ReadonlySet<string> = new Set<string>([]);

/**
 * Build the standard `Unauthenticated` GraphQL error. Used by both the
 * context factory (on missing/invalid token) and the global auth-guard
 * middleware (on missing context.user at resolver invocation time).
 */
export function unauthenticatedError(detail?: string): GraphQLError {
  return new GraphQLError(detail ?? 'Unauthenticated', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  });
}

/**
 * Extracts the Bearer token from an Authorization header. Returns the
 * empty string when no Bearer token is present.
 */
function extractBearerToken(authHeader: string | undefined): string {
  if (!authHeader || !authHeader.startsWith('Bearer ')) return '';
  return authHeader.slice('Bearer '.length).trim();
}

/**
 * Verify a Bearer token using the centralised JWT secret OR the
 * `SERVER_AUTH_TOKEN` static comparison.
 *
 * Throws `GraphQLError("Unauthenticated")` on every failure path:
 *
 *  - empty token
 *  - non-JWT-shape (not three dot-separated parts) AND not matching the
 *    server token
 *  - failed signature verification
 *  - failed `ya29.` opaque-access-token rejection (rejected explicitly to
 *    prevent the previous prefix-trust bypass)
 *
 * CORTEX-P0-002 replaces this verifier with a typed `verifyBackendToken`
 * that handles Google ID tokens via `OAuth2Client.verifyIdToken`. For
 * CORTEX-P0-001 we keep the existing JWT/server-token verification but
 * change the response to fail closed on any failure rather than return
 * `user: null`.
 */
function verifyToken(token: string): BackendUser {
  if (!token) {
    throw unauthenticatedError('Missing bearer token');
  }

  // Explicitly reject opaque OAuth access tokens. The previous behaviour
  // treated `ya29.<opaque>` as a trusted Google token without verifying
  // it against any issuer. Reject so the caller migrates to a verified
  // token path (CORTEX-P0-002).
  if (token.startsWith('ya29.')) {
    logger.warn(
      'Rejected opaque Google OAuth access token at GraphQL boundary (CORTEX-P0-001)'
    );
    throw unauthenticatedError('Opaque OAuth access tokens are not accepted');
  }

  // Server-to-server static token comparison. SERVER_AUTH_TOKEN is the
  // shared secret between engine and backend; matching it grants role
  // `server`.
  const serverAuthToken = process.env.SERVER_AUTH_TOKEN;
  if (serverAuthToken && token === serverAuthToken) {
    return {
      sub: 'server',
      name: 'Server Auth',
      role: 'server',
      roles: ['server'],
    };
  }

  // Real JWTs have three dot-separated parts. Anything else is a
  // malformed bearer and is rejected here so the verifier never invokes
  // `jwt.verify` on garbage.
  const parts = token.split('.');
  if (parts.length !== 3) {
    const tokenPreview = token.length > 20 ? `${token.substring(0, 20)}...` : token;
    logger.warn('Received malformed bearer token (not JWT-shaped)', {
      tokenPreview,
    });
    throw unauthenticatedError('Malformed bearer token');
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload | string;
    if (typeof decoded === 'string') {
      // jwt.verify returns the payload as a string only when the JWT
      // payload itself was a string. That shape is unusable as a
      // principal, so we treat it as an authentication failure.
      throw unauthenticatedError('Invalid bearer token payload');
    }
    return normaliseDecodedJwt(decoded);
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : 'Unknown error';
    logger.warn('JWT verification failed', { errorMessage });
    if (e instanceof GraphQLError) {
      throw e;
    }
    throw unauthenticatedError('Invalid bearer token');
  }
}

/**
 * Coerce a JWT payload into the `BackendUser` shape. We tolerate both
 * `role: string` (legacy) and `roles: string[]` (preferred).
 */
function normaliseDecodedJwt(payload: JwtPayload): BackendUser {
  const user: BackendUser = {
    sub: typeof payload.sub === 'string' ? payload.sub : undefined,
    name:
      typeof (payload as { name?: unknown }).name === 'string'
        ? ((payload as { name?: string }).name as string)
        : undefined,
    email:
      typeof (payload as { email?: unknown }).email === 'string'
        ? ((payload as { email?: string }).email as string)
        : undefined,
    role:
      typeof (payload as { role?: unknown }).role === 'string'
        ? ((payload as { role?: string }).role as string)
        : undefined,
  };
  const rolesField = (payload as { roles?: unknown }).roles;
  if (Array.isArray(rolesField)) {
    user.roles = rolesField.filter((r): r is string => typeof r === 'string');
  } else if (user.role) {
    user.roles = [user.role];
  }
  return user;
}

/**
 * Build the Apollo HTTP context from an Express request. Throws
 * `GraphQLError("Unauthenticated")` on missing/invalid token. The
 * caller (Apollo Server) packages the thrown error into the operation
 * response with `extensions.code = 'UNAUTHENTICATED'`.
 *
 * `prisma` is read from the module-level global because the existing
 * code relies on it (`global.prisma`). Tests stub it out as needed.
 */
export async function buildApolloContextFromRequest(
  req: Request
): Promise<BackendContext> {
  const prisma = await resolvePrisma();

  const authHeader =
    typeof req.headers?.authorization === 'string' ? req.headers.authorization : '';
  const token = extractBearerToken(authHeader);
  const user = verifyToken(token);

  return { prisma, user, req };
}

/**
 * Build the Apollo WebSocket context from `connectionParams`. Same
 * fail-closed contract as the HTTP variant — a missing/invalid token
 * throws `GraphQLError("Unauthenticated")`, which `graphql-ws` translates
 * into a connection close.
 */
export async function buildApolloContextFromConnectionParams(
  connectionParams: Record<string, unknown> | undefined
): Promise<BackendContext> {
  const prisma = await resolvePrisma();

  const authHeader =
    typeof connectionParams?.authorization === 'string'
      ? connectionParams.authorization
      : '';
  const token = extractBearerToken(authHeader);
  const user = verifyToken(token);

  return { prisma, user };
}

/**
 * Resolve the Prisma client to use on the context. Lazy-imported so that
 * the schema-build test (`schema-secret-fields.test.ts`) does not pay the
 * Prisma init cost.
 *
 * `prismaClient.ts` declares `var prisma: PrismaClient | undefined` on
 * the global scope so the cast here is type-safe without an
 * `unknown` hop.
 */
async function resolvePrisma(): Promise<PrismaClient> {
  if (typeof global !== 'undefined' && global.prisma) {
    return global.prisma;
  }
  const mod = await import('../prismaClient');
  const prisma = mod.default;
  if (typeof global !== 'undefined') {
    global.prisma = prisma;
  }
  return prisma;
}
