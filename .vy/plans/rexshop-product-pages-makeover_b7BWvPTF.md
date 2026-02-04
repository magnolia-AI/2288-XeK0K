# RexShop Product Pages Makeover

## Summary
This plan involves a comprehensive UI/UX overhaul of the product listing and detail pages, introducing advanced filtering, enhanced product cards with hover states, and a high-conversion product detail layout. The goal is to align the experience with a premium 'T-Rex' themed e-commerce aesthetic using Shadcn UI and Framer Motion.

## Approach
The approach focuses on three core areas: Page Layout, Component Enhancement, and User Interaction. First, we will refactor the product grid to support dynamic layout shifts between grid and list views. Second, we will enhance the existing 'product-card.tsx' and 'product-filters.tsx' with better visual hierarchies and glassmorphic styles already present in the project. Finally, the product detail page will be restructured to include image galleries, stock status indicators from the inventory table, and sticky purchase actions.

## Tasks

- [x] **1. Refactor Product Listing Page Grid** <!-- id:QjiGkK -->
  Update 'app/products/page.tsx' to use a responsive grid (1 col mobile, 3-4 cols desktop) with a sidebar for filters. Implement a 'Sort By' dropdown using 'components/ui/select.tsx'.

- [x] **2. Enhance Product Cards with Hover Effects** <!-- id:B-EfM9 -->
  Update 'components/products/product-card.tsx' to include secondary image swap on hover, badge overlays for sales/new arrivals, and a quick-add-to-cart overlay.

- [x] **3. Implement Advanced Sidebar Filters** <!-- id:WzZVgB -->
  Modify 'components/products/product-filters.tsx' to include range sliders for price, category checkboxes, and size/color availability filters based on 'lib/schema.ts'.

- [x] **4. Modernize Product Detail Page Layout** <!-- id:SvqEIN -->
  Completely redesign 'app/products/[id]/page.tsx' using a split-screen layout on desktop: an image carousel from 'components/ui/carousel.tsx' on the left, and product info, price, and variant selectors on the right.

- [ ] **5. Integrate Inventory and Stock Status** <!-- id:fROTjF -->
  Update product fetching logic to check the 'inventory' table via 'lib/db.ts'. Display 'In Stock', 'Low Stock', or 'Out of Stock' badges on both listing and detail pages.

- [ ] **6. Add Motion and Transitions** <!-- id:ShWmu3 -->
  Use Framer Motion to add staggered entrance animations for the product grid and smooth transitions between product images on the detail page.

- [ ] **7. Implement Breadcrumb Navigation** <!-- id:3Dh_BB -->
  Integrate 'components/ui/breadcrumb.tsx' in '/products' and '/products/[id]' to ensure easy navigation back to categories and home.

---
plan_id: FAPPvtqb
status: executing
created: 2026-02-04T11:43:05.210Z
