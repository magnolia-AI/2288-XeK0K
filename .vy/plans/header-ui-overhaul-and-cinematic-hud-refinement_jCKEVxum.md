# Header UI Overhaul and Cinematic HUD Refinement

## Summary
This plan upgrades the RexShop header from its current basic state to a high-end cinematic HUD. It introduces modern typography, refined glassmorphism, smooth animations, and integrates the ThemeToggle for a cohesive user experience.

## Approach
The overhaul focuses on improving legibility and aesthetic premium-ness by leveraging existing OKLCH color variables and Radix UI components. Key decisions include: 1) Updating the 'glass-header' utility in globals.css to use a multi-layered backdrop-blur and more subtle border. 2) Refactoring its structure in components/auth-header.tsx to use a centered navigation with balanced spacing. 3) Integrating the ThemeToggle next to the CartSheet for utility density. 4) Adding subtle micro-interactions like scale-on-hover and animated underscores that match the high-tech brand identity.

## Tasks

- [x] **1. Refine the glass-header utility in app/globals.css** <!-- id:-9VTSm -->
  Update .glass-header to use a slightly more transparent background (oklch(0 0 0 / 70%)) and increase backdrop-blur to 24px for a more premium frosted effect. Ensure the bottom border is extremely subtle (border-b-white/5).

- [x] **2. Integrate ThemeToggle and refine layout in components/auth-header.tsx** <!-- id:4-x-A2 -->
  Import ThemeToggle from components/theme-toggle.tsx and place it beside the CartSheet. Update the container to use 'max-w-7xl' for better content alignment and replace hardcoded 'text-white/50' with 'text-muted-foreground' for proper theme-switching support.

- [ ] **3. Modernize navigation link styling in AuthHeader** <!-- id:QeWqvL -->
  Change font size from text-xs to text-[13px], update font-weight to medium, and increase tracking (tracking-widest). Implement a smoother transition for the active state underline using framer-motion or a CSS transition that expands from the center.

- [ ] **4. Enhance mobile navigation trigger and sheet in components/mobile-nav.tsx** <!-- id:4xwcWN -->
  Style the mobile menu button to match the header's glass aesthetics. Ensure the MobileNav links use the same OKLCH color tokens as the desktop header for consistency.

- [ ] **5. Uniform button styling across the header** <!-- id:pg1YZJ -->
  Ensure Sign In and Sign Up buttons use the secondary/primary variants from the UI library instead of custom inline styles to maintain brand consistency and hover states.

- [ ] **6. Verify header height and layout offset in app/layout.tsx** <!-- id:puN6em -->
  Ensure the main content area has a consistent padding-top (pt-16) to prevent the sticky header from overlapping page content, especially on product pages.

---
plan_id: NWdWqczL
status: executing
created: 2026-02-05T07:58:01.344Z
