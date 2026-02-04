# Implementation of Contact Page and Lead Management System

## Summary
This plan involves creating a dedicated contact page at /contact and an API route to handle form submissions. It leverages the existing contact-form.tsx component and integrates it with a robust backend flow to store inquiries.

## Approach
The approach focuses on providing a professional communication interface for RexShop users. First, I will update the existing `components/contact-form.tsx` to handle submission states (loading, success, error) using the existing `hooks/use-toast.ts`. Second, I will create a new Next.js page at `app/contact/page.tsx` that incorporates this form alongside company contact information. Third, I will implement a POST handler in `app/api/contact/route.ts` to process submissions. While the schema currently lacks a dedicated 'messages' table, I will ensure the API is modular so that it can easily send emails via a service or log to the database if the schema is extended later.

## Tasks

- [ ] **1. Enhance ContactForm component with validation and state management** <!-- id:I3PcQP -->
  Update `components/contact-form.tsx` to use `react-hook-form` and `zod` for validation. Connect it to the `use-toast` hook to show feedback to the user upon submission.

- [ ] **2. Create the Contact page layout** <!-- id:NLB9gr -->
  Create `app/contact/page.tsx`. Use a two-column layout on desktop: one for the `ContactForm` and another for business details (email, location, social links). Ensure it follows the theme-provider's styling.

- [ ] **3. Implement the Contact API route** <!-- id:E4oKDp -->
  Create `app/api/contact/route.ts`. This route will validate the payload and simulate a successful message delivery. In a production environment, this would integrate with Resend or SendGrid.

- [ ] **4. Add Navigation links to Header and Footer** <!-- id:Mv5AP- -->
  Update `components/mobile-nav.tsx` and `components/footer.tsx` (if it exists or is being implemented) to include a link to the '/contact' page for better discoverability.

- [ ] **5. Verify form submission and accessibility** <!-- id:vMQ3h6 -->
  Perform end-to-end testing of the form submission flow. Ensure ARIA labels are present on the input fields within `components/contact-form.tsx` for screen readers.

---
plan_id: tTiiuLtb
status: draft
created: 2026-02-04T13:56:58.818Z

