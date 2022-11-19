---
category: Types
---

# Chaos

## Usage

```ts
/// <reference types="@xinjs/types" />;
```

## Code

```ts
interface IO<V> {
  value: V
  onChange(value: V): void
}

export type IsEqual<T> = (a: T, b: T) => boolean

export type Maybe<T> = T | null | undefined
```
