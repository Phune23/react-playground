#!/bin/sh
set -e

# Kiểm tra thư mục nginx html
echo "Checking nginx html directory:"
ls -la /usr/share/nginx/html/

# Kiểm tra cấu hình nginx
echo "Checking nginx configuration:"
cat /etc/nginx/conf.d/default.conf

# Bắt đầu nginx
echo "Starting nginx..."
exec "$@"