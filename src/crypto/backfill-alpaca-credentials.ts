/**
 * One-shot backfill: populate AlpacaAccount.encAPIKey / encAPISecret /
 * encDataKey / kmsKeyArn / credFingerprint from the existing plaintext
 * APIKey / APISecret columns.
 *
 * Part B of the AlpacaAccount credential retro-fix (see migration
 * 20260415130000_encrypt_alpaca_credentials). Run after the migration has
 * been applied in the target environment:
 *
 *   npm run backfill:alpaca-credentials            # dry-run by default
 *   npm run backfill:alpaca-credentials -- --apply
 *
 * Safety properties:
 *   - Idempotent: rows already carrying encAPIKey are skipped.
 *   - AAD: bound to (userId, broker=ALPACA, env=type). Cross-tuple replay
 *     (swapping a row from user A to user B) fails both KMS and AES-GCM
 *     verification.
 *   - Bounded: fetches in pages of 100, sleeps 50ms between pages to avoid
 *     a KMS generateDataKey burst on large AlpacaAccount tables.
 *   - Audited: emits a structured log line per row (success/skip/fail).
 */

import prisma from '../prismaClient.js';
import { logger } from '../utils/logger.js';
import { createKmsClientFromEnv } from './kms-client.js';
import { EnvelopeEncryption } from './envelope-encryption.js';

const PAGE_SIZE = 100;
const PAGE_DELAY_MS = 50;

export interface BackfillStats {
  scanned: number;
  skipped: number;
  encrypted: number;
  failed: number;
}

function toU8(buf: Buffer): Uint8Array<ArrayBuffer> {
  const ab = new ArrayBuffer(buf.byteLength);
  const view = new Uint8Array(ab);
  view.set(buf);
  return view;
}

async function sleep(ms: number): Promise<void> {
  await new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function runBackfill(opts: { apply: boolean }): Promise<BackfillStats> {
  const stats: BackfillStats = {
    scanned: 0,
    skipped: 0,
    encrypted: 0,
    failed: 0,
  };

  const kms = createKmsClientFromEnv();
  const envelope = new EnvelopeEncryption(kms);

  logger.info('alpaca credential backfill starting', {
    apply: opts.apply,
    pageSize: PAGE_SIZE,
  });

  type Row = {
    id: string;
    userId: string;
    type: string;
    APIKey: string;
    APISecret: string;
    encAPIKey: Uint8Array | null;
  };

  let cursor: string | null = null;
  for (;;) {
    const rows: Row[] = await prisma.alpacaAccount.findMany({
      where: {
        ...(cursor ? { id: { gt: cursor } } : {}),
        deletedAt: null,
      },
      select: {
        id: true,
        userId: true,
        type: true,
        APIKey: true,
        APISecret: true,
        encAPIKey: true,
      },
      orderBy: { id: 'asc' },
      take: PAGE_SIZE,
    });
    if (rows.length === 0) break;
    cursor = rows[rows.length - 1].id;

    for (const row of rows) {
      stats.scanned += 1;
      if (row.encAPIKey != null) {
        stats.skipped += 1;
        continue;
      }
      if (!row.APIKey || !row.APISecret) {
        logger.warn('alpaca backfill: row missing plaintext credentials', {
          id: row.id,
        });
        stats.skipped += 1;
        continue;
      }
      if (!opts.apply) {
        logger.info('alpaca backfill (DRY RUN): would encrypt row', {
          id: row.id,
          type: row.type,
        });
        stats.encrypted += 1;
        continue;
      }
      try {
        const bundle = await envelope.encryptBundle(
          { apiKey: row.APIKey, apiSecret: row.APISecret, passphrase: null },
          { userId: row.userId, broker: 'ALPACA', env: row.type }
        );
        await prisma.alpacaAccount.update({
          where: { id: row.id },
          data: {
            encAPIKey: toU8(bundle.encApiKey),
            encAPISecret: toU8(bundle.encApiSecret),
            encDataKey: toU8(bundle.encDataKey),
            kmsKeyArn: bundle.kmsKeyArn,
            credFingerprint: bundle.credFingerprint,
          },
        });
        stats.encrypted += 1;
      } catch (err) {
        stats.failed += 1;
        logger.error('alpaca backfill: failed to encrypt row', {
          id: row.id,
          error: err instanceof Error ? err.message : String(err),
        });
      }
    }

    await sleep(PAGE_DELAY_MS);
  }

  logger.info('alpaca credential backfill complete', {
    scanned: stats.scanned,
    skipped: stats.skipped,
    encrypted: stats.encrypted,
    failed: stats.failed,
  });
  return stats;
}

if (require.main === module) {
  const apply = process.argv.includes('--apply') || process.env.APPLY === 'true';
  runBackfill({ apply })
    .then((stats) => {
      logger.info('backfill finished', {
        scanned: stats.scanned,
        skipped: stats.skipped,
        encrypted: stats.encrypted,
        failed: stats.failed,
      });
      process.exit(0);
    })
    .catch((err) => {
      logger.error('backfill failed', {
        error: err instanceof Error ? err.message : String(err),
      });
      process.exit(1);
    });
}
