import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'
import { withPulse } from '@prisma/extension-pulse'

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
    .$extends(withAccelerate())
    .$extends(withPulse({ apiKey: process.env.PULSE_API_KEY || '' })) as unknown as PrismaClient;
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
      .$extends(withAccelerate())
      .$extends(withPulse({ apiKey: process.env.PULSE_API_KEY || '' })) as unknown as PrismaClient;
  }

  prisma = global.prisma as PrismaClient;
}

export default prisma;
