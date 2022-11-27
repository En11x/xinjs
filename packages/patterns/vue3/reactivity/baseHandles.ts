import { isObject } from '../../../shared'
import { track, TrackOpTypes, trigger, TriggerOpTypes } from './effect'
import { reactive, readonly, Target } from './reactive'

const get = createGetter()
const set = createSetter()
const readonlyGet = createGetter(true)

function createGetter(isReadonly = false, shallow = false) {
  return function get(target: Target, key: string | symbol, receiver: object) {
    const res = Reflect.get(target, key, receiver)

    if (!isReadonly) {
      //触发 get 的时候收集依赖
      track(target, TrackOpTypes.GET, key)
    }

    if (shallow) {
      return res
    }

    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive(res)
    }

    return res
  }
}

function createSetter() {
  return function set(
    target: object,
    key: string | symbol,
    value: unknown,
    receiver: object,
  ) {
    const result = Reflect.set(target, key, value, receiver)

    //set时触发依赖
    trigger(target, TriggerOpTypes.SET, key)

    return result
  }
}

export const readyonlyHandles = {
  get: readonlyGet,
  set(target: any, key: any) {
    console.warn(
      `Set operation on key "${String(key)}" failed: target is readonly.`,
      target,
    )
    return true
  },
}

export const mutableHandles = {
  get,
  set,
}
