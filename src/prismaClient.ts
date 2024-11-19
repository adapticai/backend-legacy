import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Check if there's already a global instance of PrismaClient
const prisma = global.prisma || new PrismaClient();

// Always set the global prisma instance
global.prisma = prisma;

export default prisma;
