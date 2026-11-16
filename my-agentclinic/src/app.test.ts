import { describe, expect, it } from 'vitest'
import { app } from './app.js'

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
})

describe('unknown routes', () => {
  it('returns 404', async () => {
    const res = await app.request('/no-such-page')
    expect(res.status).toBe(404)
  })
})
