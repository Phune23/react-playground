FROM node:20-alpine AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json trước
COPY package.json ./

# Sao chép package-lock.json nếu có
COPY package-lock.json* ./

# Sử dụng npm install thay vì npm ci
# Thêm --legacy-peer-deps để tránh lỗi peer dependencies
RUN npm install --legacy-peer-deps

# Sao chép tất cả source code
COPY . .

# Build ứng dụng
RUN npm run build

# Stage 2: Sử dụng Nginx để serve static files
FROM nginx:alpine

# Sao chép build files từ stage trước
COPY --from=build /app/dist /usr/share/nginx/html

# Cấu hình nginx để xử lý SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]