# Global UI Consistency and Light Mode Refinement Plan

## Summary
This plan implements a comprehensive sweep of the codebase to replace hardcoded utility colors (like zinc, red, green) with CSS variables that adapt correctly to both light and dark modes. It ensures that the 'Cinematic HUD' aesthetic remains legible and high-contrast across the entire application interface.

## Approach
The approach focuses on standardizing the color palette by moving away from Tailwind's default palette (e.g., bg-zinc-900) to semantic CSS variables defined in global.css (e.g., bg-card or bg-muted). We will specifically target hardcoded 'zinc' values that currently make light mode appear 'dirty' or inconsistent, and refine high-visibility elements like badges and buttons to use oklch-based brand colors. Key steps include:
1. Auditing app/page.tsx, components/footer.tsx, and components/auth-header.tsx for hardcoded zinc/black/white classes.
2. Updating components/contact-form.tsx to match the cinematic HUD style.
3. Refining the product card and badge components to use theme-aware semantic tokens instead of static red-600/green-600 colors.

## Tasks

- [x] **1. Audit and replace hardcoded zinc and white classes in AuthHeader** <!-- id:LXysMF -->
  In components/auth-header.tsx, replace 'bg-zinc-900' with 'bg-muted' or 'bg-card', and 'text-white/50' with 'text-muted-foreground'. Ensure the dropdown menu uses theme-aware borders instead of hardcoded 'white/10'.

- [ ] **2. Refine Home Page hero and section backgrounds** <!-- id:wRCKXo -->
  Update app/page.tsx to replace hardcoded 'bg-zinc-950', 'bg-zinc-900', and 'text-zinc-200' with semantic variables. Ensure the grid in the 'Facility standards' section uses 'bg-border' for the gap lines instead of a static zinc color.

- [ ] **3. Sanitize Footer colors for light mode compatibility** <!-- id:UAHaDe -->
  In components/footer.tsx, change 'bg-black' to 'bg-background', and 'text-zinc-400'/'text-zinc-200' to 'text-muted-foreground'. Ensure the newsletter input uses themed 'border-input' and 'bg-transparent' instead of hardcoded white/10.

- [ ] **4. Update Product Cards and Badges to use semantic status colors** <!-- id:k0RMhj -->
  In components/products/product-card.tsx and app/products/[id]/page.tsx, replace 'bg-red-600', 'bg-green-600', and 'bg-orange-600' with utility classes or new CSS variables that provide sufficient contrast in light mode (e.g., use oklch status variables).

- [ ] **5. Thematize the Contact Form** <!-- id:llKl9Z -->
  In components/contact-form.tsx, update labels and inputs to use the HUD typography (font-bold, uppercase tracking-widest) and ensure the button matches the primary brand style defined in the hero section.

- [ ] **6. Final verification of contrast ratios in Light Mode** <!-- id:or-7li -->
  Review globals.css oklch values for light mode to ensure --muted-foreground (currently oklch(0.4 0 0)) and --primary (oklch(0.2 0 0)) meet AA accessibility standards against the white background.

---
plan_id: ePvwNWJD
status: executing
created: 2026-02-05T15:06:01.518Z
