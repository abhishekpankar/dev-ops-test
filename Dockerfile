FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm i pnpm -g
RUN pnpm i
COPY ./src .
CMD ["pnpm", "start"]
