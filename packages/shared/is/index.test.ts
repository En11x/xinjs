import { describe, expect, it } from 'vitest'
import { isClient } from '.'

describe('shared/is test', () => {
  it('the isClient return false', () => {
    expect(isClient).toEqual(false)
  })
})
