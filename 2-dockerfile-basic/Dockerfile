# Use an exisiting docker image as a base
FROM alpine
# Download and install dependency
RUN apk add --update redis
RUN apk add --update gcc
# Define commands on start
CMD ["redis-server"]