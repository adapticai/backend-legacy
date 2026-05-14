/**
 * Standalone idempotent backfill — legacy AlpacaAccount rows → synthetic
 * Organization / OrgMembership / Fund / BrokerageAccount triples on `main`.
 *
 * Per charter §2.3 and spec §4.9, this script is invoked OUTSIDE any
 * Prisma migration `up()` (long-running data backfills inside migrations
 * are a known anti-pattern). Run after the `prepare_brokerage_account_backfill`
 * migration is deployed and before any application reads the new entities.
 *
 * Properties:
 *   - Idempotent: re-running on a partially backfilled dataset is a no-op
 *     for already-processed rows.
 *   - Batched: processes BATCH_SIZE rows at a time.
 *   - Resumable: writes a per-batch checkpoint to .backfill-checkpoint.json
 *     (gitignored) and resumes from `lastProcessedId` on restart.
 *   - Dry-run: with `dryRun: true` writes nothing; logs what it would do.
 *   - Strict on exotic shapes: throws on `userId == null` (assumption B4
 *     from spec §14.1). Manual remediation required.
 *
 * Tests inject a fake `BackfillContext` to verify behavior without
 * touching real DBs. The CLI entrypoint (invoked when `require.main`
 * is this module) wires the real legacy and main Prisma clients —
 * intentionally guarded so unit tests don't trigger real DB work.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const CHECKPOINT_PATH = path.resolve(__dirname, '.backfill-checkpoint.json');
const BATCH_SIZE = 500;

/**
 * Shape of a legacy AlpacaAccount row as it appears in the
 * stable-release Postgres snapshot. Mirrors the relevant subset of
 * SR's `AlpacaAccount` Prisma model.
 */
export interface LegacyAlpacaAccount {
  id: string;
  userId: string | null;
  type: 'PAPER' | 'LIVE';
  APIKey: string;
  APISecret: string;
  configuration: unknown;
  marketOpen: boolean;
  realTime: boolean;
  // 14 BrokerageAccount-column fields preserved per charter §2.2
  enablePortfolioTrailingStop: boolean;
  portfolioTrailPercent: number;
  portfolioProfitThresholdPercent: number;
  reducedPortfolioTrailPercent: number;
  defaultTrailingStopPercentage100: number;
  firstTrailReductionThreshold100: number;
  secondTrailReductionThreshold100: number;
  firstReducedTrailPercentage100: number;
  secondReducedTrailPercentage100: number;
  minimumPriceChangePercent100: number;
  cryptoTradingEnabled: boolean;
  cryptoTradingPairs: string[];
  tradeAllocationPct: number;
  cryptoTradeAllocationPct: number;
}

interface Checkpoint {
  lastProcessedId: string | null;
  processedCount: number;
}

const loadCheckpoint = async (checkpointPath: string): Promise<Checkpoint> => {
  try {
    const raw = await fs.readFile(checkpointPath, 'utf8');
    return JSON.parse(raw) as Checkpoint;
  } catch {
    return { lastProcessedId: null, processedCount: 0 };
  }
};

const saveCheckpoint = async (
  checkpointPath: string,
  c: Checkpoint
): Promise<void> => {
  await fs.writeFile(checkpointPath, JSON.stringify(c, null, 2));
};

/**
 * Injectable context — tests pass fake implementations; the CLI
 * entrypoint wires real Prisma clients.
 */
export interface BackfillContext {
  legacy: {
    /**
     * Returns up to `limit` legacy AlpacaAccount rows whose id sorts
     * after `afterId` (or all rows if `afterId == null`).
     */
    list: (
      afterId: string | null,
      limit: number
    ) => Promise<LegacyAlpacaAccount[]>;
  };
  main: {
    findFundByLegacyId: (id: string) => Promise<{ id: string } | null>;
    findOrgForUser: (userId: string) => Promise<{ id: string } | null>;
    createPersonalOrgWithMembership: (
      userId: string,
      slug: string
    ) => Promise<{ id: string }>;
    createFund: (input: {
      organizationId: string;
      legacyAlpacaAccountId: string;
      name: string;
      slug: string;
      status: 'ACTIVE' | 'PAUSED';
    }) => Promise<{ id: string }>;
    createBrokerageAccount: (input: {
      id: string;
      fundId: string;
      legacyAlpacaAccountId: string;
      provider: 'ALPACA';
      legacy: LegacyAlpacaAccount;
    }) => Promise<{ id: string }>;
  };
  logger: {
    info: (m: string, ctx?: unknown) => void;
    warn: (m: string, ctx?: unknown) => void;
    error: (m: string, ctx?: unknown) => void;
  };
  dryRun: boolean;
  /** Override checkpoint path for tests. */
  checkpointPath?: string;
}

export interface BackfillResult {
  processed: number;
  skipped: number;
  created: number;
}

/**
 * Runs the backfill end-to-end against the injected context.
 *
 * @throws when a legacy row has `userId == null` (assumption B4).
 */
export const runBackfill = async (
  ctx: BackfillContext
): Promise<BackfillResult> => {
  const checkpointPath = ctx.checkpointPath ?? CHECKPOINT_PATH;
  let checkpoint = await loadCheckpoint(checkpointPath);
  let processed = 0;
  let skipped = 0;
  let created = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const batch = await ctx.legacy.list(checkpoint.lastProcessedId, BATCH_SIZE);
    if (batch.length === 0) break;

    for (const legacy of batch) {
      if (legacy.userId == null) {
        throw new Error(
          `Legacy AlpacaAccount ${legacy.id} has null userId; ` +
            `cannot backfill. Remediate manually before re-running.`
        );
      }

      const existing = await ctx.main.findFundByLegacyId(legacy.id);
      if (existing) {
        skipped++;
        processed++;
        checkpoint = {
          lastProcessedId: legacy.id,
          processedCount: processed,
        };
        continue;
      }

      if (ctx.dryRun) {
        ctx.logger.info('DRY-RUN would create', {
          legacyId: legacy.id,
          userId: legacy.userId,
        });
        processed++;
        // Advance the in-memory checkpoint so the outer loop terminates
        // (we just don't persist it to disk in dry-run mode).
        checkpoint = {
          lastProcessedId: legacy.id,
          processedCount: processed,
        };
        continue;
      }

      const org =
        (await ctx.main.findOrgForUser(legacy.userId)) ??
        (await ctx.main.createPersonalOrgWithMembership(
          legacy.userId,
          `personal-${legacy.userId.slice(0, 8)}`
        ));

      const fund = await ctx.main.createFund({
        organizationId: org.id,
        legacyAlpacaAccountId: legacy.id,
        name: `Fund-${legacy.id.slice(0, 8)}`,
        slug: legacy.id,
        status: legacy.realTime ? 'ACTIVE' : 'PAUSED',
      });

      await ctx.main.createBrokerageAccount({
        id: legacy.id, // preserve id so existing FK references resolve
        fundId: fund.id,
        legacyAlpacaAccountId: legacy.id,
        provider: 'ALPACA',
        legacy,
      });

      created++;
      processed++;
      checkpoint = {
        lastProcessedId: legacy.id,
        processedCount: processed,
      };
    }

    if (!ctx.dryRun) await saveCheckpoint(checkpointPath, checkpoint);
  }

  ctx.logger.info(
    `Backfill complete: processed=${processed} skipped=${skipped} created=${created}`
  );
  return { processed, skipped, created };
};

// CLI entrypoint is intentionally NOT wired in this module. Devops
// runs the script through a thin wrapper that imports `runBackfill`,
// constructs a real BackfillContext (Prisma clients connected to the
// SR snapshot DB + main's prod DB, pino logger, --dry-run parsing),
// and invokes `runBackfill(ctx)`. See
// docs/superpowers/runbooks/alpacaaccount-backfill.md for the wrapper
// shape. This separation keeps unit tests importable without DB risk.
