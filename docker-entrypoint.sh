#!/bin/sh
set -e

# Kiểm tra thư mục web
echo "Checking web directory..."
ls -la /usr/share/nginx/html/

# Nếu không có index.html, tạo file tĩnh mặc định
if [ ! -f /usr/share/nginx/html/index.html ]; then
  echo "Creating fallback index.html..."
  cat > /usr/share/nginx/html/index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <title>React Playground</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .container { max-width: 800px; margin: 0 auto; }
    .error { color: #721c24; background-color: #f8d7da; padding: 10px; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>React Playground</h1>
    <p>This is a fallback page. The application may be experiencing issues.</p>
    <div class="error">
      <h3>Deployment Note</h3>
      <p>The build process encountered an issue with dependencies. Please check the deploy logs.</p>
    </div>
  </div>
</body>
</html>
EOF
fi

# Chạy Nginx
echo "Starting Nginx..."
exec "$@"