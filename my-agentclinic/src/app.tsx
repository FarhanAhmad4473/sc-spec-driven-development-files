import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { Home } from './pages/Home.js'

export const app = new Hono()

// Media assets (image and video) live in ./static and are served from /static/*.
app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => c.html(<Home />))

// Unknown routes fall through to Hono's default 404.
