import db from './lib/db';
import { sql } from 'drizzle-orm';

async function main() {
  try {
    const result = await db.execute(sql`SELECT table_name FROM information_schema.tables WHERE table_name = 'products';`);
    console.log('Result:', JSON.stringify(result, null, 2));
    if (result.rows.length > 0) {
      console.log("Table 'products' exists.");
    } else {
      console.log("Table 'products' DOES NOT exist.");
    }
  } catch (error) {
    console.error('Error verifying table:', error);
    process.exit(1);
  }
  process.exit(0);
}

main();
