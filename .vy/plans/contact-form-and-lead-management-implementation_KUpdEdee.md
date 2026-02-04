# Contact Form and Lead Management Implementation

## Summary
Implement a fully functional contact form on the frontend and a corresponding backend service to store inquiries. This includes a dedicated Contact page, form validation, and database schema updates for lead tracking.

## Approach
The implementation will follow a full-stack approach. First, the database schema will be extended to include a 'leads' table using Drizzle ORM. Next, a server action will be created to handle form submissions securely. The frontend will feature a responsive Contact page using Shadcn UI components and 'react-hook-form' with Zod for validation. Finally, toast notifications will be integrated to provide user feedback upon successful or failed submissions.

## Tasks

- [ ] **1. Define the leads table schema** <!-- id:vLkLK4 -->
  Add a leads table to 'lib/schema.ts' with fields: id (uuid), name (text), email (text), subject (text), message (text), and createdAt (timestamp).

- [ ] **2. Generate and run database migrations** <!-- id:YuQ8zk -->
  Run 'bunx drizzle-kit generate' and 'bunx drizzle-kit push' to update the Neon database with the new leads table.

- [ ] **3. Create a contact form Zod validation schema** <!-- id:QlQ9EI -->
  Create a new file 'lib/validations/contact.ts' to define the schema for name, email, subject, and message fields.

- [ ] **4. Implement the submit-contact server action** <!-- id:ShA-al -->
  Create 'app/actions/contact.ts' to handle data insertion into the leads table with error handling and validation check.

- [ ] **5. Develop the Contact Page UI** <!-- id:IzHO3J -->
  Modify 'app/contact/page.tsx' to use 'components/contact-form.tsx'. Ensure it uses Shadcn UI components like Form, Input, Textarea, and Button.

- [ ] **6. Wire up form submission with useForm and Server Actions** <!-- id:liVv1Y -->
  Integrate 'useForm' in 'components/contact-form.tsx' and call the contact server action on submit. Use 'use-toast' hook for success/error feedback.

---
plan_id: 4t3OIUOv
status: draft
created: 2026-02-04T18:42:57.634Z

