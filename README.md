# SmartBrain-api - v2
Final project for Udemy course

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. You must add your own API key in the `controllers/image.js` file to connect to Clarifai API.

You can grab Clarifai API key [here](https://www.clarifai.com/)

** Make sure you use postgreSQL instead of mySQL for this code base.

# Start backend with Docker-compose file
```
$ docker-compose up --build

If it can not start backend container, it should connect to container of backend and install packages manually.
$ docker exec -it backend /bin/bash
$ npm install
```
