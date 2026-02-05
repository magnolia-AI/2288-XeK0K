# Header Button Visual Alignment and UI Refinement

## Summary
This plan addresses the aesthetic and alignment issues in the header buttons by standardizing sizing, refining the glassmorphic background of the cart icon, and perfecting the spacing between auth triggers and UI utilities. We will align every element to a strict geometric grid consistent with the Cinematic HUD branding.

## Approach
The core issue stems from inconsistent heights, variant paddings, and the lack of visual cohesion between the square 'Cart' icon, the 'Theme Toggle', and the text-based 'Sign In'/'Sign Up' buttons. 

I will implement the following changes:
1. Update the base `Button` component to ensure 'ghost' variants have predictable dimensions and 'rounded-none' is applied globally for the HUD aesthetic.
2. Modify `AuthHeader` to use a flex layout with standardized spacing (`gap-4` or `gap-6`) and vertical centering across all items.
3. Standardize the `CartSheet` and `ThemeToggle` triggers to share the exact same height and border treatment.
4. Refine the 'Sign Up' button to use a high-contrast 'secondary' or custom primary variant matching the 'Cinematic HUD' color palette defined in globals.css.

## Tasks

- [x] **1. Standardize Button Component Variants** <!-- id:PyEUEi -->
  Update 'components/ui/button.tsx' to ensure 'ghost' and 'outline' variants support the sharp, square edge aesthetic (removing default Radix 'rounded-md' where necessary) and adjust the 'icon' size to match the preferred 40x40px or 36x36px header standard.

- [x] **2. Align Header Utility Icons** <!-- id:qEWp8l -->
  In 'components/auth-header.tsx', wrap the ThemeToggle, MobileNav, and CartSheet in a container with 'flex items-center gap-1'. Ensure the vertical separator (line 107) has consistent opacity and height.

- [x] **3. Refine Cart Button Visuals** <!-- id:O5yN6t -->
  Update the CartSheet trigger in 'components/cart-sheet.tsx' to remove the awkward dark background box seen in the reference image. Shift to a clean glass-effect border or a standard ghost variant that matches the ThemeToggle.

- [ ] **4. Standardize Auth Button Sizing** <!-- id:hcY62G -->
  Update the 'Sign in' and 'Sign up' buttons in 'components/auth-header.tsx'. Match the height of text-buttons to icon-buttons (h-10) and use consistent tracking and font-weight for the uppercase text.

- [ ] **5. Verify HUD Style Color Consistency** <!-- id:8R7gau -->
  Apply 'oklch' based colors from 'globals.css' to the buttons to ensure the 'Sign Up' button has a professional high-contrast dark-to-light or primary-to-background relationship as per the site's cinematic theme.

---
plan_id: JDv1-gzk
status: executing
created: 2026-02-05T08:28:02.275Z
