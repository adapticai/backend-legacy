/**
 * Server-only credential-retrieval resolver for `AlpacaAccount`.
 *
 * This is the post-CORTEX-P0-001 replacement for the public schema fields
 * `AlpacaAccount.APIKey` and `AlpacaAccount.APISecret`, which were excised
 * from the published GraphQL schema by `src/graphql/enhance-overrides.ts`.
 * Without that excision, a logged-in user could dump every other user's
 * Alpaca broker credentials via `findManyAlpacaAccount { APIKey APISecret }`
 * — a P0-class exfiltration vector.
 *
 * The engine still legitimately needs to read these credentials server-side
 * to authenticate against the Alpaca broker. The replacement is this
 * resolver, which:
 *
 *   1. Returns a dedicated DTO (`AlpacaAccountCredentialsDTO`) — a stand-alone
 *      ObjectType that does not pollute the public `AlpacaAccount` type.
 *   2. Is gated by `@Authorized(["server", "admin"])` so only callers
 *      bearing the static `SERVER_AUTH_TOKEN` (synthesised as principal
 *      `{ role: "server" }`) or an admin JWT can reach it.
 *   3. Logs every successful read at `info` level with the accountId and
 *      principal sub. Token values are NEVER logged.
 *
 * Consumers (after this PR ships and is consumed):
 *
 *   - `engine/src/crypto/trading/crypto-account-manager.ts` and adjacent
 *     code that today calls `adaptic.alpacaAccount.get({ id })` and reads
 *     `.APIKey` / `.APISecret` must migrate to
 *     `serverGetAlpacaAccountCredentials(accountId: ID!)`. The migration
 *     also requires the engine to carry the `SERVER_AUTH_TOKEN` on the
 *     Authorization header so this resolver can authenticate it.
 *
 *   - The bulk variant `serverGetAllAlpacaAccountCredentials(userId)` is
 *     for `adaptic.alpacaAccount.getAll(...)` patterns where the engine
 *     fetches every account owned by a user (or, with `userId` omitted,
 *     every account on the platform — used by the cron jobs that monitor
 *     all paper accounts).
 */

import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import type { PrismaClient, Prisma } from '@prisma/client';
import { GraphQLError } from 'graphql';
import { AlpacaAccountType } from '../../../generated/typegraphql-prisma/enums/AlpacaAccountType';
import { getPrismaFromContext } from '../../../generated/typegraphql-prisma/helpers';
import { logger } from '../../../utils/logger';

/**
 * Minimal context shape this resolver depends on. We deliberately keep
 * this local rather than importing `BackendContext` from the graphql
 * subtree so the resolver compiles cleanly even if context shape evolves;
 * the auth gate is enforced by `@Authorized` + the global middleware, not
 * by reading `ctx.user` inline.
 */
interface ServerResolverContext {
  prisma: PrismaClient;
  user: {
    sub?: string;
    role?: string;
    roles?: string[];
  } | null;
}

/**
 * DTO mirroring the non-secret fields of `AlpacaAccount` plus the secret
 * fields (`APIKey`, `APISecret`) that exist in the database but are
 * excised from the public schema. Returned only by the `server*`
 * credential queries.
 *
 * Field selection rationale:
 *   - `id`, `type`, `configuration`, `createdAt`, `updatedAt`: bookkeeping
 *     the consumer needs to identify which broker environment to talk to.
 *   - `userId`: ownership pointer the engine uses to scope retries and
 *     audit attribution.
 *   - `APIKey`, `APISecret`: the actual credentials. Non-null because
 *     every row carries non-null values per the Prisma schema (`String`
 *     without `?`). Returning null would be a constraint violation.
 */
@TypeGraphQL.ObjectType('AlpacaAccountCredentialsDTO', {
  description:
    'Server-only DTO that carries Alpaca broker credentials. Reachable ' +
    'exclusively via the @Authorized(["server","admin"]) credential ' +
    'queries; not composed onto the public AlpacaAccount type.',
})
export class AlpacaAccountCredentialsDTO {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
    description: 'Unique identifier for the Alpaca account.',
  })
  id!: string;

  @TypeGraphQL.Field((_type) => AlpacaAccountType, {
    nullable: false,
    description: 'Account environment (PAPER or LIVE).',
  })
  type!: 'PAPER' | 'LIVE';

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: true,
    description: 'Account-level JSON configuration (broker endpoint, etc.).',
  })
  configuration?: Prisma.JsonValue | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: 'Alpaca API key. Server-only — DO NOT log or expose.',
  })
  APIKey!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: 'Alpaca API secret. Server-only — DO NOT log or expose.',
  })
  APISecret!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
    description: 'Owner user id (UUID).',
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: 'Timestamp the account row was created.',
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
    description: 'Timestamp the account row was last updated.',
  })
  updatedAt!: Date;
}

/**
 * Read a single AlpacaAccount by id and return the credential-bearing DTO.
 * Returns `null` when the record does not exist; throws no business-level
 * GraphQL errors — the auth gate is the only access control here.
 *
 * The Prisma row carries the secrets as required strings (`String` without
 * `?` in the schema), so we map them directly. If the database somehow
 * holds a null in those columns (which would violate the schema and
 * indicate a data-integrity bug), we surface a `GraphQLError` with a
 * descriptive code so the operator notices rather than the engine
 * silently authenticating with `null`.
 */
async function loadCredentialsDTO(
  prisma: PrismaClient,
  accountId: string
): Promise<AlpacaAccountCredentialsDTO | null> {
  const row = await prisma.alpacaAccount.findUnique({
    where: { id: accountId },
  });
  if (!row) return null;
  if (typeof row.APIKey !== 'string' || typeof row.APISecret !== 'string') {
    throw new GraphQLError(
      'AlpacaAccount has null credentials; row violates schema invariants',
      { extensions: { code: 'INVALID_RECORD' } }
    );
  }
  const dto = new AlpacaAccountCredentialsDTO();
  dto.id = row.id;
  dto.type = row.type;
  dto.configuration = row.configuration ?? null;
  dto.APIKey = row.APIKey;
  dto.APISecret = row.APISecret;
  dto.userId = row.userId;
  dto.createdAt = row.createdAt;
  dto.updatedAt = row.updatedAt;
  return dto;
}

/**
 * Server-only resolver exposing two operations:
 *
 *   - `serverGetAlpacaAccountCredentials(accountId)` — single-record lookup.
 *   - `serverGetAllAlpacaAccountCredentials(userId?)` — bulk lookup,
 *     optionally scoped to one user.
 *
 * Both operations are gated by `@Authorized(["server","admin"])`. The
 * global auth-guard middleware (`src/graphql/auth-guard.ts`) runs first
 * and throws `UNAUTHENTICATED` if no principal is on the context; then
 * `@Authorized` triggers the auth-checker, which returns false for
 * principals lacking the required role and surfaces `UNAUTHORIZED`.
 */
@TypeGraphQL.Resolver((_of) => AlpacaAccountCredentialsDTO)
export class AlpacaAccountCredentialsResolver {
  @TypeGraphQL.Authorized(['server', 'admin'])
  @TypeGraphQL.Query((_returns) => AlpacaAccountCredentialsDTO, {
    nullable: true,
    description:
      'Server-only: fetch an AlpacaAccount with its credentials by id. ' +
      'Requires the "server" or "admin" role.',
  })
  async serverGetAlpacaAccountCredentials(
    @TypeGraphQL.Arg('accountId', (_type) => TypeGraphQL.ID) accountId: string,
    @TypeGraphQL.Ctx() ctx: ServerResolverContext
  ): Promise<AlpacaAccountCredentialsDTO | null> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient;
    const dto = await loadCredentialsDTO(prisma, accountId);
    logger.info('credentials_read', {
      event: 'credentials_read',
      operation: 'serverGetAlpacaAccountCredentials',
      accountId,
      found: dto !== null,
      principal: ctx.user?.sub ?? 'unknown',
    });
    return dto;
  }

  @TypeGraphQL.Authorized(['server', 'admin'])
  @TypeGraphQL.Query((_returns) => [AlpacaAccountCredentialsDTO], {
    nullable: false,
    description:
      'Server-only: fetch every AlpacaAccount with credentials. ' +
      'Optionally scope to a single userId. Requires "server" or "admin".',
  })
  async serverGetAllAlpacaAccountCredentials(
    @TypeGraphQL.Ctx() ctx: ServerResolverContext,
    @TypeGraphQL.Arg('userId', (_type) => TypeGraphQL.ID, { nullable: true })
    userId?: string
  ): Promise<AlpacaAccountCredentialsDTO[]> {
    const prisma = getPrismaFromContext(ctx) as PrismaClient;
    const where = userId ? { userId } : undefined;
    const rows = await prisma.alpacaAccount.findMany({ where });
    const dtos: AlpacaAccountCredentialsDTO[] = [];
    for (const row of rows) {
      if (typeof row.APIKey !== 'string' || typeof row.APISecret !== 'string') {
        // Skip rather than throw — a corrupted row should not poison the
        // whole batch for the operator. Log so the integrity bug is visible.
        logger.warn('credentials_read_skip_invalid_row', {
          event: 'credentials_read_skip_invalid_row',
          accountId: row.id,
        });
        continue;
      }
      const dto = new AlpacaAccountCredentialsDTO();
      dto.id = row.id;
      dto.type = row.type;
      dto.configuration = row.configuration ?? null;
      dto.APIKey = row.APIKey;
      dto.APISecret = row.APISecret;
      dto.userId = row.userId;
      dto.createdAt = row.createdAt;
      dto.updatedAt = row.updatedAt;
      dtos.push(dto);
    }
    logger.info('credentials_read', {
      event: 'credentials_read',
      operation: 'serverGetAllAlpacaAccountCredentials',
      scope: userId ?? 'all_users',
      count: dtos.length,
      principal: ctx.user?.sub ?? 'unknown',
    });
    return dtos;
  }
}
