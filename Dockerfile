# Builder
FROM node:20-bullseye-slim AS builder
WORKDIR /usr/src/app

# ビルドに必要なパッケージ（ネイティブモジュール対応）
RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential python3 git ca-certificates && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
# package-lock.json があれば copy する
RUN npm ci

COPY . .
RUN npm run build

# Runtime
FROM node:20-bullseye-slim AS runtime
WORKDIR /usr/src/app
ENV NODE_ENV=production

# 最低限のランタイム依存のみインストール
COPY package*.json ./
RUN npm ci --omit=dev

# ビルド成果物と必要ファイルをコピー
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/public ./public || true

EXPOSE 3000
CMD ["node", "dist/main.js"]