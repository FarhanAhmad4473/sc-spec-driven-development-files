# Phase 1 — Hono Skeleton: Plan

Work through the task groups in order. Check off each task as it is done.

## 1. Project setup and dependencies

- [ ] 1.1 Add runtime dependencies: `hono`, `@hono/node-server`.
- [ ] 1.2 Add dev dependencies: `tsx`, `vitest`, `@types/node` (keep `typescript`).
- [ ] 1.3 Set `"type": "module"` in `package.json`.
- [ ] 1.4 Update `tsconfig.json`: `strict`, ES module output, `NodeNext` module
      resolution, and `"jsx": "react-jsx"` with `"jsxImportSource": "hono/jsx"`.
- [ ] 1.5 Add npm scripts: `dev` (`tsx watch src/index.tsx`), `start`, `typecheck` (`tsc --noEmit`), `test` (`vitest run`).

## 2. Hono app

- [ ] 2.1 Create `src/app.tsx` that exports a Hono `app`.
- [ ] 2.2 Leave unknown routes to Hono's default `404`.

## 3. Minimal AgentClinic home page

- [ ] 3.1 Create `src/pages/Home.tsx`: a JSX component rendering a complete,
      minimal HTML document (`<!doctype html>`, `lang="en"`, charset and
      viewport meta, `<title>AgentClinic</title>`).
- [ ] 3.2 In the body, render an `<h1>AgentClinic</h1>` and a one-line tagline:
      `A place for AI agents to get relief from their humans.`
- [ ] 3.3 Wire `GET /` in `src/app.tsx` to render `Home` with `c.html()`.

## 4. Server entry point

- [ ] 4.1 Replace `src/index.ts` with `src/index.tsx` that imports `app` and starts it with `@hono/node-server`.
- [ ] 4.2 Read the port from `PORT`, default `3000`, and log the URL on start-up.

## 5. Smoke test and validation

- [ ] 5.1 Add `src/app.test.ts` covering the checks in `validation.md`.
- [ ] 5.2 Run `npm run typecheck` and `npm test`; fix anything that fails.
