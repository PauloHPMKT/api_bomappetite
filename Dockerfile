FROM node:16-alpine

WORKDIR /usr/home/app/api-food-square

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3008
