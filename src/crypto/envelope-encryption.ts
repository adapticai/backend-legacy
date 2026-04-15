/**
 * Envelope encryption for broker credentials.
 *
 * Workflow
 * ========
 *
 * Write path (once, at credential registration or rotation):
 *   1. `KmsClient.generateDataKey(aad)` → {plaintextDK, ciphertextDK}
 *   2. For each sensitive field (apiKey, apiSecret, passphrase?):
 *        nonce ← random(12 bytes)
 *        ciphertext ← AES-256-GCM(plaintext, plaintextDK, nonce, AAD)
 *        serialized ← nonce || authTag || ciphertext
 *   3. Persist {serialized for each field, ciphertextDK, kmsKeyArn}
 *   4. Zero `plaintextDK` in memory.
 *
 * Read path (trade hot-path):
 *   1. Lookup cache by (brokerageAccountId, dataKeyEpoch).
 *      Hit  → use cached plaintextDK (sub-ms).
 *      Miss → `KmsClient.decryptDataKey(ciphertextDK, aad)` (~30-80ms).
 *   2. For each sensitive field: AES-GCM-decrypt with the DK.
 *   3. Return short-lived buffers via `Credentials.dispose()`.
 *
 * Threat model
 * ============
 * - Postgres backup leak: ciphertext only; attacker needs KMS Decrypt to
 *   read. AAD scopes to (userId, broker, env) so cross-tuple replay fails.
 * - Engine memory dump: DK cache holds plaintext DKs for ≤5 minutes; field
 *   plaintexts are zeroed after each use.
 * - Log leak: plaintext never stringified; formatters reject raw buffers.
 *
 * AAD discipline
 * ==============
 * The AAD ("additional authenticated data" / "encryption context" in KMS
 * parlance) binds ciphertexts to a specific (userId, broker, env) tuple. If
 * an attacker swaps a row from user A to user B without the KMS policy
 * allowing it, AES-GCM verification fails and KMS Decrypt also fails — two
 * independent safeguards.
 */

import { createCipheriv, createDecipheriv, randomBytes, createHash } from 'node:crypto';
import type { KmsClient, GeneratedDataKey } from './kms-client.js';

const AES_ALGORITHM = 'aes-256-gcm' as const;
const NONCE_SIZE = 12;
const AUTH_TAG_SIZE = 16;
const DK_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const DK_CACHE_MAX_ENTRIES = 500;

/** Stable AAD for a given credential storage tuple. */
export interface CredentialAad {
  readonly userId: string;
  readonly broker: string;
  readonly env: string;
}

/** Ciphertext on disk format: [nonce(12) || authTag(16) || ciphertext(...)]. */
export type EncryptedField = Buffer;

/** Result of encrypting a complete credential bundle for one (user, broker, env). */
export interface EncryptedBundle {
  readonly encApiKey: EncryptedField;
  readonly encApiSecret: EncryptedField;
  readonly encPassphrase: EncryptedField | null;
  readonly encDataKey: Buffer;
  readonly kmsKeyArn: string;
  readonly credFingerprint: string;
}

/** Short-lived plaintext credential — caller MUST call `dispose()` after use. */
export class Credentials {
  private disposed = false;
  constructor(
    private _apiKey: Buffer,
    private _apiSecret: Buffer,
    private _passphrase: Buffer | null
  ) {}

  get apiKey(): string {
    this.assertLive();
    return this._apiKey.toString('utf8');
  }
  get apiSecret(): string {
    this.assertLive();
    return this._apiSecret.toString('utf8');
  }
  get passphrase(): string | null {
    this.assertLive();
    return this._passphrase ? this._passphrase.toString('utf8') : null;
  }

  dispose(): void {
    if (this.disposed) return;
    this._apiKey.fill(0);
    this._apiSecret.fill(0);
    if (this._passphrase) this._passphrase.fill(0);
    this.disposed = true;
  }

  private assertLive(): void {
    if (this.disposed) {
      throw new Error('Credentials have been disposed and are no longer accessible');
    }
  }
}

interface DataKeyCacheEntry {
  plaintext: Buffer;
  expiresAt: number;
}

/**
 * Process-local LRU cache of plaintext data keys.
 *
 * Keyed on a SHA-256 digest of the encrypted data key (not on the
 * brokerageAccountId) so that updating an account's credentials (which
 * regenerates the DK) automatically invalidates the cache without explicit
 * eviction.
 */
class DataKeyCache {
  private readonly map = new Map<string, DataKeyCacheEntry>();

  get(encDk: Buffer): Buffer | null {
    const key = cacheKey(encDk);
    const entry = this.map.get(key);
    if (!entry) return null;
    if (entry.expiresAt <= Date.now()) {
      this.evict(key);
      return null;
    }
    // refresh LRU recency
    this.map.delete(key);
    this.map.set(key, entry);
    return entry.plaintext;
  }

  put(encDk: Buffer, plaintext: Buffer): void {
    const key = cacheKey(encDk);
    this.map.set(key, { plaintext, expiresAt: Date.now() + DK_CACHE_TTL_MS });
    while (this.map.size > DK_CACHE_MAX_ENTRIES) {
      const oldest = this.map.keys().next().value;
      if (oldest === undefined) break;
      this.evict(oldest);
    }
  }

  /** For tests: forcibly drop everything. */
  clear(): void {
    for (const key of Array.from(this.map.keys())) {
      this.evict(key);
    }
  }

  size(): number {
    return this.map.size;
  }

  private evict(key: string): void {
    const entry = this.map.get(key);
    if (entry) entry.plaintext.fill(0);
    this.map.delete(key);
  }
}

function cacheKey(encDk: Buffer): string {
  return createHash('sha256').update(encDk).digest('hex');
}

function aadToRecord(aad: CredentialAad): Record<string, string> {
  return {
    userId: aad.userId,
    broker: aad.broker,
    env: aad.env,
  };
}

function aadToBuffer(aad: CredentialAad): Buffer {
  return Buffer.from(`${aad.userId}|${aad.broker}|${aad.env}`, 'utf8');
}

function encryptField(plaintext: string, dk: Buffer, aad: CredentialAad): EncryptedField {
  const nonce = randomBytes(NONCE_SIZE);
  const cipher = createCipheriv(AES_ALGORITHM, dk, nonce);
  cipher.setAAD(aadToBuffer(aad));
  const ciphertext = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return Buffer.concat([nonce, authTag, ciphertext]);
}

function decryptField(blob: EncryptedField, dk: Buffer, aad: CredentialAad): Buffer {
  if (blob.length < NONCE_SIZE + AUTH_TAG_SIZE) {
    throw new Error('Encrypted field is truncated');
  }
  const nonce = blob.subarray(0, NONCE_SIZE);
  const authTag = blob.subarray(NONCE_SIZE, NONCE_SIZE + AUTH_TAG_SIZE);
  const ciphertext = blob.subarray(NONCE_SIZE + AUTH_TAG_SIZE);
  const decipher = createDecipheriv(AES_ALGORITHM, dk, nonce);
  decipher.setAAD(aadToBuffer(aad));
  decipher.setAuthTag(authTag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}

function fingerprint(apiKey: string): string {
  return createHash('sha256').update(apiKey, 'utf8').digest('hex');
}

/**
 * Higher-level service. Holds a KmsClient + DK cache. One instance per
 * process is sufficient.
 */
export class EnvelopeEncryption {
  private readonly cache = new DataKeyCache();

  constructor(private readonly kms: KmsClient) {}

  /**
   * Encrypt a complete credential bundle. Zeroes the plaintext data key
   * before returning; caller only ever sees ciphertext.
   */
  async encryptBundle(
    plain: { apiKey: string; apiSecret: string; passphrase?: string | null },
    aad: CredentialAad
  ): Promise<EncryptedBundle> {
    let dk: GeneratedDataKey | null = null;
    try {
      dk = await this.kms.generateDataKey(aadToRecord(aad));
      const encApiKey = encryptField(plain.apiKey, dk.plaintext, aad);
      const encApiSecret = encryptField(plain.apiSecret, dk.plaintext, aad);
      const encPassphrase =
        plain.passphrase != null && plain.passphrase.length > 0
          ? encryptField(plain.passphrase, dk.plaintext, aad)
          : null;
      return {
        encApiKey,
        encApiSecret,
        encPassphrase,
        encDataKey: dk.ciphertext,
        kmsKeyArn: dk.keyArn,
        credFingerprint: fingerprint(plain.apiKey),
      };
    } finally {
      if (dk) dk.plaintext.fill(0);
    }
  }

  /**
   * Decrypt a previously-encrypted bundle. Caches the plaintext data key so
   * subsequent decrypts for the same account/epoch avoid a KMS round-trip.
   */
  async decryptBundle(
    persisted: {
      encApiKey: EncryptedField;
      encApiSecret: EncryptedField;
      encPassphrase: EncryptedField | null;
      encDataKey: Buffer;
    },
    aad: CredentialAad
  ): Promise<Credentials> {
    let dk = this.cache.get(persisted.encDataKey);
    let dkAcquired = false;
    if (!dk) {
      dk = await this.kms.decryptDataKey(persisted.encDataKey, aadToRecord(aad));
      this.cache.put(persisted.encDataKey, dk);
      dkAcquired = true;
    }
    try {
      const apiKey = decryptField(persisted.encApiKey, dk, aad);
      const apiSecret = decryptField(persisted.encApiSecret, dk, aad);
      const passphrase = persisted.encPassphrase
        ? decryptField(persisted.encPassphrase, dk, aad)
        : null;
      return new Credentials(apiKey, apiSecret, passphrase);
    } catch (err) {
      // If we just fetched this DK and decrypt failed, don't cache a bad key.
      if (dkAcquired) this.cache.clear();
      throw err;
    }
  }

  /** For tests and admin rotation flows. */
  clearCache(): void {
    this.cache.clear();
  }

  /** For observability. */
  cacheSize(): number {
    return this.cache.size();
  }
}
