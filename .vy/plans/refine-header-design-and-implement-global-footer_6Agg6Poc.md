# Refine Header Design and Implement Global Footer

## Summary
This plan focuses on enhancing the site navigation's cleanliness by streamlining the AuthHeader and MobileNav components, and introducing a professional multi-column footer. The goal is to improve visual hierarchy and ensure consistent branding across all pages.

## Approach
The approach involves three main phases: 1) Redesigning existing navigation components for better spacing and glassmorphism consistency. 2) Developing a reusable Footer component with social links, newsletter, and site structure. 3) Updating the root layout to incorporate the new footer while ensuring correct scroll behavior. I will leverage the existing shadcn/ui components like NavigationMenu, Input, and Button to maintain design system integrity.

## Tasks

- [ ] **1. Clean up and simplify the Header component** <!-- id:OKDB6M -->
  Modify `components/auth-header.tsx` to improve spacing and alignment. Replace bulky elements with a more refined NavigationMenu. Update glassmorphism effects (backdrop-blur) to ensure high legibility against varied backgrounds.

- [ ] **2. Enhance MobileNav responsiveness** <!-- id:J11HGy -->
  Update `components/mobile-nav.tsx` to use a cleaner drawer design. Ensure the mobile menu includes all primary navigation links and account settings shortcut consistent with the desktop view.

- [ ] **3. Create a comprehensive Footer component** <!-- id:CQsS3D -->
  Build `components/footer.tsx` with sections for: Shop (Categories), Support (Contact, FAQ), Company (About), and a Newsletter signup input. Include social media icons using Lucide-react.

- [ ] **4. Integrate Footer into the global layout** <!-- id:O-8TiX -->
  Update `app/layout.tsx` to include the Footer component below the main content. Ensure the main content area has a minimum height (`min-h-screen`) to push the footer to the bottom on short pages.

- [ ] **5. Standardize breadcrumb and header height synchronization** <!-- id:NbSR5R -->
  Adjust the main container padding in `app/layout.tsx` or individual page layouts to prevent header overlap and ensure the breadcrumbs have consistent vertical spacing across all routes.

- [ ] **6. Apply consistent theme-aware styling to new elements** <!-- id:PHVH3N -->
  Ensure the new footer and updated header use the design tokens defined in `tailwind.config.ts`, specifically respecting light/dark mode transitions via the ThemeProvider.

---
plan_id: jppUk__m
status: draft
created: 2026-02-03T14:48:20.519Z

