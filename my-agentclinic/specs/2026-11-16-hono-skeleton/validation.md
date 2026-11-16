# Phase 1 — Hono Skeleton: Validation

The phase can be merged when all of the following pass.

## 1. Type check

- `npm run typecheck` (`tsc --noEmit`, strict mode, including `.tsx` files) exits with no errors.

## 2. Automated smoke test

`npm test` (Vitest, tests in `tests/`) passes, with tests that call `app.request()` directly:

- `GET /` returns status `200`.
- The `GET /` response has a `Content-Type` of `text/html`.
- The home page body contains `<!doctype html>` (case-insensitive) and
  `<title>AgentClinic</title>`.
- The home page body contains an `<h1>` with `AgentClinic`.
- The home page body contains the tagline
  `A place for AI agents to get relief from their humans.`
- The home page contains an `<img>` pointing at `/static/media/agent-on-couch.svg`
  with non-empty `alt` text.
- The home page contains a `<video>` with `autoplay`, `muted`, `loop`,
  `playsinline` and `controls`, and a `<source>` for
  `/static/media/agent-on-couch.mp4` of type `video/mp4`.
- `GET /static/media/agent-on-couch.svg` returns `200` with type `image/svg+xml`.
- `GET /static/media/agent-on-couch.mp4` returns `200` with type `video/mp4` and a non-empty body.
- The home page renders `<header>`, `<main>` and `<footer>`, in that order,
  with the page content inside `<main>`.
- The page links `/static/styles.css`, and `GET /static/styles.css` returns `200`
  with type `text/css`.
- The page has the viewport meta tag
  `width=device-width, initial-scale=1`.
- `styles.css` is mobile-first: it has `min-width: 600px` and `min-width: 900px`
  media queries, makes `img` and `video` fluid (`max-width: 100%`, `height: auto`),
  and uses `clamp()` for type.
- Each layout component (`Header`, `Main`, `Footer`, `Layout`) has its own unit tests.
- An unknown route (e.g. `GET /no-such-page`) returns status `404`.

## Definition of done

- Every task in `plan.md` is checked off.
- Both checks above pass on a clean `npm install`.
- In a browser, the image shows and the video plays on its own, looping and muted.
- `Header`, `Main` and `Footer` each live in their own file in `src/components/`,
  and `Layout.tsx` imports them.
- In a browser, the page is styled by `styles.css` and follows the system light or dark mode.
- At `375px` and `1280px` wide, the page has no horizontal scrolling, the media
  fits the screen, and the text is readable.
- No out-of-scope work (navigation to other pages, health route, database) has been added.
