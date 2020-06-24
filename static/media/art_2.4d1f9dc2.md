
# RESTful Web Services with Node.js and Express
We are going to talk about how to build out a RESTful API with nodejs and Express

### What is REST?
  Representational State Transfer, is just a series of rules in place for your server so that everyone that uses your services understands what it does and how it works.
  - The Client Server constraints(Resquest/Response ↚ ↛)
  - Stateless Server.
  - Caching
  In rest everything to be dealing with is nouns
  GET/POSY/PUT/PATCH/DELETE

## Set up Node and Express environment
   - Download and install NODEJS.
   - Node --version
   V8.12.0
   - Start new project npm init
    This create a package.json is all of the information about your project bundled up in one place and all the dependencies of this project are going to be stored in here.
  - npm install express(framework for APIs)
  - ^ this caret in dependencies means that any version will download the latest
  - npm install express@4.16.4 fro example is you need a specific version for your proyect.
  - Create new file called app.js, and this is going to be the main of the application.
  
    `` var express = require('express'); ``
    `` var app = express(); ``
    `` var port = process.env.PORT || 3000 ``
    ``app.get('/', (req, res)=>{ ``
        `` res.send('Welcome to my API') ``
    `` }) ``
  - Run node app.js
  - Now your application is running on port 3000
  ### Some tooling
   - ESLint to lint our code and make and makw sure we are writing code the proper way
   ``` npm i eslint -D ```
   ``` npm install eslint --save-dev ```
   ``````
     -D add dev dependencies instead of our regular dependencies because when we deploy this in production, it's not going to take the time to install the dev dependencies.
     "scripts": {
         "lint": "npx eslint . --ext .js"
     }
    You should then set up a configuration file:
    ``` ./node_modules/.bin/eslint --init```
    ``````
   - Nodemon is going to handle restarting application and passing in the port


