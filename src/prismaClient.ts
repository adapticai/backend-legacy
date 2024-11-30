import { PrismaClient as PrismaClientServerless } from "@prisma/client/edge";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
      prismaServerless: PrismaClientServerless;
    }
  }
}

let prisma: PrismaClient;
let prismaServerless: PrismaClientServerless;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  prismaServerless = new PrismaClientServerless().$extends(withAccelerate()) as unknown as PrismaClientServerless;
} else {
  const globalWithPrisma = global as typeof globalThis & { prisma?: PrismaClient; prismaServerless?: PrismaClientServerless };

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }

  if (!globalWithPrisma.prismaServerless) {
    globalWithPrisma.prismaServerless = new PrismaClientServerless().$extends(withAccelerate()) as unknown as PrismaClientServerless;
  }

  prisma = globalWithPrisma.prisma;
  prismaServerless = globalWithPrisma.prismaServerless;
}

export default prisma;
export { prismaServerless };
