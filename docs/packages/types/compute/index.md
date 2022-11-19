---
category: Types
---

# Compute

## Usage

```ts
/// <reference types="@xinjs/types" />;
```

## Code

```ts
type ComputeTo<To, From = unknown> = (source: From) => To
type Computable<To, From = unknown> = To | ComputeTo<To, From>
```
