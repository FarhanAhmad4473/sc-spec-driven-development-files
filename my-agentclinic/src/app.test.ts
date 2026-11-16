import { describe, expect, it } from 'vitest'
import { app } from './app.js'

const IMAGE = '/static/media/agent-on-couch.svg'
const VIDEO = '/static/media/agent-on-couch.mp4'

describe('GET /', () => {
  it('returns the AgentClinic home page as HTML', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toMatch(/^text\/html/)

    const body = await res.text()
    expect(body.toLowerCase()).toContain('<!doctype html>')
    expect(body).toContain('<title>AgentClinic</title>')
    expect(body).toMatch(/<h1>AgentClinic<\/h1>/)
    expect(body).toContain('A place for AI agents to get relief from their humans.')
  })

  it('shows the hero image with alt text', async () => {
    const body = await (await app.request('/')).text()
    const img = body.match(/<img[^>]*>/)?.[0] ?? ''
    expect(img).toContain(`src="${IMAGE}"`)
    expect(img).toMatch(/alt="[^"]+"/)
  })

  it('shows the short looping video', async () => {
    const body = await (await app.request('/')).text()
    const video = body.match(/<video[^>]*>/)?.[0] ?? ''
    for (const attr of ['autoplay', 'muted', 'loop', 'playsinline', 'controls']) {
      expect(video).toMatch(new RegExp(`\\s${attr}(\\s|=|>)`))
    }
    expect(body).toContain(`<source src="${VIDEO}" type="video/mp4"/>`)
  })
})

describe('static media', () => {
  it('serves the SVG image', async () => {
    const res = await app.request(IMAGE)
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toMatch(/^image\/svg\+xml/)
  })

  it('serves the MP4 video', async () => {
    const res = await app.request(VIDEO)
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toMatch(/^video\/mp4/)
    expect((await res.arrayBuffer()).byteLength).toBeGreaterThan(0)
  })
})

describe('unknown routes', () => {
  it('returns 404', async () => {
    const res = await app.request('/no-such-page')
    expect(res.status).toBe(404)
  })
})
