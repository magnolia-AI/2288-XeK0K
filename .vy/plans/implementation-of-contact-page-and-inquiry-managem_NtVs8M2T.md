# Implementation of Contact Page and Inquiry Management

## Summary
Create a dedicated contact page and backend infrastructure to handle customer inquiries. This includes a new database schema for leads, a Next.js API route for form submission, and a fully functional UI integrated with the existing RexShop design system.

## Approach
The implementation will follow a full-stack approach: first, defining the database schema to store inquiries; second, creating a server-side API route for secure data handling; and finally, building the front-end page using shadcn/ui components. We will reuse the existing `ContactForm` logic but upgrade it from a 'template' state to a functional one using React Hook Form, Zod validation, and server actions or API routes.

## Tasks

- [ ] **1. Add 'leads' table to database schema** <!-- id:K2Kfm1 -->
  Update lib/schema.ts to include a 'leads' table with fields: id (serial), name (varchar), email (varchar), subject (varchar), message (text), and createdAt (timestamp).

- [ ] **2. Generate and run database migration** <!-- id:HmBjkJ -->
  Run 'bun db:generate' and 'bun db:push' to update the Neon database with the new leads table.

- [ ] **3. Create Contact API route** <!-- id:4d7xDw -->
  Create app/api/contact/route.ts to handle POST requests. Implement Zod validation for the payload and insert the data into the 'leads' table using Drizzle ORM.

- [ ] **4. Refactor ContactForm component for functionality** <!-- id:zhyWMc -->
  Modify components/contact-form.tsx to use react-hook-form and @hookform/resolvers/zod. Replace the 'setTimeout' mock with an actual fetch call to /api/contact.

- [ ] **5. Create the Contact Page** <!-- id:dxi9JO -->
  Create app/contact/page.tsx. Use a clean layout with a header, the ContactForm component on the left, and company information (address, email, map placeholder) on the right.

- [ ] **6. Add Contact link to Navigation** <!-- id:RGNo8f -->
  Update components/mobile-nav.tsx and any main navigation components to include a link to '/contact'.

---
plan_id: Gr-vL3OS
status: draft
created: 2026-02-04T21:09:17.633Z

