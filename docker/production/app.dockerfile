FROM node:10 as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine as server
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
