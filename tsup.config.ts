import { defineConfig, Options } from 'tsup'

function outExtension({ format }: any) {
  if (format === 'esm') return { js: `.${format}.js` }
  if (format === 'iife') return { js: `.mjs` }
  return { js: `.js` }
}

const BaseConfig: Options = {
  format: ['cjs', 'esm', 'iife'],
  dts: true, //add d.ts
  metafile: true, // 添加 meta 文件
  minify: true, // 压缩
  splitting: false,
  sourcemap: true, // 添加 sourcemap 文件
  clean: true,
  outExtension,
}

export default defineConfig([
  {
    entry: ['packages/core/src/index.ts'],
    outDir: 'packages/core/dist',
    ...BaseConfig,
  },
  {
    entry: ['packages/patterns/src/index.ts'],
    outDir: 'packages/patterns/dist',
    ...BaseConfig,
  },
  {
    entry: ['packages/shared/src/index.ts'],
    outDir: 'packages/shared/dist',
    ...BaseConfig,
  },
])
