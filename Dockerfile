FROM oven/bun:alpine AS base
WORKDIR /usr/src/app

RUN apk add --no-cache \
  bash \
  curl \
  chromium \
  nss \
  freetype \
  harfbuzz \
  ca-certificates \
  ttf-freefont \
  libstdc++ \
  libx11 \
  libxcb \
  libxcomposite \
  libxdamage \
  libxrandr \
  libxi \
  libxtst \
  libxrender \
  dumb-init

RUN bun install

COPY . .

CMD ["bun", "index.ts"]
