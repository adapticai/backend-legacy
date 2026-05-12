/**
 * Server-only resolver for `VerificationToken` (Auth.js email-verification /
 * passwordless-flow tokens).
 *
 * Auth.js Apollo adapter (`app/src/lib/apollo/adapter.ts`) needs to:
 *   1. Create a verification token (random string) and persist it.
 *   2. Look up `(identifier, token)` on link-click to confirm validity.
 *   3. Delete it after one-time use.
 *
 * Before CORTEX-P0-001, all three flowed through the generated CRUD
 * resolvers; any logged-in caller could `findManyVerificationToken {
 * token }` and read every pending verification token, breaking the
 * security model of these one-time codes. The field excision removed
 * `VerificationToken.token` from the public schema, and this resolver
 * re-exposes the operations Auth.js needs behind
 * `@Authorized(["server","admin"])`.
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
 * DTO mirroring the three columns of `VerificationToken`. The whole row
 * is "secret" by nature — `identifier` reveals which user is trying to
 * verify, `token` is the one-time secret, `expires` is metadata. The
 * public schema retains `identifier` and `expires` but excises `token`.
 * The DTO carries all three for the Auth.js adapter's use.
 */
@TypeGraphQL.ObjectType('VerificationTokenDTO', {
  description:
    'Server-only DTO for VerificationToken rows including the secret token value. ' +
    'Reachable only via @Authorized server* operations.',
})
export class VerificationTokenDTO {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: 'Verification identifier (email or user id).',
  })
  identifier!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description:
      'One-time verification token. Server-only — DO NOT log or expose.',
  })
  token!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: 'Token expiry timestamp.',
  })
  expires!: Date;
}

function toDto(row: {
  identifier: string;
  token: string;
  expires: Date;
}): VerificationTokenDTO {
  const dto = new VerificationTokenDTO();
  dto.identifier = row.identifier;
  dto.token = row.token;
  dto.expires = row.expires;
  return dto;
}

@TypeGraphQL.Resolver((_of) => VerificationTokenDTO)
export class VerificationTokenResolver {
  @TypeGraphQL.Authorized(['server', 'admin'])
  @TypeGraphQL.Query((_returns) => VerificationTokenDTO, {
    nullable: true,
    description:
      'Server-only: look up a VerificationToken by (identifier, token). ' +
      'Returns null when no matching row exists.',
  })
  async serverGetVerificationToken(
    @TypeGraphQL.Arg('identifier', (_type) => String) identifier: string,
    @TypeGraphQL.Arg('token', (_type) => String) token: string,
    @TypeGraphQL.Ctx() ctx: ServerResolverContext
  ): Promise<VerificationTokenDTO | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient;
    const row = await prisma.verificationToken.findUnique({
      where: {
        identifier_token: { identifier, token },
      },
    });
    logger.info('verification_token_lookup', {
      event: 'verification_token_lookup',
      operation: 'serverGetVerificationToken',
      identifierHash: identifier.slice(0, 4), // do not log identifier in full
      found: row !== null,
      principal: ctx.user?.sub ?? 'unknown',
    });
    return row ? toDto(row) : null;
  }

  @TypeGraphQL.Authorized(['server', 'admin'])
  @TypeGraphQL.Mutation((_returns) => VerificationTokenDTO, {
    nullable: false,
    description:
      'Server-only: create a new VerificationToken row.',
  })
  async serverCreateVerificationToken(
    @TypeGraphQL.Arg('identifier', (_type) => String) identifier: string,
    @TypeGraphQL.Arg('token', (_type) => String) token: string,
    @TypeGraphQL.Arg('expires', (_type) => Date) expires: Date,
    @TypeGraphQL.Ctx() ctx: ServerResolverContext
  ): Promise<VerificationTokenDTO> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient;
    const row = await prisma.verificationToken.create({
      data: { identifier, token, expires },
    });
    logger.info('verification_token_create', {
      event: 'verification_token_create',
      operation: 'serverCreateVerificationToken',
      identifierHash: identifier.slice(0, 4),
      principal: ctx.user?.sub ?? 'unknown',
    });
    return toDto(row);
  }

  @TypeGraphQL.Authorized(['server', 'admin'])
  @TypeGraphQL.Mutation((_returns) => VerificationTokenDTO, {
    nullable: true,
    description:
      'Server-only: delete a VerificationToken by (identifier, token). ' +
      'Returns the deleted row, or null when not found.',
  })
  async serverDeleteVerificationToken(
    @TypeGraphQL.Arg('identifier', (_type) => String) identifier: string,
    @TypeGraphQL.Arg('token', (_type) => String) token: string,
    @TypeGraphQL.Ctx() ctx: ServerResolverContext
  ): Promise<VerificationTokenDTO | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient;
    try {
      const row = await prisma.verificationToken.delete({
        where: { identifier_token: { identifier, token } },
      });
      logger.info('verification_token_delete', {
        event: 'verification_token_delete',
        operation: 'serverDeleteVerificationToken',
        identifierHash: identifier.slice(0, 4),
        deleted: true,
        principal: ctx.user?.sub ?? 'unknown',
      });
      return toDto(row);
    } catch {
      logger.info('verification_token_delete', {
        event: 'verification_token_delete',
        operation: 'serverDeleteVerificationToken',
        identifierHash: identifier.slice(0, 4),
        deleted: false,
        principal: ctx.user?.sub ?? 'unknown',
      });
      return null;
    }
  }
}
