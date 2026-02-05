# Legibility and UI Refinement Overhaul

## Summary
This plan focuses on enhancing the legibility of the RexShop application by refining the global CSS theming, consistent component styling, and optimizing the hero/feature sections of the home page. The goal is to maintain the cinematic HUD aesthetic while improving text clarity and interface consistency across all screen sizes.

## Approach
The approach targets three key areas: 1) Systemic CSS adjustments to typography and contrast in `globals.css`, 2) Modernizing the Header to ensure accessibility over complex background media, and 3) Refactoring the Home page layout for better content hierarchy. Key decisions include standardizing on a 'brutalist-cinematic' sharp-corner aesthetic (radius: 0) for all interactive components and increasing font weight/size for critical HUD labels that are currently too small for comfortable reading.

## Tasks

- [x] **1. Refine global typography and contrast in `globals.css`** <!-- id:Abj_2_ -->
  Update the `--muted-foreground` in `.dark` mode to a higher lightness oklch value for better AA compliance. Increase the base line-height slightly and reduce the blur radius on `.text-glow-hud` to prevent character bleeding. Ensure `--radius` is consistently `0rem` to match the brand identity.

- [ ] **2. Enhance `AuthHeader` legibility and accessibility** <!-- id:jkIffP -->
  In `components/auth-header.tsx`, increase nav link font size from `text-[13px]` to `text-[14px]` and change font-weight to `font-bold`. Update the `glass-header` utility to use a higher opacity background (e.g., `oklch(0 0 0 / 85%)`) to ensure the menu remains readable when scrolling over bright video segments.

- [ ] **3. Standardize `MobileNav` and `ThemeToggle` appearance** <!-- id:0-dhYn -->
  Update `components/mobile-nav.tsx` and `components/theme-toggle.tsx` to remove `rounded-xl` or `rounded-lg` classes. Replace them with `rounded-none` to align with the sharp-edged cinematic HUD aesthetic used in the rest of the site.

- [ ] **4. Optimize Hero section contrast on the Home page** <!-- id:F4K2KK -->
  In `app/page.tsx`, adjust the `brightness-[0.25]` of the video to `brightness-[0.20]`. Add a subtle text-shadow to the main paragraph (lines 49-52) and ensure the 'GENETIC MASTERPIECES' heading has a clear z-index and spacing from the HUD elements.

- [ ] **5. Responsive layout pass for Home page feature cards** <!-- id:ztxNL7 -->
  Refactor the 'Facility standards' section in `app/page.tsx`. Currently uses `p-16` which is too large for mobile. Change to `p-8 md:p-16`. Ensure the `desc` text (lines 118-120) uses a color with higher contrast against the card background (e.g., `text-zinc-100` instead of `text-zinc-300`).

- [ ] **6. Refine button states and interaction clarity** <!-- id:iWH3j1 -->
  Update `components/ui/button.tsx` (via tailwind classes in Home) to ensure that the `outline` variant has a minimum 1.5px border width for better visibility against the noisy background gradients.

---
plan_id: _GRZnot1
status: executing
created: 2026-02-05T12:26:12.644Z
