# Contact Page and Lead Management Implementation

## Summary
Establish a dedicated contact page and a backend infrastructure for processing and storing user inquiries. This includes a new database schema for leads, an API route for form submission, and a fully stylized UI following the RexShop aesthetic.

## Approach
I will implement a robust contact system by first extending the database schema to include a 'leads' table. Next, I will create a focused API endpoint in Next.js to handle form submissions securely. Finally, I will wire the existing 'ContactForm' component to this API and create a dedicated '/contact' page that maintains the high-contrast, 'prehistoric-tech' visual language of the application.

## Tasks

- [ ] **1. Create the leads table in the database schema** <!-- id:jSazoa -->
  Update 'lib/schema.ts' to include a 'leads' table with fields for name, email, message, status (default: 'new'), and createdAt timestamp. Run 'db:push' or 'db:generate' after updating.

- [ ] **2. Implement the Contact API route** <!-- id:Yv099- -->
  Create 'app/api/contact/route.ts' to handle POST requests. It should validate the payload using Zod and insert the record into the 'leads' table using Drizzle ORM.

- [ ] **3. Update ContactForm with server-side integration** <!-- id:e2Udm_ -->
  Modify 'components/contact-form.tsx' to use the 'fetch' API for submitting data to '/api/contact' instead of a timeout simulation. Add proper error handling and success state feedback.

- [ ] **4. Create the Contact page** <!-- id:KVTHrQ -->
  Generate 'app/contact/page.tsx' with a hero section titled 'COMMUNICATIONS UPLINK' and embed the 'ContactForm' within a high-contrast 'grid sector' card to match the home page style.

- [ ] **5. Update Footer navigation** <!-- id:O0vfUU -->
  Find the 'Connect' or 'Connectivity' section in 'components/footer.tsx' and update the placeholder link for contact/mail to point to '/contact'.

---
plan_id: 6gbQFLSQ
status: draft
created: 2026-02-04T20:57:47.757Z

