FROM oven/bun:1
WORKDIR /project

COPY package.json bun.lockb ./
COPY apps/cloud apps/cloud
RUN mkdir -p packages
RUN bun install

ENV NODE_ENV=production
EXPOSE 3000/tcp
WORKDIR /project/apps/cloud
ENTRYPOINT [ "bun", "start" ]
