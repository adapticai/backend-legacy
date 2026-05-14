import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  encryptApiKey,
  decryptApiKey,
  type EncryptedApiKey,
} from '../helpers/kms-envelope';

const MOCK_KEY_ID = 'mock-kms-key-test';

vi.mock('../helpers/kms-envelope.kms-adapter', () => ({
  kmsWrap: async (dek: Buffer, keyId: string) =>
    Buffer.concat([Buffer.from(keyId, 'utf8'), dek]),
  kmsUnwrap: async (wrapped: Buffer, keyId: string) =>
    wrapped.subarray(Buffer.byteLength(keyId, 'utf8')),
}));

describe('kms-envelope', () => {
  beforeEach(() => {
    process.env.KMS_KEY_ID = MOCK_KEY_ID;
  });

  it('encryptApiKey produces a valid EncryptedApiKey envelope', async () => {
    const env = await encryptApiKey('sk-test-plaintext');
    expect(env.algorithm).toBe('AES-256-GCM');
    expect(env.keyId).toBe(MOCK_KEY_ID);
    expect(env.ciphertext).toMatch(/^[A-Za-z0-9+/=]+$/);
    expect(env.iv).toMatch(/^[A-Za-z0-9+/=]+$/);
    expect(env.authTag).toMatch(/^[A-Za-z0-9+/=]+$/);
    expect(env.wrappedDek).toMatch(/^[A-Za-z0-9+/=]+$/);
    expect(typeof env.createdAt).toBe('string');
    // verify createdAt is parseable as ISO-8601
    expect(new Date(env.createdAt).toISOString()).toBe(env.createdAt);
  });

  it('decryptApiKey round-trips encryptApiKey', async () => {
    const env = await encryptApiKey('sk-secret-12345');
    expect(await decryptApiKey(env)).toBe('sk-secret-12345');
  });

  it('decryptApiKey throws on tampered ciphertext', async () => {
    const env = await encryptApiKey('sk-secret');
    // Decode ciphertext, flip one byte, re-encode — guarantees mutation.
    const buf = Buffer.from(env.ciphertext, 'base64');
    buf[0] = buf[0] ^ 0xff;
    const tampered: EncryptedApiKey = {
      ...env,
      ciphertext: buf.toString('base64'),
    };
    await expect(decryptApiKey(tampered)).rejects.toThrow();
  });

  it('encryptApiKey throws if KMS_KEY_ID is unset', async () => {
    delete process.env.KMS_KEY_ID;
    await expect(encryptApiKey('x')).rejects.toThrow(/KMS_KEY_ID/);
  });

  it('decryptApiKey throws on unsupported algorithm', async () => {
    const env = await encryptApiKey('sk');
    const bad: EncryptedApiKey = {
      ...env,
      algorithm: 'AES-128-CTR' as unknown as 'AES-256-GCM',
    };
    await expect(decryptApiKey(bad)).rejects.toThrow(/Unsupported algorithm/);
  });
});
