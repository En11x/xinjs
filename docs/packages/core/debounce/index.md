---
category: Core
---

# Debounce

防抖函数

## Usage

```ts
import { debounce } from '@xinjs/core'

const needDebounce = debounce(onChange,300)

needDebounce()
```

## Code

```ts
const debounce = (fn: any, wait: number) => {
  let timer: any
  return (...args: any) => {
    // @ts-ignore
    const context = this
    if (timer) {
      clearTimeout(timer)
    }
    setTimeout(() => {
      timer = null
      fn.apply(context, args)
    }, wait)
  }
}
```
