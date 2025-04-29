import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import tsconfigPaths from "vite-tsconfig-paths";

// ✅ ESM 환경에서 __dirname 흉내내기
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['test.arami.kr'],
    hmr: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
