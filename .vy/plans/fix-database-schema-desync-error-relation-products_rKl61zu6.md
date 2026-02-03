# Fix Database Schema Desync Error: relation "products" does not exist

## Summary
The application is failing because the PostgreSQL database does not contain the 'products' table. This plan involves synchronizing the database with the existing Drizzle migrations and seeding initial data to restore functionality.

## Approach
The research indicates that the schema is correctly defined in lib/schema.ts and migrations exist in lib/drizzle/, but they haven't been applied to the Neon database. I will sync the schema using drizzle-kit push (db:push) which is the most reliable way to force the remote schema to match the local definitions without manually managing the migration history table. After the schema is synced, I will run the seed script (db:seed) to ensure the products table is populated with initial data, fixing the runtime error for the /products page.

## Tasks

- [x] **1. Verify environment variables** <!-- id:-s0wR9 -->
  Ensure the DATABASE_URL is correctly set in the environment to point to the Neon instance.

- [x] **2. Push schema to database** <!-- id:rDuouH -->
  Run `bunx drizzle-kit push` or `npm run db:push` to apply the migrations and create the 'products' table in the remote database.

- [x] **3. Verify table creation** <!-- id:9qWOuN -->
  Confirm the 'products' table exists using a test query or by checking the Neon console.

- [x] **4. Seed initial data** <!-- id:rSILNX -->
  Run `bun run lib/seed.ts` or `npm run db:seed` to populate the newly created products table with mock data.

- [ ] **5. Test application recovery** <!-- id:J9ZfMB -->
  Navigate to /products in the application to ensure the NeonDbError is resolved and products are displaying correctly.

---
plan_id: rC0ubLow
status: executing
created: 2026-02-03T08:09:59.198Z
