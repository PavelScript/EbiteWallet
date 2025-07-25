import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: true, // Делает сервер доступным по IP-адресу
    port:3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Алиас для `src/`
    },
  },
})