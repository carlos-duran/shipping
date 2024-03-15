FROM oven/bun:1
WORKDIR /app

COPY package.json bun.lockb ./
COPY apps/cloud apps/cloud

RUN bun install

ENV NODE_ENV=production
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "apps/cloud/src/index.ts" ]
