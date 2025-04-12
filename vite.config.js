import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

// Thiết lập biến môi trường toàn cục
try {
  process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS = 'true'
} catch {
  // Bỏ qua lỗi
}

export default defineConfig({
  define: {
    'process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS': JSON.stringify('true'),
  },
  plugins: [react()],
  // Thêm cấu hình base để hoạt động trên Railway
  base: '/',
  build: {
    // Đảm bảo tạo ra file index.html ở thư mục gốc
    outDir: 'dist',
    // Cấu hình để đường dẫn tương đối
    assetsDir: 'assets',
    rollupOptions: {
      context: 'globalThis'
    }
  },
  // Hỗ trợ Railway port
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  }
});

