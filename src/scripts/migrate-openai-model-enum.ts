import { PrismaClient } from '@prisma/client';
import { logger } from '../utils/logger';

const prisma = new PrismaClient();

async function migrateOpenaiModelEnum() {
  logger.info('Starting OpenaiModel enum migration...');

  try {
    // Check which models are currently in use in the users table
    const currentModels = await prisma.$queryRaw<
      Array<{ openaiModel: string; count: bigint }>
    >`
      SELECT "openaiModel", COUNT(*) as count
      FROM "users"
      WHERE "openaiModel" IN ('GPT_4O', 'GPT_4O_MINI', 'O1_PREVIEW', 'O1_MINI', 'O1', 'O3_MINI')
      GROUP BY "openaiModel"
    `;

    if (currentModels.length > 0) {
      logger.info('Found users with deprecated model values:');
      currentModels.forEach((record) => {
        logger.info(`  - ${record.openaiModel}: ${record.count} users`);
      });
    } else {
      logger.info('No users found with deprecated model values.');
      logger.info('Migration not needed, but will proceed anyway for safety.');
    }

    // Update all deprecated model values to NULL temporarily
    // This allows the schema migration to proceed safely
    const result = await prisma.$executeRaw`
      UPDATE "users"
      SET "openaiModel" = NULL
      WHERE "openaiModel" IN ('GPT_4O', 'GPT_4O_MINI', 'O1_PREVIEW', 'O1_MINI', 'O1', 'O3_MINI')
    `;

    logger.info(`Updated ${result} users to NULL (will be set to GPT_5_MINI after schema migration)`);
    logger.info('Migration completed successfully!');
  } catch (error) {
    logger.error('Migration failed', { error: String(error) });
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateOpenaiModelEnum()
  .then(() => {
    logger.info('Script finished successfully');
    process.exit(0);
  })
  .catch((error) => {
    logger.error('Script failed', { error: String(error) });
    process.exit(1);
  });
