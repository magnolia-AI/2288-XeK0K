# Standardization of UI Colors to CSS Variables

## Summary
This plan addresses the UI color inconsistencies by replacing hard-coded Tailwind color classes (like blue-600) with semantic CSS variables defined in globals.css. This ensures the application correctly respects the 'Cinematic HUD' theme and supports proper dark/light mode transitions.

## Approach
The approach focuses on auditing the existing component library for hard-coded color values and replacing them with semantic equivalents. 

1. Audit: Scan all components and pages for legacy color utility classes (e.g., bg-blue-600, text-zinc-400).
2. Mapping: Map these hard-coded colors to existing CSS variables (primary, secondary, muted-foreground, etc.) defined in globals.css.
3. Implementation: Refactor the component source code to use variable-linked Tailwind classes (e.g., text-primary, bg-background, text-muted-foreground).
4. Enhancement: Update globals.css if any essential semantic tokens are missing to ensure design consistency across the 'RexShop' experience.

## Tasks

- [x] **1. Remove hard-coded blue-600 badge coloring in product cards** <!-- id:4zo1M- -->
  Update 'components/products/product-card.tsx' to replace 'bg-blue-600' with 'bg-primary' and 'text-white' with 'text-primary-foreground' to align with the Cinematic HUD theme.

- [x] **2. Standardize Zinc-based text to semantic muted-foreground** <!-- id:jUEBiy -->
  Scan 'components/footer.tsx', 'app/page.tsx', and 'app/about/page.tsx' to replace utility classes like 'text-zinc-400' and 'text-zinc-500' with 'text-muted-foreground'. This ensures text remains legible across different theme modes.

- [x] **3. Refactor Quest UI to use semantic variables** <!-- id:V0q8_A -->
  Update 'components/ui/quest-completion-toast.tsx' to replace 'bg-zinc-900' and 'text-zinc-500' with semantic background or muted variables.

- [x] **4. Audit and replace hard-coded border colors** <!-- id:yxLwTT -->
  Locate files using 'border-white/10' or 'border-zinc-900' and replace them with 'border-border' or a secondary-themed variant where appropriate.

- [ ] **5. Refactor Facility Standards section background colors** <!-- id:n0H9j3 -->
  In 'app/page.tsx', replace 'bg-zinc-950' and 'bg-black' with 'bg-background' or 'bg-card' to ensure consistent layering in the HUD design.

- [ ] **6. Clean up globals.css and tailwind.config.ts overlaps** <!-- id:U6b0z- -->
  Verify that all CSS variables referenced in the oklch format in 'globals.css' are correctly mapped in 'tailwind.config.ts' without any missing fallbacks.

---
plan_id: G61LDXqe
status: executing
created: 2026-02-05T14:40:27.103Z
