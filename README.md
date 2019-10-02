# Docker and Docker-Kubernetes

This repository contains my personal notes about docker and docker-kubernetes.

### Docker CLI

* Run container from image 
`docker run <image name> <default command override>`
Examples: *docker run busybox echo hi*, *docker run busybox ls*.
* `docker ps` - list of the running containers.
* `docker ps --all` - list all running and stopped containers.
* `docker create <image-name>` - create and not start container.
* `docker start -a {container_id}` - start a container 'a' flag - print out container output.
* `docker start -a {container_id}` - restart container that was stopped.
* `docker system purne` - clean up containers.
* `docker logs {container_id}` - get container logs.
* `docker stop ${container_id}` - - send stop signal to process, will not stop immediately (it tries to stop it in 10 seconds and run kill after).
* `docker kill ${container_id}` - send kill signal to process,  not stop immediately.
* `docker exec -it <container_id> <command>` - Docker exec. Execute addinional command. inside the container. *-it - allow us to provide input to the container (connect inside)
where -i - connect to container terminal, -t - format text*.
* `docker exec -it {container_id} sh` - connect to container system (full terminal access).
* `docker run -d -p 3000:3000  {container_id}` - run container or specified port.


### Dockerfile notes

* `docker build .` - build docker image from Dockerfile.
* `docker build -t {docker-id/repo:version} .` - tagging an image. Example *docker build -t derkachd/redis:1.0*
* `docker run {docker-id/repo:version}` - running tagget image. Example `docker run derkachd/redis:1.0`
* Buildind an image from container.
  * Staring apline - `docker run -it alpine sh`.
  * Attach to the container and `install gcc + redis`.
  * Assigning default command to the running image - `docker commit -c 'CMD ["redis-server"]'.
  * Using an image - `docker run {container_hash}`.
* `docker build -f {Dockerfile.dev}` - build image with specific docker file.
* `docker run -p 3000:3000 -v $(pwd):/{WORKDIR}` - running container with an image. *While using volumes like -v x:x, we are saying that we want to map folder from machine to our docker container.
In case -v ./x - we are saying that this will be a placeholder, and we should not map it.*
* `docker run -p 3000:3000 -v /app/node_modules  -v $(pwd):/app {IMAGE_ID}` during run node app node_modules should not be mapped as a volume.