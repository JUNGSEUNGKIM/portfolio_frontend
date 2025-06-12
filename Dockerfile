# 1단계: 프론트 앱 빌드
FROM node:20-alpine AS builder
WORKDIR /app

# package.json과 lock 파일 복사
COPY package*.json ./
RUN npm install --legacy-peer-deps

# 전체 코드 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: NGINX을 이용해 정적 파일 서빙
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

