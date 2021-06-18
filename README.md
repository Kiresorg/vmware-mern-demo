# Notes on building this project

## server.js vs index.js
Note that ```npm init``` may use ```index.js``` as the entrance point for the app. Use ```server.js``` instead.

## The various Dockerfiles
When you first begin to create Dockerfiles, the instructions say to put the first one in "the root folder". This is vague. It goes in the ```/server``` folder.

## Where to build your React client
Make sure you are in the top-level directory when you run ```create-react-app```, NOT in the ```/server``` directory

## Missing command for testing all three parts of the application
There is a missing instruction in the tutorial. In section, 4, titled "4. Connecting Client and Server using Docker Compose", just after you create a ```docker-compose-dev.yml``` and copy its contents into ```docker-compose.yml```, you are told, 
>"Let's test it by running the following command in our project root directory :" 

There is no command following this sentence.

The command to run is: ```docker-compose up --build --remove-orphans```

## Issues in running docker-compose
At various points, you will run docker-compose from  various locations in the project - ```/client```, ```/server``` or the top-level directory. While doing this, you may run into errors indicating that a port is already in use. 

This is because the containers created earlier in the development of the project are still running.

The solution is to stop and then remove all containers, and then run ```docker-compose``` again.

The commands to do this are:

```docker kill $(docker ps -q)```

and 

```docker rm $(docker ps -a -q)```

## Missing ```require``` in ```/server/server.js```
In the section titled "Production Build" is the following instruction: 
>"In our server/server.js add the following to tell express that our react client will be served from the build path".

In the code snippet below that, a ```require``` is missing. Place the following code at the top of that file:

```const path = require('path');```

## Correct location for the production Dockerfile
The instructions for where to place the production Dockerfile are unclear. In the tutorial, it says, 
>"Let's now create a production Dockerfile, which will help in copying the build files from the react client and put it in the client folder of our server, which we will use to serve the app."

The correct location for this Dockerfile is the root folder of your entire project, the folder that contains both the ```/server``` folder and the ```/client``` folder.

## Making the docker-compose-prd.yml file
An instruction late in the tutorial says to 
>"Add this code in docker-compose.prd.yml"

 However, there aren't any clear instctions about where to create that file. The correct location for this Dockerfile is the root folder of your entire project, the folder that contains both the ```/server``` folder and the ```/client``` folder.