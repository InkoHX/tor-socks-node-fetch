FROM node:alpine AS build

WORKDIR /output

COPY ./src ./src
COPY ./package.json .
COPY ./yarn.lock .

RUN yarn --prod

FROM node:alpine

WORKDIR /app

COPY --from=build /output .

ENTRYPOINT [ "node", "./src/index.js" ]
