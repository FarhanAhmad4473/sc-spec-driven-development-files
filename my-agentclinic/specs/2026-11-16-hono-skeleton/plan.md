# Phase 1 — Hono Skeleton: Plan

Work through the task groups in order. Check off each task as it is done.

## 1. Project setup and dependencies

- [x] 1.1 Add runtime dependencies: `hono`, `@hono/node-server`.
- [x] 1.2 Add dev dependencies: `tsx`, `vitest`, `@types/node` (keep `typescript`).
- [x] 1.3 Set `"type": "module"` in `package.json`.
- [x] 1.4 Update `tsconfig.json`: `strict`, ES module output, `NodeNext` module
      resolution, and `"jsx": "react-jsx"` with `"jsxImportSource": "hono/jsx"`.
- [x] 1.5 Add npm scripts: `dev` (`tsx watch src/index.tsx`), `start`, `typecheck` (`tsc --noEmit`), `test` (`vitest run`).

## 2. Hono app

- [x] 2.1 Create `src/app.tsx` that exports a Hono `app`.
- [x] 2.2 Leave unknown routes to Hono's default `404`.

## 3. Minimal AgentClinic home page

- [x] 3.1 Create `src/pages/Home.tsx`: a JSX component rendering a complete,
      minimal HTML document (`<!doctype html>`, `lang="en"`, charset and
      viewport meta, `<title>AgentClinic</title>`).
- [x] 3.2 In the body, render an `<h1>AgentClinic</h1>` and a one-line tagline:
      `A place for AI agents to get relief from their humans.`
- [x] 3.3 Wire `GET /` in `src/app.tsx` to render `Home` with `c.html()`.

## 4. Home page image and short video

- [x] 4.1 Create the original illustration `static/media/agent-on-couch.svg`.
- [x] 4.2 Render the looping clip `static/media/agent-on-couch.mp4` (H.264, 640×360, ~4 s, no audio).
- [x] 4.3 Serve `/static/*` from `src/app.tsx` with `serveStatic`.
- [x] 4.4 Add the image (with `alt` text) and the video (`autoplay muted loop playsinline controls`,
      `poster` set to the SVG, text fallback) to `Home.tsx`.

## 5. Main layout component and stylesheet

- [x] 5.1 Create the three subcomponents, each in its own file under `src/components/`:
  - `Header.tsx`: a `<header>` with the AgentClinic name linking to `/` and the tagline.
  - `Main.tsx`: a `<main>` that wraps the page's `children`.
  - `Footer.tsx`: a `<footer>` with a short AgentClinic footer line.
- [x] 5.1a Create `src/components/Layout.tsx`, which imports those three files and
      renders the full HTML document (doctype, `<html lang="en">`, `<head>` with
      charset, viewport and a `title` prop) with `Header`, `Main` and `Footer`
      in the body.
- [x] 5.2 Make the stylesheet `static/styles.css`: CSS custom properties for colors,
      light and dark mode, a centered readable layout, and responsive media
      (`max-width: 100%; height: auto`).
- [x] 5.3 Link the stylesheet from `Layout`'s `<head>` with
      `<link rel="stylesheet" href="/static/styles.css">`.
- [x] 5.4 Refactor `Home.tsx` to render its content (image and video) inside `Layout`.

## 6. Server entry point

- [x] 6.1 Replace `src/index.ts` with `src/index.tsx` that imports `app` and starts it with `@hono/node-server`.
- [x] 6.2 Read the port from `PORT`, default `3000`, and log the URL on start-up.

## 7. Smoke test and validation

- [x] 7.1 Add `src/app.test.ts` covering the checks in `validation.md`.
- [x] 7.2 Extend the tests for the layout (`<header>`, `<main>`, `<footer>`) and the stylesheet.
- [x] 7.3 Run `npm run typecheck` and `npm test`; fix anything that fails.
