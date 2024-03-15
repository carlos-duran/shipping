FROM oven/bun:1
WORKDIR /project

COPY package.json bun.lockb ./
COPY apps/cloud apps/cloud
COPY apps/company apps/company
RUN mkdir -p packages

RUN bun install

WORKDIR /project/apps/company
ENV NODE_ENV=production
RUN bun run build

RUN bun install -g serve
EXPOSE 3000/tcp
ENTRYPOINT [ "serve", "dist" ]
