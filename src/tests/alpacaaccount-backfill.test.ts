import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {
  runBackfill,
  type BackfillContext,
  type LegacyAlpacaAccount,
} from '../../scripts/backfill-alpacaaccount-to-brokerageaccount';

interface MainState {
  orgs: Array<{ id: string; userId: string }>;
  memberships: Array<{ orgId: string; userId: string; role: string }>;
  funds: Array<{
    id: string;
    organizationId: string;
    legacyAlpacaAccountId: string;
    status: string;
  }>;
  bas: Array<{
    id: string;
    fundId: string;
    legacyAlpacaAccountId: string;
    provider: string;
  }>;
}

const makeLegacy = (
  over: Partial<LegacyAlpacaAccount> = {}
): LegacyAlpacaAccount => ({
  id: 'legacy-1',
  userId: 'u-1',
  type: 'PAPER',
  APIKey: 'pk',
  APISecret: 'sk',
  configuration: null,
  marketOpen: false,
  realTime: true,
  enablePortfolioTrailingStop: false,
  portfolioTrailPercent: 4,
  portfolioProfitThresholdPercent: 2,
  reducedPortfolioTrailPercent: 0.5,
  defaultTrailingStopPercentage100: 4,
  firstTrailReductionThreshold100: 2,
  secondTrailReductionThreshold100: 5,
  firstReducedTrailPercentage100: 1,
  secondReducedTrailPercentage100: 0.5,
  minimumPriceChangePercent100: 0.5,
  cryptoTradingEnabled: false,
  cryptoTradingPairs: [],
  tradeAllocationPct: 0.05,
  cryptoTradeAllocationPct: 0.05,
  ...over,
});

const buildContext = (
  legacyRows: LegacyAlpacaAccount[],
  options: { dryRun?: boolean } = {}
): { ctx: BackfillContext; state: MainState; checkpointPath: string } => {
  const state: MainState = {
    orgs: [],
    memberships: [],
    funds: [],
    bas: [],
  };
  let orgCounter = 0;
  let fundCounter = 0;

  const checkpointPath = path.join(
    os.tmpdir(),
    `backfill-test-${Date.now()}-${Math.random()}.json`
  );

  const ctx: BackfillContext = {
    checkpointPath,
    legacy: {
      list: async (afterId, limit) => {
        const start = afterId
          ? legacyRows.findIndex((r) => r.id === afterId) + 1
          : 0;
        return legacyRows.slice(start, start + limit);
      },
    },
    main: {
      findFundByLegacyId: async (id) => {
        const f = state.funds.find((f) => f.legacyAlpacaAccountId === id);
        return f ? { id: f.id } : null;
      },
      findOrgForUser: async (userId) => {
        const m = state.memberships.find((m) => m.userId === userId);
        return m ? { id: m.orgId } : null;
      },
      createPersonalOrgWithMembership: async (userId) => {
        const id = `org-${++orgCounter}`;
        state.orgs.push({ id, userId });
        state.memberships.push({ orgId: id, userId, role: 'OWNER' });
        return { id };
      },
      createFund: async (input) => {
        const id = `fund-${++fundCounter}`;
        state.funds.push({
          id,
          organizationId: input.organizationId,
          legacyAlpacaAccountId: input.legacyAlpacaAccountId,
          status: input.status,
        });
        return { id };
      },
      createBrokerageAccount: async (input) => {
        state.bas.push({
          id: input.id,
          fundId: input.fundId,
          legacyAlpacaAccountId: input.legacyAlpacaAccountId,
          provider: input.provider,
        });
        return { id: input.id };
      },
    },
    logger: {
      info: () => undefined,
      warn: () => undefined,
      error: () => undefined,
    },
    dryRun: options.dryRun ?? false,
  };
  return { ctx, state, checkpointPath };
};

const cleanup = async (p: string): Promise<void> => {
  try {
    await fs.unlink(p);
  } catch {
    // ignore
  }
};

describe('runBackfill', () => {
  beforeEach(() => {
    // each test creates its own checkpoint file
  });

  it('creates synthetic Org + Fund + BA for a personal legacy account', async () => {
    const { ctx, state, checkpointPath } = buildContext([makeLegacy()]);
    const r = await runBackfill(ctx);
    await cleanup(checkpointPath);
    expect(r.processed).toBe(1);
    expect(r.created).toBe(1);
    expect(r.skipped).toBe(0);
    expect(state.orgs).toHaveLength(1);
    expect(state.memberships).toHaveLength(1);
    expect(state.memberships[0]?.role).toBe('OWNER');
    expect(state.funds).toHaveLength(1);
    expect(state.funds[0]?.status).toBe('ACTIVE');
    expect(state.bas).toHaveLength(1);
    expect(state.bas[0]?.id).toBe('legacy-1'); // legacy id preserved
    expect(state.bas[0]?.provider).toBe('ALPACA');
  });

  it('reuses existing org for a user that already has one', async () => {
    const { ctx, state, checkpointPath } = buildContext([
      makeLegacy({ id: 'l-1', userId: 'u-1' }),
      makeLegacy({ id: 'l-2', userId: 'u-1' }),
    ]);
    const r = await runBackfill(ctx);
    await cleanup(checkpointPath);
    expect(r.created).toBe(2);
    expect(state.orgs).toHaveLength(1); // one org for u-1
    expect(state.memberships).toHaveLength(1);
    expect(state.funds).toHaveLength(2);
    expect(state.bas).toHaveLength(2);
  });

  it('is idempotent — even if checkpoint is lost, second run skips existing rows', async () => {
    const { ctx, state, checkpointPath } = buildContext([
      makeLegacy({ id: 'l-1', userId: 'u-1' }),
      makeLegacy({ id: 'l-2', userId: 'u-2' }),
    ]);
    const first = await runBackfill(ctx);
    expect(first.created).toBe(2);
    expect(first.skipped).toBe(0);

    // Simulate checkpoint loss (re-run from scratch). The script must
    // still detect already-created rows via findFundByLegacyId and skip
    // them — that's the strong idempotency contract.
    await cleanup(checkpointPath);
    const second = await runBackfill(ctx);
    await cleanup(checkpointPath);
    expect(second.created).toBe(0);
    expect(second.skipped).toBe(2);
    expect(state.bas).toHaveLength(2); // no duplicates
  });

  it('marks fund PAUSED when legacy.realTime is false', async () => {
    const { ctx, state, checkpointPath } = buildContext([
      makeLegacy({ realTime: false }),
    ]);
    await runBackfill(ctx);
    await cleanup(checkpointPath);
    expect(state.funds[0]?.status).toBe('PAUSED');
  });

  it('throws on AlpacaAccount with null userId', async () => {
    const { ctx, checkpointPath } = buildContext([
      makeLegacy({ id: 'bad', userId: null }),
    ]);
    await expect(runBackfill(ctx)).rejects.toThrow(/null userId/);
    await cleanup(checkpointPath);
  });

  it('dry-run writes nothing', async () => {
    const { ctx, state, checkpointPath } = buildContext(
      [makeLegacy({ id: 'l-1' }), makeLegacy({ id: 'l-2', userId: 'u-2' })],
      { dryRun: true }
    );
    const r = await runBackfill(ctx);
    await cleanup(checkpointPath);
    expect(r.processed).toBe(2);
    expect(r.created).toBe(0);
    expect(state.orgs).toHaveLength(0);
    expect(state.funds).toHaveLength(0);
    expect(state.bas).toHaveLength(0);
    // Checkpoint file should NOT exist for dry-run
    await expect(fs.stat(checkpointPath)).rejects.toThrow();
  });

  it('checkpoint persists last processed id between runs', async () => {
    const { ctx, checkpointPath } = buildContext([
      makeLegacy({ id: 'l-1', userId: 'u-1' }),
      makeLegacy({ id: 'l-2', userId: 'u-2' }),
    ]);
    await runBackfill(ctx);
    const raw = await fs.readFile(checkpointPath, 'utf8');
    const checkpoint = JSON.parse(raw) as {
      lastProcessedId: string | null;
      processedCount: number;
    };
    expect(checkpoint.lastProcessedId).toBe('l-2');
    expect(checkpoint.processedCount).toBe(2);
    await cleanup(checkpointPath);
  });
});
