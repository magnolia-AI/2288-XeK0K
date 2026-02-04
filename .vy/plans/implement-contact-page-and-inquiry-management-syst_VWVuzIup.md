# Implement Contact Page and Inquiry Management System

## Summary
This plan involves creating a dedicated contact page at `/contact`, establishing a database schema for inquiries, and implementing a server-side API to handle form submissions with validation.

## Approach
The implementation will follow a standard Next.js 15 full-stack pattern. First, I will update the Drizzle schema to include a 'leads' table for tracking inquiries. Next, I will create a Next.js Server Action or API route to handle the submission, replacing the current simulation in `ContactForm.tsx`. Finally, I will build the `/contact` page using the existing `ContactForm` component and any necessary UI enhancements to ensure a high-quality user experience.

## Tasks

- [ ] **1. Add 'leads' table to database schema** <!-- id:fq-C-j -->
  Update `lib/schema.ts` to include a new table for contact submissions with fields: id (uuid/serial), name (varchar), email (varchar), message (text), and createdAt (timestamp).

- [ ] **2. Generate and apply database migrations** <!-- id:RcZy8k -->
  Run `bun db:generate` followed by `bun db:push` to sync the new schema with the Neon database.

- [ ] **3. Create API route for contact form submissions** <!-- id:fD4WBE -->
  Create `app/api/contact/route.ts` to receive POST requests. It should validate the input using Zod and insert the record into the 'leads' table using Drizzle.

- [ ] **4. Update ContactForm component with real logic** <!-- id:qgEKJV -->
  Modify `components/contact-form.tsx` to use `fetch` to call the new contact API. Replace the `setTimeout` simulation with actual error handling and success notifications via `useToast`.

- [ ] **5. Create the Contact page** <!-- id:TxFQ0y -->
  Create `app/contact/page.tsx` as a public route. Design the layout to include the `ContactForm` alongside office location details, contact emails, and social links to match the site theme.

---
plan_id: V3lry7Ev
status: draft
created: 2026-02-04T21:01:40.184Z

