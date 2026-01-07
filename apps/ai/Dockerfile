FROM oven/bun:1-alpine AS base 


FROM base AS prepare
WORKDIR /app
RUN bun add turbo@latest -g
COPY . .
RUN turbo prune ai --docker 

COPY . .

FROM node:20-slim  AS builder
WORKDIR /app
RUN corepack enable
COPY --from=prepare /app/out/json/ .
RUN pnpm install --frozen-lockfile

# build the project
COPY --from=prepare /app/out/full/ .
RUN pnpm turbo build --filter=ai


FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 mastraai
RUN adduser --system --uid 1001 mastraai
USER mastraai

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/ai ./apps/ai

WORKDIR /app/apps/ai
EXPOSE 3333

CMD ["bun", "start"]
