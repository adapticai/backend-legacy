import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

/**
 * Define the global type for PrismaClient to use across environments
 */
declare global {
  // This works in both browser and Node.js environments
  var prisma: PrismaClient | undefined;
}

// Accelerate requires prisma:// or prisma+postgres:// protocol
const useAccelerate = (process.env.DATABASE_URL || '').startsWith('prisma');

// Initialize a singleton PrismaClient with a connection pool that persists across requests
let prisma: PrismaClient;

// Create a singleton that works in all environments
if (!global.prisma) {
  const client = new PrismaClient({
    log: ['error', 'warn'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

  global.prisma = useAccelerate
    ? (client.$extends(withAccelerate()) as unknown as PrismaClient)
    : client;
}

prisma = global.prisma;

export default prisma;
