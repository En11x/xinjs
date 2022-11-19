---
category: Types
---

# Object

## Usage

```ts
/// <reference types="@xinjs/types" />;
```

## Code

```ts
type AnyObject = Record<string, any>

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[k]
}
```
