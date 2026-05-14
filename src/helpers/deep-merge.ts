type Plain = Record<string, unknown>;

const isPlainObject = (v: unknown): v is Plain =>
  v !== null && typeof v === 'object' && !Array.isArray(v);

/**
 * Pure, non-mutating deep merge.
 * - Plain objects merge recursively.
 * - Arrays and scalars: right side replaces.
 * - `undefined` on the right is treated as absent (left value retained).
 * - `null` on the right overrides to null.
 *
 * Used by effectivePolicy() and effectiveLlmConfig() to deep-merge
 * Organization → Fund → BrokerageAccount policy layers per charter §2.2.
 * Consumers must use this helper; do not re-implement merge semantics.
 */
export const deepMerge = <T extends Plain, U extends Plain>(
  left: T,
  right: U
): T & U => {
  const out: Plain = { ...left };
  for (const key of Object.keys(right)) {
    const rv = right[key];
    if (rv === undefined) continue;
    const lv = out[key];
    if (isPlainObject(lv) && isPlainObject(rv)) {
      out[key] = deepMerge(lv, rv);
    } else {
      out[key] = rv;
    }
  }
  return out as T & U;
};
