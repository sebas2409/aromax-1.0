FROM oven/bun:1-alpine
WORKDIR /app
COPY package.json /app
RUN bun install
COPY . /app
RUN bun run build
CMD ["bun", "run", "preview", "--host"]
