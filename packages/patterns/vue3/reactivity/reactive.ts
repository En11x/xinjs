import { mutableHandles, readyonlyHandles } from './baseHandles'

export const enum ReactiveFlags {
  IS_REACTIVE = '__v_isReactive',
  IS_READONLY = '__v_isReadonly',
  RAW = '__v_raw',
}

export interface Target {
  [ReactiveFlags.IS_REACTIVE]?: boolean
  [ReactiveFlags.IS_READONLY]?: boolean
  [ReactiveFlags.RAW]?: any
}

export const reactiveMap = new WeakMap<Target, any>()
export const readonlyMap = new WeakMap<Target, any>()

export function reactive(target: object) {
  return createReactiveObject(target, reactiveMap, mutableHandles)
}

export function readonly(target: object) {
  return createReactiveObject(target, readonlyMap, readyonlyHandles)
}

function createReactiveObject(
  target: Target,
  proxyMap: WeakMap<Target, any>,
  baseHandles: ProxyHandler<any>,
) {
  //proxy

  //缓存
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }

  const proxy = new Proxy(target, baseHandles)
  proxyMap.set(target, proxy)
  return proxy
}
