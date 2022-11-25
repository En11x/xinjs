---
category: Patterns
---

# Vue2

Vue2 响应式简单实现

## Usage

```ts
import { Vue, Watcher } from '@xinjs/patterns'

const data = {
  name: 'Xin',
  age: 18,
}

const vue = new Vue({ data })
const watcher1 = new Watcher(vue, 'name', function (value) {
  console.log(value)
})
const watcher2 = new Watcher(vue, 'age', function (value) {
  console.log(value)
})

data.name = 'Jack'
//Jack
data.age = 20
//20
for (let i = 0; i <= 100; i++) {
  data.age = i //num的变更push到updateQueue中，只保存最后一次赋值的结果
}
app.$nextTick(function () {
  console.log('这是dom更新完成后的操作')
})
```

## Code

```ts
type Key = string | number | symbol
type Object = Record<Key, any>

interface Watch {
  update(): void
  run(): void
}

let watchers: any = {} //控制watcher不会重复
let uid = 0
const updateQueue: Watch[] = [] //一部更新队列
const callbacks: any[] = [] //回调函数
let pendding: boolean = false //控制一次事件循环执行一次

class Dep {
  static target: Watcher | null = null
  private subs: Watcher[] = []

  constructor() {
    this.subs = []
  }

  addSubs(watcher: Watcher) {
    this.subs.push(watcher)
  }

  notify() {
    for (const watcher of this.subs) {
      watcher.update()
    }
  }
}

class Observer {
  constructor(data: any) {
    if (typeof data === 'object') {
      this.walk(data)
    }
  }

  walk(obj: Object) {
    const keys = Object.keys(obj)
  }

  defineReactive(obj: Object, key: Key) {
    if (typeof obj[key] === 'object') {
      this.walk(obj[key])
    }
    const dep = new Dep()
    let val = obj[key]
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function () {
        //添加依赖
        Dep.target && dep.addSubs(Dep.target)

        return val
      },
      set: function (newVal) {
        val = newVal
        dep.notify()
      },
    })
  }
}
class Watcher implements Watch {
  private vm: Vue
  private key: Key
  private cb: Function
  value: any
  uid: number

  constructor(vm: Vue, key: Key, cb: Function) {
    this.uid = uid++
    this.vm = vm
    this.key = key
    this.cb = cb
    //创建watcher 添加依赖
    Dep.target = this
    this.value = vm.$data
    Dep.target = null
  }
  update() {
    if (this.value !== this.vm.$data[this.key]) {
      this.value = this.vm.$data[this.key]
      if (!this.vm.waiting) {
        //控制每次时间循环只添加一次updateQueue到callbacks
        this.vm.nextTick(this.vm.flushUpdateQueue)
        this.vm.waiting = true
      }

      //不是立即执行run,而是放入updateQueue中
      if (!watchers[this.uid]) {
        watchers[this.uid] = true
        updateQueue.push(this)
      }
    }
  }

  run() {
    this.cb(this.value)
  }
}

class Vue {
  private _data: any
  $data: any
  waiting: boolean

  constructor(options: any) {
    this.waiting = false
    this._data = options.data
    this.$data = this._data
    new Observer(this._data)
  }

  //simple
  nextTick(cb: Function) {
    callbacks.push(cb)
    if (!pendding) {
      pendding = true
      setTimeout(() => {
        //上一次宏任务执行之后
        this.flushCallbacks()
      })
    }
  }

  //清空队列
  flushUpdateQueue(vm: Vue) {
    while (updateQueue.length !== 0) {
      updateQueue.shift()?.run()
    }
    watchers = {}
    vm.waiting = false
  }

  flushCallbacks() {
    while (callbacks.length !== 0) {
      callbacks.shift()(this)
    }
    pendding = false
  }
}
```
