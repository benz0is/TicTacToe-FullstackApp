FROM node:12-alpine as builder
WORKDIR /backup/server
COPY package.json .
RUN npm install
COPY . /backup/server
RUN npm install -g sequelize-cli
EXPOSE 5000
USER node

CMD ["npm","run","start"]
