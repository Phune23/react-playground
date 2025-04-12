import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

// Thiết lập biến môi trường một cách an toàn trong Node.js runtime
try {
  process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS = 'true';
} catch {
  // Bỏ qua lỗi
}

export default defineConfig({
  define: {
    'process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS': JSON.stringify('true'),
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      // Sử dụng context và external để ép Rollup không sử dụng native plugins
      context: 'globalThis',
      external: id => {
        // Loại bỏ các native add-ons
        return /rollup-.*-plugin|@rollup\/rollup-.*/.test(id);
      }
    },
  },
});
