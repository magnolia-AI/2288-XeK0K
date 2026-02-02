# Fix Broken Assets and Generate Placeholder Images

## Summary
Identifies broken image links across the RexShop e-commerce platform and replaces them with generated placeholder assets or themed T-Rex images. The goal is to ensure a professional UI while maintaining the shop's prehistoric theme.

## Approach
First, I will audit all product images and UI backgrounds by checking the `lib/seed.ts` file and existing database entries. Then, I will create a focused set of high-quality dinosaur-themed placeholder images using an AI generator or a consistent placeholder service (like Placehold.it with custom labels). I will then update the Drizzle database schema/seeding script to point to these new assets and ensure the `ProductCard` and `ProductDetail` components handle image loading errors gracefully using a fallback mechanism.

## Tasks

- [x] **1. Scan codebase and database for existing broken image URLs** <!-- id:6e5Q2U -->
  Check `lib/seed.ts` and `lib/schema.ts` to identify where image URLs are defined for products and UI elements.

- [x] **2. Generate themed placeholder images for products** <!-- id:DphmZ8 -->
  Create a set of approximately 10-15 unique T-Rex and prehistoric themed images (e.g., 'rex-shirt.jpg', 'dino-mug.jpg') and store them in the `public/images` directory.

- [x] **3. Update seeding script with valid paths** <!-- id:lhupdg -->
  Modify `lib/seed.ts` to use the locally generated public assets instead of external broken URLs.

- [x] **4. Implement an Image Fallback component** <!-- id:XqDf44 -->
  Modify the UI components or create a wrapper around `next/image` that defaults to a local 'placeholder.png' if the src fails to load.

- [x] **5. Update ProductCard and ProductDetail components** <!-- id:MJQiOp -->
  Update `components/products/product-card.tsx` and `app/products/[id]/page.tsx` to utilize the new image paths and fallback logic.

- [x] **6. Verify asset loading in the development environment** <!-- id:8a-bC- -->
  Run the seed script and perform a visual audit of the storefront and product detail pages to ensure no broken image icons remain.

---
plan_id: ny8VQMwx
status: completed
created: 2026-02-02T10:10:01.068Z
