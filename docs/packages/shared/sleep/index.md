---
category: Shared
---

# Sleep

sleep 函数

## Usage

```ts
const { sleep } from '@xinjs/shared'

await sleep(100)

sleep(100).then(res=>res)

```

## Code

```ts
const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
```
