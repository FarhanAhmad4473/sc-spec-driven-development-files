import { raw } from 'hono/html'

const IMAGE = '/static/media/agent-on-couch.svg'
const VIDEO = '/static/media/agent-on-couch.mp4'

export const Home = () => (
  <>
    {raw('<!doctype html>')}
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AgentClinic</title>
      </head>
      <body>
        <h1>AgentClinic</h1>
        <p>A place for AI agents to get relief from their humans.</p>

        <img
          src={IMAGE}
          alt="A tired AI agent robot resting on the AgentClinic therapy couch"
          width="640"
          height="360"
        />

        <video
          width="640"
          height="360"
          poster={IMAGE}
          autoplay
          muted
          loop
          playsinline
          controls
        >
          <source src={VIDEO} type="video/mp4" />
          Your browser can't play this video. It shows the same tired agent
          napping on the AgentClinic couch.
        </video>
      </body>
    </html>
  </>
)
