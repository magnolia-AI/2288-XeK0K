# Implement Contact Form and Backend Persistence

## Summary
This plan covers the implementation of a full-stack contact form. It includes creating a database table for inquiries, building a server action for submission, and updating the UI to provide a functional and validated contact experience.

## Approach
The implementation will follow a standard Next.js full-stack pattern. First, I will extend the Drizzle schema to include a 'contact_inquiries' table. Next, I will create a server action to handle form submissions, which will include validation using Zod and persistence to the database via Drizzle and Neon. Finally, I will refactor the existing 'ContactForm' component to use 'react-hook-form' with the Zod resolver and the new server action, replacing the current simulated logic.

## Tasks

- [ ] **1. Define the contact inquiries schema in lib/schema.ts** <!-- id:OUjCZx -->
  Add a 'contactInquiries' table with fields: id (uuid/serial), name (text), email (text), message (text), and createdAt (timestamp).

- [ ] **2. Generate and run database migrations** <!-- id:3nlpH3 -->
  Run 'bun run db:generate' followed by 'bun run db:push' (or migrate) to sync the schema with the database.

- [ ] **3. Create a Zod validation schema for the contact form** <!-- id:Q4Q--7 -->
  Create a new file 'lib/validations/contact.ts' to define the input validation rules for name, email, and message.

- [ ] **4. Implement a server action for form submission** <!-- id:3Rz15d -->
  Create 'app/actions/contact.ts' to handle the POST logic, validate input with Zod, and insert data into the 'contactInquiries' table.

- [ ] **5. Refactor components/contact-form.tsx to use React Hook Form** <!-- id:L-Dksm -->
  Integrate @hookform/resolvers/zod, provide real-time validation feedback, and call the server action on submit.

- [ ] **6. Add success and error feedback with Sonner/Toast** <!-- id:vrU8Tz -->
  Update the UI to show a success toast upon successful DB insertion and handle error states gracefully.

---
plan_id: BZQEzjDX
status: draft
created: 2026-02-04T21:06:11.725Z

