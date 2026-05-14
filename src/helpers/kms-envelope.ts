import { randomBytes, createCipheriv, createDecipheriv } from 'node:crypto';
import { kmsWrap, kmsUnwrap } from './kms-envelope.kms-adapter';

/**
 * Envelope-encrypted secret at rest. Stored as a JSON value inside
 * `Organization.llmDefaults.apiKeys.<provider>` and
 * `Fund.llmOverrides.apiKeys.<provider>` per charter §2.4 F6 and
 * spec §4.3.
 *
 * Algorithm: AES-256-GCM with per-record IV. The DEK is generated
 * per-record and wrapped by a KMS-managed CMK identified by `keyId`.
 */
export interface EncryptedApiKey {
  /** base64-encoded AES-GCM ciphertext */
  ciphertext: string;
  /** base64-encoded 12-byte IV */
  iv: string;
  /** base64-encoded 16-byte GCM auth tag */
  authTag: string;
  /** KMS key id used to wrap the DEK */
  keyId: string;
  /** base64-encoded KMS-wrapped DEK */
  wrappedDek: string;
  /** Locked to AES-256-GCM for now; future schemas extend this union. */
  algorithm: 'AES-256-GCM';
  /** ISO-8601 timestamp of when this envelope was created. */
  createdAt: string;
}

const requireKeyId = (): string => {
  const k = process.env.KMS_KEY_ID;
  if (!k) {
    throw new Error('KMS_KEY_ID env var is required for kms-envelope');
  }
  return k;
};

/**
 * Encrypts plaintext under a fresh per-record DEK wrapped by the
 * configured KMS CMK. Returns the on-disk envelope shape.
 */
export const encryptApiKey = async (
  plaintext: string
): Promise<EncryptedApiKey> => {
  const keyId = requireKeyId();
  const dek = randomBytes(32); // 256-bit DEK
  const iv = randomBytes(12); // 96-bit IV for GCM
  const cipher = createCipheriv('aes-256-gcm', dek, iv);
  const ct = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();
  const wrapped = await kmsWrap(dek, keyId);
  return {
    ciphertext: ct.toString('base64'),
    iv: iv.toString('base64'),
    authTag: authTag.toString('base64'),
    keyId,
    wrappedDek: wrapped.toString('base64'),
    algorithm: 'AES-256-GCM',
    createdAt: new Date().toISOString(),
  };
};

/**
 * Decrypts an EncryptedApiKey envelope. Throws on tampering,
 * unsupported algorithm, or KMS unwrap failure.
 */
export const decryptApiKey = async (env: EncryptedApiKey): Promise<string> => {
  if (env.algorithm !== 'AES-256-GCM') {
    throw new Error(`Unsupported algorithm: ${env.algorithm}`);
  }
  const dek = await kmsUnwrap(Buffer.from(env.wrappedDek, 'base64'), env.keyId);
  const iv = Buffer.from(env.iv, 'base64');
  const authTag = Buffer.from(env.authTag, 'base64');
  const ct = Buffer.from(env.ciphertext, 'base64');
  const decipher = createDecipheriv('aes-256-gcm', dek, iv);
  decipher.setAuthTag(authTag);
  return Buffer.concat([decipher.update(ct), decipher.final()]).toString(
    'utf8'
  );
};
