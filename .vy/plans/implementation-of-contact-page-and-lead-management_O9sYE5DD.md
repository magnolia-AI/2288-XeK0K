# Implementation of Contact Page and Lead Management System

## Summary
Build a fully functional contact page featuring a secure form that collects user inquiries and saves them to the database. The system will include server-side validation, success/error feedback, and an API endpoint to handle the submission.

## Approach
The contact system will be built using modern React patterns and the existing UI components. First, I will update the database schema to include a 'contacts' or 'leads' table to persist messages. Then, I will create a Next.js Server Action or API route to handle the business logic of saving the data. Finally, I will integrate the existing 'contact-form.tsx' component with a new 'app/contact/page.tsx' and add navigation links to ensure accessibility for users.

## Tasks

- [ ] **1. Define database schema for contact inquiries** <!-- id:YbZddx -->
  Add a 'contacts' table to 'lib/schema.ts' with fields for id (uuid), name (text), email (text), subject (text), message (text), and createdAt (timestamp).

- [ ] **2. Generate and apply database migration** <!-- id:_s1dlQ -->
  Run 'bunx drizzle-kit generate' and migrate the changes to the Neon database to ensure the schema is in sync.

- [ ] **3. Create Contact form server action** <!-- id:WQkr0Y -->
  Implement a server action in 'app/contact/actions.ts' that validates input using Zod, inserts a record into the contacts table, and returns a success/error status.

- [ ] **4. Develop the Contact page route** <!-- id:JeAUjN -->
  Create 'app/contact/page.tsx' using the existing UI layout. Import and render the 'contact-form.tsx' component within a centered, responsive container.

- [ ] **5. Wire up ContactForm component logic** <!-- id:P4l023 -->
  Update 'components/contact-form.tsx' to use 'useForm' from react-hook-form, integrate the server action, and show feedback using the 'sonner' toast component.

- [ ] **6. Add navigation links to Header and Footer** <!-- id:BQ_1ij -->
  Update 'components/mobile-nav.tsx', 'components/footer.tsx', and the main navigation to include a link to the '/contact' page.

- [ ] **7. Verify form submission and validation** <!-- id:P3tDmm -->
  Test the form with various inputs to ensure client-side and server-side validation works, and verify that data appears correctly in the database.

---
plan_id: tGAxAJzC
status: draft
created: 2026-02-04T18:24:13.998Z

