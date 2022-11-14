import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['packages/core/index.ts'],
  },
  {
    entry: ['packages/shared/index.ts'],
  },
]);
