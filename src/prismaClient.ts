// client with accelerate
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient().$extends(withAccelerate()) as unknown as PrismaClient;
} else {
  const globalWithPrisma = global as typeof globalThis & { prisma?: PrismaClient };

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient().$extends(withAccelerate()) as unknown as PrismaClient;
  }

  prisma = globalWithPrisma.prisma;
}

export default prisma;
