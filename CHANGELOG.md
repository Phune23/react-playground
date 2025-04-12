# Changelog

Tất cả những thay đổi đáng chú ý của dự án sẽ được ghi lại ở đây.

## [1.0.5] - 2025-04-12

### Sửa lỗi
- Sửa lỗi Rollup trong quá trình build trên CI/CD
- Thêm script `build:ci` để xử lý các vấn đề với optional dependencies
- Chỉ định phiên bản cụ thể của Rollup để tránh lỗi không tương thích
- Cập nhật workflow CI để sử dụng script build mới

## [1.0.4] - 2025-04-12

### Sửa lỗi
- Sửa lỗi Docker build cho Railway deployment
- Thêm custom Dockerfile để tối ưu hóa quá trình build
- Thêm nginx configuration cho Single Page Application
- Cấu hình lại các tham số build cho môi trường production

## [1.0.3] - 2025-04-12

### Sửa lỗi
- Sửa cấu hình Jest để hỗ trợ ECMAScript Modules (ESM)
- Cập nhật cấu hình Babel để đảm bảo tests hoạt động đúng
- Thêm flag `--experimental-vm-modules` cho các lệnh Jest

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