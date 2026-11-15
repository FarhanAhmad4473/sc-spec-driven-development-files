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
- Responsive layout; support light and dark mode.
- Target current evergreen browsers (Chrome, Edge, Firefox, Safari).

## Tooling

- Node.js LTS and npm.
- `tsx` for running TypeScript in development; `tsc` for type checking and builds.

## Principles

- Choose popular, well-documented tools.
- Keep dependencies few and justified.
- Keep each change small and shippable.
