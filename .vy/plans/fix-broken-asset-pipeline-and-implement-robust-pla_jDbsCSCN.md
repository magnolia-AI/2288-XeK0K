# Fix Broken Assets with Automated Product Image Generation

## Summary
This plan remedies broken product images by purging stale local assets and introducing a generation utility that creates themed placeholder images based on product names. It ensures the storefront remains visually consistent even when external stock photos are unavailable.

## Approach
The approach focuses on data integrity and dynamic fallbacks. First, we will clean the public folder of existing broken images. Next, we will implement a utility that uses the Product Name to fetch or generate a relevant themed image (using a service like Unsplash Source or a canvas-based SVG generator). Finally, we will update the database seed to point to these generated paths and standardize the SafeImage component to handle dynamic fallbacks specifically for our T-Rex theme.

## Tasks

- [x] **1. Clean current public folder images** <!-- id:q9LQHr -->
  Remove existing .jpg, .png, and .webp files in the 'public/' directory that are currently broken or unused to ensure a fresh start.

- [x] **2. Create a name-based image generator utility in lib/utils.ts** <!-- id:Ga3Qm8 -->
  Implement 'generateProductImage(name: string)' which returns a URL from a service like 'https://images.unsplash.com/photo-...' using the product name as a query, or generates a themed SVG placeholder if the service is unreachable.

- [x] **3. Refactor lib/seed.ts to use the image generator** <!-- id:bvf8s8 -->
  Update the product seeding logic to call the new generator utility for each product instead of using hardcoded, brittle Unsplash URLs.

- [ ] **4. Enhance components/ui/safe-image.tsx with smart-fallback** <!-- id:O1bPEv -->
  Update the component to accept a 'productName' prop. If the main 'src' fails to load, use the name-based generator as the fallback source.

- [ ] **5. Standardize all product components** <!-- id:eYW7Tz -->
  Ensure 'components/products/product-card.tsx' and 'app/products/[id]/page.tsx' use the enhanced 'SafeImage' with the product name passed in.

- [ ] **6. Verify static asset deployment** <!-- id:nmWILe -->
  Check 'open-next.config.ts' to ensure it doesn't try to bundle the deleted images and handles the dynamic image routing correctly.

---
plan_id: 2yEmm5jj
status: executing
created: 2026-02-02T12:09:29.134Z
