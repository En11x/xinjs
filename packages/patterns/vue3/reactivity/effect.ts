import { createDep, Dep } from './dep'

export const enum TrackOpTypes {
  GET = 'get',
}
export const enum TriggerOpTypes {
  SET = 'set',
}

type EffectScheduler = (...args: any[]) => any

export class ReactiveEffect<T = any> {
  constructor(
    public fn: () => T,
    public scheduler: EffectScheduler | null = null,
  ) {}

  run() {}
  stop() {}
}

let activeEffect: ReactiveEffect | undefined = void 0
let shouldTrack = true
const targetMap = new WeakMap<any, Map<any, Dep>>()

function isTracking() {
  return shouldTrack && activeEffect !== undefined
}

export function track(target: object, type: TrackOpTypes, key: unknown) {
  if (!isTracking()) {
    return
  }

  console.log(`触发 track -> target: ${target} type:${type} key:${key}`)
  //根据target 找到dep
  //找不到需要初始化
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }

  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = createDep()))
  }

  trackEffects(dep)
}

export function trackEffects(dep: Dep) {
  //deps 存放所有的effects
  if (!dep.has(activeEffect!)) {
    dep.add(activeEffect!)
  }
}

export function trigger(
  target: object,
  type: TriggerOpTypes,
  key: PropertyKey,
) {
  //先收集所有的dep放入deps,同意处理
  const deps: Dep[] = []
  const depsMap = targetMap.get(target)
  if (!depsMap) return

  const dep = depsMap.get(key)

  deps.push(dep!)

  const effects: ReactiveEffect[] = []
  deps.map((dep) => {
    effects.push(...dep)
  })

  triggerEffects(createDep(effects))
}

export function triggerEffects(dep: Dep) {
  for (const effect of dep) {
    if (effect.scheduler) {
      effect.scheduler()
    } else {
      effect.run()
    }
  }
}
