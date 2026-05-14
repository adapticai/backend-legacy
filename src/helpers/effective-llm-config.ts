import { deepMerge } from './deep-merge';
import {
  DEFAULT_LLM_CONFIGURATION,
  type LlmConfigurationJson,
} from '../types/llm-configuration';

/**
 * The relation shape `effectiveLlmConfig()` requires.
 *
 * Note: there is no overlay tier (LLM config is not event-driven).
 * Precedence is a two-level chain.
 */
interface FundWithLlmContext {
  id: string;
  llmOverrides: LlmConfigurationJson | null;
  organization: { id: string; llmDefaults: LlmConfigurationJson | null };
}

/**
 * Deep-merges DEFAULT_LLM_CONFIGURATION → Org.llmDefaults →
 * Fund.llmOverrides into a single frozen `LlmConfigurationJson`.
 *
 * `apiKeys.<provider>` values are EncryptedApiKey envelopes; this
 * helper does NOT decrypt. Use `decryptApiKey()` from
 * `helpers/kms-envelope` with appropriate role gating per spec §4.3.
 */
export function effectiveLlmConfig(fund: FundWithLlmContext): Required<
  Omit<LlmConfigurationJson, 'apiKeys'>
> & {
  apiKeys: NonNullable<LlmConfigurationJson['apiKeys']>;
} {
  let cfg: LlmConfigurationJson = { ...DEFAULT_LLM_CONFIGURATION };
  if (fund.organization.llmDefaults) {
    cfg = deepMerge(
      cfg as Record<string, unknown>,
      fund.organization.llmDefaults as Record<string, unknown>
    ) as LlmConfigurationJson;
  }
  if (fund.llmOverrides) {
    cfg = deepMerge(
      cfg as Record<string, unknown>,
      fund.llmOverrides as Record<string, unknown>
    ) as LlmConfigurationJson;
  }
  return Object.freeze(cfg) as ReturnType<typeof effectiveLlmConfig>;
}
