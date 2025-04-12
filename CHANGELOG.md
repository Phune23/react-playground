# Changelog

Tất cả những thay đổi đáng chú ý của dự án sẽ được ghi lại ở đây.

## [1.0.5] - 2025-04-12

### Sửa lỗi
- Đồng bộ hóa package.json và package-lock.json để sửa lỗi `npm ci`
- Chuyển từ `npm ci` sang `npm install` trong Dockerfile
- Thêm cấu hình .npmrc để xử lý peer dependencies

## [1.0.4] - 2025-04-12

### Sửa lỗi
- Sửa lỗi Docker build cho Railway deployment
- Thêm custom Dockerfile để tối ưu hóa quá trình build
- Thêm nginx configuration cho Single Page Application

## [1.0.3] - 2025-04-12

### Sửa lỗi
- Sửa cấu hình Jest để hỗ trợ ECMAScript Modules (ESM)
- Cập nhật cấu hình Babel để đảm bảo tests hoạt động đúng
- Thêm flag `--experimental-vm-modules` cho các lệnh Jest

### Thay đổi kỹ thuật
- Cập nhật jest.config.js thành file module với export default
- Thêm các preset Babel cho React và môi trường Node hiện tại
- Cải thiện cấu hình collect coverage cho Jest
- Thêm mock files cho assets với cú pháp ESM

## [1.0.2] - 2025-04-11

### Sửa lỗi
- Cập nhật URL demo để sử dụng Railway deployment
- Sửa cấu hình GitHub Actions để triển khai chính xác

## [1.0.1] - 2025-04-11

### Sửa lỗi
- Cập nhật GitHub Actions workflow để sử dụng phiên bản mới nhất
- Sửa lỗi deprecated trong CI/CD pipeline
- Đảm bảo tương thích với Node.js 18+ (loại bỏ hỗ trợ Node.js 16.x do không tương thích với Vite 6)

## [1.0.0] - 2025-04-11

### Thêm mới
- Editor component với Monaco Editor
- Live Preview cho code React
- Theme sáng/tối
- Bộ chọn bài học
- Responsive design cho các thiết bị

### Thay đổi kỹ thuật
- Setup CI/CD với GitHub Actions
- Thiết lập testing với Jest và React Testing Library
- ESLint configuration