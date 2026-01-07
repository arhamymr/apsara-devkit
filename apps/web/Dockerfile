ARG NODE_VERSION=24.11.1
FROM node:${NODE_VERSION}-slim AS base

WORKDIR /app

#----
FROM base AS prepare
RUN pnpm install -g turbo@latest
COPY . .

RUN turbo prune web --docker


FROM base AS builder 

COPY --from=prepare /app/out/json/ .
RUN pnpm install --frozen-lockfile

# build the project 
COPY --from=prepare /app/out/full/ .
RUN pnpm turbo build --filter=web


FROM node:${NODE_VERSION}-alpine AS runner
# Don't run production as root for security reasons
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public


EXPOSE 3000
CMD node apps/web/server.js
