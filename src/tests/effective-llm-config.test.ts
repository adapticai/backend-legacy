import { describe, it, expect } from 'vitest';
import { effectiveLlmConfig } from '../helpers/effective-llm-config';
import type { LlmConfigurationJson } from '../types/llm-configuration';
import type { EncryptedApiKey } from '../helpers/kms-envelope';

const baseFund = (): {
  id: string;
  llmOverrides: LlmConfigurationJson | null;
  organization: { id: string; llmDefaults: LlmConfigurationJson | null };
} => ({
  id: 'f-1',
  llmOverrides: null,
  organization: { id: 'o-1', llmDefaults: null },
});

const fakeEnvelope = (label: string): EncryptedApiKey => ({
  ciphertext: label,
  iv: '',
  authTag: '',
  keyId: '',
  wrappedDek: '',
  algorithm: 'AES-256-GCM',
  createdAt: '2026-05-14T00:00:00.000Z',
});

describe('effectiveLlmConfig', () => {
  it('falls through to DEFAULT_LLM_CONFIGURATION when org/fund supply nothing', () => {
    expect(effectiveLlmConfig(baseFund()).defaultProvider).toBe('OPENAI');
  });

  it('Org.llmDefaults overrides built-in defaults', () => {
    const f = baseFund();
    f.organization.llmDefaults = { defaultProvider: 'ANTHROPIC' };
    expect(effectiveLlmConfig(f).defaultProvider).toBe('ANTHROPIC');
  });

  it('Fund.llmOverrides overrides Org.llmDefaults', () => {
    const f = baseFund();
    f.organization.llmDefaults = { defaultProvider: 'ANTHROPIC' };
    f.llmOverrides = { defaultProvider: 'DEEPSEEK' };
    expect(effectiveLlmConfig(f).defaultProvider).toBe('DEEPSEEK');
  });

  it('apiKeys merge per-provider (not whole-object replace)', () => {
    const f = baseFund();
    f.organization.llmDefaults = {
      apiKeys: {
        openai: fakeEnvelope('OAI-ENV'),
        anthropic: fakeEnvelope('ANT-ENV'),
      },
    };
    f.llmOverrides = {
      apiKeys: { openai: fakeEnvelope('OAI-FUND') },
    };
    const r = effectiveLlmConfig(f);
    expect(r.apiKeys.openai?.ciphertext).toBe('OAI-FUND');
    expect(r.apiKeys.anthropic?.ciphertext).toBe('ANT-ENV');
  });

  it('returns a frozen object', () => {
    expect(Object.isFrozen(effectiveLlmConfig(baseFund()))).toBe(true);
  });
});
