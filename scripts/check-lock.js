const { execSync } = require('child_process');
const fs = require('fs');

// Lưu nội dung hiện tại của package-lock.json
const currentLockContent = fs.readFileSync('package-lock.json', 'utf8');

try {
  // Tạo lại package-lock.json
  console.log('Regenerating package-lock.json...');
  execSync('npm install --package-lock-only', { stdio: 'inherit' });
  
  // Đọc nội dung mới
  const newLockContent = fs.readFileSync('package-lock.json', 'utf8');
  
  // So sánh
  if (currentLockContent !== newLockContent) {
    console.error('❌ package-lock.json không đồng bộ với package.json!');
    console.log('Hãy chạy: npm install --package-lock-only');
    console.log('Sau đó: git add package-lock.json && git commit -m "chore: Update package-lock.json"');
    process.exit(1);
  } else {
    console.log('✅ package-lock.json đồng bộ với package.json');
  }
} catch (error) {
  console.error('Lỗi khi kiểm tra package-lock.json:', error);
  process.exit(1);
}