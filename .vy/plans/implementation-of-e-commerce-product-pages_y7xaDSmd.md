# Implementation of E-commerce Product Pages

## Summary
This plan involves developing the dynamic product detail page and the product listing page with filtering capabilities. It leverages existing Shadcn UI components, Drizzle ORM for database access, and Next.js App Router for server-side rendering and client-side interactions.

## Approach
The implementation will follow a data-driven approach using Next.js Server Components for SEO and performance. I will first ensure the database schema in `lib/schema.ts` supports all necessary product attributes (price, inventory, descriptions, images). Then, I will implement a robust fetching layer within `app/products/page.tsx` for the catalog and `app/products/[id]/page.tsx` for individual items. Filters will be handled via URL search parameters to maintain shareable state. For the individual product page, I will integrate the `use-cart` hook into a Client Component 'Add to Cart' button to ensure seamless shopping basket updates. Images will be rendered using the existing `safe-image.tsx` component to prevent broken layouts.

## Tasks

- [x] **1. Enhance product schema and sync database** <!-- id:1QNoHO -->
  Update `lib/schema.ts` to include fields like 'category', 'rating', and 'specifications' if missing. Run `bun drizzle-kit push` to update the Neon database.

- [x] **2. Implement Product Listing Page (PLP) fetching** <!-- id:Km34Lo -->
  Update `app/products/page.tsx` to fetch products using Drizzle. Add support for filtering by price and category based on URL searchParams.

- [x] **3. Refine Product Card component** <!-- id:h3VG71 -->
  Update `components/products/product-card.tsx` to use `safe-image.tsx` and ensure consistent aspect ratios for T-Rex themed assets.

- [x] **4. Develop Product Detail Page (PDP) layout** <!-- id:Ybp_zA -->
  Build `app/products/[id]/page.tsx`. Include an image gallery using `carousel.tsx`, price display, stock status from the inventory table, and product descriptions.

- [x] **5. Create 'Add to Cart' interactivity** <!-- id:7bFMpg -->
  Create a new client component `components/products/add-to-cart-button.tsx`. Integrate it with `hooks/use-cart.ts` to add items to the stateful cart and trigger the `sonner` toast notification.

- [x] **6. Implement Product Filters logic** <!-- id:yPAjuy -->
  Connect `components/products/product-filters.tsx` to the Next.js router, allowing users to select categories and price ranges that update the URL and trigger re-validation.

- [x] **7. Add breadcrumbs and navigation** <!-- id:Xr9FYS -->
  Utilize `components/ui/breadcrumb.tsx` on the PDP to allow users to navigate back to the catalog or specific categories.

- [x] **8. Verification and Error Handling** <!-- id:dn4Tx7 -->
  Implement a 404 state in `app/products/[id]/page.tsx` using `not-found.tsx` if a product ID does not exist in the database.

---
plan_id: L3Xr6x-s
status: executing
created: 2026-02-02T16:57:43.438Z
