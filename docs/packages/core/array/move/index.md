---
category: Core
---

# Move

数组移动元素

## Usage

```ts
import { Move } from '@xinjs/core';

const arr = [1, 2, 3, 4];

Move(arr, 1, 2);
```

## Code

```ts
export function move<T>(arr: T[], from: number, to: number): T[] {
  const result = arr.slice();

  result.splice(to, 0, result.splice(from, 1)[0]);
  return result;
}
```
