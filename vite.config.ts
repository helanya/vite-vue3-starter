import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'rc'),
    },
  },
  base: './',
  server: {
    port: 6324,
    open: true,
    cors: true,
    proxy: {},
  },
})
