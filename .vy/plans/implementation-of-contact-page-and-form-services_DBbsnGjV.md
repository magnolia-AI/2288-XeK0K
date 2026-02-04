# Implementation of Contact Page and Form Services

## Summary
This plan involves creating a dedicated contact page at /contact and integrating the existing contact-form.tsx component with a server-side submission handler. It includes validation, UI feedback, and basic email/logging simulation.

## Approach
The approach focuses on utilizing the existing UI components while establishing a robust server-client bridge. 1. Create a Next.js App Router page for the contact section. 2. Refine the existing components/contact-form.tsx to use React Hook Form and Zod for validation. 3. Implement a server action in app/api/contact/actions.ts to handle the form submission, which will initially log the data to the console or database and return a success/error status. 4. Use the existing Shadcn UI toaster for user notifications upon submission.

## Tasks

- [ ] **1. Create the contact page route file at app/contact/page.tsx** <!-- id:elTG1F -->
  Structure the page with a layout that includes the ContactForm component, a header section, and basic contact information (email, address, phone) to provide a professional user experience.

- [ ] **2. Refine the contact-form.tsx component with schema validation** <!-- id:SG4kbw -->
  Integrate zod for schema definition (name, email, subject, message) and react-hook-form for state management. Ensure it uses the existing Shadcn UI components like Input, Textarea, and Button.

- [ ] **3. Create a Server Action for form submission** <!-- id:h7A5LC -->
  Create a file at lib/actions/contact.ts or app/contact/actions.ts to process the form. Use 'use server' and simulate an asynchronous delay. If a database table for inquiries exists in schema.ts, implement the insertion logic.

- [ ] **4. Connect the form component to the Server Action** <!-- id:X2n-jd -->
  Update the onSubmit handler in contact-form.tsx to call the server action and handle loading states using a 'pending' transition or local state.

- [ ] **5. Implement user feedback with Toast notifications** <!-- id:FKJuer -->
  Use the use-toast.ts hook to trigger a success toast when the message is sent and an error toast if the server action fails.

- [ ] **6. Add navigation link to Footer and Mobile Nav** <!-- id:7Xd9zS -->
  Locate components/footer.tsx and components/mobile-nav.tsx and add a link to the new /contact route for accessibility.

---
plan_id: IrYxl8X8
status: draft
created: 2026-02-04T13:43:41.614Z

