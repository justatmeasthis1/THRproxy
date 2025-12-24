FROM node:20-alpine

RUN apk add --no-cache bash curl

RUN corepack enable && corepack prepare pnpm@9.12.2 --activate

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]
