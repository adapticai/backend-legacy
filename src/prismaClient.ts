import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

declare global {
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}

const isProduction = process.env.NODE_ENV === "production";

let prisma: PrismaClient;

if (isProduction) {
  // In production, use Prisma Data Proxy by connecting via DATABASE_URL
  prisma = new PrismaClient().$extends(withAccelerate()) as unknown as PrismaClient;
} else {
  // In development, prevent multiple instances due to hot-reloading
  const globalWithPrisma = global as typeof globalThis & { prisma?: PrismaClient };

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient().$extends(withAccelerate()) as unknown as PrismaClient;
  }

  prisma = globalWithPrisma.prisma;
}

export default prisma;
