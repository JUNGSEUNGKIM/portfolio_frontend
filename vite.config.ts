import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['test.arami.kr'], // 여기에 허용할 도메인 추가!
    hmr: true,
  },
})
