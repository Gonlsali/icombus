## Dockerfile
# Menggunakan Node.js sebagai base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh project
COPY . .

# Build Next.js
RUN npm run build

# Stage untuk production
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy hanya file yang diperlukan untuk runtime
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/server.js ./server.js

# Expose port yang digunakan oleh Next.js
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
