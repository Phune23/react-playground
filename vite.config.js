import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Tắt Rollup native add-ons tại đây
export default defineConfig({
  define: {
    'process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS': JSON.stringify('true'),
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      // Cấu hình rõ ràng để tránh sử dụng native add-ons
      context: 'globalThis',
    },
  },
});
