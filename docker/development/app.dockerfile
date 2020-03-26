FROM node:13.7 as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent
