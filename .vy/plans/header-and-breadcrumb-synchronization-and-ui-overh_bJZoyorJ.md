# Header and Breadcrumb Synchronization and UI Overhaul

## Summary
This plan focuses on enhancing the visual consistency and aesthetic quality between the main site header and the breadcrumb navigation system. It introduces a unified design language, improved responsive behavior, and polished UI components using the existing Shadcn/UI framework.

## Approach
The approach involves auditing the current implementations of `auth-header.tsx`, `mobile-nav.tsx`, and `breadcrumb.tsx` to identify styling discrepancies. We will then define a shared set of design tokens (padding, background blur, border styles) in the Tailwind configuration or shared utility classes. The Header will be updated to use a sticky glassmorphism effect, and the Breadcrumb component will be integrated into the layout or header container to ensure vertical alignment and consistent spacing across all pages. Finally, we will ensure that the Breadcrumb properly consumes the current route and mirrors the typography of the navigation links.

## Tasks

- [x] **1. Unify Header and Breadcrumb layout container** <!-- id:QJfJ2O -->
  Update the root `app/layout.tsx` or a shared wrapper to ensure both the header and the breadcrumb share the same horizontal padding and max-width constraints (e.g., `container mx-auto px-4`).

- [ ] **2. Refactor `components/auth-header.tsx` for glassmorphism styling** <!-- id:wTfE0K -->
  Apply `sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60` to the header element to provide a modern, high-end feel.

- [ ] **3. Apply matching styles to Breadcrumb component** <!-- id:p_sxqj -->
  Modify `components/ui/breadcrumb.tsx` or its implementation in page layouts to use the same text-muted-foreground colors and font sizes as the navigation links in the header.

- [ ] **4. Enhance Breadcrumb visibility and spacing** <!-- id:WGSCLC -->
  Add a dedicated section below the header in `app/layout.tsx` or individual product pages (`app/products/[id]/page.tsx`) that houses the breadcrumb with consistent top/bottom padding (e.g., `py-4`) that scales with the header's height.

- [ ] **5. Synchronize active states and hover effects** <!-- id:4VKtbB -->
  Ensure that hover states for breadcrumb items match the navigation link hover states (e.g., simple opacity change or color shift to primary) defined in `auth-header.tsx`.

- [ ] **6. Update mobile-nav.tsx for consistency** <!-- id:FL_-6_ -->
  Ensure the sheet-based mobile navigation utilizes the same typography and iconography as the desktop breadcrumb for a seamless transition between viewports.

- [ ] **7. Final Audit of 'Products' and 'Account' pages** <!-- id:5Gb9iH -->
  Test `app/products/page.tsx` and `app/account/settings` to verify that breadcrumbs align perfectly with the redesigned header under various scroll positions.

---
plan_id: jzGOdnj5
status: executing
created: 2026-02-02T18:20:25.583Z
