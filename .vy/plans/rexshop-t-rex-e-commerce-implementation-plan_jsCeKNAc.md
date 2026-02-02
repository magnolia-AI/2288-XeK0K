# RexShop: T-Rex E-Commerce Implementation Plan

## Summary
Build a robust Next.js 15 e-commerce platform specializing in the sale of Tyrannosaurus Rex variants. The project includes a full product catalog, individual dinosaur specifications, a persistent shopping cart, and a streamlined checkout process using Drizzle ORM and Neon DB.

## Approach
The implementation will follow a data-first approach, starting with schema definitions that capture T-Rex specific metadata (age, temperament, diet). We will leverage Next.js Server Components for high-performance product listing and SEO, and Client Components for interactive elements like the shopping cart and checkout forms. Key decisions include: 1. Using a local-first cart strategy (localStorage with hydration) to allow non-authenticated browsing. 2. Extending the existing Drizzle schema to support product inventory and relations. 3. Implementing dynamic routing for product detail pages using the ID or slug.

## Tasks

- [ ] **1. Define E-commerce Schema in lib/schema.ts** *(failed)* <!-- id:JSi1G2 -->
  Add tables for 'products' (id, name, description, price, stock, specs: jsonb, image_url), 'categories', and 'orders' (id, user_id, status, total_price, shipping_address). Update exports.

- [ ] **2. Migrate and Seed T-Rex Inventory** *(failed)* <!-- id:7C6Eqg -->
  Generate a new migration for the schema changes. Update lib/seed.ts with at least 5 T-Rex varieties (e.g., Alpine T-Rex, Juvenile, Obsidian Tyrannosaur) and run the seed script.

- [ ] **3. Create Products Catalog Page (app/products/page.tsx)** *(failed)* <!-- id:hHfwhM -->
  Implement a grid layout displaying T-Rex Product Cards. Include basic filtering/sorting. Use fetch/query directly in Server Component.

- [x] **4. Develop Product Detail Page (app/products/[id]/page.tsx)** <!-- id:giIDsg -->
  Build a detailed view showing high-res images, pricing, and specific stats (Weight, Height, Bite Force). Use the 'card.tsx' and 'badge.tsx' components from UI library.

- [ ] **5. Implement Cart State Management** *(failed)* <!-- id:dtQWUZ -->
  Create a 'hooks/use-cart.ts' using Zustand or React Context with local storage persistence to manage adding/removing T-Rexes from the basket.

- [x] **6. Build Shopping Cart Sidebar/Drawer** <!-- id:B0aoCf -->
  Use the 'sheet.tsx' component to create a slide-out cart summary accessible from the header. Show subtotal and item count.

- [x] **7. Enhance Navigation and Header** <!-- id:d-vCAA -->
  Update 'components/auth-header.tsx' with a 'RexShop' logo, a link to the T-Rex catalog, and the Cart trigger component.

- [x] **8. Create Checkout Flow (app/checkout/page.tsx)** <!-- id:_Qid2W -->
  Implement a multi-step form using 'form.tsx' and 'input.tsx' to collect shipping details and simulate successful payment processing.

- [x] **9. Add Order Confirmation and History** <!-- id:iJpsZg -->
  Create a simple landing page after checkout and a view in 'app/account/settings' to show previous 'dinosaur acquisitions'.

---
plan_id: 4Ch9_Yc9
status: completed
created: 2026-02-02T08:20:27.675Z
