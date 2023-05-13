FROM node:16-alpine

WORKDIR /usr/home/api

COPY package*.json .

RUN npm install

EXPOSE 3008
