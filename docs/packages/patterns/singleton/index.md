---
category: Patterns
---

# Singleton

单例

## Usage

```ts
import { Singleton } from '@xinjs/patterns'

const s1 = new Singleton()
const s2 = new Singleton()

//s1 === s2  same instance
```

## Code

```ts
class Singleton {
  private static instance: Singleton

  /**
   * The Singleton's constructor should always be private to prevent direct construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method controls the access to the single
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}
```
