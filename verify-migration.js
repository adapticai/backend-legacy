const { PrismaClient } = require('@prisma/client');

async function verifyMigration() {
  const prisma = new PrismaClient();
  
  try {
    // Query to check allocations table structure
    const result = await prisma.$queryRaw`
      SELECT column_name, data_type, column_default, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'allocations'
      ORDER BY ordinal_position;
    `;
    
    console.log('\n=== Allocations Table Schema ===');
    console.table(result);
    
    // Query to check alpaca_accounts table for autoAllocation field
    const alpacaResult = await prisma.$queryRaw`
      SELECT column_name, data_type, column_default, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'alpaca_accounts' AND column_name = 'autoAllocation';
    `;
    
    console.log('\n=== AlpacaAccount autoAllocation Field ===');
    console.table(alpacaResult);
    
    console.log('\n✓ Migration verification complete!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

verifyMigration();
