FROM node:10.16.0-alpine

WORKDIR /home/node/app

COPY src src
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]