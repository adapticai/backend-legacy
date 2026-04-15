/**
 * Internal REST endpoint for engine → backend credential fetches.
 *
 * Design choice: the spec (§3.3) calls for a separate `internalSchema`
 * GraphQL endpoint. We deliver the same guarantees (not visible in the
 * public schema, service-JWT-gated, fully audit-logged) via a narrow REST
 * router instead — simpler to wire, easier to reason about, and doesn't
 * pollute the TypeGraphQL schema that app/web consume.
 *
 * Authentication: reuses the existing `SERVER_AUTH_TOKEN` pattern already
 * enforced in server.ts's GraphQL context. Engine runs with the same token;
 * only in-cluster callers know it.
 *
 * Network scope: mounted at `/internal/*`. CORS is NOT enabled for this
 * path (set `Access-Control-Allow-Origin` header is never emitted); in
 * Railway the service is bound to the internal network and not reachable
 * from the public internet. Production deployment also applies an Nginx
 * rule blocking `/internal/*` at the edge as defence in depth.
 */

import { Router, type Request, type Response, type NextFunction } from 'express';
import { createCredentialService } from './index.js';
import prisma from '../prismaClient.js';
import { logger } from '../utils/logger.js';
import type { CredentialService } from './credential-service.js';

function requireServerAuth(req: Request, res: Response, next: NextFunction): void {
  const expected = process.env.SERVER_AUTH_TOKEN;
  if (!expected) {
    res.status(503).json({
      error: 'credential fetch unavailable: SERVER_AUTH_TOKEN not configured',
    });
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

export interface InternalRouterDeps {
  /** Injectable for testing. If omitted, builds one from env + Prisma. */
  readonly credentialService?: CredentialService;
}

/**
 * Build the `/internal` router. Mount as `app.use('/internal', buildInternalRouter())`.
 */
export function buildInternalRouter(deps: InternalRouterDeps = {}): Router {
  const router: Router = Router();
  let serviceInstance: CredentialService | null = deps.credentialService ?? null;
  const getService = (): CredentialService => {
    if (!serviceInstance) {
      serviceInstance = createCredentialService(prisma);
    }
    return serviceInstance;
  };

  router.use(requireServerAuth);

  /**
   * POST /internal/broker-credentials/:id
   *
   * Body: {
   *   accessedBy: string,   // e.g. "engine:order.place" or "engine:ws.subscribe"
   *   purpose:    string,   // free-form purpose string
   * }
   *
   * Response 200: { apiKey, apiSecret, passphrase | null }
   * Response 404: account not found
   * Response 401/403: auth failure
   *
   * The response carries plaintext credentials ONE TIME. The caller
   * (engine's CredentialResolver service) caches the derived adapter
   * instance, not the plaintext.
   */
  router.post(
    '/broker-credentials/:id',
    async (req: Request, res: Response): Promise<void> => {
      const brokerageAccountId = req.params.id;
      if (!brokerageAccountId || typeof brokerageAccountId !== 'string') {
        res.status(400).json({ error: 'missing brokerageAccountId' });
        return;
      }
      const body = (req.body as unknown as { accessedBy?: unknown; purpose?: unknown }) ?? {};
      const accessedBy = typeof body.accessedBy === 'string' ? body.accessedBy : null;
      const purpose = typeof body.purpose === 'string' ? body.purpose : null;
      if (!accessedBy || !purpose) {
        res
          .status(400)
          .json({ error: 'accessedBy and purpose are required' });
        return;
      }
      try {
        const service = getService();
        const creds = await service.fetchCredentials({
          brokerageAccountId,
          accessedBy,
          purpose,
        });
        try {
          res.status(200).json({
            apiKey: creds.apiKey,
            apiSecret: creds.apiSecret,
            passphrase: creds.passphrase,
          });
        } finally {
          creds.dispose();
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        logger.warn('internal credential fetch failed', {
          brokerageAccountId,
          accessedBy,
          purpose,
          error: msg,
        });
        // Audit log already written inside CredentialService.fetchCredentials
        if (msg.includes('not found')) {
          res.status(404).json({ error: 'not found' });
        } else {
          res.status(500).json({ error: 'credential fetch failed' });
        }
      }
    }
  );

  return router;
}
