import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  build: {
    outDir: path.resolve(__dirname, '../server/public'),
    proxy: {
      "api/": {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        ws: true,

      }
    }
  }
})
