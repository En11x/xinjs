---
category: Types
---

# Type

ts 各种常用类型集合

## Usage

```ts
import { ArrayItem } from '@xinjs/types';
```

## Code

```ts
type ArrayItrm<T> = T extends (infer V)[] ? V : never;
```

## Example
