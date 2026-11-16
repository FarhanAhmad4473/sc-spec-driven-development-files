# AgentClinic — Tech Stack

## Language

- **TypeScript** everywhere, in `strict` mode, running **server-side** on Node.js.

## Framework

- **Hono** — a small, fast, popular web framework with first-class TypeScript support.
- Pages are **server-side rendered** with Hono's built-in JSX (`hono/jsx`); no
  client-side framework or bundler is required.
- Run on Node.js via `@hono/node-server`.
- Use plain HTML forms posting to Hono routes for mutations such as booking.
- Add small amounts of client-side JavaScript only where interactivity truly requires it.

### Why Hono

- Server-side TypeScript with minimal setup and very few dependencies.
- JSX templating gives typed, component-style layouts without a React runtime.
- Simple routing and middleware keep each phase small and easy to read.
- Portable: runs on Node, Bun, Deno, and edge runtimes if needs change.

## Data

- **SQLite** for persistence — a single local file, zero setup, easy to reset for demos.
- Access via `better-sqlite3` (synchronous, simple, well-supported on Node).
- Schema and seed data live in the repo so every environment starts the same.

## Styling

- Modern CSS (a global stylesheet with custom properties).
- Support light and dark mode.
- Target current evergreen browsers (Chrome, Edge, Firefox, Safari).

### Responsive design

Every page must follow responsive design. This applies from the first phase, not as later polish.

- **Mobile first:** base styles target small screens; `min-width` media queries
  add to them for wider screens.
- **Breakpoints:** `600px` (large phone / small tablet) and `900px` (tablet / desktop).
- **Viewport:** every page has `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- **Fluid layout:** content width is capped with `max-width`, side padding is
  at least `16px`, and nothing causes horizontal scrolling down to `320px` wide.
- **Fluid media:** images and video use `max-width: 100%; height: auto`.
- **Readable type:** font sizes scale with `clamp()`; body text never drops below `16px`.
- **Touch friendly:** links and buttons have tap targets of at least `44px` high.
- **Verified** with tests where possible (markup and stylesheet rules) and by
  checking the page at phone (`375px`) and desktop (`1280px`) widths.

## Testing

- **Vitest** is the test framework, and passing tests are how a feature is validated
  before it can be merged.
- Tests live in `tests/`, named `*.test.ts(x)`, and call the Hono app directly with
  `app.request()`, so no server or open port is needed.
- npm scripts:
  - `npm test` runs the whole suite once (`vitest run`); this is the merge gate.
  - `npm run test:watch` re-runs tests on save during development (`vitest`).
- Every feature spec's `validation.md` lists the behaviors its tests must cover.

## Tooling

- Node.js LTS and npm.
- `tsx` for running TypeScript in development; `tsc` for type checking and builds.

## Principles

- Choose popular, well-documented tools.
- Keep dependencies few and justified.
- Keep each change small and shippable.
