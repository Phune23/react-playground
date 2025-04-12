import { execSync } from 'child_process';

console.log('Kiểm tra cấu hình Nginx:');

try {
  // Kiểm tra vị trí của nginx.conf
  console.log('1. Kiểm tra nginx.conf:');
  execSync('ls -la /etc/nginx/conf.d/', { stdio: 'inherit' });
  
  // Kiểm tra nội dung của cấu hình hiện tại
  console.log('\n2. Nội dung cấu hình Nginx:');
  execSync('cat /etc/nginx/conf.d/default.conf', { stdio: 'inherit' });
  
  // Kiểm tra các file trong thư mục web
  console.log('\n3. Kiểm tra thư mục web:');
  execSync('ls -la /usr/share/nginx/html/', { stdio: 'inherit' });
  
  // Kiểm tra xem Nginx có đang chạy
  console.log('\n4. Trạng thái Nginx:');
  execSync('ps aux | grep nginx', { stdio: 'inherit' });
  
  // Kiểm tra port 80
  console.log('\n5. Kiểm tra port 80:');
  execSync('netstat -tulpn | grep 80', { stdio: 'inherit' });

  console.log('\n✅ Kiểm tra hoàn tất.');
} catch (error) {
  console.error('\n❌ Lỗi khi kiểm tra:', error);
}