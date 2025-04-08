import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

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
    console.log('Detected Google OAuth token in middleware, skipping JWT verification');
    req.user = { provider: 'google', token };
    return next();
  }

  // Handle regular JWT tokens
  try {
    // Use a default secret for development if JWT_SECRET is not set
    const secretKey = process.env.JWT_SECRET || 'development_secret_key_for_local_testing_only';
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT verification failed in middleware:', error);
    res.status(401).send({ error: "Unauthorized" });
  }
};
