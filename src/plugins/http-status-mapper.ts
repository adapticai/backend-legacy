/**
 * HTTP Status Mapper Plugin for Apollo Server 5.
 *
 * Maps well-known GraphQL error codes to their semantically-correct HTTP
 * status codes. Apollo Server 5 defaults to HTTP 500 for any error thrown
 * inside the `context` function (wrapped as ContextFunctionError) and to
 * HTTP 200 for errors thrown inside resolvers — neither default is correct
 * for an authentication failure, and the 500 default actively harms
 * consumers: Apollo Client's observable pipeline crashes on a 5xx response
 * with a GraphQL-shaped body (`Cannot read properties of undefined (reading
 * 'write')`), so the awaited `client.query(...)` Promise neither resolves
 * nor rejects. Downstream `try/catch` blocks never run, and any UI that
 * gates rendering on a `setIsLoading(false)` in `finally` is locked into a
 * permanent loading state.
 *
 * This plugin runs in `willSendResponse` and inspects every GraphQL error in
 * the final response body. If any error carries `extensions.code` in the
 * lookup table below, the response's HTTP status is upgraded accordingly.
 * Doing it here (rather than at each throw site) means we get the same
 * mapping whether the error originated in a context function, a resolver,
 * an `AuthChecker`, or a directive — and a future code path that throws
 * UNAUTHENTICATED cannot accidentally regress to a 500.
 *
 * Mapping policy:
 *   UNAUTHENTICATED → 401 (most common; the bug above)
 *   FORBIDDEN       → 403 (AuthChecker rejections per CORTEX-P0-001)
 *   BAD_USER_INPUT  → 400 (GraphQL validation already handles syntax; this
 *                          covers semantic input rejection from validators)
 *   Anything else   → unchanged (200 for in-body errors, 500 for fatal)
 */

import type {
  ApolloServerPlugin,
  GraphQLRequestContextWillSendResponse,
  GraphQLRequestListener,
} from '@apollo/server';
import type { GraphQLFormattedError } from 'graphql';

const CODE_TO_HTTP_STATUS: Record<string, number> = {
  UNAUTHENTICATED: 401,
  FORBIDDEN: 403,
  BAD_USER_INPUT: 400,
};

/**
 * Returns the highest-priority HTTP status implied by the GraphQL errors in
 * the response, or undefined if no mapping applies. Priority order: 401 over
 * 403 over 400 — auth failures trump everything else because they're the
 * primary signal a client needs to refresh its token / reauthenticate.
 */
function deriveHttpStatus(
  errors: readonly GraphQLFormattedError[]
): number | undefined {
  let best: number | undefined;
  const priority: Record<number, number> = { 401: 3, 403: 2, 400: 1 };
  for (const err of errors) {
    const code = err.extensions?.code;
    if (typeof code !== 'string') continue;
    const status = CODE_TO_HTTP_STATUS[code];
    if (!status) continue;
    if (best === undefined || (priority[status] ?? 0) > (priority[best] ?? 0)) {
      best = status;
    }
  }
  return best;
}

export function createHttpStatusMapperPlugin<
  TContext extends object = object,
>(): ApolloServerPlugin<TContext> {
  return {
    async requestDidStart(): Promise<GraphQLRequestListener<TContext>> {
      return {
        async willSendResponse(
          requestContext: GraphQLRequestContextWillSendResponse<TContext>
        ): Promise<void> {
          const { response } = requestContext;
          const { body } = response;
          // Only the `single` response kind carries a single `errors` array
          // we can inspect synchronously. Incremental delivery (`@defer` /
          // `@stream`) uses `incremental` and would require per-chunk
          // mapping; we don't use those features yet, so this is a safe
          // narrow.
          if (body.kind !== 'single') return;
          const errors = body.singleResult.errors;
          if (!errors || errors.length === 0) return;
          const status = deriveHttpStatus(errors);
          if (status === undefined) return;
          // Apollo Server only sets `http.status` for fatal errors by
          // default; assigning here overrides that. The `http` object is
          // always present on the response when reached via expressMiddleware.
          response.http.status = status;
        },
      };
    },
  };
}
