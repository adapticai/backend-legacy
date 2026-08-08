/**
 * CORTEX-P0-001 phase 2 — `@Authorized()` coverage for generated CRUD resolvers
 * (audit B01-backend-legacy-03).
 *
 * The `cortexAuthChecker` registered in `buildSchema` is only invoked by
 * TypeGraphQL for fields carrying an `@Authorized()` decorator; the
 * auto-generated typegraphql-prisma resolvers carry none, so the checker was
 * registered-but-inert. This module applies decorators via
 * `applyResolversEnhanceMap`, making the checker actually execute:
 *
 *   - FULL coverage (`_all`) for the five investor-relations models —
 *     regulated PII (tax documents, KYC status, LP capital ledger) that must
 *     never sit on an unauthenticated CRUD surface.
 *   - DELETE mutations (`deleteOne*` / `deleteMany*`) for every other model —
 *     the most destructive operations on the trading system-of-record.
 *
 * CRITICAL SAFETY CONTRACT — the checker itself remains SHADOW-FIRST: while
 * `CORTEX_AUTHCHECKER_ENFORCE` is OFF (default) a would-deny operation is
 * logged + counted and then ALLOWED, so engine service traffic cannot break.
 * This module only determines WHERE the checker runs, not what it does.
 * Graduation rule (audit B01-backend-legacy-07): enforce only after
 * `cortex_authchecker_evaluations_total` > 0 and the would-deny series has
 * been observed over a full trading week.
 *
 * Must be applied BEFORE `buildSchema` — decorators land in TypeGraphQL's
 * global metadata storage, which `buildSchema` reads.
 */

import { Authorized } from 'type-graphql';
import { Prisma } from '@prisma/client';
import {
  applyResolversEnhanceMap,
  type ResolversEnhanceMap,
} from '../generated/typegraphql-prisma';
import * as generatedIndex from '../generated/typegraphql-prisma';
import { logger } from '../utils/logger';

/** Model names accepted by the generated {@link ResolversEnhanceMap}. */
type EnhanceModelName = keyof ResolversEnhanceMap;

/**
 * The five investor-relations models receiving FULL (`_all`) coverage:
 * every generated query and mutation on these models invokes the authChecker.
 */
export const IR_MODELS: readonly EnhanceModelName[] = [
  'Investor',
  'Holding',
  'InvestorTransaction',
  'InvestorDocument',
  'TaxDocument',
];

/** Summary of the coverage applied, for the boot log and tests. */
export interface AuthorizationMapSummary {
  /** Models decorated with `_all` (full CRUD coverage). */
  readonly fullCoverageModels: number;
  /** Models whose delete mutations were decorated. */
  readonly deleteCoverageModels: number;
  /** Total decorated resolver actions (delete actions + `_all` markers). */
  readonly decoratedActions: number;
  /**
   * Delete-action names skipped because the generated CRUD resolver does not
   * expose them — non-empty output means the naming convention drifted and the
   * map must be updated. Never silently ignored: logged at warn on apply.
   */
  readonly skippedActions: readonly string[];
}

/**
 * Looks up the generated `<Model>CrudResolver` class for a model, so delete
 * action names can be validated against the real resolver surface instead of
 * being assumed by convention.
 */
function crudResolverPrototype(
  model: string
): Record<string, unknown> | undefined {
  const resolverClass = (generatedIndex as Record<string, unknown>)[
    `${model}CrudResolver`
  ];
  if (typeof resolverClass !== 'function') {
    return undefined;
  }
  return resolverClass.prototype as Record<string, unknown>;
}

/** Internal build output: the map plus its audit summary. */
interface BuiltAuthorizationMap {
  readonly map: ResolversEnhanceMap;
  readonly summary: AuthorizationMapSummary;
}

/**
 * Builds the CORTEX authorization enhance-map. Pure (no metadata mutation) so
 * tests can pin its contents without touching TypeGraphQL global state.
 *
 * @returns The enhance map and a summary of the coverage it encodes.
 */
export function buildCortexAuthorizationMap(): BuiltAuthorizationMap {
  const map: ResolversEnhanceMap = {};
  const skippedActions: string[] = [];
  let decoratedActions = 0;
  let deleteCoverageModels = 0;

  for (const model of IR_MODELS) {
    map[model] = { _all: [Authorized()] };
    decoratedActions += 1;
  }

  const irModelSet = new Set<string>(IR_MODELS);
  for (const model of Object.values(Prisma.ModelName)) {
    // IR models already have full coverage; decorating deletes again would
    // register duplicate Authorized metadata on the same fields.
    if (irModelSet.has(model)) {
      continue;
    }
    const prototype = crudResolverPrototype(model);
    const actionsConfig: Record<string, MethodDecorator[]> = {};
    let coveredForModel = 0;
    for (const action of [`deleteOne${model}`, `deleteMany${model}`]) {
      if (prototype && typeof prototype[action] === 'function') {
        actionsConfig[action] = [Authorized()];
        coveredForModel += 1;
      } else {
        skippedActions.push(action);
      }
    }
    if (coveredForModel > 0) {
      map[model as EnhanceModelName] =
        actionsConfig as ResolversEnhanceMap[EnhanceModelName];
      decoratedActions += coveredForModel;
      deleteCoverageModels += 1;
    }
  }

  return {
    map,
    summary: {
      fullCoverageModels: IR_MODELS.length,
      deleteCoverageModels,
      decoratedActions,
      skippedActions,
    },
  };
}

let appliedSummary: AuthorizationMapSummary | undefined;

/**
 * Applies the CORTEX authorization map to the generated resolvers. Idempotent:
 * decorators land in TypeGraphQL's global metadata storage, so applying twice
 * would duplicate `Authorized` metadata — subsequent calls return the cached
 * summary without re-applying.
 *
 * Call BEFORE `buildSchema`. The registered `cortexAuthChecker` stays
 * SHADOW-FIRST (log + count + allow) until `CORTEX_AUTHCHECKER_ENFORCE` is
 * explicitly flipped on.
 *
 * @returns The {@link AuthorizationMapSummary} for the boot log.
 */
export function applyCortexAuthorizationMap(): AuthorizationMapSummary {
  if (appliedSummary) {
    return appliedSummary;
  }
  const { map, summary } = buildCortexAuthorizationMap();
  applyResolversEnhanceMap(map);
  if (summary.skippedActions.length > 0) {
    logger.warn(
      '[cortex-authz] delete actions missing from generated resolvers — authorization map drifted from codegen',
      { skippedActions: summary.skippedActions }
    );
  }
  appliedSummary = summary;
  return summary;
}
