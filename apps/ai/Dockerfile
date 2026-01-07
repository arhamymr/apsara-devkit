FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY . .

RUN bun install

COPY . .

FROM oven/bun:1-alpine AS runtime

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/ai ./apps/ai
COPY --from=builder /app/packages ./packages

WORKDIR /app/apps/ai

EXPOSE 3333

CMD ["bun", "run", "src/index.ts"]
