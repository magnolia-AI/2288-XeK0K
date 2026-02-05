# Fix High-Impact CTA Button Visibility

## Summary
This plan addresses the visibility and alignment issues of the 'VIEW LINEAGE' button in the CTA section of the home page. The button currently suffers from low contrast and illegibility against the dark background, based on the provided visual references.

## Approach
The investigation shows that in 'app/page.tsx', the 'VIEW LINEAGE' button uses a 'variant="outline"' with style 'border-white/30 text-white'. The screenshot suggests that either the backdrop-blur or the text color is making the button label invisible or extremely low-contrast against the section's background. I will update the styling to ensure the button is clearly visible, matching the bold, high-contrast aesthetic of the 'REQUEST CLEARANCE' button while maintaining a secondary status. This will involve changing the border opacity, text color, and hover states to provide a solid visual anchor.

## Tasks

- [x] **1. Modify the 'VIEW LINEAGE' button styling in app/page.tsx** <!-- id:3urPr1 -->
  Update lines 202-204 in app/page.tsx. Change the className from 'border-white/30 text-white' to a higher contrast 'border-white text-white' or 'border-primary text-primary'. Ensure the button text is visible against the background by removing or adjusting 'backdrop-blur-xl' if it contributes to the washing out of the text.

- [x] **2. Enhance button hover state for better feedback** <!-- id:7p-71o -->
  Ensure the 'hover:bg-white/10' style provides sufficient contrast change, or consider 'hover:bg-white hover:text-black' to match the primary button's interactive pattern.

- [x] **3. Verify typography and responsiveness** <!-- id:QUtBa5 -->
  Check that the 'font-black' and 'text-xl' classes are rendering correctly on both mobile and desktop to prevent text clipping or overflow in the button container.

---
plan_id: -OeqgFxI
status: completed
created: 2026-02-05T14:10:25.383Z
