# Dino-Quest Loyalty System Integration

## Summary
This plan integrates the Prehistoric 'Dino-Quest' loyalty system into the core ecommerce flow. It focuses on connecting the existing database schema to the user interface and checkout experience.

## Approach
The approach leverages the existing Drizzle schema (`user_profiles`, `quests`) and Shadcn UI components. We will first establish the backend logic for point distribution, then surface this data in the user account section, and finally trigger reward events during the checkout process to create a gamified feedback loop.

## Tasks

- [x] **1. Implement Reward Logic in Quest API** <!-- id:1y7J1K -->
  Update 'app/api/quests/route.ts' to handle POST requests that update quest status. Include logic to increment 'fossil_points' in the 'user_profiles' table using Drizzle ORM when a quest is marked as 'completed'.

- [x] **2. Create Explorer Stats Profile Component** <!-- id:fsl3AC -->
  Develop 'components/account/profile-card.tsx' using the 'Card' and 'Progress' UI components. Fetch and display the authenticated user's 'explorer_level' and 'fossil_points' from the database to provide visual feedback on their loyalty status.

- [x] **3. Integrate Reward Triggers in Checkout Success** <!-- id:QDMalp -->
  Modify 'app/checkout/success/page.tsx' to invoke the quest completion API. Add a 'Quest Completed' toast notification using the 'sonner' library to inform users they have earned Fossil Points for their purchase.

---
plan_id: LNk7MtYU
status: executing
created: 2026-02-05T10:51:35.870Z
