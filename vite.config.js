import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { 
    port: 5173, 
    host: true 
  },
  build: {
    // Ensure CSS is properly bundled
    cssCodeSplit: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'socket-vendor': ['socket.io-client'],
          'ui-vendor': ['lucide-react', 'framer-motion', 'emoji-picker-react']
        }
      }
    }
  },
  css: {
    devSourcemap: false,
    // Ensure CSS is properly processed
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  }
})