/**
 * Tests for the /internal/broker-credentials/:id REST endpoint.
 *
 * Uses Express directly + a stub CredentialService (no KMS, no DB). Covers:
 *   - auth: missing / bogus / valid SERVER_AUTH_TOKEN
 *   - happy path: returns plaintext credentials and disposes
 *   - bad request: missing accessedBy / purpose
 *   - not found: service throws 'not found'
 *   - generic failure: service throws other error
 */

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest';
import express, { type Express } from 'express';
import bodyParser from 'body-parser';
import request from 'supertest';

import { buildInternalRouter } from '../internal-credential-router.js';
import { Credentials } from '../envelope-encryption.js';
import type { CredentialService } from '../credential-service.js';

class StubCredentialService {
  shouldThrow: 'none' | 'not-found' | 'boom' = 'none';
  lastFetch: {
    brokerageAccountId: string;
    accessedBy: string;
    purpose: string;
  } | null = null;

  async fetchCredentials(input: {
    brokerageAccountId: string;
    accessedBy: string;
    purpose: string;
  }): Promise<Credentials> {
    this.lastFetch = input;
    if (this.shouldThrow === 'not-found') {
      throw new Error(`BrokerageAccount ${input.brokerageAccountId} not found`);
    }
    if (this.shouldThrow === 'boom') {
      throw new Error('unexpected boom');
    }
    return new Credentials(
      Buffer.from('plaintext-key', 'utf8'),
      Buffer.from('plaintext-secret', 'utf8'),
      null
    );
  }

  async storeCredentials(): Promise<void> {
    throw new Error('not used in this test');
  }

  async withCredentials<T>(
    _input: { brokerageAccountId: string; accessedBy: string; purpose: string },
    _use: (creds: Credentials) => Promise<T>
  ): Promise<T> {
    throw new Error('not used in this test');
  }
}

function buildApp(service: StubCredentialService): Express {
  const app = express();
  app.use(
    '/internal',
    bodyParser.json({ limit: '16kb' }),
    buildInternalRouter({
      credentialService: service as unknown as CredentialService,
    })
  );
  return app;
}

describe('buildInternalRouter', () => {
  const originalToken = process.env.SERVER_AUTH_TOKEN;
  let service: StubCredentialService;
  let app: Express;

  beforeAll(() => {
    process.env.SERVER_AUTH_TOKEN = 'test-server-token-1234567890';
  });
  afterAll(() => {
    if (originalToken === undefined) {
      delete process.env.SERVER_AUTH_TOKEN;
    } else {
      process.env.SERVER_AUTH_TOKEN = originalToken;
    }
  });

  beforeEach(() => {
    service = new StubCredentialService();
    app = buildApp(service);
  });

  it('rejects requests without an Authorization header', async () => {
    const res = await request(app)
      .post('/internal/broker-credentials/abc')
      .send({ accessedBy: 'engine', purpose: 'order.place' });
    expect(res.status).toBe(401);
  });

  it('rejects requests with a bad bearer token', async () => {
    const res = await request(app)
      .post('/internal/broker-credentials/abc')
      .set('Authorization', 'Bearer wrong-token')
      .send({ accessedBy: 'engine', purpose: 'order.place' });
    expect(res.status).toBe(401);
  });

  it('returns plaintext credentials on a valid request', async () => {
    const res = await request(app)
      .post('/internal/broker-credentials/acct-1')
      .set('Authorization', 'Bearer test-server-token-1234567890')
      .send({ accessedBy: 'engine:order.place', purpose: 'order.place' });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      apiKey: 'plaintext-key',
      apiSecret: 'plaintext-secret',
      passphrase: null,
    });
    expect(service.lastFetch).toEqual({
      brokerageAccountId: 'acct-1',
      accessedBy: 'engine:order.place',
      purpose: 'order.place',
    });
  });

  it('returns 400 when accessedBy or purpose is missing', async () => {
    const noAccessedBy = await request(app)
      .post('/internal/broker-credentials/acct-1')
      .set('Authorization', 'Bearer test-server-token-1234567890')
      .send({ purpose: 'order.place' });
    expect(noAccessedBy.status).toBe(400);

    const noPurpose = await request(app)
      .post('/internal/broker-credentials/acct-1')
      .set('Authorization', 'Bearer test-server-token-1234567890')
      .send({ accessedBy: 'engine:x' });
    expect(noPurpose.status).toBe(400);
  });

  it('returns 404 when the service reports not found', async () => {
    service.shouldThrow = 'not-found';
    const res = await request(app)
      .post('/internal/broker-credentials/missing')
      .set('Authorization', 'Bearer test-server-token-1234567890')
      .send({ accessedBy: 'engine:x', purpose: 'p' });
    expect(res.status).toBe(404);
  });

  it('returns 500 on unexpected errors', async () => {
    service.shouldThrow = 'boom';
    const res = await request(app)
      .post('/internal/broker-credentials/acct-1')
      .set('Authorization', 'Bearer test-server-token-1234567890')
      .send({ accessedBy: 'engine:x', purpose: 'p' });
    expect(res.status).toBe(500);
  });

  it('returns 503 if SERVER_AUTH_TOKEN is not configured', async () => {
    const prev = process.env.SERVER_AUTH_TOKEN;
    delete process.env.SERVER_AUTH_TOKEN;
    const localApp = buildApp(service);
    const res = await request(localApp)
      .post('/internal/broker-credentials/acct-1')
      .set('Authorization', 'Bearer anything')
      .send({ accessedBy: 'engine:x', purpose: 'p' });
    expect(res.status).toBe(503);
    process.env.SERVER_AUTH_TOKEN = prev;
  });
});
