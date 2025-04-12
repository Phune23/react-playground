FROM node:20-alpine AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Thiết lập biến môi trường để tránh lỗi Rollup
ENV ROLLUP_SKIP_LOAD_NATIVE_PLUGINS=true

# Sao chép package.json trước
COPY package.json ./

# Sao chép các file cấu hình khác nếu cần
COPY vite.config.js .npmrc* ./

# Cài đặt dependencies (không cần cài đặt rollup riêng nữa)
RUN npm config set legacy-peer-deps true
RUN npm install

# Sao chép tất cả source code
COPY . .

# Build ứng dụng
RUN npm run build:ci

# Stage 2: Sử dụng Nginx để serve static files
FROM nginx:alpine

# Sao chép build files từ stage trước
COPY --from=build /app/dist /usr/share/nginx/html

# Cấu hình nginx để xử lý SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]