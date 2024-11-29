import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  var prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient().$extends(withAccelerate()) as unknown as PrismaClient;
} else {
  if (!global.prisma) {
    prisma = new PrismaClient().$extends(withAccelerate()) as unknown as PrismaClient;

  }

  prisma = global.prisma as PrismaClient;
}

export default prisma;
