---
category: Patterns
---

# Observer

观察者模式

## Usage

```ts
import { Observer } from '@xinjs/patterns'
```

## Code

```ts
const observers: Function[] = []

Object.freeze({
  notify: (data: any) => observers.forEach((observer) => observer(data)),
  subscribe: (func: Function) => observers.push(func),
  unsubscribe: (func: Function) => {
    ;[...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1)
      }
    })
  },
})
```

## Example

```ts
btn.addEventListener('click', () => {
  Observer.notify('data')
})

function observerClickFn(data) {
  console.log(data)
}

Observer.subscribe(observerClickFn)

//when btn click
data //console.log
```
