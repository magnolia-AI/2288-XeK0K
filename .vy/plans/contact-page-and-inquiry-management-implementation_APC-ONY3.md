# Contact Page and Inquiry Management Implementation

## Summary
This plan implements a full-featured Contact Us page with a functional contact form, backend API route for lead collection, and a success state. It leverages the existing Drizzle ORM for database storage and Shadcn UI components for the frontend.

## Approach
The implementation will follow a full-stack approach: first, defining the database schema to store customer inquiries; second, creating a server-side API route for handling submissions; third, building a validated client-side form using React Hook Form and Zod; and finally, creating the main Contact page. I will use the established patterns in the codebase, such as Better Auth-inspired schema definitions and Shadcn's form components.

## Tasks

- [ ] **1. Extend database schema for inquiries** <!-- id:2jlR8d -->
  Add a new `inquiries` table to `lib/schema.ts` containing fields for `id`, `name`, `email`, `subject`, `message`, and `createdAt`. Run `bun drizzle-kit push` to synchronize the database.

- [ ] **2. Create API route for inquiry submission** <!-- id:E6pZrJ -->
  Develop `app/api/contact/route.ts` to handle POST requests. It should validate the payload using Zod and insert the record into the Neon database using the `db` instance from `lib/db.ts`.

- [ ] **3. Enhance the Contact Form component** <!-- id:PdB82z -->
  Update `components/contact-form.tsx` to use `react-hook-form` and `@hookform/resolvers/zod`. Implement form submission logic that calls the newly created API route and provides visual feedback using `use-toast`.

- [ ] **4. Create the Contact Page route** <!-- id:bdAnwl -->
  Create `app/contact/page.tsx`. This page should include a header, the `ContactForm` component, and supplementary contact information (email, address, social links) to provide a complete user experience.

- [ ] **5. Add navigation link to Footer and Mobile Nav** <!-- id:GzdHqA -->
  Update `components/footer.tsx` and `components/mobile-nav.tsx` to include a link to the '/contact' page to ensure discoverability.

---
plan_id: -IlMx9jb
status: draft
created: 2026-02-04T18:59:36.788Z

