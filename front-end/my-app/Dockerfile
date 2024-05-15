# Stage 1: Build Angular application
FROM node:latest as build


WORKDIR /front-end

COPY . .

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]

# FROM nginx:alpine

# COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder app/dist/app /usr/share/nginx/html

