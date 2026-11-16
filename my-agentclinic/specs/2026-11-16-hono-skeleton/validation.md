# Phase 1 — Hono Skeleton: Validation

The phase can be merged when all of the following pass.

## 1. Type check

- `npm run typecheck` (`tsc --noEmit`, strict mode, including `.tsx` files) exits with no errors.

## 2. Automated smoke test

`npm test` (Vitest) passes, with tests that call `app.request()` directly:

- `GET /` returns status `200`.
- The `GET /` response has a `Content-Type` of `text/html`.
- The home page body contains `<!doctype html>` (case-insensitive) and
  `<title>AgentClinic</title>`.
- The home page body contains an `<h1>` with `AgentClinic`.
- The home page body contains the tagline
  `A place for AI agents to get relief from their humans.`
- An unknown route (e.g. `GET /no-such-page`) returns status `404`.

## Definition of done

- Every task in `plan.md` is checked off.
- Both checks above pass on a clean `npm install`.
- No out-of-scope work (shared layout, CSS, health route, database) has been added.
