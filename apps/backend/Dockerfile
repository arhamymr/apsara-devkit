FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY . .

RUN bun install

COPY . .

FROM oven/bun:1-alpine AS runtime

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/backend ./apps/backend
COPY --from=builder /app/packages ./packages

WORKDIR /app/apps/backend

EXPOSE 2222

CMD ["bun", "run", "src/index.ts"]
