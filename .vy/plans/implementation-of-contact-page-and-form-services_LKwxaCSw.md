# Implementation of Contact Page and Form Services

## Summary
This plan outlines the steps to create a functional contact page with a form that integrates with the existing UI components and infrastructure. It includes building the page route, form validation logic, and a mock service for handling submissions.

## Approach
The approach leverages existing Shadcn UI components (Form, Input, Textarea, Button) and the existing `contact-form.tsx` component. I will create a new route at `/contact` and ensure the form submission is handled using a server action or API route. The implementation will follow the project's glassmorphism and T-Rex theme styling.

## Tasks

- [ ] **1. Create the contact page route** <!-- id:G5JSbT -->
  Create `app/contact/page.tsx`. Use the `Breadcrumb` and `AuthHeader` components. Layout should feature a two-column design: one for the contact form and one for company details (Address, Map placeholder, Email).

- [ ] **2. Integrate ContactForm component** <!-- id:G-5yAD -->
  Import and place the `ContactForm` component located in `components/contact-form.tsx` into the new contact page.

- [ ] **3. Implement Form Validation with Zod** <!-- id:KJm_-h -->
  Define a schema in `components/contact-form.tsx` using Zod for fields: name, email, subject, and message. Use `react-hook-form` and the `Form` UI component for state management.

- [ ] **4. Create API Route for form submission** <!-- id:4xm0y5 -->
  Develop `app/api/contact/route.ts` to handle POST requests. Initially, this will log the data and return a success response, simulating an email service or database entry.

- [ ] **5. Enhance UI with feedback states** <!-- id:0CxDkD -->
  Add loading states to the submit button using `lucide-react` icons and trigger success/error toasts using the `use-toast` hook from `hooks/use-toast.ts`.

- [ ] **6. Add navigation link to Footer** <!-- id:axfRGd -->
  Update `components/footer.tsx` to include a link to the '/contact' page in the navigation section.

---
plan_id: yhKEMl9c
status: draft
created: 2026-02-04T13:45:14.143Z

