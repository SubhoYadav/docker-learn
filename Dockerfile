FROM node:18
# This is the base image we are gonna build our own image upon

WORKDIR /app
# Setting up the working directory on our container

COPY package.json .
# Copying the package.json into our container's WORKDIR
# Each step in a docker file makes a layer of our image and applies caching to it so it makes sense to split the copying package.json and npm install as separate steps



RUN npm install


# Runs the above command into the docker container

# # Instead of running a hard coded command we will write a bash script for installing our dependencies
ARG NODE_ENV
# These are the arguments that we need to pass into our docker file when we try to build an image 
RUN if [ "$NODE_ENV"="development" ]; \
     then npm install;\
    else\
        npm install --only=production;\
    fi


COPY . ./ 
# Now copying our rest of the project files
# copying from our current dir to container's WORKDIR

# Specifying some environment variables for our docker container
ENV PORT=6060
# 4000 is the default value for the env var of our container 


EXPOSE $PORT
# This command does not expose our container's port:3000, its there only for documentation purpouses

CMD ["npx", "nodemon", "server.js"]

# CMD if [ "$NODE_ENV"="development" ]\
#      then ["npx", "nodemon", "server.js"]
#     else\
#         ["node", "server.js"]
#     fi
