FROM node:18-alpine AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Thiết lập biến môi trường để tránh lỗi Rollup
ENV ROLLUP_SKIP_LOAD_NATIVE_PLUGINS=true


# Sao chép package.json trước

# Sao chép package.json và lockfile trước

COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm config set legacy-peer-deps true && \
    npm install


# Sao chép các file cấu hình
COPY vite.config.js .npmrc* ./

# Cài đặt Rollup phiên bản cụ thể
RUN npm install rollup@3.29.4 --no-save

# Sao chép phần còn lại của ứng dụng
COPY . .

# Build ứng dụng
RUN npm run build:ci

# Stage 2: Sử dụng Nginx để serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Sao chép cấu hình nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Health check
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/ || exit 1

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]