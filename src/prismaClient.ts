// client with accelerate
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { withPulse } from '@prisma/extension-pulse'

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient().$extends(withAccelerate()).$extends(withPulse({
    apiKey: process.env['PULSE_API_KEY'] as string
  })) as unknown as PrismaClient;

} else {
  const globalWithPrisma = global as typeof globalThis & { prisma?: PrismaClient };

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient().$extends(withAccelerate()).$extends(withPulse({
      apiKey: process.env['PULSE_API_KEY'] as string
    })) as unknown as PrismaClient;
  }

  prisma = globalWithPrisma.prisma;
}

export default prisma;
