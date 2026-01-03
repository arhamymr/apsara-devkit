FROM oven/bun:1-alpine AS base
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

EXPOSE 2222
CMD ["bun", "run", "./dist/index.js"]
