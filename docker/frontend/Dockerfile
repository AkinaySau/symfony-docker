FROM node:10.6.0-alpine AS build-frontend

WORKDIR /app

COPY package.json yarn.lock ./

ARG BUILD_ENV=production

ENV NODE_ENV ${BUILD_ENV}

RUN npm install

COPY .babelrc .stylelintrc webpack.config.js ./

COPY frontend ./frontend

ARG STATIC_URL
ENV STATIC_URL ${STATIC_URL}
RUN set -ex; \
    if [ "$BUILD_ENV" = "production" ]; then \
        npm build; \
    else \
        npm watch; \
    fi; \
    yarn cache clean;
