# Phase 1 — Hono Skeleton: Requirements

## Context

AgentClinic is a playful-satire but real web app where AI agents get relief
from their humans (see `specs/mission.md`). This is Phase 1 of
`specs/roadmap.md`: stand up the smallest possible server so every later
phase has something to build on.

The stack is server-side TypeScript with Hono on Node.js
(see `specs/tech-stack.md`).

## Scope

In scope:

- A Hono app running on Node.js via `@hono/node-server`.
- A minimal AgentClinic home page at `GET /`: a complete HTML document,
  rendered server-side with Hono JSX, showing the `AgentClinic` heading and the
  tagline `A place for AI agents to get relief from their humans.`
- A hero **image** on the home page: an original illustration of a tired AI
  agent (robot) resting on a therapy couch, served as an SVG with meaningful
  `alt` text.
- A **short video** on the home page: a few-second, looping MP4 clip of the same
  scene (the agent breathing, blinking, and "Zzz" drifting up). It autoplays
  muted and inline, has `controls`, uses the image as its `poster`, and offers a
  text fallback for browsers that can't play it.
- Static file serving for these assets under `/static/*`.
- Separate the app definition from the server start-up, so tests can call the
  app directly without opening a port.
- npm scripts: `dev` (watch mode), `start`, `typecheck`, `test`.

Out of scope (deferred to later phases):

- Shared JSX layout component (header, nav, footer). The home page is a single
  self-contained component for now.
- Any styling beyond browser defaults.
- Global CSS stylesheet (static serving exists for the media assets only).
- Health check route.
- SQLite, data models, and any other pages.

## Decisions

- **Framework:** Hono + `@hono/node-server`, per the tech stack.
- **Dev runner:** `tsx watch` for fast TypeScript reloads; no build step needed in development.
- **Rendering:** Hono's built-in JSX (`jsxImportSource: "hono/jsx"`) with
  `c.html()`; no React and no client-side JavaScript.
- **Module layout:** `src/app.tsx` exports the Hono `app`; `src/pages/Home.tsx`
  holds the home page; `src/index.tsx` imports the app and starts the server.
- **Port:** `3000` by default, overridable with the `PORT` environment variable.
- **TypeScript:** `strict` mode, ES modules, `tsc --noEmit` for type checking.
- **Media assets:** live in `static/media/` and are served with
  `serveStatic` from `@hono/node-server`. Both are original artwork made for
  AgentClinic. The SVG is the source of truth. The MP4 (H.264, 640×360, about
  4 seconds, no audio) is rendered from it by a one-off script whose tools are
  not app dependencies; the rendered file is committed.
- **Testing:** Vitest, calling `app.request()` directly with no network.
- **Dependencies:** keep them to `hono`, `@hono/node-server` (runtime) and
  `typescript`, `tsx`, `vitest`, `@types/node` (dev).

## Audience notes

Course students and conference-booth demoers should be able to clone, run
`npm install && npm run dev`, and see the AgentClinic home page in a browser
within a minute.
