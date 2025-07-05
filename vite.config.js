import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // ✅ This fixes asset path issues on iPhone
  plugins: [react(), tailwindcss()],
})
