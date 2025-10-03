import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migrateOpenaiModelEnum() {
  console.log('Starting OpenaiModel enum migration...');

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
      console.log('Found users with deprecated model values:');
      currentModels.forEach((record) => {
        console.log(`  - ${record.openaiModel}: ${record.count} users`);
      });
    } else {
      console.log('No users found with deprecated model values.');
      console.log('Migration not needed, but will proceed anyway for safety.');
    }

    // Update all deprecated model values to NULL temporarily
    // This allows the schema migration to proceed safely
    const result = await prisma.$executeRaw`
      UPDATE "users"
      SET "openaiModel" = NULL
      WHERE "openaiModel" IN ('GPT_4O', 'GPT_4O_MINI', 'O1_PREVIEW', 'O1_MINI', 'O1', 'O3_MINI')
    `;

    console.log(`Updated ${result} users to NULL (will be set to GPT_5_MINI after schema migration)`);
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrateOpenaiModelEnum()
  .then(() => {
    console.log('Script finished successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });
