FROM node:alpine

# Specifying work directory
WORKDIR /nodejs/app/
# Copying files from project to docker image
COPY ./package.json ./package.json
# Installing dependencies
RUN npm i

COPY ./index.js ./index.js

# Specifying the start command
CMD [ "npm", "start" ]