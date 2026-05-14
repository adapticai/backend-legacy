/**
 * KMS adapter — wraps/unwraps the per-record Data Encryption Key (DEK).
 *
 * Unit tests mock this module to provide deterministic wrap/unwrap.
 * The runtime implementation should wire to AWS KMS via
 * `@aws-sdk/client-kms` (or GCP KMS via `@google-cloud/kms`) and
 * be replaced via a build-time alias or runtime injection.
 *
 * The default exports throw so unintended use in production surfaces
 * an obvious error rather than silently returning plaintext-as-wrapped.
 */

export const kmsWrap = async (
  _dek: Buffer,
  _keyId: string
): Promise<Buffer> => {
  throw new Error(
    'kmsWrap not wired to a real KMS provider. Mock this module in tests, ' +
      'or wire to AWS KMS via @aws-sdk/client-kms (or GCP KMS via @google-cloud/kms).'
  );
};

export const kmsUnwrap = async (
  _wrapped: Buffer,
  _keyId: string
): Promise<Buffer> => {
  throw new Error(
    'kmsUnwrap not wired to a real KMS provider. Mock this module in tests, ' +
      'or wire to AWS KMS via @aws-sdk/client-kms (or GCP KMS via @google-cloud/kms).'
  );
};
