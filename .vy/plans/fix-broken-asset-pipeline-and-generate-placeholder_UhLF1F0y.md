# Fix Broken Asset Pipeline and Generate Placeholder Placeholder Images

## Summary
Implement a centralized asset management system and generate a consistent set of T-Rex themed SVG/WebP placeholder images to replace broken links across the product catalog and UI. This ensures a professional user experience while maintaining the project's dinosaur-themed aesthetic.

## Approach
The strategy centers on creating a dedicated asset utility that resolves image URLs dynamically. I will first identify all hardcoded broken image paths in 'lib/seed.ts' and the 'app/products' pages. Then, I will develop a set of high-quality SVG/CSS-based placeholders that use the project's existing Tailwind color palette. Finally, I will update the database seeding logic and the 'SafeImage' component to handle fallback states gracefully, ensuring no layout shifts or broken 'img' tags are visible to the user.

## Tasks

- [x] **1. Inventory all broken image references** <!-- id:pAFSpD -->
  Scan 'lib/schema.ts', 'lib/seed.ts', and 'app/products/[id]/page.tsx' to identify current static URLs that are returning 404s.

- [x] **2. Create an Image Utility for fallbacks** <!-- id:B7zsAZ -->
  Implement a 'getPlaceholderImageUrl' function in 'lib/utils.ts' that generates a themed SVG data URI or returns a reliable local asset path based on category (e.g., bones, apparel, toys).

- [x] **3. Update Database Seeding Logic** <!-- id:IlMA-p -->
  Modify 'lib/seed.ts' to replace external broken URLs with programmatic placeholder paths or local public directory assets.

- [x] **4. Enhance 'SafeImage' component** <!-- id:WzrDny -->
  Update 'components/ui/safe-image.tsx' to include an 'onError' handler that automatically switches to a T-Rex branded fallback image if the primary source fails.

- [x] **5. Generate and Place Assets in Public Directory** <!-- id:ItmMaR -->
  Create 'public/placeholders' directory and add a set of optimized WebP images representing different product categories for the RexShop store.

- [ ] **6. Verify Product Grid Layouts** <!-- id:dW8P0z -->
  Audit 'components/products/product-card.tsx' and the product list page to ensure images maintain aspect ratios and look consistent with placeholders.

---
plan_id: F26dJ1dA
status: executing
created: 2026-02-02T11:22:26.411Z
