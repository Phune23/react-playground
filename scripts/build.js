import { execSync } from 'child_process';
import process from 'process';

// Đảm bảo biến môi trường được thiết lập trước khi import bất kỳ module nào khác
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS = 'true';

console.log('Building project with Rollup native plugins disabled...');
try {
  // Sử dụng execSync để chạy lệnh build
  execSync('vite build', { stdio: 'inherit', env: {...process.env, ROLLUP_SKIP_LOAD_NATIVE_PLUGINS: 'true'} });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}