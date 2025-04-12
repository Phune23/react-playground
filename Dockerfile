FROM node:18-alpine AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Thiết lập biến môi trường để tránh lỗi Rollup
ENV ROLLUP_SKIP_LOAD_NATIVE_PLUGINS=true

# Sao chép package.json trước
COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm config set legacy-peer-deps true && \
    npm install

# Sao chép các file cấu hình
COPY vite.config.js .npmrc* ./

# Sao chép phần còn lại của ứng dụng
COPY . .

# Build ứng dụng
RUN npm run build

# Stage 2: Sử dụng Nginx để serve
FROM nginx:alpine

# Sao chép build files từ stage trước
COPY --from=build /app/dist /usr/share/nginx/html

# Sao chép cấu hình nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Health check
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]