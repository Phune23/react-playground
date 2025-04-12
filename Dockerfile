FROM node:18-alpine AS build

WORKDIR /app

# Thiết lập biến môi trường để tránh lỗi Rollup
ENV ROLLUP_SKIP_LOAD_NATIVE_PLUGINS=true

# Sao chép các file cần thiết và cài đặt dependencies
COPY package.json package-lock.json ./

# Thay đổi từ npm ci sang npm install với các tùy chọn
RUN npm config set legacy-peer-deps true && \
    npm install --no-audit --no-fund

# Sao chép source code và build
COPY . .
RUN npm run build:ci

# Stage 2: Runtime image
FROM nginx:alpine

# Sao chép kết quả build
COPY --from=build /app/dist /usr/share/nginx/html

# Sao chép cấu hình nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Thêm script entrypoint
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
