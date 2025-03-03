# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
# Salin file package.json dan package-lock.json (jika ada)
COPY package*.json ./
# Install dependencies
RUN npm install
# Salin seluruh kode aplikasi
COPY . .
# Build aplikasi Next.js
RUN npm run build

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
# Salin file package.json untuk memastikan dependensi yang diperlukan tersedia
COPY --from=builder /app/package*.json ./
# Salin folder node_modules yang telah diinstall di stage builder
COPY --from=builder /app/node_modules ./node_modules
# Salin hasil build Next.js dan folder public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Ekspos port yang digunakan aplikasi
EXPOSE 3000

# Set environment ke production
ENV NODE_ENV production

# Perintah untuk menjalankan aplikasi dalam mode production
CMD ["npm", "run", "dev"]
