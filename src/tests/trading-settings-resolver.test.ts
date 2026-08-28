import 'reflect-metadata';
import { describe, it, expect, vi } from 'vitest';
import { buildSchema } from 'type-graphql';
import {
  TradingSettingsResolver,
  TradingSettingsInput,
} from '../resolvers/custom/TradingSettingsResolver';

/**
 * Unit tests for the org→fund trading-settings resolver. The Prisma client is
 * mocked via the GraphQL context (`getPrismaFromContext` reads `ctx.prisma`), so
 * these exercise the resolver's real merge/projection/resolution logic without a
 * database.
 */

interface MockPrisma {
  organization: {
    findUnique: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
  fund: {
    findUnique: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
  };
}

function makeCtx(prisma: MockPrisma): { prisma: MockPrisma } {
  return { prisma };
}

function makePrisma(): MockPrisma {
  return {
    organization: { findUnique: vi.fn(), update: vi.fn() },
    fund: { findUnique: vi.fn(), update: vi.fn() },
  };
}

const resolver = new TradingSettingsResolver();

describe('TradingSettingsResolver.organizationTradingDefaults', () => {
  it('returns the stored defaults projected onto the known keys (stray keys dropped)', async () => {
    const prisma = makePrisma();
    prisma.organization.findUnique.mockResolvedValue({
      tradingDefaults: { realTime: true, tradeAllocationPct: 5, bogusKey: 'x' },
    });
    // Cast: the resolver's ctx type is the server GraphQLContext; the mock
    // satisfies the only member it touches (`prisma`).
    const out = await resolver.organizationTradingDefaults(
      'org-1',
      makeCtx(prisma) as never
    );
    expect(out).toEqual({ realTime: true, tradeAllocationPct: 5 });
    expect(out).not.toHaveProperty('bogusKey');
  });

  it('returns an empty object when the org has no stored defaults', async () => {
    const prisma = makePrisma();
    prisma.organization.findUnique.mockResolvedValue({ tradingDefaults: null });
    const out = await resolver.organizationTradingDefaults(
      'org-1',
      makeCtx(prisma) as never
    );
    expect(out).toEqual({});
  });
});

describe('TradingSettingsResolver.effectiveTradingSettings', () => {
  it('resolves fund override over org default field-by-field', async () => {
    const prisma = makePrisma();
    prisma.organization.findUnique.mockResolvedValue({
      tradingDefaults: {
        realTime: false,
        tradeAllocationPct: 5,
        marketOpen: true,
      },
    });
    prisma.fund.findUnique.mockResolvedValue({
      tradingOverrides: { realTime: true, tradeAllocationPct: 8 },
    });
    const out = await resolver.effectiveTradingSettings(
      'org-1',
      makeCtx(prisma) as never,
      'fund-1'
    );
    // realTime + tradeAllocationPct come from the fund; marketOpen from the org.
    expect(out.realTime).toBe(true);
    expect(out.tradeAllocationPct).toBe(8);
    expect(out.marketOpen).toBe(true);
    // A key set by neither is null.
    expect(out.volumeThreshold ?? null).toBeNull();
  });

  it('falls back to org defaults when no fund is supplied', async () => {
    const prisma = makePrisma();
    prisma.organization.findUnique.mockResolvedValue({
      tradingDefaults: { tradeAllocationPct: 5 },
    });
    const out = await resolver.effectiveTradingSettings(
      'org-1',
      makeCtx(prisma) as never
    );
    expect(out.tradeAllocationPct).toBe(5);
    expect(prisma.fund.findUnique).not.toHaveBeenCalled();
  });
});

describe('TradingSettingsResolver.updateOrgTradingDefaults', () => {
  it('partial-merges the patch onto existing defaults (untouched keys preserved)', async () => {
    const prisma = makePrisma();
    prisma.organization.findUnique.mockResolvedValue({
      tradingDefaults: { realTime: false, tradeAllocationPct: 5 },
    });
    prisma.organization.update.mockImplementation(
      async (args: { data: { tradingDefaults: unknown } }) => ({
        id: 'org-1',
        name: 'Org One',
        tradingDefaults: args.data.tradingDefaults,
      })
    );

    const patch: TradingSettingsInput = { tradeAllocationPct: 9 };
    const out = await resolver.updateOrgTradingDefaults(
      'org-1',
      patch,
      makeCtx(prisma) as never
    );

    // Only tradeAllocationPct changed; realTime was preserved (not clobbered).
    expect(out.id).toBe('org-1');
    expect(out.name).toBe('Org One');
    expect(out.tradingDefaults).toMatchObject({
      realTime: false,
      tradeAllocationPct: 9,
    });
    const persisted =
      prisma.organization.update.mock.calls[0]?.[0]?.data?.tradingDefaults;
    expect(persisted).toMatchObject({ realTime: false, tradeAllocationPct: 9 });
  });

  it('throws when the org does not exist rather than creating a phantom row', async () => {
    const prisma = makePrisma();
    prisma.organization.findUnique.mockResolvedValue(null);
    await expect(
      resolver.updateOrgTradingDefaults('missing', {}, makeCtx(prisma) as never)
    ).rejects.toThrow('Organization missing not found');
    expect(prisma.organization.update).not.toHaveBeenCalled();
  });
});

describe('TradingSettingsResolver.updateFundTradingOverrides', () => {
  it('partial-merges the patch onto existing overrides', async () => {
    const prisma = makePrisma();
    prisma.fund.findUnique.mockResolvedValue({
      tradingOverrides: { cryptoTradingEnabled: true },
    });
    prisma.fund.update.mockImplementation(
      async (args: { data: { tradingOverrides: unknown } }) => ({
        id: 'fund-1',
        name: 'Fund One',
        tradingOverrides: args.data.tradingOverrides,
      })
    );

    const out = await resolver.updateFundTradingOverrides(
      'fund-1',
      { portfolioTrailPercent: 3.5 },
      makeCtx(prisma) as never
    );

    expect(out.id).toBe('fund-1');
    expect(out.tradingOverrides).toMatchObject({
      cryptoTradingEnabled: true,
      portfolioTrailPercent: 3.5,
    });
  });
});

describe('TradingSettingsResolver schema construction', () => {
  it('builds a valid GraphQL schema exposing the four root fields + custom types', async () => {
    // buildSchema succeeding is itself the load-bearing assertion (an invalid
    // TypeGraphQL type graph throws here). Introspect via the schema object
    // rather than printSchema to avoid the type-graphql/graphql cross-realm
    // clash in the test runner.
    const schema = await buildSchema({
      resolvers: [TradingSettingsResolver],
      validate: false,
    });

    const queryFields = schema.getQueryType()?.getFields() ?? {};
    expect(queryFields).toHaveProperty('organizationTradingDefaults');
    expect(queryFields).toHaveProperty('effectiveTradingSettings');

    const mutationFields = schema.getMutationType()?.getFields() ?? {};
    expect(mutationFields).toHaveProperty('updateOrgTradingDefaults');
    expect(mutationFields).toHaveProperty('updateFundTradingOverrides');

    expect(schema.getType('TradingSettings')).toBeDefined();
    expect(schema.getType('TradingSettingsInput')).toBeDefined();
    expect(schema.getType('OrgTradingDefaultsPayload')).toBeDefined();
    expect(schema.getType('FundTradingOverridesPayload')).toBeDefined();
  });
});
