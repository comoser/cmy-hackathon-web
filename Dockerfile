# builder
FROM node:latest as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY ./ ./
RUN yarn build

# web server
FROM nginxinc/nginx-unprivileged
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080