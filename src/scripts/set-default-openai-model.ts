import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function setDefaultOpenaiModel() {
  console.log('Setting default OpenaiModel to GPT_5_MINI for users...');

  try {
    // Update all users with NULL openaiModel to GPT_5_MINI
    const result = await prisma.$executeRaw`
      UPDATE "users"
      SET "openaiModel" = 'GPT_5_MINI'
      WHERE "openaiModel" IS NULL
    `;

    console.log(`Updated ${result} users to GPT_5_MINI`);
    console.log('Default model set successfully!');
  } catch (error) {
    console.error('Failed to set default model:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
setDefaultOpenaiModel()
  .then(() => {
    console.log('Script finished successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });
