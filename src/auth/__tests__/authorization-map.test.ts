import 'reflect-metadata';
import { describe, it, expect, vi } from 'vitest';
import { Prisma } from '@prisma/client';

/**
 * Pins the CORTEX-P0-001 phase-2 authorization map (audit B01-backend-legacy-03).
 *
 * The map is what makes the shadow authChecker reachable at all — if it drifts
 * from the generated resolver surface (renamed actions, removed models) the
 * checker silently goes back to being inert and its metrics become
 * false-confidence zeros (audit B01-backend-legacy-07).
 *
 * The real `src/generated/typegraphql-prisma` module cannot be imported under
 * vitest: importing it executes every TypeGraphQL decorator, which requires
 * `emitDecoratorMetadata` that esbuild does not implement. It is therefore
 * mocked with a registry built programmatically from `Prisma.ModelName` —
 * one `<Model>CrudResolver` per model exposing `deleteOne<Model>` /
 * `deleteMany<Model>` prototype methods, mirroring codegen's naming. Drift
 * against the REAL generated surface is guarded at runtime: the builder
 * validates every action against the actual resolver prototypes and any miss
 * is surfaced in `summary.skippedActions`, logged at warn on boot, and
 * reported in the server's boot log (server.ts).
 */

vi.mock('../../generated/typegraphql-prisma', async () => {
  const { Prisma: PrismaNs } = await import('@prisma/client');
  const applyResolversEnhanceMap = vi.fn();
  const mod: Record<string, unknown> = { applyResolversEnhanceMap };
  for (const model of Object.values(PrismaNs.ModelName)) {
    class FakeCrudResolver {}
    const proto = FakeCrudResolver.prototype as unknown as Record<
      string,
      unknown
    >;
    proto[`deleteOne${model}`] = function deleteOne(): void {};
    proto[`deleteMany${model}`] = function deleteMany(): void {};
    mod[`${model}CrudResolver`] = FakeCrudResolver;
  }
  return mod;
});

import {
  buildCortexAuthorizationMap,
  applyCortexAuthorizationMap,
  IR_MODELS,
} from '../authorization-map';
import * as generatedIndex from '../../generated/typegraphql-prisma';

describe('buildCortexAuthorizationMap', () => {
  it('gives all five IR models full (_all) coverage', () => {
    const { map, summary } = buildCortexAuthorizationMap();

    expect(IR_MODELS).toHaveLength(5);
    expect(summary.fullCoverageModels).toBe(5);
    for (const model of IR_MODELS) {
      const config = map[model];
      expect(config, `missing map entry for IR model ${model}`).toBeDefined();
      expect(config?._all).toBeDefined();
      expect(config?._all).toHaveLength(1);
    }
  });

  it('covers the delete mutations of every non-IR Prisma model, with zero convention drift', () => {
    const { summary } = buildCortexAuthorizationMap();
    const nonIrModelCount =
      Object.values(Prisma.ModelName).length - IR_MODELS.length;

    // skippedActions is the drift guard: a non-empty list means a
    // deleteOne<Model>/deleteMany<Model> action does not exist on the CRUD
    // resolver and coverage silently shrank.
    expect(summary.skippedActions).toEqual([]);
    expect(summary.deleteCoverageModels).toBe(nonIrModelCount);
    // 5 _all markers + 2 delete actions per non-IR model.
    expect(summary.decoratedActions).toBe(
      IR_MODELS.length + nonIrModelCount * 2
    );
  });

  it('spot check: User delete mutations are decorated; User reads are not', () => {
    const { map } = buildCortexAuthorizationMap();
    const userConfig = map.User as Record<string, unknown> | undefined;
    expect(userConfig).toBeDefined();
    expect(userConfig?.deleteOneUser).toBeDefined();
    expect(userConfig?.deleteManyUser).toBeDefined();
    expect(userConfig?._all).toBeUndefined();
    expect(userConfig?.findFirstUser).toBeUndefined();
  });

  it('reports (never silently drops) actions missing from the resolver surface', () => {
    const registry = generatedIndex as unknown as Record<
      string,
      { prototype: Record<string, unknown> }
    >;
    const userProto = registry.UserCrudResolver.prototype;
    const original = userProto.deleteOneUser;
    delete userProto.deleteOneUser;
    try {
      const { map, summary } = buildCortexAuthorizationMap();
      expect(summary.skippedActions).toContain('deleteOneUser');
      // The surviving action is still covered.
      const userConfig = map.User as Record<string, unknown> | undefined;
      expect(userConfig?.deleteManyUser).toBeDefined();
      expect(userConfig?.deleteOneUser).toBeUndefined();
    } finally {
      userProto.deleteOneUser = original;
    }
  });
});

describe('applyCortexAuthorizationMap', () => {
  it('applies exactly once and is idempotent — repeat calls return the cached summary without re-decorating', () => {
    const applySpy = vi.mocked(generatedIndex.applyResolversEnhanceMap);
    applySpy.mockClear();

    const first = applyCortexAuthorizationMap();
    expect(first.decoratedActions).toBeGreaterThan(0);
    expect(first.skippedActions).toEqual([]);
    expect(applySpy).toHaveBeenCalledTimes(1);

    const second = applyCortexAuthorizationMap();
    // Reference equality + no second apply: duplicate Authorized metadata on
    // the same fields would double-register in TypeGraphQL's storage.
    expect(second).toBe(first);
    expect(applySpy).toHaveBeenCalledTimes(1);
  });
});
