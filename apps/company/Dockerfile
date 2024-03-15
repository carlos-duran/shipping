FROM oven/bun:1
WORKDIR /project

COPY package.json bun.lockb ./
COPY apps/company apps/company
COPY packages/nexus packages/nexus

RUN bun install

WORKDIR /project/apps/company
ENV NODE_ENV=production
RUN bun run build

RUN bun install -g serve
EXPOSE 3000/tcp
WORKDIR /project/apps/company
ENTRYPOINT [ "serve", "dist" ]
