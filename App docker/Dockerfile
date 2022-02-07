FROM node:14.16.0-alpine3.13 as default

RUN apk add --no-cache bash

RUN touch /root/.bashrc | echo "PS1='\w\$ '" >> /root/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

RUN mkdir -p /home/node/app

WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node tsconfig* ./
COPY ./dist .

COPY ./.env .

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm install --only=production
EXPOSE 3000
ENTRYPOINT [ "node", "main.js" ]