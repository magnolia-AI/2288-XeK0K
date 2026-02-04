# Implementation of Contact Page and Inquiry Management System

## Summary
This plan involves creating a dedicated '/contact' page, implementing a robust backend server action for form processing, and updating the site navigation to include contact links. The system will persist inquiries to a new database table for future administrative use.

## Approach
The implementation will follow a full-stack approach: 1) Update the database schema to handle contact submissions. 2) Create a Server Action for secure, type-safe form processing using Zod and Drizzle. 3) Build a high-fidelity Contact Page using existing 'glassmorphism' UI patterns to match the T-Rex shop aesthetic. 4) Integrate the 'ContactForm' component with real API logic. 5) Update the global Header and Footer components to ensure discoverability.

Key Decisions:
- Use Drizzle ORM to manage the 'contact_inquiries' table.
- Implement a dedicated Next.js Server Action to handle submissions without requiring a separate API route.
- Maintain the 'Apex Predator' branding (RexShop) in the UI text and design.

## Tasks

- [ ] **1. Define the contact inquiries table in lib/schema.ts** <!-- id:yrYUNc -->
  Add a 'contactInquiries' table with fields: id (uuid), name (varchar), email (varchar), message (text), status (varchar default 'unread'), and createdAt (timestamp).

- [ ] **2. Execute database migration** <!-- id:oYfIhh -->
  Run 'bun db:generate' and 'bun db:push' to sync the new schema with the Neon database.

- [ ] **3. Create a Server Action for contact submissions** <!-- id:KJ1BV4 -->
  Create 'app/contact/actions.ts'. Define a Zod schema for validation. Implement an 'submitContactForm' action that inserts data into the 'contactInquiries' table.

- [ ] **4. Refactor components/contact-form.tsx for production use** <!-- id:DxoM69 -->
  Replace the 'setTimeout' mock in 'handleSubmit' with a call to the new Server Action. Add 'react-hook-form' with the Zod resolver for client-side validation.

- [ ] **5. Create the Contact Page (app/contact/page.tsx)** <!-- id:RtTSrE -->
  Build a responsive page layout using the site's dark/glassy theme. Include office 'Coordinates' (fake addresses like 'Sector 7, Pangea'), a support email, and the 'ContactForm' component.

- [ ] **6. Update AuthHeader navigation links** <!-- id:_H5IGE -->
  Add 'Contact' to the 'navLinks' array in 'components/auth-header.tsx' so it appears in the main desktop and mobile navigation.

- [ ] **7. Update Footer connectivity links** <!-- id:qI2Utf -->
  Link the 'Mail' icon and the 'Connectivity' column in 'components/footer.tsx' to the new '/contact' route.

---
plan_id: TQg0ILY3
status: draft
created: 2026-02-04T21:13:26.704Z

