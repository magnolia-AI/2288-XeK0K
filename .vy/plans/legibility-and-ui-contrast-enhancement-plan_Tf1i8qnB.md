# Legibility and UI Contrast Enhancement Plan

## Summary
This plan focuses on improving the visual clarity and legibility of the RexShop application by refining the CSS theme, strengthening the header contrast, and optimizing the home page content for better readability against cinematic backgrounds.

## Approach
The approach prioritizes WCAG-aligned contrast ratios and balanced typography. High-level steps include: 1. Adjusting OKLCH color variables to ensure text-to-background contrast hits 4.5:1 (AA) or better. 2. Redesigning the 'glass' effect in the header and UI components to have higher opacity and stronger border definitions. 3. Increasing the base font sizes of navigation elements and HUD-style labels. 4. Adjusting the hero section's visual hierarchy to ensure massive typography remains readable over the background video through enhanced shadowing and layering. 5. Switching ultra-thin font weights to medium/semi-bold for critical interactive elements.

## Tasks

- [x] **1. Refine global CSS color variables for better accessibility contrast.** <!-- id:-Mk0eH -->
  In app/globals.css, update --muted-foreground for dark mode to oklch(0.85 0.01 220) and --border to oklch(1 0 0 / 25%). Adjust .glass-header background-color from 70% to 85% opacity to prevents background bleed-through.

- [x] **2. Enhance AuthHeader legibility and navigation layout.** <!-- id:7FnP_8 -->
  In components/auth-header.tsx, increase navigation link font size from text-[13px] to text-sm (14px). Reduce tracking-widest to tracking-wider. Update the Auth button borders from ring-1 to ring-[1.5px] and increase the opacity of the white/10 vertical separator.

- [x] **3. Optimize Hero section typography and contrast in app/page.tsx.** <!-- id:YqCElM -->
  Increase the hero paragraph text-size to text-xl and add a more pronounced text-shadow (text-glow-hud). Adjust the 'HUD elements' labels from text-[10px] to text-xs to improve readability.

- [x] **4. Improve Feature Card contrast and typography in the home page.** <!-- id:Pvxa3Z -->
  In the 'Facility standards' section of app/page.tsx, change p-16 to px-12 py-16 for better text flow. Ensure p.text-zinc-300 has a higher contrast relative to the black background by bumping it to zinc-200 or white/90.

- [x] **5. Standardize Button and Input contrast across the app.** <!-- id:IYc1-H -->
  Update the default button variants in components/ui/button.tsx or app/globals.css to ensure that 'outline' variants have a minimum 2px border and that primary text-glow is not so bright that it obscures the text label.

- [x] **6. Adjust Footer legibility and spacing.** <!-- id:_XYMZv -->
  In components/footer.tsx, increase the font-size of the newsletter input and footer links. Change lower-case paragraphs to standard sentence-case for faster scanning.

---
plan_id: LDeOsfSn
status: executing
created: 2026-02-05T12:32:01.460Z
