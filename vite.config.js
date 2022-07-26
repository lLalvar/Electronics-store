import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://lalvar-electronics-store.netlify.app/',
  plugins: [vue()],
  server: {
    host: true,
  },
})
