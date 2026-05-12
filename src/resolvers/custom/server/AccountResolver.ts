/**
 * Server-only resolver for `Account` (Auth.js OAuth account linkage).
 *
 * `app/src/lib/apollo/adapter.ts` reads `Account.access_token`,
 * `Account.refresh_token`, and `Account.id_token` server-side to
 * refresh OAuth credentials and link providers. Before CORTEX-P0-001
 * these fields were on the public `Account` GraphQL type; any logged-in
 * user could exfiltrate every other user's OAuth tokens via
 * `findManyAccount { access_token refresh_token id_token }`.
 *
 * The secret-field excision removed those fields from the public schema.
 * This resolver re-exposes them on a dedicated DTO behind
 * `@Authorized(["server","admin"])`. The Auth.js adapter migrates from
 * `adaptic.account.get(...)` to `serverGetAccountForLinking(provider,
 * providerAccountId)` — the (provider, providerAccountId) tuple is the
 * compound unique key in the schema (`@@unique([provider, providerAccountId])`).
 *
 * `serverCreateAccount` and `serverDeleteAccount` are intentionally NOT
 * exposed in this PR — Auth.js `linkAccount` and `unlinkAccount` flow
 * through the standard CRUD allowlist with no secret-field reads. Only
 * the READ path needs the privileged DTO.
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
 * DTO mirroring `Account` plus OAuth tokens. Stand-alone — not composed
 * onto the public `Account` ObjectType. Reachable only via
 * `serverGetAccountForLinking`.
 *
 * `access_token`, `refresh_token`, and `id_token` are nullable here
 * because the underlying Prisma columns are nullable (`String? @db.Text`):
 * not every provider returns all three on every sign-in (e.g. GitHub
 * doesn't issue id_tokens for non-OIDC clients).
 */
@TypeGraphQL.ObjectType('AccountWithTokensDTO', {
  description:
    'Server-only DTO that includes OAuth tokens for an external Account. ' +
    'Reachable only via @Authorized server* operations.',
})
export class AccountWithTokensDTO {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
    description: 'Account id (cuid).',
  })
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
    description: 'Owner user id (UUID).',
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: 'Account type (e.g. "oauth").',
  })
  type!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: 'OAuth provider (e.g. "github", "google").',
  })
  provider!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: 'Provider-issued account id.',
  })
  providerAccountId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: 'OAuth access token (server-only).',
  })
  access_token?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: 'OAuth refresh token (server-only).',
  })
  refresh_token?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: 'OIDC id_token (server-only). Null when the provider doesn\'t issue one.',
  })
  id_token?: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
    description: 'Token expiry as a UNIX timestamp.',
  })
  expires_at?: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: 'Token type (e.g. "Bearer").',
  })
  token_type?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: 'OAuth scope string.',
  })
  scope?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
    description: 'OAuth session state.',
  })
  session_state?: string | null;
}

@TypeGraphQL.Resolver((_of) => AccountWithTokensDTO)
export class AccountResolver {
  @TypeGraphQL.Authorized(['server', 'admin'])
  @TypeGraphQL.Query((_returns) => AccountWithTokensDTO, {
    nullable: true,
    description:
      'Server-only: find an external Account by (provider, providerAccountId), returning OAuth tokens. ' +
      'Used by the Auth.js adapter for account linking and token refresh.',
  })
  async serverGetAccountForLinking(
    @TypeGraphQL.Arg('provider', (_type) => String) provider: string,
    @TypeGraphQL.Arg('providerAccountId', (_type) => String)
    providerAccountId: string,
    @TypeGraphQL.Ctx() ctx: ServerResolverContext
  ): Promise<AccountWithTokensDTO | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient;
    const row = await prisma.account.findUnique({
      where: {
        provider_providerAccountId: {
          provider,
          providerAccountId,
        },
      },
    });
    logger.info('account_lookup', {
      event: 'account_lookup',
      operation: 'serverGetAccountForLinking',
      provider,
      found: row !== null,
      principal: ctx.user?.sub ?? 'unknown',
    });
    if (!row) return null;
    const dto = new AccountWithTokensDTO();
    dto.id = row.id;
    dto.userId = row.userId;
    dto.type = row.type;
    dto.provider = row.provider;
    dto.providerAccountId = row.providerAccountId;
    dto.access_token = row.access_token ?? null;
    dto.refresh_token = row.refresh_token ?? null;
    dto.id_token = row.id_token ?? null;
    dto.expires_at = row.expires_at ?? null;
    dto.token_type = row.token_type ?? null;
    dto.scope = row.scope ?? null;
    dto.session_state = row.session_state ?? null;
    return dto;
  }
}
