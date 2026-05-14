import type { EncryptedApiKey } from '../helpers/kms-envelope';

export type LlmProvider =
  | 'OPENAI'
  | 'ANTHROPIC'
  | 'DEEPSEEK'
  | 'KIMI'
  | 'QWEN'
  | 'XAI'
  | 'GEMINI';

/**
 * Canonical LlmConfigurationJson shape stored at:
 *   Organization.llmDefaults  (org-wide defaults)
 *   Fund.llmOverrides         (fund-level overrides)
 *
 * Read-time merging is precedence-ordered (charter §2.4 F6, spec §4.3):
 *   built-in DEFAULT_LLM_CONFIGURATION → Org.llmDefaults → Fund.llmOverrides
 *
 * Consumers MUST use `effectiveLlmConfig()` from
 * `@adaptic/backend-legacy/helpers/effective-llm-config`.
 *
 * API keys (`apiKeys.<provider>`) are stored as EncryptedApiKey
 * envelopes; encrypt/decrypt is gated by org-membership role per
 * spec §4.3.
 */
export interface LlmConfigurationJson {
  /** Provider used when a tier-specific provider is unset. */
  defaultProvider?: LlmProvider;
  /** Per-tier provider overrides (null = inherit from defaultProvider). */
  miniProvider?: LlmProvider;
  normalProvider?: LlmProvider;
  advancedProvider?: LlmProvider;
  /** Per-tier model id strings (e.g. "gpt-5.5", "claude-opus-4-7"). */
  miniModel?: string;
  normalModel?: string;
  advancedModel?: string;
  /**
   * Per-provider API keys, stored at rest as EncryptedApiKey envelopes.
   * Plaintext only ever crosses the GraphQL mutation boundary.
   */
  apiKeys?: Partial<Record<Lowercase<LlmProvider>, EncryptedApiKey>>;
}

/**
 * Built-in safe defaults consumed by effectiveLlmConfig() as the
 * lowest-precedence layer.
 */
export const DEFAULT_LLM_CONFIGURATION: Required<
  Omit<LlmConfigurationJson, 'apiKeys'>
> & {
  apiKeys: NonNullable<LlmConfigurationJson['apiKeys']>;
} = {
  defaultProvider: 'OPENAI',
  miniProvider: 'OPENAI',
  normalProvider: 'OPENAI',
  advancedProvider: 'ANTHROPIC',
  miniModel: 'gpt-5.5',
  normalModel: 'gpt-5',
  advancedModel: 'claude-opus-4-7',
  apiKeys: {},
};
