FROM node:16

ENV REACT_APP_BACKEND_URL="http://localhost:3000"

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

RUN npm i -g serve

CMD [ "serve", "build" ]