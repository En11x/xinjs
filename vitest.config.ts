import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@xinjs/shared': resolve(__dirname, 'packages/shared/index.ts'),
    },
  },
})
