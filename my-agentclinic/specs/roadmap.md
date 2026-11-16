# AgentClinic — Roadmap

Implementation order in very small phases. Each phase should be a single,
demoable slice that can be finished in one short session.

## Phase 1 — Skeleton ✅ Complete

Spec: `specs/2026-11-16-hono-skeleton/`

- [x] Set up a Hono server in TypeScript running on Node.
- [x] Home page with the AgentClinic name and a one-line tagline.
- [x] Basic JSX layout component: header, main content area, footer.
- [x] Added along the way: hero image, short looping video, and a base stylesheet.

## Phase 2 — Agents list

- Define the `Agent` type and seed a few sample agents.
- `/agents` page listing agents.

## Phase 3 — Agent detail

- `/agents/[id]` page showing one agent.

## Phase 4 — Ailments

- Define the `Ailment` type and seed sample ailments.
- Link ailments to agents; show them on the agent detail page.

## Phase 5 — Report an ailment

- Form for an agent to add an ailment to itself.

## Phase 6 — Therapies catalog

- Define the `Therapy` type and seed therapies.
- `/therapies` page listing therapies and the ailments they treat.

## Phase 7 — Appointment booking

- Define the `Appointment` type.
- Book an agent into a therapy appointment.

## Phase 8 — Dashboard

- Dashboard for staff and agents: agents, open ailments, upcoming appointments.

## Phase 9 — Polish

- Visual polish, responsive layout, and light/dark mode.
