import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from '../config/jwtConfig';
import { logger } from '../utils/logger';

export interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.header("Authorization") || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.replace("Bearer ", "") : '';

  if (!token) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  // Handle Google OAuth tokens
  if (token.startsWith('ya29.')) {
    logger.info('Detected Google OAuth token in middleware, skipping JWT verification');
    req.user = { provider: 'google', token };
    return next();
  }

  // Handle regular JWT tokens
  try {
    // Check for server-to-server auth token from environment
    const serverAuthToken = process.env.SERVER_AUTH_TOKEN;
    if (serverAuthToken && token === serverAuthToken) {
      req.user = { sub: 'server', name: 'Server Auth', role: 'server' };
    } else {
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded;
    }
    next();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.warn(`[Auth] Middleware JWT verification failed: ${errorMessage}`);
    res.status(401).send({ error: "Unauthorized" });
  }
};
