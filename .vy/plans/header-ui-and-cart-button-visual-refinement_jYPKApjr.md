# Header UI and Cart Button Visual Refinement

## Summary
This plan addresses the 'weird' appearance of the cart button by aligning its styling with the project's cinematic HUD aesthetic. Key improvements include consistent sizing, industrial borders, and harmonizing the shopping cart icon with account buttons.

## Approach
The current header has a mix of rounded-none components and default Radix UI components, leading to visual inconsistency. I will standardize the CartSheet trigger and ThemeToggle to match the 'Account' button's sharp, industrial look. Specifically, I will apply 'rounded-none', 'ring-1', and consistent 'h-9 w-9' dimensions across all header utility buttons. I will also refine the cart notification badge to use a sharp rectangular shape and ensure the icons are perfectly centered within their borders.

## Tasks

- [x] **1. Align CartSheet trigger styling with Account button** <!-- id:p6rcfl -->
  Update 'components/cart-sheet.tsx' to change the CartSheet trigger button. Remove 'rounded-none' on the button and apply 'ring-1 ring-white/10 transition-all hover:ring-primary/50' to match the account dropdown button in 'auth-header.tsx'.

- [x] **2. Refine the Cart Item Counter badge** <!-- id:Qe-893 -->
  In 'components/cart-sheet.tsx', update the pill badge from 'rounded-none' to a sharp rectangle with a pixel-perfect offset. Ensure it uses the 'oklch' primary color from globals.css for a glow effect.

- [x] **3. Standardize Header Utility Button sizes** <!-- id:45AUBK -->
  Ensure 'CartSheet', 'ThemeToggle', and 'MobileNav' buttons all share the exactly identical height, width (h-9 w-9), and border styles. Currently, some use 'border' while others use 'ring-1'.

- [x] **4. Harmonize ThemeToggle appearance** <!-- id:P3U15D -->
  Modify 'components/theme-toggle.tsx' to add 'rounded-none' and 'ring-1 ring-white/10' to the DropdownMenuTrigger button, removing the default rounded icon-button look.

- [ ] **5. Fix Cart Sheet item image rendering** <!-- id:UA8b71 -->
  Update the cart item list in 'components/cart-sheet.tsx' to use sharp 'rounded-none' corners for product thumbnails and add a subtle 'border-white/5' to the image containers to match the HUD theme.

- [ ] **6. Add hover state transitions to Header Icons** <!-- id:-jKw6b -->
  In 'auth-header.tsx' and 'cart-sheet.tsx', add a slight 'group-hover' scale or lift to the icons within the buttons to provide better visual feedback during interaction.

---
plan_id: BH-aPvnb
status: executing
created: 2026-02-05T09:53:14.718Z
