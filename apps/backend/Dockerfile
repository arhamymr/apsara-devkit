FROM oven/bun:1-alpine AS base 

FROM base AS prepare
WORKDIR /app
RUN bun install turbo@latest -g
COPY . .
RUN bun turbo prune backend --docker

FROM base AS builder
WORKDIR /app
COPY --from=prepare /app/out/json/ .
RUN bun install --frozen-lockfile --production
# build the project
COPY --from=prepare /app/out/full/ .


FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 backend
RUN adduser --system --uid 1001 backend
USER backend

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/backend/dist ./dist
EXPOSE 2222
CMD ["bun", "run", "src/index.ts"]
