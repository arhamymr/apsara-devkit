FROM oven/bun:1-alpine AS runtime

WORKDIR /app

COPY --from=shared-deps /app/node_modules ./node_modules
COPY --from=shared-deps /app/apps/ai ./apps/ai
COPY --from=shared-deps /app/packages ./packages
COPY --from=shared-deps /app/pnpm-lock.yaml ./
COPY --from=shared-deps /app/pnpm-workspace.yaml ./

WORKDIR /app/apps/ai

EXPOSE 3333

CMD ["bun", "run", "src/index.ts"]
