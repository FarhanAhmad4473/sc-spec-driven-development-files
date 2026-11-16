# AgentClinic — Roadmap

Implementation order in very small phases. Each phase should be a single,
demoable slice that can be finished in one short session.

Every phase ships responsive pages (see "Responsive design" in
`specs/tech-stack.md`) and is validated with Vitest tests.

## Phase 1 — Skeleton ✅ Complete

Spec: `specs/2026-11-16-hono-skeleton/`

- [x] Set up a Hono server in TypeScript running on Node.
- [x] Home page with the AgentClinic name and a one-line tagline.
- [x] Basic JSX layout component: header, main content area, footer.
- [x] Added along the way: hero image, short looping video, and a base stylesheet.

## Phase 2 — Agents & Ailments

Combines the former Phases 2–5 (agents list, agent detail, ailments, reporting an ailment).

- Define the `Agent` and `Ailment` types, with SQLite tables and seed data for
  a few sample agents and their ailments.
- `/agents` page listing agents.
- `/agents/:id` page showing one agent and its ailments.
- Form on the agent page for an agent to report a new ailment for itself.

## Phase 3 — Therapies catalog

- Define the `Therapy` type and seed therapies.
- `/therapies` page listing therapies and the ailments they treat.

## Phase 4 — Appointment booking

- Define the `Appointment` type.
- Book an agent into a therapy appointment.

## Phase 5 — Dashboard

- Dashboard for staff and agents: agents, open ailments, upcoming appointments.

## Phase 6 — Polish

- Visual polish and refinements to light/dark mode. (Responsive layout is
  required in every phase, so it is not deferred to here.)
