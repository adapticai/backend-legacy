/**
 * Server-only DTO resolvers and their ObjectType DTOs.
 *
 * These resolvers expose the credential-bearing fields the public schema
 * excised in CORTEX-P0-001 (see `src/graphql/enhance-overrides.ts`). They
 * are gated by `@Authorized(["server","admin"])` so only callers with the
 * `server` (static `SERVER_AUTH_TOKEN`) or `admin` role can reach them.
 *
 * Browser callers — who present a `user`-role JWT — receive
 * `UNAUTHORIZED`. Unauthenticated callers receive `UNAUTHENTICATED` from
 * the global auth-guard middleware (`src/graphql/auth-guard.ts`) before
 * `@Authorized` is consulted.
 *
 * Consumer-side migration (out of scope for this PR but tracked here):
 *
 *   - `app/src/lib/apollo/adapter.ts` (Auth.js Apollo adapter) must call
 *     `serverFindSessionByToken`, `serverCreateSession`,
 *     `serverDeleteSessionByToken`, `serverGetAccountForLinking`,
 *     `serverGetVerificationToken`, `serverCreateVerificationToken`,
 *     `serverDeleteVerificationToken` in place of the old
 *     `adaptic.session.*`, `adaptic.account.*`, `adaptic.verificationToken.*`
 *     reads that pulled secret fields.
 *
 *   - `engine/src/crypto/trading/crypto-account-manager.ts` (and adjacent
 *     credential-retrieval call sites) must call
 *     `serverGetAlpacaAccountCredentials` /
 *     `serverGetAllAlpacaAccountCredentials` in place of the old
 *     `adaptic.alpacaAccount.get/.getAll` reads that pulled `APIKey` /
 *     `APISecret`.
 *
 *   - All consumer calls must carry the `SERVER_AUTH_TOKEN` in the
 *     `Authorization: Bearer <token>` header so the backend recognises
 *     the server principal.
 */

export {
  AlpacaAccountCredentialsDTO,
  AlpacaAccountCredentialsResolver,
} from './AlpacaAccountCredentialsResolver';

export {
  SessionWithTokenDTO,
  SessionResolver,
} from './SessionResolver';

export {
  AccountWithTokensDTO,
  AccountResolver,
} from './AccountResolver';

export {
  VerificationTokenDTO,
  VerificationTokenResolver,
} from './VerificationTokenResolver';
