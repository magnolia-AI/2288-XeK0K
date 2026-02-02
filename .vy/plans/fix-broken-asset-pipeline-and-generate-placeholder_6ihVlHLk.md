# Fix Broken Asset Pipeline and Generate Placeholder Images

## Summary
This plan addresses broken image links across the site by generating a set of high-quality dinosaur-themed placeholder assets using a consistent style. It involves updating the database schema/seed data and the frontend components to ensure reliable asset delivery.

## Approach
The approach focuses on replacing missing static assets with a unified set of generated images. First, I will identify all broken image references in the seeding script and existing product data. Next, I will use an AI image generation tool to create a consistent set of T-Rex and dinosaur-themed product images. These will be hosted locally in the public folder to avoid external link rot. Finally, I will update the Prisma/Drizzle schema and seed scripts to point to these local assets and implement a robust fallback mechanism in the ProductCard component using Next.js Image 'onError' handlers.

## Tasks

- [x] **1. Audit all current product image references** <!-- id:Ql8Rvk -->
  Scan lib/seed.ts and components/products/product-card.tsx to identify currently hardcoded URLs or broken external placeholders.

- [x] **2. Generate high-quality T-Rex product assets** <!-- id:Vb9mte -->
  Create a base set of 10-12 images (e.g., T-Rex plush, Fossil kit, Dino-mug) using a consistent artistic style (e.g., 3D render or professional studio photography).

- [x] **3. Organize assets in the public directory** <!-- id:Gpqf4R -->
  Save the generated images to public/images/products/ using descriptive naming conventions like 't-rex-plush-01.webp'.

- [ ] **4. Update database seeding logic** <!-- id:3N9QZC -->
  Modify lib/seed.ts to reference local paths like '/images/products/t-rex-plush-01.webp' instead of external placeholder URLs.

- [ ] **5. Implement Image fallback in ProductCard component** <!-- id:0Bh1vI -->
  Update components/products/product-card.tsx to use a default placeholder image if the source fails to load or is missing.

- [ ] **6. Update Product Detail page assets** <!-- id:rbzczh -->
  Ensure app/products/[id]/page.tsx correctly handles the new local paths and displays high-resolution versions of the generated images.

- [ ] **7. Verify responsive image rendering** <!-- id:_ZtL-_ -->
  Test across different screen sizes to ensure the SVG/WebP generated assets scale correctly without layout shifts.

---
plan_id: sT3G2EYt
status: executing
created: 2026-02-02T09:34:13.533Z
