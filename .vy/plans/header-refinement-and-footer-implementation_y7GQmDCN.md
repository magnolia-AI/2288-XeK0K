# Header Refinement and Footer Implementation

## Summary
This plan aims to polish the shop's navigation and layout by redesigning the header for better clarity and glassmorphism effect, and adding a comprehensive global footer to the application shell.

## Approach
The approach focuses on enhancing the UI/UX consistency across the app. 

1. First, refine the header's 'glassmorphism' effect by adjusting the `glass-header` utility and the header component's styling to ensure high legibility and a modern aesthetic. 
2. Second, create a new Footer component that aligns with the T-Rex shop theme, providing necessary navigational links and brand information.
3. Third, integrate the new footer into the main layout to ensure it persists across all pages, maintaining a sticky-bottom behavior where needed.

## Tasks

- [ ] **1. Improve glassmorphism utility in globals.css** <!-- id:_y5pJn -->
  Update the '.glass-header' class in 'app/globals.css' to use a more refined backdrop filter combined with a subtle white or black translucent border (depending on theme) to improve edge definition and contrast.

- [ ] **2. Refactor components/auth-header.tsx for a cleaner layout** <!-- id:MKM6fT -->
  Remove redundant gradients that conflict with the backdrop blur. Center-align navigation links where possible, or ensure consistent horizontal padding. Update the logo and link hover states with subtle transitions (e.g., opacity or scale).

- [ ] **3. Enhance header 'pending' (skeleton) state** <!-- id:oZMOQH -->
  Adjust the loading skeleton in 'auth-header.tsx' to match the exact dimensions and spacing of the final 'Signed In' and 'Signed Out' states to prevent layout shifts during hydration.

- [ ] **4. Create components/footer.tsx** <!-- id:xonuJg -->
  Implement a semantic <footer> component. Include sections for: 1. Brand (Icon + Name), 2. Shop (T-Rex Catalog, New Arrivals), 3. Support (Contact form link, Account settings), 4. A copyright notice and social links. Use 'text-muted-foreground' for secondary links.

- [ ] **5. Integrate Footer into app/layout.tsx** <!-- id:a9m-j7 -->
  Import and place the <Footer /> component inside the main <body> tag of 'app/layout.tsx'. Ensure it is positioned after the {children} content. Verify the 'flex-col' and 'flex-1' structure correctly pushes the footer to the bottom on short pages.

- [ ] **6. Responsive Audit** <!-- id:eYFzFt -->
  Test both the updated header and the new footer on mobile (using the 'MobileNav' and checking footer stack behavior) and desktop screen sizes.

---
plan_id: C6LhR6F5
status: draft
created: 2026-02-03T15:51:34.422Z

