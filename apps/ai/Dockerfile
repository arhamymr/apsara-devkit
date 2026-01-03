FROM node:22-alpine AS base
WORKDIR /app

COPY package.json package-lock.json ./
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

EXPOSE 3333
CMD ["pnpm", "run", "start"]
