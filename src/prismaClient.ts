import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'
import { withPulse } from '@prisma/extension-pulse'

declare global {
  var prisma: PrismaClient | undefined;
}


export const prisma =
  global.prisma ||
  new PrismaClient()
    .$extends(withAccelerate())
    .$extends(withPulse({ apiKey: process.env.PULSE_API_KEY || '' }));

global.prisma = prisma as PrismaClient;
