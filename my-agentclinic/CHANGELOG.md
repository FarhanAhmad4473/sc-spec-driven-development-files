# Changelog

All notable changes to AgentClinic, newest first.

## 2026-11-16

- Made Vitest the project's validation framework: added it to the tech stack, added a `test:watch` script, and moved the tests into `tests/` with a `vitest.config.ts`.
- Added a component test suite covering `Header`, `Main`, `Footer` and `Layout` on their own.
- Made responsive design a requirement across the mission, tech stack, roadmap and Phase 1 spec.
- Rewrote the stylesheet mobile-first, with breakpoints at 600px and 900px, fluid type, fluid image and video, and a 44px tap target for the home link.
- Added a responsive test suite that checks the viewport tag and the stylesheet rules.
- Added a `changelog` skill for keeping this file up to date before each merge.
- Added the main layout: `Header`, `Main` and `Footer` components, each in its own file, composed by `Layout`.
- Added the base stylesheet with light and dark mode, linked from the layout.
- Marked roadmap Phase 1 (Skeleton) as complete.
- Added an original hero illustration of a tired agent on the therapy couch, plus a 4-second looping video of the same scene, to the home page.
- Built the Phase 1 Hono skeleton: a Hono server on Node with a server-rendered AgentClinic home page and a configurable port.
- Added the first Vitest smoke tests for the home page and unknown routes.
- Wrote the Phase 1 feature spec: plan, requirements and validation.

## 2026-11-15

- Created the project constitution: a mission with target audience, a tech stack (server-side TypeScript, Hono, SQLite) and a roadmap of small phases.
