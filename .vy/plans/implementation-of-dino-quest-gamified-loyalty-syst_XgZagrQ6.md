# Implementation of Dino-Quest: Gamified Loyalty System Phase 1

## Summary
Introduce a cinematic 'Explorer Level' and loyalty points system (Fossil Points) to RexShop. This plan integrates new database schemas with the existing neon-auth setup and adds HUD-style UI components for tracking user rewards.

## Approach
The approach focuses on extending the existing PostgreSQL schema using Drizzle ORM to associate loyalty metrics with the Neon Auth user entities. We will leverage the project's glassmorphic design language for new UI components. Key steps include: 1) Enhancing the schema with profiles and quest tables, 2) Creating Server Actions and API routes for quest logic, and 3) Implementing interactive UI elements using Framer Motion and Radix UI components (Switch, Progress).

## Tasks

- [x] **1. Extend database schema in lib/schema.ts for rewards** <!-- id:ySKG4j -->
  Create 'user_profiles' table linked to 'neonAuthUser.id' with columns for 'fossil_points' (integer) and 'explorer_level' (integer). Add a 'quests' table to store active challenges like 'First Predator Purchase'.

- [x] **2. Generate and run database migration** <!-- id:vk4roI -->
  Run 'bun drizzle-kit generate' followed by 'bun drizzle-kit push' to update the Neon database with the new profile and quest tables.

- [x] **3. Create Quest Progress API route** <!-- id:88oz3y -->
  Implement 'app/api/quests/route.ts' to fetch user-specific quest progress and calculate point totals using server-side logic from 'lib/auth/server.ts'.

- [ ] **4. Develop the HUD Explorer Dashboard component** <!-- id:FnBrTa -->
  Create 'components/account/explorer-stats.tsx' using 'components/ui/card.tsx' and 'components/ui/progress.tsx'. Use the cinematic glassmorphism style found in the header to display level and point balance.

- [ ] **5. Integrate loyalty points into Checkout process** <!-- id:IfZ1E8 -->
  Modify 'components/cart-sheet.tsx' to include a 'Spend Fossil Points' toggle using 'components/ui/switch.tsx'. Calculate the discount (e.g., 100 points = $1) and update the total price before calling 'app/api/orders/route.ts'.

- [ ] **6. Implement 'Order Success' reward hooks** <!-- id:2AltIl -->
  Update the POST handler in 'app/api/orders/route.ts' to increment 'fossil_points' in the user_profiles table based on the order total (10% back in points).

- [ ] **7. Add animated 'Fossil Bonus' badges to Product Cards** <!-- id:axmntB -->
  Update 'components/products/product-card.tsx' to include a Framer Motion animation showing potential point earnings for each dinosaur listing.

---
plan_id: kNhh2EIH
status: executing
created: 2026-02-05T10:36:48.315Z
