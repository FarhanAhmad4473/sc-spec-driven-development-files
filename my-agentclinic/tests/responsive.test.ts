import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { app } from '../src/app.js'

const css = readFileSync(new URL('../static/styles.css', import.meta.url), 'utf8')

// Collapse whitespace so rule checks don't depend on formatting.
const flat = css.replace(/\s+/g, ' ')

describe('responsive markup', () => {
  it('sets the viewport meta tag on the home page', async () => {
    const body = await (await app.request('/')).text()
    expect(body).toContain('<meta name="viewport" content="width=device-width, initial-scale=1"/>')
  })

  it('serves the stylesheet the responsive rules live in', async () => {
    const res = await app.request('/static/styles.css')
    expect(res.status).toBe(200)
    expect(await res.text()).toBe(css)
  })
})

describe('responsive stylesheet', () => {
  it('is mobile-first, with min-width breakpoints at 600px and 900px', () => {
    expect(flat).toContain('@media (min-width: 600px)')
    expect(flat).toContain('@media (min-width: 900px)')
    expect(flat).not.toMatch(/@media \(max-width/)
    expect(flat.indexOf('@media (min-width: 600px)')).toBeLessThan(flat.indexOf('@media (min-width: 900px)'))
  })

  it('makes images and video fluid', () => {
    const rule = flat.match(/img, video \{([^}]*)\}/)?.[1] ?? ''
    expect(rule).toContain('max-width: 100%')
    expect(rule).toContain('height: auto')
  })

  it('uses fluid type with a 16px (1rem) minimum', () => {
    expect(flat).toMatch(/font-size: clamp\(1rem,/)
    expect((flat.match(/clamp\(/g) ?? []).length).toBeGreaterThanOrEqual(3)
  })

  it('keeps a side gutter of at least 16px', () => {
    const gutter = Number(flat.match(/--gutter: (\d+)px/)?.[1])
    expect(gutter).toBeGreaterThanOrEqual(16)
    expect(flat).toContain('padding-left: var(--gutter)')
    expect(flat).toContain('padding-right: var(--gutter)')
  })

  it('caps content width with max-width', () => {
    expect(flat).toMatch(/max-width: var\(--max-width\)/)
  })

  it('gives the home link a tap target of at least 44px', () => {
    expect(Number(flat.match(/--tap: (\d+)px/)?.[1])).toBeGreaterThanOrEqual(44)
    const brand = flat.match(/\.brand \{([^}]*)\}/)?.[1] ?? ''
    expect(brand).toContain('min-height: var(--tap)')
  })
})
