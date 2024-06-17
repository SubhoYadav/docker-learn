# GOOD RESOURCES

https://www.baeldung.com/ops/docker-expose-more-than-one-port

# Legend for flags in docker

-d: detached mode the command line will be free and your container will be running
--name: specifies a name to your docker container
-t: gives a name to your docker image
-f: force
-it: interactive mode

# Passing ARG to the docker file using the docker command

docker build --build-arg NODE_ENV=development -t server .

# Building a docker image using our docker file

docker build <context of the docker file>
ex: docker build .

# Listing the docker images

docker image ls

# Removing a docker image

docker image rm <image id>
ex: docker image rm 0a4632ce66aa

# Removing docker image that is referenced by some container repositories

docker image rm -f <image_id_or_name>

# Building a docker image with a name using -t flag using our docker file

docker build -t <name of the image> <context of the docker file>
ex: docker build -t my-node-app-image .

# Creating a container using the docker image

docker run -d --name <name of the container> <name of the image>
ex: docker run -d --name my-node-app my-node-app-image

If you have multiple versions of the same image user :<version-name/no.> to use a particular version

# Listing the running docker containers

docker ps

# Redirecting traffic on our host machine to our docker container

docker run -p 6060:6060 -d --name my-node-app my-node-app-image

# Removing a docker container

docker rm <container name> -f
ex: docker rm my-node-app -f

<!-- We need to stop a container before we remove it. The above command both stops and removes a container simultaeneously -->

# Move into your docker container

docker exec -it my-node-app bash

# Deletes the unused docker resources such as docker containers, images, volumes, networks

<!-- Following command bypasses the confirmation prompt -->

docker system prune --force

# If your docker container fails, you can check the logs of the container with the following command

docker logs <container name>
docker logs my-node-app

<!-- The docker container contains the stale version of your code so make use of a volume called bind-mount -->

# Following command demonstrates the usage of the bind mount volume in docker

docker run -v <absolute path to folder on local machine>:<absolute path to folder on docker container> -p 6060:6060 -d --name <container name> <image name>
ex: docker run -v /home/subho/Desktop/project/node-server/:/app -p 6060:6060 -d --name my-node-app my-node-app-image

# Check for ports

docker port <container-name>

# Shortcut for the path to the current directory in

# Linux: $(pwd)

# Powershell: ${pwd}

# Command Prompt: %cd%

# Modified command demonstrates the usage of the bind mount volume in docker

docker run -v $(pwd):/app -p 6060:6060 -d --name my-node-app my-node-app-image

# If we delete the node_modules folder from our local and since it is synced with our container it also deletes the node_modules folder inside our container, so to prevent this we will use the anonymous volume.

# NB: volumes in docker works on the principle of specificity so anonymous volume which is more specific than the bind-mount volume will prevent the node_modules folder being overwritten by the bind-mount volume

# Allowing the container to only read the local directory synced with it using the bind-mount volume

docker run -v $(pwd):/app:ro -p 6060:6060 -d --name my-node-app my-node-app

# NB: Even if you ignore some of the files during build if you rename the ignored files on your local and have synced the folder with the container that file gets created on your container

# "printenv" command lists all the environment variables in Linux

# Passing an env var into the container

docker run -v $(pwd):/app:ro --env PORT=8080 -p 6060:8080 -d --name my-node-app my-node-app-image

# Loading the env vars into your container using a file

docker run -v $(pwd):/app:ro --env-file ./.env -p 6060:9095 -d --name my-node-apps my-node-app-img

<!-- When we use an anonymous volume  docker creates a new volume and stores the persistent data-->

# Delete the volumes using the following commands

docker volume prune

<!-- Following command deletes the volumes associated with the container being deleted -->

docker rm <container name> -fv

# DOCKER COMPOSE

<Instructions to install docker compose>
-  sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
- sudo chmod +x /usr/local/bin/docker-compose
- docker-compose --version
<end>

docker-compose up --help
docker-compose up -d <runs the container in detached mode>
docker-compose up -d --build<runs the container in detached mode>

Docker compose doesnt build the image if an image already exists so inorder to force the build we need to pass the --build flag to the docker-compose command as above

docker-compose down

# The following command deletes the volumes associated with a container created using docker compose

docker-compose down -v

the naming convention docker-compose follows for the images and the containers
<project-directory-name><service-name>
docker compose also creates a separate network so that it may not interfere with your other containers

runing two versions of a docker container

# docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

# docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v

# An issue overlooked :

If we look closely, we can see that the nodemon dependency is getting installed even when we are building our docker container for production so we need to make our docker file more intelligent so that it may not installs the nodemon dependency in prod

# ISSUES CORNER

- Issues with anonymous volume
  docker run -v $(pwd):/app -v /app/node_modules -p 6060:6060 -d --name my-node-app my-node-app
- Docker compose

# Docker installation guide

https://docs.docker.com/engine/install/ubuntu/

# Run docker without sudo
https://docs.docker.com/engine/install/linux-postinstall/

docker prune -af

# Restarting all the docker containers at once 
docker restart $(docker ps -q)

There is an officisl image called scratch which is like the root image that gives you an empty stage to build your stuff on
# COMMANDS FROM AWS CLOUD BOOTCAMP PROJECT

docker run --rm -p 4567:4567 -it -e FRONTEND_URL='*' -e BACKEND_URL='*' ./backend_flask

