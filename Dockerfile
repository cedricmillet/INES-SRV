FROM node:12.13-alpine As development

WORKDIR /usr/src/app
#copy package.json
COPY package*.json ./
# install all dependencies
RUN npm ci
# copy project sources
COPY . .
# build project from sources
RUN npm run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
# copy package.json
COPY package*.json ./
# install prod dependencies
RUN npm install --only=production
# copy project sources
# COPY . .
# copy project build
COPY --from=development /usr/src/app/dist .

CMD ["node", "main"]