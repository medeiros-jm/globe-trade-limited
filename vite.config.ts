import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/react-app': resolve(__dirname, './src/react-app'),
      '@/shared': resolve(__dirname, './src/shared')
    }
  }
})
