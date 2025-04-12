import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite sử dụng biến môi trường qua import.meta.env trong code
export default defineConfig({
  define: {
    // Định nghĩa giá trị cho import.meta.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS
    'import.meta.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS': JSON.stringify('true'),
    // Đảm bảo tương thích với code sử dụng process.env
    'process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS': JSON.stringify('true'),
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      context: 'globalThis',
    },
  },
});
