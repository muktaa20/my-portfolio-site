import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //  include: ['react-awesome-slider']
  // optimizeDeps: {
  //   include: ['react-awesome-slider']
  // }
})

