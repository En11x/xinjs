import { describe, it, expect } from 'vitest'
import { noop, noopAsync, noopNull } from '.'

describe('noop', () => {
  it('works', () => {
    expect(noop()).toEqual(undefined)
  })
})

describe('noopAsync', () => {
  it('works', async () => {
    expect(await noopAsync()).toEqual(undefined)
  })
})

describe('noopNull', () => {
  it('works', () => {
    expect(noopNull()).toEqual(null)
  })
})
