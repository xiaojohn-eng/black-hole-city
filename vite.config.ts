import { defineConfig } from 'vite'

export default defineConfig({
  base: '/black-hole-city/',
  build: {
    target: 'es2020',
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
})
