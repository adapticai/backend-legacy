import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

/**
 * Define the global type for PrismaClient to use across environments
 */
declare global {
  // This works in both browser and Node.js environments
  var prisma: PrismaClient | undefined;
}

const isProduction = process.env.NODE_ENV === "production";

// Initialize a singleton PrismaClient with a connection pool that persists across requests
let prisma: PrismaClient;

// Create a singleton that works in all environments
if (!global.prisma) {
  global.prisma = new PrismaClient({
    log: ['error', 'warn'],
    // Increase connection timeout and pool size for better reliability
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate()) as unknown as PrismaClient;
}

prisma = global.prisma;

export default prisma;
