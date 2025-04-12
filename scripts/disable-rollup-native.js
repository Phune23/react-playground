import process from 'process';
// Chạy file này trước mỗi lệnh build
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGINS = 'true';

// Nếu bạn muốn tắt các native add-ons khác trong tương lai
// Thêm các biến môi trường tương tự ở đây