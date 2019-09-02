FROM node:12.8-alpine AS compulsivecoders

# Create a group and user TODO many issues with access rights
# alpine does use addgroup and adduser instead of regular debian useradd and usergroup
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# Tell docker that all future commands should run as the appuser user
#USER appuser

# Create app directory
WORKDIR /usr/src/frontend

# Install app dependencies
# Install node_modules with yarn first before copying app code to allow caching
COPY package.json /usr/src/frontend/
COPY yarn.lock /usr/src/frontend/
RUN yarn install --pure-lockfile

COPY . /usr/src/frontend/
# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3000

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
