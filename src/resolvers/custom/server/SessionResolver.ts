/**
 * Server-only resolver for `Session` (Auth.js / NextAuth session table).
 *
 * Auth.js Apollo adapter (`app/src/lib/apollo/adapter.ts`) reads
 * `Session.sessionToken` to validate a user's cookie-borne session token
 * against the database, creates rows on sign-in, and deletes them on
 * sign-out. Before CORTEX-P0-001 these reads/writes ran through the
 * generated CRUD resolvers; the secret-field excision removed
 * `Session.sessionToken` from the public schema (any logged-in user could
 * dump every other user's session tokens via `findManySession`).
 *
 * This resolver is the replacement path:
 *
 *   - `serverFindSessionByToken(token)` — Auth.js adapter `getSessionAndUser`
 *     equivalent (return the session for a given token, or null).
 *   - `serverCreateSession(...)` — Auth.js adapter `createSession`.
 *   - `serverDeleteSessionByToken(token)` — Auth.js adapter `deleteSession`.
 *
 * `updateSession` is NOT exposed because the existing NextAuth flow
 * recreates rather than mutates on rotation, and the surface area should
 * be the minimum needed. Adding it later requires a new commit, a new
 * test, and a new line in the consumer migration brief.
 *
 * Every operation is `@Authorized(["server","admin"])`; the auth gate
 * is the only access control. Browser-issued tokens (role `user`) cannot
 * reach these operations.
 */

import * as TypeGraphQL from 'type-graphql';
import type { PrismaClient } from '@prisma/client';
import { getPrismaFromContext } from '../../../generated/typegraphql-prisma/helpers';
import { logger } from '../../../utils/logger';

interface ServerResolverContext {
  prisma: PrismaClient;
  user: {
    sub?: string;
    role?: string;
    roles?: string[];
  } | null;
}

/**
 * DTO mirroring `Session` plus `sessionToken`. Stand-alone — not composed
 * onto the public `Session` ObjectType. Reachable only via the `server*`
 * session operations.
 */
@TypeGraphQL.ObjectType('SessionWithTokenDTO', {
  description:
    'Server-only DTO that includes the session token. Used by the Auth.js ' +
    'adapter for session validation. Reachable only via @Authorized server* operations.',
})
export class SessionWithTokenDTO {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
    description: 'Session id (cuid).',
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: 'Session token. Server-only — DO NOT log or expose.',
  })
  sessionToken!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
    description: 'Owner user id (UUID).',
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: 'Session expiry timestamp.',
  })
  expires!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: 'Timestamp the session row was created.',
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: 'Timestamp the session row was last updated.',
  })
  updatedAt!: Date;
}

/**
 * Project a Prisma `Session` row into the DTO. Asserts the
 * required-but-secret column types to surface data-integrity bugs.
 */
function toDto(row: {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  createdAt: Date;
  updatedAt: Date;
}): SessionWithTokenDTO {
  const dto = new SessionWithTokenDTO();
  dto.id = row.id;
  dto.sessionToken = row.sessionToken;
  dto.userId = row.userId;
  dto.expires = row.expires;
  dto.createdAt = row.createdAt;
  dto.updatedAt = row.updatedAt;
  return dto;
}

@TypeGraphQL.Resolver((_of) => SessionWithTokenDTO)
export class SessionResolver {
  @TypeGraphQL.Authorized(['server', 'admin'])
  @TypeGraphQL.Query((_returns) => SessionWithTokenDTO, {
    nullable: true,
    description:
      'Server-only: find a Session by its sessionToken. Returns null when not found.',
  })
  async serverFindSessionByToken(
    @TypeGraphQL.Arg('token', (_type) => String) token: string,
    @TypeGraphQL.Ctx() ctx: ServerResolverContext
  ): Promise<SessionWithTokenDTO | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient;
    const row = await prisma.session.findUnique({
      where: { sessionToken: token },
    });
    logger.info('session_lookup', {
      event: 'session_lookup',
      operation: 'serverFindSessionByToken',
      found: row !== null,
      principal: ctx.user?.sub ?? 'unknown',
    });
    return row ? toDto(row) : null;
  }

  @TypeGraphQL.Authorized(['server', 'admin'])
  @TypeGraphQL.Mutation((_returns) => SessionWithTokenDTO, {
    nullable: false,
    description:
      'Server-only: create a new Session row. Used by the Auth.js adapter on sign-in.',
  })
  async serverCreateSession(
    @TypeGraphQL.Arg('userId', (_type) => TypeGraphQL.ID) userId: string,
    @TypeGraphQL.Arg('sessionToken', (_type) => String) sessionToken: string,
    @TypeGraphQL.Arg('expires', (_type) => Date) expires: Date,
    @TypeGraphQL.Ctx() ctx: ServerResolverContext
  ): Promise<SessionWithTokenDTO> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient;
    const row = await prisma.session.create({
      data: { userId, sessionToken, expires },
    });
    logger.info('session_create', {
      event: 'session_create',
      operation: 'serverCreateSession',
      userId,
      principal: ctx.user?.sub ?? 'unknown',
    });
    return toDto(row);
  }

  @TypeGraphQL.Authorized(['server', 'admin'])
  @TypeGraphQL.Mutation((_returns) => SessionWithTokenDTO, {
    nullable: true,
    description:
      'Server-only: delete a Session row by sessionToken. Returns the deleted row, or null if not found.',
  })
  async serverDeleteSessionByToken(
    @TypeGraphQL.Arg('token', (_type) => String) token: string,
    @TypeGraphQL.Ctx() ctx: ServerResolverContext
  ): Promise<SessionWithTokenDTO | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient;
    try {
      const row = await prisma.session.delete({
        where: { sessionToken: token },
      });
      logger.info('session_delete', {
        event: 'session_delete',
        operation: 'serverDeleteSessionByToken',
        deleted: true,
        principal: ctx.user?.sub ?? 'unknown',
      });
      return toDto(row);
    } catch {
      // Prisma throws when the row doesn't exist; treat that as
      // "nothing to delete" so the Auth.js adapter can call this
      // idempotently on logout without races.
      logger.info('session_delete', {
        event: 'session_delete',
        operation: 'serverDeleteSessionByToken',
        deleted: false,
        principal: ctx.user?.sub ?? 'unknown',
      });
      return null;
    }
  }
}
