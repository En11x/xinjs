import { isPromise } from 'util/types'
import { describe, expect, it } from 'vitest'
import {
  hasOwn,
  isArray,
  isBoolean,
  isClient,
  isDate,
  isFunction,
  isIOS,
  isMap,
  isNumber,
  isObject,
  isSet,
  isString,
  isSymbol,
  isWindow,
} from '.'

describe('shared/is test', () => {
  it('the isClient return false', () => {
    expect(isClient).toEqual(false)
  })
  it('the isArray return false', () => {
    expect(isArray('string')).toEqual(false)
  })
  it('the isMap return true', () => {
    expect(isMap(new Map())).toEqual(true)
  })
  it('the isSet return true', () => {
    expect(isSet(new Set())).toEqual(true)
  })
  it('the isDate return true', () => {
    expect(isDate(new Date())).toEqual(true)
  })
  it('the isBoolean return true', () => {
    expect(isBoolean(true)).toEqual(true)
  })
  it('the isFunction return true', () => {
    expect(isFunction(function () {})).toEqual(true)
  })
  it('the isNumber return true', () => {
    expect(isNumber(2)).toEqual(true)
  })
  it('the isString return true', () => {
    expect(isString('')).toEqual(true)
  })
  it('the isSymbol return true', () => {
    expect(isSymbol(Symbol())).toEqual(true)
  })
  it('the isObject return true', () => {
    expect(isObject({})).toEqual(true)
  })
  it('the isPromise return true', () => {
    expect(isPromise(new Promise((resolve) => {}))).toEqual(true)
  })
  it('the isWindow return false', () => {
    expect(isWindow({})).toEqual(false)
  })
  it('the isIOS return false', () => {
    expect(isIOS).toEqual(false)
  })
  it('the hasOwn return true', () => {
    const obj = { name: 'Jack' }
    expect(hasOwn(obj, 'name')).toEqual(true)
  })
})
