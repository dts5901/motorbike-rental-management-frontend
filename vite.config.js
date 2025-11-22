import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: { strict: false },
    port: 3000
  },
  build: { outDir: 'dist' },
  base: '/motorbike-rental/',
})
