/**
 * Broker credential encryption module.
 *
 * Entry point for `src/` code that needs to store or fetch broker credentials.
 * Downstream packages MUST NOT import from the sub-files directly — import
 * `CredentialService`, `createCredentialService`, or `Credentials` from here.
 */

export { KmsClient, createKmsClientFromEnv } from './kms-client.js';
export type { KmsClientConfig, GeneratedDataKey } from './kms-client.js';
export {
  EnvelopeEncryption,
  Credentials,
  type CredentialAad,
  type EncryptedBundle,
  type EncryptedField,
} from './envelope-encryption.js';
export {
  CredentialService,
  type StoreCredentialsInput,
  type FetchCredentialsInput,
  type CredentialServiceConfig,
} from './credential-service.js';

import type { PrismaClient } from '@prisma/client';
import { createKmsClientFromEnv } from './kms-client.js';
import { EnvelopeEncryption } from './envelope-encryption.js';
import { CredentialService } from './credential-service.js';

/**
 * Factory: build a `CredentialService` wired to the environment's KMS config
 * and a caller-provided Prisma client. Intended to be called once at server
 * bootstrap and injected into resolvers.
 */
export function createCredentialService(prisma: PrismaClient): CredentialService {
  const kms = createKmsClientFromEnv();
  const envelope = new EnvelopeEncryption(kms);
  return new CredentialService({ envelope, prisma });
}
