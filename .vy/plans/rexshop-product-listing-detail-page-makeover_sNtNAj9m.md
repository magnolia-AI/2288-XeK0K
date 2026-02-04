# RexShop Product Listing & Detail Page Makeover

## Summary
This plan upgrades the /products directory with a modern, high-conversion design featuring glassmorphism elements, advanced filtering, and a robust product detail view. It focuses on improving visual hierarchy, performance with server components, and better mobile responsiveness.

## Approach
The makeover will follow a three-tier approach: UI refinement, Feature enhancement, and Performance optimization. 

1. UI Refinement: Apply consistent glassmorphism across product cards and filter sidebars using Tailwind CSS. 
2. Feature Enhancement: Implement dynamic price range sliders and real-time category filtering. 
3. Detail Overhaul: Create a high-impact product layout in [id]/page.tsx with image galleries and clear CTAs. I will leverage existing hooks like use-cart.ts and components in components/products/.

## Tasks

- [ ] **1. Refactor Products Layout in app/products/page.tsx** <!-- id:BLnL1T -->
  Update the page to use a two-column grid layout (Sidebar + Main Content) on desktop and a drawer-based filter for mobile using components/ui/drawer.tsx.

- [ ] **2. Redesign Product Card Component** <!-- id:HbFB_u -->
  Modify components/products/product-card.tsx to include a hover-state overlay for 'Quick Add', improved typography using shadcn/ui badge for pricing/discounts, and glass-effect backgrounds matching the site theme.

- [ ] **3. Implement Advanced Filtering Logic** <!-- id:kTwfNg -->
  Enhance components/products/product-filters.tsx with a multi-checkbox category group and a shadcn/ui slider for price range filtering. Integrate these with URL search params for bookmarkable filters.

- [ ] **4. Overhaul Product Detail Page UI in app/products/[id]/page.tsx** <!-- id:SZu2q5 -->
  Update the detail page to feature a large image gallery (using carousel.tsx), a fixed 'Add to Cart' bar for mobile, and structured metadata for SEO.

- [ ] **5. Connect Inventory and Availability States** <!-- id:qP5opj -->
  Ensure add-to-cart-button.tsx handles 'Out of Stock' states gracefully by checking existing inventory fields in lib/schema.ts and updating the UI accordingly.

- [ ] **6. Optimize Skeleton Loading States** <!-- id:yrN9KG -->
  Update components/loading.tsx or create a product-specific skeleton in components/products/ to reduce layout shift during data fetching on the products grid.

- [ ] **7. Polish Glassmorphism and Transitions** <!-- id:RdfqAD -->
  Fine-tune tailwind.config.ts with custom 'backdrop-blur' utilities to ensure text legibility over diverse backgrounds in the product gallery and sidebar.

---
plan_id: CYUjiYu-
status: draft
created: 2026-02-04T11:12:04.573Z

