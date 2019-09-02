FROM node:12.8-alpine AS compulsivecoders-api

WORKDIR /usr/src/api

# Install app dependencies
# Install node_modules with yarn first before copying app code to allow caching
COPY package.json /usr/src/api/
COPY yarn.lock /usr/src/api/
RUN yarn install --pure-lockfile

COPY . /usr/src/api/
RUN yarn build

EXPOSE 3001

CMD [ "yarn", "start:prod" ]
