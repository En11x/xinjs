---
category: Core
---

# Throttle

节流函数

## Usage

```ts
import { throttle } from '@xinjs/core'

const needThrottle = throttle(onChange,300)

needThrottle()
```

## Code

```ts
const throttle = (fn: any, wait: number) => {
  let inThrottle = false

  return (...args: any) => {
    let context = this
    if (!inThrottle) {
      inThrottle = true
      fn.apply(context, args)
      setTimeout(() => {
        inThrottle = false
      }, wait)
    }
  }
}

```
