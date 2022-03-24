FROM node:17-alpine3.14 as frontend

MAINTAINER Andrey Shaikin <kiwibon@yandex.ru>

ENV PROJECT_DIR=/opt/project \
    NODE_OPTIONS=--openssl-legacy-provider --max-old-space-size=2048 \
    NODE_ENV=production

USER root

RUN true \
    && apk update \
    && yarn global add @vue/cli @vue/cli-service @vue/cli-plugin-babel

RUN vue add babel

RUN mkdir -p $PROJECT_DIR
WORKDIR $PROJECT_DIR

COPY public $PROJECT_DIR/public
COPY src $PROJECT_DIR/src
COPY babel.config.js $PROJECT_DIR
COPY package.json $PROJECT_DIR
COPY yarn.lock $PROJECT_DIR

RUN true \
    && yarn install --no-progress  --non-interactive \
    && yarn cache clean \
    && yarn build

VOLUME ['/opt/project/dist']

FROM nginx:1.21.5-alpine

# очищаем от стандартных данных
RUN rm -rf /usr/share/nginx/html/
RUN rm -rf /etc/nginx/conf.d

COPY --from=frontend /opt/project/dist /usr/share/nginx/html

COPY frontend/nginx/conf.d/* /etc/nginx/conf.d/
EXPOSE 80
VOLUME ["/var/log"]
CMD ["nginx", "-g", "daemon off;"]
