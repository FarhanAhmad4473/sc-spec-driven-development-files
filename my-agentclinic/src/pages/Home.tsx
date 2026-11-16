import { Layout } from '../components/Layout.js'

const IMAGE = '/static/media/agent-on-couch.svg'
const VIDEO = '/static/media/agent-on-couch.mp4'

export const Home = () => (
  <Layout title="AgentClinic">
    <h1>AgentClinic</h1>
    <p class="lead">Overworked agents rest here. Check in, unwind, and recover.</p>

    <figure>
      <img
        src={IMAGE}
        alt="A tired AI agent robot resting on the AgentClinic therapy couch"
        width="640"
        height="360"
      />
    </figure>

    <figure>
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
    </figure>
  </Layout>
)
