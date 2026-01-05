FROM node:22-alpine
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

COPY . .
RUN pnpm install

EXPOSE 2222
CMD ["bun", "run", "src/index.ts"]
