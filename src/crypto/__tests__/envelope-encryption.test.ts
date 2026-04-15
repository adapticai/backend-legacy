/**
 * Envelope encryption tests.
 *
 * Uses an in-memory fake KMS client to avoid AWS network calls. Covers:
 *   - Round-trip: encryptBundle → decryptBundle returns exact plaintext.
 *   - AAD tampering: decrypting with a wrong (userId, broker, env) fails.
 *   - Ciphertext tampering: a mutated nonce / authTag / ciphertext fails GCM verification.
 *   - Data-key cache: second decrypt for same encDK skips the KMS round-trip.
 *   - dispose(): accessing a disposed Credentials throws.
 *   - Fingerprint: stable across encryptions, differs across inputs.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { randomBytes, createCipheriv } from 'node:crypto';
import { EnvelopeEncryption, type CredentialAad, Credentials } from '../envelope-encryption.js';
import type { KmsClient, GeneratedDataKey } from '../kms-client.js';

/**
 * In-memory fake KMS. Wraps the data key by just flipping the buffer bytes
 * (reversible) — not cryptographic, but exercises the same code paths.
 */
class FakeKmsClient implements Pick<KmsClient, 'generateDataKey' | 'decryptDataKey' | 'keyArn'> {
  readonly keyArn = 'arn:aws:kms:us-east-1:000000000000:key/fake';
  generateDataKeyCount = 0;
  decryptDataKeyCount = 0;
  lastEncryptionContext: Record<string, string> | null = null;

  async generateDataKey(encryptionContext: Record<string, string>): Promise<GeneratedDataKey> {
    this.generateDataKeyCount++;
    this.lastEncryptionContext = encryptionContext;
    const plaintext = randomBytes(32);
    // "wrap" by reversing bytes + appending context marker
    const ciphertext = Buffer.concat([
      Buffer.from(plaintext).reverse(),
      Buffer.from(JSON.stringify(encryptionContext), 'utf8'),
    ]);
    return { plaintext, ciphertext, keyArn: this.keyArn };
  }

  async decryptDataKey(ciphertext: Buffer, encryptionContext: Record<string, string>): Promise<Buffer> {
    this.decryptDataKeyCount++;
    // extract the plaintext prefix + verify the context suffix matches
    const wantSuffix = Buffer.from(JSON.stringify(encryptionContext), 'utf8');
    if (ciphertext.length < 32 + wantSuffix.length) {
      throw new Error('FakeKms: ciphertext too short');
    }
    const suffix = ciphertext.subarray(32);
    if (!suffix.equals(wantSuffix)) {
      throw new Error('InvalidCiphertextException: encryption context mismatch');
    }
    const reversedDk = ciphertext.subarray(0, 32);
    return Buffer.from(reversedDk).reverse();
  }
}

const baseAad: CredentialAad = {
  userId: '00000000-0000-0000-0000-000000000001',
  broker: 'BINANCE',
  env: 'PAPER',
};

const plain = {
  apiKey: 'bn-api-key-abcdefghijklmnopqrstuv',
  apiSecret: 'bn-api-secret-ZZYYXXWWVV9988776655443322',
  passphrase: null as string | null,
};

describe('EnvelopeEncryption', () => {
  let kms: FakeKmsClient;
  let env: EnvelopeEncryption;

  beforeEach(() => {
    kms = new FakeKmsClient();
    env = new EnvelopeEncryption(kms as unknown as KmsClient);
  });

  it('round-trips a credential bundle without passphrase', async () => {
    const bundle = await env.encryptBundle(plain, baseAad);
    expect(bundle.encApiKey.length).toBeGreaterThan(12 + 16);
    expect(bundle.encApiSecret.length).toBeGreaterThan(12 + 16);
    expect(bundle.encPassphrase).toBeNull();
    expect(bundle.credFingerprint).toMatch(/^[0-9a-f]{64}$/);
    expect(bundle.kmsKeyArn).toBe(kms.keyArn);

    const creds = await env.decryptBundle(
      {
        encApiKey: bundle.encApiKey,
        encApiSecret: bundle.encApiSecret,
        encPassphrase: null,
        encDataKey: bundle.encDataKey,
      },
      baseAad
    );
    try {
      expect(creds.apiKey).toBe(plain.apiKey);
      expect(creds.apiSecret).toBe(plain.apiSecret);
      expect(creds.passphrase).toBeNull();
    } finally {
      creds.dispose();
    }
  });

  it('round-trips with a passphrase (OKX-style)', async () => {
    const okxPlain = { ...plain, passphrase: 'okx-passphrase-SecurePass$!' };
    const okxAad: CredentialAad = { ...baseAad, broker: 'OKX' };
    const bundle = await env.encryptBundle(okxPlain, okxAad);
    expect(bundle.encPassphrase).not.toBeNull();

    const creds = await env.decryptBundle(
      {
        encApiKey: bundle.encApiKey,
        encApiSecret: bundle.encApiSecret,
        encPassphrase: bundle.encPassphrase,
        encDataKey: bundle.encDataKey,
      },
      okxAad
    );
    try {
      expect(creds.apiKey).toBe(okxPlain.apiKey);
      expect(creds.apiSecret).toBe(okxPlain.apiSecret);
      expect(creds.passphrase).toBe(okxPlain.passphrase);
    } finally {
      creds.dispose();
    }
  });

  it('rejects decryption with a different userId AAD', async () => {
    const bundle = await env.encryptBundle(plain, baseAad);
    const wrongAad: CredentialAad = { ...baseAad, userId: '00000000-0000-0000-0000-000000000002' };
    await expect(
      env.decryptBundle(
        {
          encApiKey: bundle.encApiKey,
          encApiSecret: bundle.encApiSecret,
          encPassphrase: null,
          encDataKey: bundle.encDataKey,
        },
        wrongAad
      )
    ).rejects.toThrow(/encryption context mismatch|Unsupported state|decryption/i);
  });

  it('rejects decryption with a different broker AAD', async () => {
    const bundle = await env.encryptBundle(plain, baseAad);
    const wrongAad: CredentialAad = { ...baseAad, broker: 'OKX' };
    await expect(
      env.decryptBundle(
        {
          encApiKey: bundle.encApiKey,
          encApiSecret: bundle.encApiSecret,
          encPassphrase: null,
          encDataKey: bundle.encDataKey,
        },
        wrongAad
      )
    ).rejects.toThrow(/encryption context mismatch|Unsupported state|decryption/i);
  });

  it('rejects decryption when ciphertext is tampered', async () => {
    const bundle = await env.encryptBundle(plain, baseAad);
    const tampered = Buffer.from(bundle.encApiKey);
    tampered[tampered.length - 1] ^= 0x01; // flip one bit of ciphertext

    await expect(
      env.decryptBundle(
        {
          encApiKey: tampered,
          encApiSecret: bundle.encApiSecret,
          encPassphrase: null,
          encDataKey: bundle.encDataKey,
        },
        baseAad
      )
    ).rejects.toThrow(/Unsupported state|decrypt|auth/i);
  });

  it('caches data keys so repeated decrypts skip KMS', async () => {
    const bundle = await env.encryptBundle(plain, baseAad);
    expect(kms.generateDataKeyCount).toBe(1);
    expect(kms.decryptDataKeyCount).toBe(0);

    const c1 = await env.decryptBundle(
      {
        encApiKey: bundle.encApiKey,
        encApiSecret: bundle.encApiSecret,
        encPassphrase: null,
        encDataKey: bundle.encDataKey,
      },
      baseAad
    );
    c1.dispose();
    expect(kms.decryptDataKeyCount).toBe(1);

    const c2 = await env.decryptBundle(
      {
        encApiKey: bundle.encApiKey,
        encApiSecret: bundle.encApiSecret,
        encPassphrase: null,
        encDataKey: bundle.encDataKey,
      },
      baseAad
    );
    c2.dispose();
    // Second call should hit cache (no additional KMS round-trip)
    expect(kms.decryptDataKeyCount).toBe(1);

    env.clearCache();
    const c3 = await env.decryptBundle(
      {
        encApiKey: bundle.encApiKey,
        encApiSecret: bundle.encApiSecret,
        encPassphrase: null,
        encDataKey: bundle.encDataKey,
      },
      baseAad
    );
    c3.dispose();
    expect(kms.decryptDataKeyCount).toBe(2);
  });

  it('passes userId/broker/env as KMS encryption context', async () => {
    await env.encryptBundle(plain, baseAad);
    expect(kms.lastEncryptionContext).toEqual({
      userId: baseAad.userId,
      broker: baseAad.broker,
      env: baseAad.env,
    });
  });

  it('produces stable credFingerprint for the same apiKey', async () => {
    const a = await env.encryptBundle(plain, baseAad);
    const b = await env.encryptBundle(plain, baseAad);
    expect(a.credFingerprint).toBe(b.credFingerprint);
  });

  it('produces different credFingerprint for different apiKeys', async () => {
    const a = await env.encryptBundle(plain, baseAad);
    const b = await env.encryptBundle({ ...plain, apiKey: 'different-key' }, baseAad);
    expect(a.credFingerprint).not.toBe(b.credFingerprint);
  });

  it('Credentials.dispose() makes plaintext accessors throw', async () => {
    const bundle = await env.encryptBundle(plain, baseAad);
    const creds = await env.decryptBundle(
      {
        encApiKey: bundle.encApiKey,
        encApiSecret: bundle.encApiSecret,
        encPassphrase: null,
        encDataKey: bundle.encDataKey,
      },
      baseAad
    );
    creds.dispose();
    expect(() => creds.apiKey).toThrow(/disposed/);
    expect(() => creds.apiSecret).toThrow(/disposed/);
    // Double dispose is safe
    expect(() => creds.dispose()).not.toThrow();
  });

  it('each encryptBundle generates a fresh data key (rotation-on-write)', async () => {
    const a = await env.encryptBundle(plain, baseAad);
    const b = await env.encryptBundle(plain, baseAad);
    expect(a.encDataKey.equals(b.encDataKey)).toBe(false);
    expect(kms.generateDataKeyCount).toBe(2);
  });

  it('rejects a truncated encrypted field', async () => {
    const bundle = await env.encryptBundle(plain, baseAad);
    const truncated = bundle.encApiKey.subarray(0, 10); // < nonce + authTag
    await expect(
      env.decryptBundle(
        {
          encApiKey: truncated,
          encApiSecret: bundle.encApiSecret,
          encPassphrase: null,
          encDataKey: bundle.encDataKey,
        },
        baseAad
      )
    ).rejects.toThrow(/truncated|length/i);
  });

  it('rejects a ciphertext produced with a different DK (cross-account replay)', async () => {
    // Simulate attacker who copies bundle A's DK but tries to decrypt bundle B's ciphertext.
    const bundleA = await env.encryptBundle(plain, baseAad);
    const bundleB = await env.encryptBundle(
      { ...plain, apiKey: 'different-apiKey' },
      { ...baseAad, userId: '00000000-0000-0000-0000-000000000002' }
    );
    // Mix: encDataKey from A, encApiKey from B, but AAD for B — GCM should fail.
    await expect(
      env.decryptBundle(
        {
          encApiKey: bundleB.encApiKey,
          encApiSecret: bundleB.encApiSecret,
          encPassphrase: null,
          encDataKey: bundleA.encDataKey,
        },
        { ...baseAad, userId: '00000000-0000-0000-0000-000000000002' }
      )
    ).rejects.toThrow(/encryption context mismatch|decrypt|auth|Unsupported state/i);
  });
});

/** Tiny smoke test of Credentials class in isolation. */
describe('Credentials', () => {
  it('exposes plaintext until dispose() is called', () => {
    const c = new Credentials(Buffer.from('k', 'utf8'), Buffer.from('s', 'utf8'), null);
    expect(c.apiKey).toBe('k');
    expect(c.apiSecret).toBe('s');
    expect(c.passphrase).toBeNull();
    c.dispose();
    expect(() => c.apiKey).toThrow();
  });

  it('zeroes underlying buffers on dispose', () => {
    const k = Buffer.from('supersecret-key', 'utf8');
    const s = Buffer.from('supersecret-secret', 'utf8');
    const c = new Credentials(k, s, null);
    c.dispose();
    // After dispose, the original buffers should be zeroed in place.
    expect(k.every((b) => b === 0)).toBe(true);
    expect(s.every((b) => b === 0)).toBe(true);
  });
});

/**
 * Suppress unused-variable lint for the imported createCipheriv above
 * (kept as a reference for future contributors extending these tests).
 */
void createCipheriv;
