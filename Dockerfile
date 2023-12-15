FROM node:18-alpine

USER node

WORKDIR /home/project_app/api

COPY package*.json yarn.lock ./

EXPOSE 3003

CMD ["sh", "-c", "yarn install tail"]
##"-f", "/dev/null"]
