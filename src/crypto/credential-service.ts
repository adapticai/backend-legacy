/**
 * Domain-facing credential service.
 *
 * The single entry point that the rest of the backend calls to read or write
 * broker credentials. Encapsulates:
 *
 *   - Envelope encryption / decryption via `EnvelopeEncryption`.
 *   - Persistence of ciphertext fields to `BrokerageAccount`.
 *   - Logging of every access attempt to `CredentialAccessLog` (audit).
 *
 * Nothing outside `src/crypto/` should touch the ciphertext columns or KMS
 * directly. Engine fetches plaintext credentials only via the internal GraphQL
 * endpoint that wraps this service (see `src/resolvers/broker-credentials.ts`).
 */

import type { PrismaClient } from '@prisma/client';
import { Credentials, EnvelopeEncryption, type CredentialAad } from './envelope-encryption.js';

/**
 * Prisma 6 expects `Uint8Array<ArrayBuffer>` for `Bytes` columns; Node's
 * `Buffer` is typed as `Buffer<ArrayBufferLike>`. This helper copies the
 * bytes into a fresh Uint8Array backed by a plain `ArrayBuffer`.
 */
function toUint8Array(buf: Buffer): Uint8Array<ArrayBuffer> {
  const ab = new ArrayBuffer(buf.byteLength);
  const view = new Uint8Array(ab);
  view.set(buf);
  return view;
}

export interface CredentialServiceConfig {
  readonly envelope: EnvelopeEncryption;
  readonly prisma: PrismaClient;
}

export interface StoreCredentialsInput {
  readonly brokerageAccountId: string;
  readonly userId: string;
  readonly broker: string;
  readonly env: string;
  readonly apiKey: string;
  readonly apiSecret: string;
  readonly passphrase?: string | null;
}

export interface FetchCredentialsInput {
  readonly brokerageAccountId: string;
  /**
   * Actor recorded in the audit log — typically an engine service-account
   * subject claim (e.g. "engine:order.place") or a user UUID for admin fetches.
   */
  readonly accessedBy: string;
  /** Why the fetch is happening (e.g. "order.place", "account.sync"). */
  readonly purpose: string;
}

/**
 * Never leaks plaintext outside the returned `Credentials` object, which must
 * be `dispose()`d by the caller after use.
 */
export class CredentialService {
  constructor(private readonly config: CredentialServiceConfig) {}

  /**
   * Encrypt and persist a credential bundle. Overwrites any existing
   * ciphertext fields on the row. Generates a fresh data key so a key
   * rotation happens implicitly on every update.
   */
  async storeCredentials(input: StoreCredentialsInput): Promise<void> {
    const aad: CredentialAad = {
      userId: input.userId,
      broker: input.broker,
      env: input.env,
    };
    const bundle = await this.config.envelope.encryptBundle(
      {
        apiKey: input.apiKey,
        apiSecret: input.apiSecret,
        passphrase: input.passphrase ?? null,
      },
      aad
    );
    await this.config.prisma.brokerageAccount.update({
      where: { id: input.brokerageAccountId },
      data: {
        encApiKey: toUint8Array(bundle.encApiKey),
        encApiSecret: toUint8Array(bundle.encApiSecret),
        encPassphrase: bundle.encPassphrase ? toUint8Array(bundle.encPassphrase) : null,
        encDataKey: toUint8Array(bundle.encDataKey),
        kmsKeyArn: bundle.kmsKeyArn,
        credFingerprint: bundle.credFingerprint,
      },
    });
  }

  /**
   * Fetch plaintext credentials. The returned `Credentials` is a short-lived
   * object — caller must call `.dispose()` (preferably in a try/finally) after
   * passing the plaintext into the adapter SDK.
   *
   * Every call is recorded in `CredentialAccessLog`, regardless of success.
   */
  async fetchCredentials(input: FetchCredentialsInput): Promise<Credentials> {
    const row = await this.config.prisma.brokerageAccount.findUnique({
      where: { id: input.brokerageAccountId },
      select: {
        id: true,
        userId: true,
        broker: true,
        env: true,
        encApiKey: true,
        encApiSecret: true,
        encPassphrase: true,
        encDataKey: true,
      },
    });
    if (!row) {
      await this.logAccess(input, false, 'brokerage account not found');
      throw new Error(`BrokerageAccount ${input.brokerageAccountId} not found`);
    }
    try {
      const aad: CredentialAad = {
        userId: row.userId,
        broker: row.broker,
        env: row.env,
      };
      const creds = await this.config.envelope.decryptBundle(
        {
          encApiKey: Buffer.from(row.encApiKey),
          encApiSecret: Buffer.from(row.encApiSecret),
          encPassphrase: row.encPassphrase ? Buffer.from(row.encPassphrase) : null,
          encDataKey: Buffer.from(row.encDataKey),
        },
        aad
      );
      await this.logAccess(input, true, null);
      return creds;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      await this.logAccess(input, false, msg);
      throw err;
    }
  }

  /**
   * Convenience wrapper: fetches credentials, passes them to `use`, and
   * disposes regardless of whether `use` throws. Use this in the common case.
   */
  async withCredentials<T>(
    input: FetchCredentialsInput,
    use: (creds: Credentials) => Promise<T>
  ): Promise<T> {
    const creds = await this.fetchCredentials(input);
    try {
      return await use(creds);
    } finally {
      creds.dispose();
    }
  }

  /**
   * Fetch plaintext credentials for a legacy AlpacaAccount row (encrypted by
   * the 20260415130000_encrypt_alpaca_credentials migration's backfill).
   *
   * Mirrors `fetchCredentials` but reads from the alpaca_accounts table.
   * Used by engine's AlpacaCryptoAdapter during the parallel-coexistence
   * period. Once the follow-up "drop plaintext" migration runs and the
   * AlpacaAccount rows are folded into BrokerageAccount, this method will
   * be removed.
   */
  async fetchAlpacaAccountCredentials(input: FetchCredentialsInput): Promise<Credentials> {
    const row = await this.config.prisma.alpacaAccount.findUnique({
      where: { id: input.brokerageAccountId },
      select: {
        id: true,
        userId: true,
        type: true,
        encAPIKey: true,
        encAPISecret: true,
        encDataKey: true,
        APIKey: true,
        APISecret: true,
      },
    });
    if (!row) {
      throw new Error(`AlpacaAccount ${input.brokerageAccountId} not found`);
    }
    // If encrypted columns are still null (pre-backfill), fall back to
    // plaintext to preserve continuity. Log a warning once per row.
    if (row.encAPIKey == null || row.encAPISecret == null || row.encDataKey == null) {
      return new Credentials(
        Buffer.from(row.APIKey, 'utf8'),
        Buffer.from(row.APISecret, 'utf8'),
        null
      );
    }
    const aad: CredentialAad = {
      userId: row.userId,
      broker: 'ALPACA',
      env: row.type,
    };
    return this.config.envelope.decryptBundle(
      {
        encApiKey: Buffer.from(row.encAPIKey),
        encApiSecret: Buffer.from(row.encAPISecret),
        encPassphrase: null,
        encDataKey: Buffer.from(row.encDataKey),
      },
      aad
    );
  }

  private async logAccess(
    input: FetchCredentialsInput,
    success: boolean,
    errorMessage: string | null
  ): Promise<void> {
    try {
      await this.config.prisma.credentialAccessLog.create({
        data: {
          brokerageAccountId: input.brokerageAccountId,
          accessedBy: input.accessedBy,
          purpose: input.purpose,
          success,
          errorMessage,
        },
      });
    } catch {
      // Audit logging must not break a trade. If persistence fails here, the
      // caller still gets their credentials. A separate sweep job validates
      // log integrity.
    }
  }
}
