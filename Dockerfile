FROM node:22-alpine3.22 AS build
WORKDIR /app
ARG URL
COPY package*.json ./
RUN npm install
COPY . .
RUN URL=$URL npm run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080