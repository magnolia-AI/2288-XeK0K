# Contact Form and Inquiry Management Implementation

## Summary
This plan involves building a dedicated contact page with a high-performance form and a backend API to capture leads. It leverages the existing 'leads' or 'contacts' schema to persist messages and utilizes existing UI components for a consistent design.

## Approach
The implementation will follow a standard Next.js App Router pattern. 1) Define or extend the database schema in 'lib/schema.ts' to handle contact inquiries. 2) Create a Server Action or API Route at 'app/api/contact/route.ts' to process form submissions. 3) Build a client-side 'ContactForm' component using 'react-hook-form', 'zod' for validation, and shadcn/ui components. 4) Create the 'app/contact/page.tsx' to host the form and contact information. 5) Integrate 'sonner' or 'toast' for user feedback on submission success/failure.

## Tasks

- [ ] **1. Verify and update 'lib/schema.ts' with a 'contacts' table** <!-- id:uAL-w8 -->
  Ensure there is a table to store 'name', 'email', 'subject', and 'message' fields. Run 'bun drizzle-kit generate' if changes are made.

- [ ] **2. Create 'components/contact-form.tsx' if it doesn't exist or refine the current placeholder** <!-- id:KJIB3q -->
  Use shadcn/ui 'Form', 'Input', 'Textarea', and 'Button'. Implement validation using a zod schema for email and message length.

- [ ] **3. Implement 'app/api/contact/route.ts' for form handling** <!-- id:hvukw3 -->
  Create a POST handler that validates the request body using the same zod schema and inserts the data into the database using 'db.insert(contacts)'.

- [ ] **4. Create the 'app/contact/page.tsx' route** <!-- id:Sd-M_2 -->
  Design a clean layout including the 'ContactForm' and static contact details (office address, email, phone). Ensure it uses the 'auth-header' and 'footer' components.

- [ ] **5. Add submission feedback and loading states** <!-- id:U5zRUY -->
  Update the 'ContactForm' to use 'useTransition' or local state to disable the button during submission and trigger a success toast from 'hooks/use-toast.ts' upon completion.

- [ ] **6. Link the contact page in the navigation** <!-- id:QmlRM2 -->
  Update 'components/mobile-nav.tsx' and any main navigation components to include a link to '/contact'.

---
plan_id: WzkP5num
status: draft
created: 2026-02-04T18:57:31.257Z

