# Implement Contact Form and Inquiry Management

## Summary
Build a comprehensive contact page featuring a responsive form and a server-side handler for inquiry capture using Drizzle ORM. This plan includes adding a new database table for inquiries and implementing a modern UI with validation and Toast notifications.

## Approach
The approach involves extending the existing schema to store customer messages, followed by creating a dedicated API route for form submissions. I will use the established Shadcn UI components (form, input, textarea) and Zod for client/server-side validation. The final step is creating a user-friendly contact page that integrates the form with a success/error feedback loop.

## Tasks

- [ ] **1. Define the inquiries table in schema.ts** <!-- id:vuBOKx -->
  Add a new table named 'inquiries' in lib/schema.ts with fields: id (uuid), name (text), email (text), subject (text), message (text), and createdAt (timestamp).

- [ ] **2. Generate and run database migration** <!-- id:oohTX4 -->
  Run 'bun drizzle-kit generate' followed by 'bun drizzle-kit migrate' to sync the database with the new inquiries table.

- [ ] **3. Create a Zod validation schema for the contact form** <!-- id:v3egKh -->
  Define a schema in a new file lib/validations/contact.ts requiring a valid email, a non-empty name, and a message of at least 10 characters.

- [ ] **4. Build the API Route for form submission** <!-- id:t2hRi3 -->
  Create app/api/contact/route.ts to handle POST requests, validate the payload using the Zod schema, and insert the data into the inquiries table using drizzle-orm.

- [ ] **5. Implement the Contact Form component** <!-- id:5x4oby -->
  Update components/contact-form.tsx (or create it if needed) using shadcn/ui Form, Input, and Textarea components. Integrate with useForm from react-hook-form and the Zod resolver.

- [ ] **6. Create the Contact Page route** <!-- id:TCsx3b -->
  Develop app/contact/page.tsx to house the ContactForm component, including descriptive headers and contact information (email, address placeholder).

- [ ] **7. Add submission feedback and error handling** <!-- id:F7_Q0V -->
  Use the existing use-toast hook to display success or error messages after the API call completes and reset the form state on success.

- [ ] **8. Update navigation menu** <!-- id:BYPik1 -->
  Add a link to the '/contact' page in components/footer.tsx and components/mobile-nav.tsx to ensure user discoverability.

---
plan_id: mM7RJ5YC
status: draft
created: 2026-02-04T19:05:47.501Z

