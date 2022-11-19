---
category: Shared
---

# Is

各种判断函数

## Usage

```ts
const {
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
  isWindow, } from '@xinjs/shared'
```

## Code

```ts
const isClient = typeof window !== 'undefined'
const toString = Object.prototype.toString
const isArray = Array.isArray
const isMap = (val: unknown): val is Map<any, any> =>
  toString.call(val) === '[object Map]'
const isSet = (val: unknown): val is Set<any> =>
  toString.call(val) === '[object Set]'

const isDate = (val: unknown): val is Date =>
  toString.call(val) === '[object Date]'
const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
const isFunction = <T extends Function>(val: unknown): val is T =>
  typeof val === 'function'
const isNumber = (val: unknown): val is number => typeof val === 'number'
const isString = (val: unknown): val is string => typeof val === 'string'
const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
const isObject = (val: unknown): val is Record<any, any> =>
  toString.call(val) === '[object Object]'

const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

const isWindow = (val: unknown): val is Window =>
  typeof window !== 'undefined' && toString.call(val) === '[object Window]'
const isIOS =
  /* #__PURE__ */ isClient &&
  window?.navigator?.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent)
const hasOwn = <T extends object, K extends keyof T>(
  val: T,
  key: K,
): key is K => Object.prototype.hasOwnProperty.call(val, key)
```
