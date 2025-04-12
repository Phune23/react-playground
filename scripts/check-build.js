import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = path.join(__dirname, '../dist');

console.log('Kiểm tra thư mục build:');

if (!fs.existsSync(distDir)) {
  console.error('❌ Thư mục dist không tồn tại!');
  process.exit(1);
}

const indexFile = path.join(distDir, 'index.html');
if (!fs.existsSync(indexFile)) {
  console.error('❌ File index.html không tồn tại trong thư mục dist!');
  process.exit(1);
}

console.log('✅ Thư mục dist và index.html tồn tại.');

const files = fs.readdirSync(distDir); // bỏ `recursive: true` nếu không dùng Node 20+
console.log('📁 Cấu trúc thư mục dist:');
console.log(files);

console.log('📄 Nội dung index.html:');
const indexContent = fs.readFileSync(indexFile, 'utf8');
console.log(indexContent.substring(0, 300) + '...');

console.log('✅ Kiểm tra hoàn tất.');
