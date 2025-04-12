FROM node:18-alpine AS build

WORKDIR /app

# Thiết lập biến môi trường để tránh lỗi Rollup
ENV ROLLUP_SKIP_LOAD_NATIVE_PLUGINS=true

# Sao chép các file cần thiết và cài đặt dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Sao chép source code và build
COPY . .
RUN npm run build

# Check build output - thêm logging
RUN ls -la dist && \
    echo "Kiểm tra dist/index.html:" && \
    cat dist/index.html | head -n 20

# Stage 2: Runtime image
FROM nginx:alpine

# Sao chép kết quả build
COPY --from=build /app/dist /usr/share/nginx/html

# Sao chép cấu hình nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Thêm script kiểm tra
COPY scripts/check-nginx.js /usr/local/bin/check-nginx.js

# Thêm node cho script chẩn đoán
RUN apk add --no-cache nodejs

# Thêm script đặc biệt để chạy trước nginx
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

# Sử dụng entrypoint tùy chỉnh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]