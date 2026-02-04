# Implementation of Contact Page and Lead Management System

## Summary
Create a modern contact page with a validated form that collects user inquiries and saves them to the database. The system will leverage existing UI components and the Neon database for lead management.

## Approach
Identify the existing 'contact-form.tsx' component and ensure it is fully functional with Zod validation. I will then create a new 'Contact Us' page in 'app/contact/page.tsx' to host the form. Backend logic will be implemented as a Next.js Server Action or API route to handle submissions, specifically inserting data into a new 'leads' or 'contacts' table in the database using Drizzle ORM. Finally, I will ensure the global navigation is updated to link to the new page.

## Tasks

- [ ] **1. Define the contact leads schema in 'lib/schema.ts'** <!-- id:LwAYuM -->
  Add a 'leads' table with columns for id (id), name (text), email (text), message (text), and createdAt (timestamp).

- [ ] **2. Generate and run database migrations** <!-- id:BRH5iH -->
  Run 'bunx drizzle-kit generate' and 'bunx drizzle-kit migrate' to sync the new schema with the Neon database.

- [ ] **3. Refine the 'components/contact-form.tsx' component** <!-- id:xwsMbN -->
  Implement React Hook Form with Zod validation. Ensure it uses standard fields: name, email, and message. Connect it to the shadcn/ui 'form' components.

- [ ] **4. Create a Server Action for contact form submission** <!-- id:4b93sS -->
  Create 'app/actions/contact.ts' to handle data insertion into the 'leads' table and return success/error states to the client.

- [ ] **5. Build the Contact Page route** <!-- id:34_VRU -->
  Create 'app/contact/page.tsx'. Include a hero section with 'Contact Us' heading, the 'ContactForm' component, and company contact details like support email.

- [ ] **6. Integrate the Contact page into the site navigation** <!-- id:RPTaBY -->
  Update 'components/mobile-nav.tsx' and the main header/footer components to include a 'Contact' link.

- [ ] **7. Add success/error toast notifications** <!-- id:vBWyNx -->
  Integrate 'use-toast' in the 'ContactForm' to provide immediate feedback to the user after submission.

---
plan_id: 4xCSo6m3
status: draft
created: 2026-02-04T18:50:38.902Z

