# Contact Page and Lead Management Integration

## Summary
Implement a public-facing contact page featuring a responsive form and integrate it with a server-side action to handle inquiries. This includes adding a lead management schema to the database and providing immediate user feedback via toast notifications.

## Approach
The plan follows a full-stack approach: first, defining a 'leads' table in the Drizzle schema to persist messages; second, creating a Server Action to validate and process form submissions; and finally, building the UI using Shadcn/UI components within a new Next.js route group.

## Tasks

- [ ] **1. Add leads table to schema.ts** <!-- id:RObNDX -->
  Update lib/schema.ts to include a 'leads' table with fields: id (uuid), name (text), email (text), subject (text), message (text), and createdAt (timestamp).

- [ ] **2. Generate and run database migrations** <!-- id:FAi61O -->
  Run 'bun drizzle-kit generate' followed by 'bun drizzle-kit push' (or migrations) to sync the new schema with the Neon database.

- [ ] **3. Create Contact Form Server Action** <!-- id:v-2U4y -->
  Create a new file app/actions/contact.ts to handle form submissions. Use Zod for server-side validation and insert valid data into the leads table using drizzle-orm.

- [ ] **4. Implement the Contact Page route** <!-- id:OLQJQD -->
  Create app/contact/page.tsx. Use the existing components/contact-form.tsx if it exists or build it using components/ui/form.tsx, input.tsx, and textarea.tsx. Use the useForm hook from react-hook-form.

- [ ] **5. Integrate success/error feedback** <!-- id:ZFKDhr -->
  Use the hooks/use-toast.ts to trigger a success toast when the action completes and show error messages if the server validation fails.

- [ ] **6. Add Contact link to Navigation** <!-- id:ecb6Qm -->
  Update components/mobile-nav.tsx and any main header navigation to include a link to the new '/contact' route.

---
plan_id: lsrpOmxA
status: draft
created: 2026-02-04T18:29:34.036Z

