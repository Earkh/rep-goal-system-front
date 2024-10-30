
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config';
import { resolve } from "path";



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
      app: `${resolve(__dirname, "./src/app/")}`,
      lib: `${resolve(__dirname, "./src/lib/")}`,
      components: `${resolve(__dirname, "./src/components/")}`,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
  }
})
