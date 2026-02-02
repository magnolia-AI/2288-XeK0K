# Enhance Glassmorphism Legibility and Contrast

## Summary
This plan addresses legibility issues in the glassmorphism UI by increasing background opacity, enhancing border definition, and applying more aggressive backdrop blurs. These changes will ensure content remains readable across varying background colors and imagery.

## Approach
The approach focuses on refining the 'glass' utility classes and component-specific styles to ensure strict WCAG compliance and visual clarity. First, I will update the global CSS variables to introduce higher-contrast surface colors. Next, I will modify the backdrop-blur values to ensure the background imagery doesn't interfere with text. Finally, I will apply 'double-layer' borders or ring offsets to UI elements like the Product Cards and Cart Sheet to provide better visual separation.

## Tasks

- [x] **1. Adjust global glassmorphism utility classes in app/globals.css** <!-- id:B7oC58 -->
  Increase the opacity of the background colors used for glass effects (e.g., changing from opacity 0.1 to 0.25). Increase standard backdrop-blur from 'blur-md' to 'blur-xl' for better text isolation.

- [x] **2. Refine Product Card legibility in components/products/product-card.tsx** <!-- id:Yc30L_ -->
  Apply a subtle semi-transparent background to the text area of the product card specifically. Add a 1px border with higher contrast (e.g., border-white/20 in dark mode) to define the card boundaries more clearly.

- [x] **3. Enhance Cart Sheet contrast in components/cart-sheet.tsx** <!-- id:aweqQt -->
  Update the SheetContent component to use a more opaque background variable. Ensure the close button and 'Checkout' actions have high-contrast shadows to pop against the glass background.

- [x] **4. Optimize Auth Header and Navigation visibility** <!-- id:FPSy6k -->
  Modify components/auth-header.tsx and components/mobile-nav.tsx to include a stronger 'mask' or 'gradient overlay' beneath the text to ensure legibility when scrolling over busy hero images.

- [x] **5. Audit text colors for glass components** <!-- id:MVfZLP -->
  Verify that all text components inside glass containers use 'foreground' or 'primary' colors instead of 'muted-foreground' to maintain high enough contrast ratios.

---
plan_id: rID1WDf6
status: completed
created: 2026-02-02T20:19:42.768Z
