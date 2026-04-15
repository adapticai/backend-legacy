/**
 * Internal REST router for multi-broker CRUD.
 *
 * Mounted at `/internal/brokers/*` alongside the existing
 * `/internal/broker-credentials` router. Gated by SERVER_AUTH_TOKEN
 * (same scheme used across the internal surface).
 *
 * Endpoints:
 *   POST /internal/brokers/connect     — create a BrokerageAccount row,
 *                                        KMS-encrypt credentials, validate
 *                                        shape, return the new id.
 *   POST /internal/brokers/toggle      — flip enabled flag.
 *   POST /internal/brokers/disconnect  — soft-delete (sets deletedAt).
 *
 * The app's `/api/brokers/*` routes proxy into these. Plaintext
 * credentials only cross the trusted internal network between app and
 * backend-legacy.
 */

import {
  Router,
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import { z } from 'zod';

import prisma from '../prismaClient.js';
import { logger } from '../utils/logger.js';
import { createCredentialService } from './index.js';
import type { CredentialService } from './credential-service.js';

function requireServerAuth(req: Request, res: Response, next: NextFunction): void {
  const expected = process.env.SERVER_AUTH_TOKEN;
  if (!expected) {
    res.status(503).json({ error: 'SERVER_AUTH_TOKEN not configured' });
    return;
  }
  const header = req.headers.authorization ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token || token !== expected) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }
  next();
}

const connectSchema = z.object({
  userId: z.string().uuid(),
  broker: z.enum(['ALPACA', 'BINANCE', 'OKX', 'BYBIT', 'IKBR']),
  env: z.enum(['PAPER', 'LIVE']),
  label: z.string().max(60).optional(),
  apiKey: z.string().min(1),
  apiSecret: z.string().min(1),
  passphrase: z.string().optional().nullable(),
});

const toggleSchema = z.object({
  userId: z.string().uuid(),
  brokerageAccountId: z.string().uuid(),
  enabled: z.boolean(),
});

const disconnectSchema = z.object({
  userId: z.string().uuid(),
  brokerageAccountId: z.string().uuid(),
});

export interface InternalBrokersRouterDeps {
  readonly credentialService?: CredentialService;
}

export function buildInternalBrokersRouter(
  deps: InternalBrokersRouterDeps = {}
): Router {
  const router: Router = Router();
  let svc: CredentialService | null = deps.credentialService ?? null;
  const service = (): CredentialService => {
    if (!svc) svc = createCredentialService(prisma);
    return svc;
  };

  router.use(requireServerAuth);

  /**
   * POST /internal/brokers/connect
   *
   * Creates a new BrokerageAccount row with placeholder ciphertext, then
   * writes the real ciphertext via CredentialService.storeCredentials().
   * Returns the new id. Row starts with status=PENDING + enabled=false —
   * user flips enabled via /toggle after reviewing the validated
   * connection.
   */
  router.post(
    '/connect',
    async (req: Request, res: Response): Promise<void> => {
      const parsed = connectSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          ok: false,
          error: 'validation failed',
          fields: parsed.error.flatten().fieldErrors,
        });
        return;
      }
      const { userId, broker, env, label, apiKey, apiSecret, passphrase } =
        parsed.data;
      try {
        // Upsert semantics via the (userId, broker, env) unique index so
        // re-connecting rotates the credentials rather than erroring.
        const placeholder = Uint8Array.from([0]);
        const existing = await prisma.brokerageAccount.findUnique({
          where: {
            userId_broker_env: {
              userId,
              broker,
              env,
            },
          },
          select: { id: true },
        });
        let id: string;
        if (existing) {
          id = existing.id;
          await prisma.brokerageAccount.update({
            where: { id },
            data: {
              label: label ?? undefined,
              status: 'PENDING',
            },
          });
        } else {
          const created = await prisma.brokerageAccount.create({
            data: {
              userId,
              broker,
              env,
              label: label ?? undefined,
              encApiKey: placeholder,
              encApiSecret: placeholder,
              encPassphrase: null,
              kmsKeyArn: '',
              encDataKey: placeholder,
              credFingerprint: '',
              supportedKinds: [],
              defaultKind: 'SPOT',
              status: 'PENDING',
              enabled: false,
            },
            select: { id: true },
          });
          id = created.id;
        }
        await service().storeCredentials({
          brokerageAccountId: id,
          userId,
          broker,
          env,
          apiKey,
          apiSecret,
          passphrase: passphrase ?? null,
        });
        await prisma.brokerageAccount.update({
          where: { id },
          data: {
            status: 'ACTIVE',
            lastValidatedAt: new Date(),
            lastAuthFailedAt: null,
            lastAuthFailReason: null,
          },
        });
        res.status(200).json({ ok: true, brokerageAccountId: id });
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        logger.warn('internal /brokers/connect failed', {
          userId,
          broker,
          env,
          error: msg,
        });
        res.status(500).json({ ok: false, error: msg });
      }
    }
  );

  /**
   * POST /internal/brokers/toggle
   */
  router.post(
    '/toggle',
    async (req: Request, res: Response): Promise<void> => {
      const parsed = toggleSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          ok: false,
          error: 'validation failed',
          fields: parsed.error.flatten().fieldErrors,
        });
        return;
      }
      const { userId, brokerageAccountId, enabled } = parsed.data;
      try {
        const existing = await prisma.brokerageAccount.findFirst({
          where: { id: brokerageAccountId, userId, deletedAt: null },
          select: { id: true },
        });
        if (!existing) {
          res.status(404).json({ ok: false, error: 'not found' });
          return;
        }
        await prisma.brokerageAccount.update({
          where: { id: brokerageAccountId },
          data: { enabled, status: enabled ? 'ACTIVE' : 'DISABLED' },
        });
        res.status(200).json({ ok: true });
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        logger.warn('internal /brokers/toggle failed', {
          userId,
          brokerageAccountId,
          error: msg,
        });
        res.status(500).json({ ok: false, error: msg });
      }
    }
  );

  /**
   * POST /internal/brokers/disconnect
   */
  router.post(
    '/disconnect',
    async (req: Request, res: Response): Promise<void> => {
      const parsed = disconnectSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          ok: false,
          error: 'validation failed',
          fields: parsed.error.flatten().fieldErrors,
        });
        return;
      }
      const { userId, brokerageAccountId } = parsed.data;
      try {
        const existing = await prisma.brokerageAccount.findFirst({
          where: { id: brokerageAccountId, userId, deletedAt: null },
          select: { id: true },
        });
        if (!existing) {
          res.status(404).json({ ok: false, error: 'not found' });
          return;
        }
        await prisma.brokerageAccount.update({
          where: { id: brokerageAccountId },
          data: {
            deletedAt: new Date(),
            enabled: false,
            status: 'DISABLED',
          },
        });
        res.status(200).json({ ok: true });
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        logger.warn('internal /brokers/disconnect failed', {
          userId,
          brokerageAccountId,
          error: msg,
        });
        res.status(500).json({ ok: false, error: msg });
      }
    }
  );

  return router;
}
