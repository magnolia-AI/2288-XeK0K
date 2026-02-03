# Home Page Contrast and Visibility Fixes

## Summary
This plan addresses accessibility and legibility issues on the home page by synchronizing the header theme with the hero section, increasing typography contrast, and refining glassmorphism effects. The goal is to ensure all HUD elements and text are clear against dark video backgrounds.

## Approach
The approach focuses on three areas: theme synchronization, typography color refinement, and glassmorphism adjustments. First, we will update the default theme to 'dark' in the layout to match the cinematic brand identity, preventing light-mode header clashes. Second, we will replace low-contrast gray colors (text-gray-400/500) with higher-contrast zinc alternatives (text-zinc-300). Third, we will modify the global CSS for glassmorphism to ensure the frosted glass effect has adequate contrast regardless of the content scrolling beneath it. Finally, we will boost the opacity of decorative HUD elements and 'Secure Genetic Uplink' badges to enhance the high-tech terminal aesthetic without sacrificing readability.

## Tasks

- [x] **1. Align Global Theme with Brand Identity** <!-- id:QnubPg -->
  Modify 'app/layout.tsx' to set 'defaultTheme="dark"' and 'enableSystem={false}' in the ThemeProvider to ensure the initial render matches the intended dark cinematic aesthetic of RexShop.

- [x] **2. Refine Header Glassmorphism and Border Contrast** <!-- id:QN2-bd -->
  Update '.glass-header' in 'app/globals.css'. Adjust 'backdrop-blur' to '12px' and change the border color from 'var(--border)' to a fixed semi-transparent white like 'rgba(255,255,255,0.1)' to ensure edge definition on the dark home page.

- [x] **3. Increase Contrast for Hero Section Typography** <!-- id:jhPu_m -->
  In 'app/page.tsx', update hero description text from 'text-gray-400' to 'text-zinc-300'. Ensure the 'Facility Standards' section description uses 'text-zinc-400' instead of 'text-gray-500' for better legibility on pure black.

- [ ] **4. Enhance HUD and Decorative Element Visibility** <!-- id:28p9Ed -->
  Locate decorative scan lines and terminal data points in 'app/page.tsx' (e.g., coordinates, sector IDs). Change opacity from 'text-white/20' to 'text-white/45' to make them visible but still subordinate to primary content.

- [ ] **5. Update Hero Badge and Button Contrast** <!-- id:rFTPdd -->
  Refine the 'Secure Genetic Uplink' badge in the hero section by increasing the opacity of 'text-primary-foreground/80' to '/100'. Adjust the 'Lineage Verification' button to use 'bg-white/10' and 'border-white/20' for a more distinct交互 state.

---
plan_id: mdSSzDbk
status: executing
created: 2026-02-03T20:55:35.020Z
