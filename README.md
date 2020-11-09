#  auth-api-microservice

authentication api exposed through microservice in docker

### Install
To start aplicaction after to clone repo you need install aplicaction with folow command 	

	$ npm install
			 
### Variables
You need create .env file to add environment variables

	$ touch .env

Paste folow variables and fill

	PORT=
	MONGO_DB_USER=
	MONGO_DB_PASS=
	MONGO_DB_NAME=
	MONGO_DB_CLUSTER=
	JWT_AUTH_SECRET= (265 hash key)

### Build
To build application to production mode

	$ npm run build
		
### Start
Start aplication with follow command

	Dev mode
	$ npm run start:dev

	Production mode
	$ npm start


## Routes

### Auth

### sign-in 
you need a apiKeyToken to sign-in in auth-api this token is from DB where wach token have allowed scopes from each user.
Use follow route

	/auth/sign-in

### sign-up 
to register one user you need one JSON with 2 params 

	{
	 "email": "some@example.com",
	 "password": "something"
	}

use follow route

	/auth/sign-in

## Docker

### Build
To build image in docker use command

  $ docker build --tag <image-docker-name> . 

then check if your image gonna be created

  $ docker images

### Run
Run docker image with the next command

  $ docker run -it -p 4000:8080 -d <image-docker-name> 

then check if your container ir running correclty
  
  $ docker ps

if you have error try 

  $ docker ps <id-image>

and check logs of your container
