# Dino-Quest Loyalty and Profile Integration Plan

## Summary
This plan outlines the end-to-end integration of the Dino-Quest gamified loyalty system into the RexShop e-commerce platform. It focuses on connecting the existing database schema and API routes to the user interface, enabling real-time point accrual and level progression visualization.

## Approach
The approach focuses on leveraging the existing Drizzle schema for user_profiles and quests while connecting them to the React frontend. We will use a modular strategy: first, establishing a robust data-fetching layer with TanStack Query (already in package.json); second, building interactive UI components for quest tracking; and third, implementing the 'Fossil Points' feedback loop where purchases and quest completions trigger state updates. Key technical decisions include using the existing /api/quests route for server-side operations and ensuring the ExplorerStats component reflects accurate live data from the database rather than static mockups.

## Tasks

- [x] **1. Initialize User Profile state and data synchronization** <!-- id:T_aNBg -->
  Create a custom hook `use-user-profile.ts` in `/hooks` that fetches data from `/api/quests`. This hook should manage the global state for `fossilPoints` and `explorerLevel` using TanStack Query to ensure cache invalidation when quests are completed.

- [x] **2. Enhance the Quests API to support dynamic quest generation** <!-- id:FghODc -->
  Modify `app/api/quests/route.ts` to include a logic block that seeds initial 'Welcome Quests' (e.g., 'Make your first purchase', 'Browse 5 products') if a user has no active quests. Update the POST handler to ensure transaction safety when incrementing `fossilPoints`.

- [ ] **3. Implement the Dino-Quest Dashboard in the Account section** <!-- id:vEOhxw -->
  Flesh out `app/account/page.tsx` (if missing) and integrate `components/account/explorer-stats.tsx`. Use the previously created `use-user-profile` hook to display the current level, point progress bar, and a list of active/completed quests with Lucide icons.

- [ ] **4. Connect E-commerce transactions to the Loyalty System** <!-- id:jPVsAr -->
  Update the checkout success logic in `app/api/orders/route.ts` (or the checkout handler) to trigger a rewarding event. Each purchase should grant `fossilPoints` based on the total price (e.g., 10 points per $100 spent) by updating the `user_profiles` table.

- [ ] **5. Build interactive 'Quest Completed' notification system** <!-- id:hvhErH -->
  Integrate the `sonner` toast library with the Quest POST handler. When a user completes an action that fulfills a quest requirement, trigger a cinematic 'Quest Complete' toast that displays the amount of Fossil Points earned and the new point total.

- [ ] **6. Refine visual feedback and Level-Up animations** <!-- id:AII2Xe -->
  Add Framer Motion animations to the `ExplorerStats` component. When the `explorerLevel` increments in the database, trigger a localized 'Level Up' splash effect on the user's profile badge to reinforce the gamification loop.

---
plan_id: EM4ZYX1a
status: executing
created: 2026-02-05T11:57:26.753Z
