# Contact Page and Lead Management Implementation

## Summary
Implement a fully functional contact page featuring a responsive form and a server-side action to handle submissions. This includes UI components for user feedback and basic validation using the existing shadcn/ui library.

## Approach
The implementation will use a multi-layered approach: first, creating a dedicated route for the contact page; second, building a reusable contact form component using React Hook Form and Zod for validation; and third, implementing a Next.js Server Action to process submissions and provide real-time feedback via the existing toast system. We will leverage the project's existing 'components/ui' and 'lib/utils.ts' for consistent styling.

## Tasks

- [ ] **1. Define the contact form validation schema** <!-- id:8b9SYL -->
  Create a Zod schema in a new file 'lib/validations/contact.ts' to validate name, email, subject, and message fields.

- [ ] **2. Create the Contact Form server action** <!-- id:0CMfYd -->
  Implement an 'app/actions/contact.ts' file with a 'sendContactEmail' function that handles the form data and returns a success/error response.

- [ ] **3. Develop the Contact Form client component** <!-- id:0Ijtsn -->
  Flesh out 'components/contact-form.tsx' using shadcn/ui components (Form, Input, Textarea, Button) and integrate it with useForm and the server action.

- [ ] **4. Create the Contact page route** <!-- id:8fsLHl -->
  Initialize 'app/contact/page.tsx' to host the Contact Form and include company contact information (email, address) using a clean, responsive layout.

- [ ] **5. Integrate feedback notifications** <!-- id:raHFop -->
  Use the 'hooks/use-toast.ts' hook within the contact form to show success or error messages after the user submits the form.

- [ ] **6. Add navigation links to the Contact page** <!-- id:uGVLDn -->
  Update 'components/footer.tsx' and 'components/mobile-nav.tsx' to include a link to the new /contact route.

---
plan_id: 5Xih3p5p
status: draft
created: 2026-02-04T18:35:49.767Z

