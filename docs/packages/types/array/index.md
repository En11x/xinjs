---
category: Types
---

# Type

ts 各种常用类型集合

## Usage

```ts
/// <reference types="@xinjs/types" />;
```

## Code

```ts
type ArrayItrm<T> = T extends (infer V)[] ? V : never
```

## Example
