import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== RAILWAY NGINX DIAGNOSTICS ===');

try {
  // Kiểm tra vị trí của nginx.conf
  console.log('\n1. Cấu hình Nginx:');
  try {
    execSync('ls -la /etc/nginx/conf.d/', { stdio: 'inherit' });
    execSync('cat /etc/nginx/conf.d/default.conf', { stdio: 'inherit' });
  } catch (e) {
    console.log('Không thể đọc cấu hình Nginx:', e.message);
  }
  
  // Kiểm tra các file trong thư mục web
  console.log('\n2. Thư mục web:');
  try {
    execSync('ls -la /usr/share/nginx/html/', { stdio: 'inherit' });
    
    // Kiểm tra index.html
    console.log('\n3. Kiểm tra index.html:');
    if (fs.existsSync('/usr/share/nginx/html/index.html')) {
      console.log('index.html tồn tại');
      const content = fs.readFileSync('/usr/share/nginx/html/index.html', 'utf8').substring(0, 200);
      console.log('Nội dung (200 ký tự đầu):', content);
    } else {
      console.log('❌ KHÔNG TÌM THẤY index.html');
    }
  } catch (e) {
    console.log('Không thể đọc thư mục web:', e.message);
  }
  
  // Kiểm tra Nginx có đang chạy
  console.log('\n4. Trạng thái Nginx:');
  try {
    execSync('ps aux | grep nginx', { stdio: 'inherit' });
  } catch (e) {
    console.log('Không thể kiểm tra trạng thái Nginx:', e.message);
  }
  
  // Kiểm tra cổng
  console.log('\n5. Kiểm tra cổng 80:');
  try {
    execSync('netstat -tulpn | grep 80', { stdio: 'inherit' });
  } catch (e) {
    console.log('Không thể kiểm tra cổng 80:', e.message);
    try {
      // Thử phương pháp thay thế
      execSync('ss -tulpn | grep 80', { stdio: 'inherit' });
    } catch {
      console.log('Cả netstat và ss đều không khả dụng');
    }
  }

  console.log('\n✅ Kiểm tra hoàn tất.');
} catch (error) {
  console.error('\n❌ Lỗi tổng thể:', error);
}