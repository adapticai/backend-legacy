import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

async function setDefaultOpenaiModel() {
  logger.info('Setting default OpenaiModel to GPT_5_MINI for users...');

  try {
    // Update all users with NULL openaiModel to GPT_5_MINI
    const result = await prisma.$executeRaw`
      UPDATE "users"
      SET "openaiModel" = 'GPT_5_MINI'
      WHERE "openaiModel" IS NULL
    `;

    logger.info(`Updated ${result} users to GPT_5_MINI`);
    logger.info('Default model set successfully!');
  } catch (error) {
    logger.error('Failed to set default model', { error: String(error) });
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
setDefaultOpenaiModel()
  .then(() => {
    logger.info('Script finished successfully');
    process.exit(0);
  })
  .catch((error) => {
    logger.error('Script failed', { error: String(error) });
    process.exit(1);
  });
