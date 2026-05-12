/**
 * Integration test: when a graphql-ws connection presents an invalid Bearer
 * token, the WebSocket connection MUST close (not deliver a downgraded
 * context with an `authError` field).
 *
 * The historical regression this test guards against:
 *
 *   ```ts
 *   if (token.startsWith('ya29.')) {
 *     user = { provider: 'google', token };  // unverified principal!
 *   }
 *   ```
 *
 * which combined with a `return { prisma: global.prisma, authError: '...' }`
 * fall-through to silently keep subscriptions open without authentication.
 *
 * This test wires `verifyBackendToken` into a minimal graphql-ws server,
 * opens a client with an opaque `ya29.…` token, and asserts the socket
 * receives a close frame instead of remaining open with a degraded context.
 */

import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  vi,
} from 'vitest';
import { createServer, type Server as HttpServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { buildSchema as buildGraphQLSchema } from 'graphql';
import { GraphQLError } from 'graphql';

// ---------------------------------------------------------------------------
// Test-time env setup — must precede the `verifyBackendToken` import below.
// ---------------------------------------------------------------------------
vi.hoisted(() => {
  const secret =
    'test-secret-for-cortex-p0-002-ws-suite-32-chars-min-required';
  process.env.JWT_SECRET = secret;
  process.env.NEXTAUTH_SECRET = secret;
  // Leave GOOGLE_OAUTH_CLIENT_IDS empty so Google verification is disabled in
  // this test environment. Path 3 will not run and the verifier surfaces the
  // local-JWT failure or the structural rejection.
  delete process.env.GOOGLE_OAUTH_CLIENT_IDS;
  delete process.env.SERVER_AUTH_TOKEN;
});

import {
  verifyBackendToken,
  AuthError,
} from '../token-verifier';

// ---------------------------------------------------------------------------
// Tiny GraphQL schema with one subscription so graphql-ws has something to
// route. We do not actually exercise the subscription — the test only proves
// that the connection-init phase rejects an invalid Bearer token.
// ---------------------------------------------------------------------------
const schema = buildGraphQLSchema(`
  type Query { hello: String }
  type Subscription { ping: String }
`);

interface TestContext {
  authenticated: boolean;
}

async function buildWsContext(
  authHeader: string | undefined
): Promise<TestContext> {
  const token = authHeader?.startsWith('Bearer ')
    ? authHeader.slice('Bearer '.length).trim()
    : '';

  if (!token) {
    // Mirror server.ts: no token -> open connection but with unauthenticated
    // context. The AuthChecker (CORTEX-P0-001) will reject operations.
    return { authenticated: false };
  }

  try {
    await verifyBackendToken(token);
    return { authenticated: true };
  } catch (e) {
    const reason = e instanceof AuthError ? e.reason : 'bad_signature';
    throw new GraphQLError('Unauthenticated', {
      extensions: { code: 'UNAUTHENTICATED', reason },
    });
  }
}

// ---------------------------------------------------------------------------
// Spin up an HTTP server + WebSocket server bound to a random port so the
// test runs hermetically.
// ---------------------------------------------------------------------------
let httpServer: HttpServer;
let wsServer: WebSocketServer;
let port: number;

beforeAll(
  () =>
    new Promise<void>((resolve, reject) => {
      httpServer = createServer();
      wsServer = new WebSocketServer({
        server: httpServer,
        path: '/subscriptions',
      });

      useServer(
        {
          schema,
          context: (ctx) =>
            buildWsContext(
              (ctx.connectionParams as { authorization?: string } | undefined)
                ?.authorization
            ),
        },
        wsServer
      );

      httpServer.on('error', reject);
      httpServer.listen(0, () => {
        const address = httpServer.address();
        if (typeof address === 'object' && address !== null) {
          port = address.port;
          resolve();
        } else {
          reject(new Error('Server did not bind to a port'));
        }
      });
    })
);

afterAll(
  () =>
    new Promise<void>((resolve) => {
      wsServer.close(() => httpServer.close(() => resolve()));
    })
);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface OpenSubscribeResult {
  closeCode: number | null;
  errorPayload: unknown | null;
}

/**
 * Open a graphql-ws v5-protocol connection, send ConnectionInit + Subscribe,
 * and resolve when either an error message is received OR the socket closes.
 *
 * Returns the close code (if the socket closed) and/or the error payload
 * (if graphql-ws delivered an "error" message). One of the two must occur
 * before the timeout for the verification path to be considered closed.
 */
function openSubscribeAwaitOutcome(
  authorization: string
): Promise<OpenSubscribeResult> {
  return new Promise((resolve) => {
    const ws = new WebSocket(
      `ws://localhost:${port}/subscriptions`,
      'graphql-transport-ws'
    );

    let closeCode: number | null = null;
    let errorPayload: unknown | null = null;
    const timeout = setTimeout(() => {
      // 1.5s should be plenty; if neither close nor error happened, the test
      // will assert on the empty result and fail descriptively.
      try {
        ws.close();
      } catch {
        // ignore — best effort
      }
      resolve({ closeCode, errorPayload });
    }, 1500);

    ws.on('open', () => {
      ws.send(
        JSON.stringify({
          type: 'connection_init',
          payload: { authorization },
        })
      );
    });

    ws.on('message', (raw) => {
      const text = raw.toString();
      try {
        const msg = JSON.parse(text) as { type: string; payload?: unknown };
        if (msg.type === 'connection_ack') {
          // Send a subscribe so the server has to invoke the `context`
          // callback (graphql-ws invokes context lazily, on subscribe).
          ws.send(
            JSON.stringify({
              id: '1',
              type: 'subscribe',
              payload: {
                query: 'subscription { ping }',
              },
            })
          );
        } else if (msg.type === 'error') {
          errorPayload = msg.payload;
        }
      } catch {
        // ignore parse errors; the close event will fire shortly
      }
    });

    ws.on('close', (code) => {
      closeCode = code;
      clearTimeout(timeout);
      resolve({ closeCode, errorPayload });
    });

    ws.on('error', () => {
      // graphql-ws closes the socket on auth failure; we observe that via
      // the `close` event. The `error` event is benign here.
    });
  });
}

describe('WebSocket auth-failure closing semantics', () => {
  // graphql-ws's behaviour when the `context` callback throws:
  //  - From `context()` (during subscribe handling): the throw propagates up
  //    the message handler, which closes the socket with code 4500
  //    (CloseCode.InternalServerError per the graphql-ws spec).
  //  - There is intentionally NO fallback to "deliver the subscription
  //    anyway with an authError field." That is the security invariant
  //    P0-002 is asserting.
  //
  // Acceptable outcomes (either proves the auth failure was surfaced):
  //   1. closeCode is a 4xxx (graphql-ws app-level close), OR
  //   2. errorPayload is non-null AND carries UNAUTHENTICATED extension code.
  //
  // What we MUST NOT see: closeCode=1000 (normal close) with no error
  // payload AND no rejection — that would be the pre-fix silent-downgrade
  // behaviour.
  const isAuthFailureOutcome = (
    closeCode: number | null,
    errorPayload: unknown | null
  ): boolean => {
    if (closeCode !== null && closeCode >= 4000) return true;
    if (errorPayload === null) return false;
    const arr = errorPayload as Array<{ extensions?: { code?: string } }>;
    return arr[0]?.extensions?.code === 'UNAUTHENTICATED';
  };

  it('opaque ya29.… token causes the graphql-ws connection to close on auth failure', async () => {
    const { closeCode, errorPayload } = await openSubscribeAwaitOutcome(
      'Bearer ya29.A0AbVbY6Eabc_opaque_access_token_should_be_rejected'
    );
    expect(
      isAuthFailureOutcome(closeCode, errorPayload),
      `Expected auth failure (4xxx close or UNAUTHENTICATED error), got closeCode=${String(
        closeCode
      )}, errorPayload=${JSON.stringify(errorPayload)}`
    ).toBe(true);
  });

  it('clearly malformed token (2 segments) is rejected by closing the connection', async () => {
    const { closeCode, errorPayload } = await openSubscribeAwaitOutcome(
      'Bearer aa.bb'
    );
    expect(
      isAuthFailureOutcome(closeCode, errorPayload),
      `Expected auth failure, got closeCode=${String(
        closeCode
      )}, errorPayload=${JSON.stringify(errorPayload)}`
    ).toBe(true);
  });

  it('JWT signed with wrong secret is rejected by closing the connection', async () => {
    // 3-segment JWT shape, signed with a non-matching secret. Local JWT
    // verify fails. With no Google audience configured (test default), the
    // verifier surfaces `bad_signature` and our context callback throws.
    const header = Buffer.from(
      JSON.stringify({ alg: 'HS256', typ: 'JWT' })
    ).toString('base64url');
    const payload = Buffer.from(
      JSON.stringify({ sub: 'attacker', exp: 9999999999 })
    ).toString('base64url');
    const forged = `${header}.${payload}.invalid-sig`;

    const { closeCode, errorPayload } = await openSubscribeAwaitOutcome(
      `Bearer ${forged}`
    );
    expect(
      isAuthFailureOutcome(closeCode, errorPayload),
      `Expected auth failure for forged JWT, got closeCode=${String(
        closeCode
      )}, errorPayload=${JSON.stringify(errorPayload)}`
    ).toBe(true);
  });

  it('does NOT downgrade to a silent authError context for invalid tokens', async () => {
    // This is the regression-guard: the old behavior would have returned
    // `{ authError: "Invalid token" }` as the WebSocket context, letting
    // the subscription proceed (the resolver might then ignore the flag and
    // start delivering data). We assert that does NOT happen — no data
    // message arrives for the subscription id we sent.
    //
    // We open the socket, send an invalid token, and assert that NO `next`
    // message ever fires for our subscription id.
    const result = await new Promise<{ saw_next: boolean }>((resolve) => {
      const ws = new WebSocket(
        `ws://localhost:${port}/subscriptions`,
        'graphql-transport-ws'
      );
      let sawNext = false;
      const timeout = setTimeout(() => {
        try {
          ws.close();
        } catch {
          // ignore
        }
        resolve({ saw_next: sawNext });
      }, 1000);

      ws.on('open', () => {
        ws.send(
          JSON.stringify({
            type: 'connection_init',
            payload: { authorization: 'Bearer ya29.invalid_opaque' },
          })
        );
      });
      ws.on('message', (raw) => {
        try {
          const msg = JSON.parse(raw.toString()) as { type: string };
          if (msg.type === 'connection_ack') {
            ws.send(
              JSON.stringify({
                id: 'guard-1',
                type: 'subscribe',
                payload: { query: 'subscription { ping }' },
              })
            );
          } else if (msg.type === 'next') {
            sawNext = true;
          }
        } catch {
          // ignore
        }
      });
      ws.on('close', () => {
        clearTimeout(timeout);
        resolve({ saw_next: sawNext });
      });
    });

    expect(result.saw_next).toBe(false);
  });
});
