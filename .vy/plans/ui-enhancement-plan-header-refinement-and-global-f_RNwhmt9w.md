# UI Enhancement: Header Refinement and Global Footer Implementation

## Summary
Upgrade the REXSHOP user interface by refining the glassmorphism header for better legibility and implementing a comprehensive, modern global footer. This plan also integrates theme toggling into the main navigation and standardizes layout spacing across the application.

## Approach
The approach involves three main phases: styling stabilization, component creation, and layout integration. First, we will update the global CSS to provide a more sophisticated glassmorphism effect that works across light and dark modes. Second, we will refactor the AuthHeader to include the ThemeToggle and improved spacing using shadcn/ui components. Third, we will develop a multi-column responsive Footer component using Lucide icons and standardize its presence in the RootLayout to ensure a professional and complete look.

## Tasks

- [ ] **1. Refine glassmorphism utility in app/globals.css** <!-- id:oAfMvV -->
  Update the .glass-header class to use a more subtle backdrop-blur (md or lg) and a slight border-b (border-border/40) instead of heavy gradients to ensure high legibility.

- [ ] **2. Integrate ThemeToggle into AuthHeader** <!-- id:WWPHqV -->
  Import and place the ThemeToggle component from components/theme-toggle.tsx into the right-side actions container of components/auth-header.tsx, ensuring consistent spacing with CartSheet.

- [ ] **3. Improve Header Navigation Layout and Typography** <!-- id:f3PDQx -->
  Standardize navigation links in AuthHeader and MobileNav with hover:text-primary transitions and tracking-tight font weights to match REXSHOP branding.

- [ ] **4. Create the Global Footer component** <!-- id:mAQ3Wt -->
  Develop components/footer.tsx with a 4-column layout: Brand (Logo/Tagline), Shop Links, Support Links, and Company Info. Use lucide-react for social icons.

- [ ] **5. Integrate Footer into RootLayout** <!-- id:IixI2d -->
  Modify app/layout.tsx to include the new Footer component below the main element. Ensure the body uses a flex-col min-h-screen structure so the footer sticks to the bottom.

- [ ] **6. Standardize Main Content Padding** <!-- id:ziAUpR -->
  Verify and adjust the padding-top in app/layout.tsx to ensure content is not obscured by the sticky header, using a consistent utility like pt-16 or pt-20.

---
plan_id: 2PO-9AId
status: draft
created: 2026-02-03T14:50:37.712Z

