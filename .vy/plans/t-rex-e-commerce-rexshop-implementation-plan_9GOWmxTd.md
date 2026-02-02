# T-Rex E-Commerce (RexShop) Implementation Plan

## Summary
Build a specialized e-commerce platform for purchasing high-quality Tyrannosaurus Rex specimens. The project will leverage Next.js 15, Drizzle ORM, and the existing Shadcn UI components to create a product catalog, shopping cart, and secure checkout flow.

## Approach
The implementation will follow a data-first approach by defining the T-Rex product schema and seeding initial inventory. I will create a robust product catalog using the existing Card and Badge components. For the shopping experience, I will implement a client-side cart using a React Context provider which persists to local storage. Authentication is already handled by the existing Neon Auth setup, so I will focus on linking orders to user profiles and building a checkout API. The UI will follow a prehistoric theme using the existing Tailwind configuration and Shadcn components, ensuring mobile responsiveness via the use-mobile hook.

## Tasks

- [ ] **1. Define database schema for e-commerce** *(failed)* <!-- id:h0kmk0 -->
  Modify 'lib/schema.ts' to include 'products' (name, description, price, age, ferocity_rating, image_url), 'categories' (species variations), and 'orders' tables with Drizzle ORM.

- [ ] **2. Seed the database with T-Rex inventory** *(in_progress)* <!-- id:0Oc8G- -->
  Update 'lib/seed.ts' to populate the database with diverse T-Rex breeds such as 'Classic Rex', 'Feathered Rex', 'Albino Alpha', and 'Juvenile Mini' with high-resolution placeholder images.

- [ ] **3. Create a Product Catalog UI on the homepage** <!-- id:p5wxaK -->
  Rewrite 'app/page.tsx' to fetch products from the database and display them using a grid of 'components/ui/card.tsx' instances, featuring 'components/ui/badge.tsx' for traits like 'Carnivore'.

- [ ] **4. Implement a Shopping Cart Context Provider** <!-- id:hMh0TL -->
  Create 'components/cart-provider.tsx' to manage cart state (add, remove, clear) and provide it to the 'app/layout.tsx' wrapper.

- [ ] **5. Build Product Detail pages** <!-- id:AlY39h -->
  Create dynamic routes at 'app/products/[id]/page.tsx' to show full specifications, large-scale images using 'components/video.tsx' for 360 views, and an 'Add to Cart' button.

- [ ] **6. Develop the Cart and Checkout Page** <!-- id:RT9Z3N -->
  Create 'app/cart/page.tsx' utilizing 'components/ui/table.tsx' for line items and a 'components/ui/button.tsx' to initiate the checkout process via a modern form.

- [ ] **7. Create Checkout API and Order placement** <!-- id:Y5iqsR -->
  Implement 'app/api/orders/route.ts' to process the cart, verify prices against the database, and record successful 'orders' linked to the user's account ID.

- [ ] **8. Add Order History to User Settings** <!-- id:PR4LlQ -->
  Update 'app/account/settings/page.tsx' to display a list of previous T-Rex purchases using the 'components/ui/accordion.tsx' to show order details.

---
plan_id: blOTzIRK
status: executing
created: 2026-02-02T07:59:10.146Z
