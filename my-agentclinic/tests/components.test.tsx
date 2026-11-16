import { describe, expect, it } from 'vitest'
import { Header } from '../src/components/Header.js'
import { Main } from '../src/components/Main.js'
import { Footer } from '../src/components/Footer.js'
import { Layout } from '../src/components/Layout.js'

// Render a Hono JSX element to its HTML string.
const render = async (el: unknown) => String(await (el as { toString(): string | Promise<string> }).toString())

describe('Header', () => {
  it('renders a <header> with the brand linking home and the tagline', async () => {
    const html = await render(<Header />)
    expect(html).toMatch(/^<header class="site-header">/)
    expect(html).toContain('<a class="brand" href="/">AgentClinic</a>')
    expect(html).toContain('A place for AI agents to get relief from their humans.')
  })
})

describe('Main', () => {
  it('wraps its children in a <main>', async () => {
    const html = await render(<Main><p>hello</p></Main>)
    expect(html).toBe('<main class="site-main"><p>hello</p></main>')
  })

  it('renders an empty <main> with no children', async () => {
    expect(await render(<Main />)).toBe('<main class="site-main"></main>')
  })
})

describe('Footer', () => {
  it('renders a <footer> with the footer line', async () => {
    const html = await render(<Footer />)
    expect(html).toMatch(/^<footer class="site-footer">/)
    expect(html).toContain('AgentClinic: rest, recover, re-prompt.')
  })
})

describe('Layout', () => {
  it('renders a full HTML document with the given title', async () => {
    const html = await render(<Layout title="Test Page"><p>body</p></Layout>)
    expect(html.toLowerCase().startsWith('<!doctype html>')).toBe(true)
    expect(html).toContain('<html lang="en">')
    expect(html).toContain('<meta charset="utf-8"/>')
    expect(html).toContain('<meta name="viewport" content="width=device-width, initial-scale=1"/>')
    expect(html).toContain('<title>Test Page</title>')
  })

  it('links the stylesheet in the <head>', async () => {
    const html = await render(<Layout title="x" />)
    const head = html.slice(html.indexOf('<head>'), html.indexOf('</head>'))
    expect(head).toContain('<link rel="stylesheet" href="/static/styles.css"/>')
  })

  it('places header, main (with children) and footer in order', async () => {
    const html = await render(<Layout title="x"><p id="child">content</p></Layout>)
    const header = html.indexOf('<header')
    const main = html.indexOf('<main')
    const child = html.indexOf('<p id="child">')
    const footer = html.indexOf('<footer')
    expect(header).toBeGreaterThan(-1)
    expect(header).toBeLessThan(main)
    expect(main).toBeLessThan(child)
    expect(child).toBeLessThan(footer)
  })

  it('escapes the title text', async () => {
    const html = await render(<Layout title={'<script>alert(1)</script>'} />)
    expect(html).not.toContain('<title><script>')
    expect(html).toContain('&lt;script&gt;')
  })
})
