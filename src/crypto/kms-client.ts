/**
 * KMS client wrapper.
 *
 * Thin, testable surface around `@aws-sdk/client-kms` for the two operations
 * we need for broker credential encryption:
 *
 *   - `generateDataKey`  — produces a fresh 256-bit data key whose plaintext
 *                         is used to AES-GCM–encrypt the credential and whose
 *                         ciphertext (wrapped under the KMS CMK) is persisted
 *                         alongside the ciphertext.
 *   - `decryptDataKey`   — unwraps a persisted data key so the credential can
 *                         be decrypted on the trade hot-path.
 *
 * The CMK ARN is injected at construction time so tests can stub it out and
 * production can inject different ARNs per environment (paper/staging/prod).
 */

import {
  KMSClient,
  GenerateDataKeyCommand,
  DecryptCommand,
} from '@aws-sdk/client-kms';

export interface KmsClientConfig {
  /** KMS CMK ARN used to wrap data keys. */
  readonly keyArn: string;
  /** AWS region (e.g. "us-east-1"). */
  readonly region: string;
  /** Optional pre-built SDK client — set by tests for dependency injection. */
  readonly sdkClient?: KMSClient;
}

export interface GeneratedDataKey {
  /** Raw 32-byte AES key. Caller MUST zero this buffer after use. */
  readonly plaintext: Buffer;
  /** KMS-wrapped data key for persistent storage. Safe to write to DB. */
  readonly ciphertext: Buffer;
  /** ARN of the CMK used to wrap this data key. */
  readonly keyArn: string;
}

export class KmsClient {
  private readonly sdk: KMSClient;
  readonly keyArn: string;

  constructor(config: KmsClientConfig) {
    if (!config.keyArn) {
      throw new Error('KmsClient: keyArn is required');
    }
    if (!config.region) {
      throw new Error('KmsClient: region is required');
    }
    this.keyArn = config.keyArn;
    this.sdk = config.sdkClient ?? new KMSClient({ region: config.region });
  }

  /**
   * Generate a fresh 256-bit data key under the configured CMK.
   *
   * The returned `plaintext` buffer is sensitive and must be zeroed after use
   * (see `envelope-encryption.ts`). The returned `ciphertext` is safe to store
   * in the DB alongside the encrypted payload.
   */
  async generateDataKey(encryptionContext: Record<string, string>): Promise<GeneratedDataKey> {
    const response = await this.sdk.send(
      new GenerateDataKeyCommand({
        KeyId: this.keyArn,
        KeySpec: 'AES_256',
        EncryptionContext: encryptionContext,
      })
    );
    if (!response.Plaintext || !response.CiphertextBlob) {
      throw new Error('KMS GenerateDataKey returned incomplete response');
    }
    return {
      plaintext: Buffer.from(response.Plaintext),
      ciphertext: Buffer.from(response.CiphertextBlob),
      keyArn: response.KeyId ?? this.keyArn,
    };
  }

  /**
   * Unwrap a persisted data key.
   *
   * `encryptionContext` MUST match what was passed at `generateDataKey` time;
   * KMS will refuse the operation otherwise. This is one of our defence-in-
   * depth checks against ciphertext replay across (user, broker, env) tuples.
   */
  async decryptDataKey(ciphertext: Buffer, encryptionContext: Record<string, string>): Promise<Buffer> {
    const response = await this.sdk.send(
      new DecryptCommand({
        CiphertextBlob: ciphertext,
        EncryptionContext: encryptionContext,
      })
    );
    if (!response.Plaintext) {
      throw new Error('KMS Decrypt returned empty plaintext');
    }
    return Buffer.from(response.Plaintext);
  }
}

/**
 * Factory reading config from environment. Centralized so the rest of the code
 * base never reads `process.env.KMS_*` directly.
 */
export function createKmsClientFromEnv(): KmsClient {
  const keyArn = process.env.KMS_KEY_ARN;
  const region = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION;
  if (!keyArn) {
    throw new Error('createKmsClientFromEnv: KMS_KEY_ARN environment variable is required');
  }
  if (!region) {
    throw new Error('createKmsClientFromEnv: AWS_REGION environment variable is required');
  }
  return new KmsClient({ keyArn, region });
}
